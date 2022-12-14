import '../registerLogin.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin, userLoginFailure, userLoginSuccess } from '../redux/users/usersActions';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if (email === '' || password === '') {
      setErrors(true);
      setErrorMessage('Please fill all fields');

    } else if (email === '') {
      setErrors(true);
      setErrorMessage('email is required');
    }
    else if (!regex.test(email)) {

      setErrors(true);
      setErrorMessage('Please enter a valid email');
    } else if (password === '') {
      setErrors(true);
      setErrorMessage('Password is required');
    } else if (password.length < 7) {

      setErrors(true);
      setErrorMessage('Password must be 8 characters or more');

    } else if (password.length > 12) {
      setErrors(true);
      setErrorMessage('Password must be 12 characters or less');


    } else {
      axios.post('http://localhost:8000/api/login', { email, password })
        .then(response => {
          const user = response.data;
          dispatch(userLoginSuccess(user));
          setErrors(false);
          setErrorMessage('');
          sessionStorage.setItem('user', JSON.stringify(user.user));
          sessionStorage.setItem('type', user.user.type);
          sessionStorage.setItem('name', user.user.name);
          sessionStorage.setItem('id', user.user.id);
          if (user.user.type === 'admin') {
            navigate('/dashboard/movies');
          } else if (user.user.type === 'user') {
            navigate('/');
          }
        }).catch(error => {
          const errorMsg = error.message;
          setErrors(true);
          setErrorMessage(errorMsg);
          userLoginFailure(errorMsg);
        })

    }
  }



  return (<div className='container mainBox col-6 mt-0 p-5 col-sm-12 col-xl-6 col-lg-6 col-12    '>
    <h1 className='text-center'>Login</h1 >
    <form className='mt-3 labelInputs' onSubmit={loginHandler}>
      {user.error && <div className='alert alert-danger'>{user.error}</div>}
      {hasError && <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      </div><br />
      <div className='row g-0'>
        <button type="submit" className="btn btn-light col-12 submitBut">Sign In</button>
      </div>
    </form>
  </div >)
}

export default Login