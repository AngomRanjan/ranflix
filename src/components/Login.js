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

      <div className="login__body">
        <>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

          <div className="login__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="button" className="login__getStarted">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default Login;
