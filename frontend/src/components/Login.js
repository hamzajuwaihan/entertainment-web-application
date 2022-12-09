import '../registerLogin.css';
import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { userLogin } from '../redux/users/usersActions';

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const user = useSelector(state => state.user);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const loginHandler = (e) => {
    //     e.preventDefault();
    //     dispatch(userLogin({ email, password }));
    //     setEmail('');
    //     setPassword('');
    //     navigate('/');

    // }

    return  (<div className='container col-5 mt-5 p-5 mainBox' style={{border: "1px black solid" }}>
    <h1 className = 'text-center'>Login</h1 >
        <form className='mt-3 labelInputs' >
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password'  />
            </div><br/>
            <div className='row g-0'>
                <button type="submit" className="btn btn-light col-12 submitBut">Sign In</button>
            </div>
        </form>
</div >)
}

export default Login