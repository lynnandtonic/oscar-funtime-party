import React from 'react';
import { render } from 'react-dom';
import getStore from './bundles'
import { Provider } from 'redux-bundler-react';
import { BrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/main';

import './index.css';

render(
  <Provider store={getStore()}>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
