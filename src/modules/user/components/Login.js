import React from 'react';

const Login = (props) => (
  <div className="user">
    <button onClick={props.onLoginClicked}>Login</button>
  </div>
);

export default Login;
