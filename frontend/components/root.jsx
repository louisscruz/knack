import React from 'react'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './Theme';

import App from './App';
import SplashContainer from './splash/SplashContainer';
import SignInContainer from './auth/SignInContainer';
import SignUpContainer from './auth/SignUpContainer';
import ChannelContainer from './channels/ChannelContainer';
import MessagesIndexContainer from './messages/MessagesIndexContainer';

import { fetchChannels, fetchChannel } from '../actions/ChannelActions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages/general');
    }
  };

  const handleMessagesEnter = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/sign-in');
    } else {
      requestAllChannels();
      requestChannel(nextState.params.channelName);
    }
  };

  const requestAllChannels = () => {
    store.dispatch(fetchChannels());
  };

  const requestChannel = name => {
    store.dispatch(fetchChannel(name));
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
            <Route path="/messages" component={ChannelContainer}>
              <Route path=":channelName" component={MessagesIndexContainer} onEnter={ handleMessagesEnter }/>
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};


export default Root;
