import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default (props) => {
  return (

    <div className="app">
      <section className="nav-main">
        <div className="user">
          <img src="https://pbs.twimg.com/profile_images/477556215401025537/zH_q0-_s.png" className="user-avatar" role="presentation" />
          <div className="user-name">@lynnandtonic</div>
        </div>
        <nav>
          <Link to="/" activeClassName="active" className="nav-item">my picks</Link>
          <Link to="/scoresheet" activeClassName="active" className="nav-item">party scoresheet</Link>
        </nav>
        <div className="site-title">
          <h1>Oscar Funtime Party</h1>
        </div>
      </section>
      {props.children}
    </div>

  );
}
