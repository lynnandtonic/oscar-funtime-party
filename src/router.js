import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import MainLayout from './modules/core/layouts/main-layout';

import CategoryListContainer from './modules/categories/containers/category-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={CategoryListContainer} />
      <Route path="/scoresheet" component={CategoryListContainer} />
    </Route>
  </Router>
);
