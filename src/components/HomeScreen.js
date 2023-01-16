import React from 'react';
import '../css/HomeScreen.css';
import Banner from './Banner';
import Nav from './Nav';

const HomeScreen = () => (
  <div className="homeScreen">
    <Nav />
    <Banner />
    {/* Rows */}
  </div>
);

export default HomeScreen;
