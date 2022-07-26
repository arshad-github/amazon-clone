import React, { useState } from "react";
import "./Login.css";
// import { Link, useHistory } from "react-router-dom"; // useHistory replaced with useNavigate
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  // const history = useNavigate();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // prevents refresh
    // do login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        // history.push("/");
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    // do register logic

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, redirect to homepage...
        // history.push("/");
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
