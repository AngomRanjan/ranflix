import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { auth } from './firebase';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  const user = null;

  useEffect(() => {
    const cleanUp = auth.onAuthStateChanged((isLogin) => {
      if (isLogin) {
        console.log(isLogin);
      } else {
        //
      }
    });
    return cleanUp;
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
