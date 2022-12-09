import '../registerLogin.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/users/usersActions';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(userLogin({ email, password }));
        setEmail('');
        setPassword('');
        navigate('/login');

    }
    return user.loading ? (
        <h1>Hold on till we log you in!</h1>
    ): (<div className='container mainBox col-4 mt-5 p-5'>
    <h1 className = 'text-center'>Login</h1 >
        <form className='mt-3 labelInputs' onSubmit={loginHandler}>
        {user.error && <div className='alert alert-danger'>{user.error}</div>}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div><br/>
            <div className='row g-0'>
                <button type="submit" className="btn btn-light col-12 submitBut">Sign In</button>
            </div>
        </form>
</div >)
}

export default Login