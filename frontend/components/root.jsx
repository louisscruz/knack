import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';

import App from './app';
import SplashContainer from './splash/SplashContainer';
import SignInContainer from './auth/SignInContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Router history={hashHistory}>
        <Route component={App}>
          <Route path="/" component={SplashContainer}>
            <Route path="/sign-in" component={SignInContainer} />
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
