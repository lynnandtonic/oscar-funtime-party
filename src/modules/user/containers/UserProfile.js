import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';
import UserModel from '../models';
import store from '../../../store';
import { auth, provider } from '../../../firebase';
import { userDidLogin, userDidLogout, userLogoutFailed } from "../actions";

class UserProfileContainer extends Component {

  static onLoginClicked(evt) {
    evt.preventDefault();
    auth.signInWithRedirect(provider);
  }

  static onLogoutClicked() {
    auth.signOut().then(function() {
      store.dispatch(userDidLogout());
    }).catch(function() {
      store.dispatch(userLogoutFailed());
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        store.dispatch(userDidLogin({
          user
        }));
      } else {
        store.dispatch(userDidLogout());
      }
    });
  }

  render() {
    if (this.props.user) {
      return ( <UserProfile {...this.props} onLogoutClicked={UserProfileContainer.onLogoutClicked} /> );
    }
    return ( <Login { ...this.props } onLoginClicked={UserProfileContainer.onLoginClicked} /> );
  }
}

UserProfileContainer.propTypes = {
  user: UserModel
};

const mapStateToProps = (store) => {
  return {
    user: store.userState.user
  };
};

export default connect(
  mapStateToProps
)(UserProfileContainer);
