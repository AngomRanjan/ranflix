import React from 'react';
import '../css/Login.css';
import logo from '../asset/ranflix.png';

const Login = () => {
  const testTxt = 'Login';
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src={logo}
          alt={testTxt}
        />
        <button type="button" className="login__button">Sign In</button>
        <div className="login__gradient" />
      </div>
    </div>
  );
};

export default Login;
