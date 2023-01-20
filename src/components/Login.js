import React from 'react';
import '../css/Login.css';

const Login = () => {
  const testTxt = 'Login';
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="../asset/ranflix.png"
          alt=""
        />
      </div>
      <img
        className="login__logo"
        src="../asset/ranflix.png"
        alt=""
      />
      {testTxt}
    </div>
  );
};

export default Login;
