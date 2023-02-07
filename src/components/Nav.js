import '../css/Nav.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../asset/ranflix.png';

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  /* eslint-disable jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img onClick={() => navigate('/')} className="nav__logo" src={logo} alt="flogo" />
        <img onClick={() => navigate('/profile')} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="avatar" />
      </div>
    </div>
  );
};

export default Nav;
