import '../css/Nav.css';

const Nav = () => {
  const cssClass = 'nav';
  return (
    <div className={cssClass}>
      <div className="nav__contents">
        <img className="nav__logo" src="logo" alt="logo" />
        <img className="nav__avatar" src="avatar" alt="avatar" />
      </div>
    </div>
  );
};

export default Nav;
