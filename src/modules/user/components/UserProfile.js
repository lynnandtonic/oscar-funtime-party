import React from 'react';

const UserProfile = (props) => (
  <div className="user">
    <img src={props.user.photoURL} className="user-avatar" alt={props.user.displayName + "Avatar"} onClick={props.onLogoutClicked} />
    <div className="user-name">{props.user.displayName}</div>
  </div>
);

export default UserProfile;
