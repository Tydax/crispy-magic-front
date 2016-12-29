import React, { PropTypes } from 'react';
import { Routes } from '../../../shared/constants';

const NavProfileLogged = ({ user }) => (
  <div className='nav-profile-user'>
    <a className='nav-butt' href={Routes.signOut} >Se déconnecter</a>
    <h6 className='profile-text'>{user.name}</h6>
    <div class='round-circle'>
      if (user.imgUrl) {
        <img className='profile-img' src={user.imgUrl} alt="{user.name}'s profile image" />
      }
    </div>
  </div>
);

NavProfileLogged.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    imgUrl: React.PropTypes.string,
  }),
};

const NavProfileSignIn = () => <a href={Routes.signIn}><h6 className='profile-text'>Connectez-vous !</h6></a>;

const NavProfile = ({ user }) => (
  <div className='nav-profile-cont'>
    {user ? (
      <NavProfileLogged user={user} />
    ) : (
      <NavProfileSignIn />
    )}
  </div>
);

NavProfile.propTypes = {
  user: NavProfileLogged.propTypes.user,
};

export default NavProfile;
