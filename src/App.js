import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanUp = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });
    return cleanUp;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
