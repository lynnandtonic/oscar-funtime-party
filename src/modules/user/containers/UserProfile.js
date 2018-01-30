import React from 'react';
import { connect } from 'redux-bundler-react';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';

const UserProfileContainer = ({ userData, doLoginUser, doLogoutUser }) => {

  if (userData) {
    return ( <UserProfile user={userData} onLogoutClicked={doLogoutUser} /> );
  }
  return ( <Login onLoginClicked={doLoginUser} /> );
}

export default connect(
  'selectUserData',
  'doLoginUser',
  'doLogoutUser',
  UserProfileContainer
)
