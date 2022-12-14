import "../registerLogin.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginSuccess, userRegister, userRegisterFailure, userRegisterSuccess } from "../redux/users/usersActions";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordCon] = useState("");

  const user = useSelector((state) => state.user);
  const [hasError, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      setErrors(true);
      setErrorMessage("Please fill all fields");
    } else if (email === "") {
      setErrors(true);
      setErrorMessage("email is required");
    } else if (!regex.test(email)) {
      setErrors(true);
      setErrorMessage("Please enter a valid email");
    } else if (password === "") {
      setErrors(true);
      setErrorMessage("Password is required");
    } else if (password.length < 7) {
      setErrors(true);
      setErrorMessage("Password must be 8 characters or more");
    } else if (password.length > 12) {
      setErrors(true);
      setErrorMessage("Password must be 12 characters or less");
    } else if (password !== passwordConfirm) {
      setErrors(true);
      setErrorMessage("the password does not match");
    } else {
      dispatch(
        userRegister()
      );
      axios.post('http://127.0.0.1:8000/api/register', {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirm,
      })
        .then(response => {
          const user = response.data.user
          dispatch(userRegisterSuccess(user))
          dispatch(userLoginSuccess(user));
          sessionStorage.setItem('type', user.type);
          sessionStorage.setItem('name', user.name);
          sessionStorage.setItem('id', user.id);

          sessionStorage.setItem('user', JSON.stringify(user));

          setEmail("");
          setPassword("");
          setPassword("");
          setPasswordCon("");
          navigate("/");


        })
        .catch(error => {
          const errorMsg = error.message
          dispatch(userRegisterFailure(errorMsg))
          console.log(errorMsg);
        })
      if (user.error === 'Request failed with status code 422') {
        setErrorMessage('Registration was unsuccessful')

      }

    }
  };

  return user.loading ? (
    <h1>Hold on till we register you!</h1>
  ) : (
    <div className="container col-6 mt-0 p-5 col-sm-12 col-xl-6 col-lg-6 col-12 mainBox">
      <h1 className="text-center mt-3">Register</h1>
      <br />
      <form className="mt-3 labelInputs" onSubmit={formHandler}>
        {user.error && <div className="alert alert-danger"> {user.error}</div>}
        {hasError && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            name="password_confirmation"
            value={passwordConfirm}
            onChange={(e) => setPasswordCon(e.target.value)}
          />
        </div>
        <br />
        <div className=" row g-0 main-button">
          <button type="submit" className="btn btn-light col-12 submitBut">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
