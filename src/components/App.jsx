import React from 'react';
import { Router } from 'react-static';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Routes from 'react-static-routes';
import '../assets/stylesheets/app.pcss';

const App = () => (
  <React.Fragment>
    <Router>
      <Routes />
    </Router>
  </React.Fragment>
);

function withHotness(component) {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const { hot } = require('react-hot-loader');
  return hot(module)(component);
}

export default process.env.NODE_ENV === 'development' ? withHotness(App) : App;
