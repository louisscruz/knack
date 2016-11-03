import React from 'react'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './Theme';

import App from './App';
import SplashContainer from './splash/SplashContainer';
import SignInContainer from './auth/SignInContainer';
import SignUpContainer from './auth/SignUpContainer';
import ChannelContainer from './channels/ChannelContainer';

import { fetchChannels } from '../actions/ChannelActions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages');
    }
  };

  const handleMessagesEnter = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/sign-in');
    } else {
      requestAllChannels();
    }
  };

  const requestAllChannels = () => {
    store.dispatch(fetchChannels());
  };

  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <Router history={hashHistory}>
          <Route component={App}>
            <Route path="/" component={SplashContainer} onEnter={ _redirectIfLoggedIn }>
              <Route path="/sign-in" component={SignInContainer} />
              <Route path="/sign-up" component={SignUpContainer} />
            </Route>
            <Route path="/messages" component={ChannelContainer} onEnter={ handleMessagesEnter }>
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};


export default Root;
