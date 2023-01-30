import React from 'react';
import '../css/SignIn.css';

const SignIn = () => {
  const testVar = 'SignIn';
  return (
    <div id={testVar} className="signIn">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signIn__gray">New to Ranflix? </span>
          Sign Up now.
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
