import React from 'react';
import ReactDOM from 'react-dom';
import getStore from './bundles'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import store from './store';

import MainLayout from './layouts/main';

import './index.css';

const App = (store) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={MainLayout} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App(getStore()), document.getElementById('root'));
