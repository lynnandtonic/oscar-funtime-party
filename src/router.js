import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './modules/core/layouts/main-layout';

// Pages
import Home from './modules/core/components/home';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);
