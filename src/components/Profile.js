import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Profile.css';
import { selectUser } from '../features/userSlice';
import Nav from './Nav';
import { auth } from '../firebase';

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <div>
        <Nav />
      </div>
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt=""
          />
        </div>
        <div className="profile__details">
          <h2>
            {user.email}
          </h2>
          <div className="profile__plans">
            <button type="button" onClick={() => auth.signOut()} className="profile__signout">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
