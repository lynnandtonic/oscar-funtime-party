import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import MyPicksPage from '../pages/MyPicks';
import ScoreSheetPage from '../pages/ScoreSheet';
import UserProfile from '../modules/user/containers/UserProfile';

const MainLayout = () => (
  <div className="app">
    <section className="nav-main">
      <UserProfile />
      <nav>
        <NavLink to="/" exact activeClassName="active" className="nav-item">my picks</NavLink>
        <NavLink to="/scoresheet" activeClassName="active" className="nav-item">party scoresheet</NavLink>
      </nav>
      <div className="site-title">
        <h1>Oscar Funtime Party</h1>
      </div>
    </section>
    <Switch>
      <Route path="/" exact component={MyPicksPage} />
      <Route path="/scoresheet" component={ScoreSheetPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default MainLayout
