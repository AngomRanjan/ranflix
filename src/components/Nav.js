import '../css/Nav.css';
import { useEffect, useState } from 'react';
import logo from '../asset/ranflix.png';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="flogo" />
        <img className="nav__avatar" src={logo} alt="avatar" />
      </div>
    </div>
  );
};

export default Nav;
