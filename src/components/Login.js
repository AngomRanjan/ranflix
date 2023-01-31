import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../asset/ranflix.png';
import SignIn from './SignIn';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src={logo}
          alt=""
        />
        <button
          type="button"
          className="login__button"
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {isLogin ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  type="button"
                  className="login__getStarted"
                  onClick={() => setIsLogin(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
