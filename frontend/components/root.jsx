import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './Theme';

import App from './App';
import SplashContainer from './splash/SplashContainer';
import SignInContainer from './auth/SignInContainer';
import ChannelContainer from './channels/ChannelContainer';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    console.log('whoops');
    if (currentUser) {
      console.log('going');
      replace('/messages');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    console.log(nextState);
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/sign-in');
    }
  };


  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Router history={hashHistory}>
          <Route component={App}>
            <Route path="/" component={SplashContainer} onEnter={ _redirectIfLoggedIn }>
              <Route path="/sign-in" component={SignInContainer} />
            </Route>
            <Route path="/messages" component={ChannelContainer} onEnter={ _ensureLoggedIn }>
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};


export default Root;
