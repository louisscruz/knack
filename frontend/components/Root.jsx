import React from 'react'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './Theme';

import App from './App';
import SplashHome from './splash/SplashHome';
import SplashContainer from './splash/SplashContainer';
import SignInContainer from './auth/SignInContainer';
import SignUpContainer from './auth/SignUpContainer';
import ChannelContainer from './channels/ChannelContainer';
import MessagesIndexContainer from './messages/MessagesIndexContainer';

import { fetchChannels, fetchDirectMessages, fetchChannel } from '../actions/ChannelActions';
import { receiveMessage } from '../actions/MessageActions';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.store.getState().session.currentUser;
    if (currentUser) {
      replace('/messages/general');
    }
  }

  handleMessagesEnter(nextState, replace) {
    const currentUser = this.props.store.getState().session.currentUser;
    if (!currentUser) {
      replace('/sign-in');
    } else {
      if (Object.keys(this.props.store.getState().channels).length < 1) {
        this.requestAllChannels();
      }
      this.requestDirectMessages();
      this.requestChannel(nextState.params.channelName);
      // this.setSocket(nextState.params.channelName);
    }
  }

  requestAllChannels() {
    this.props.store.dispatch(fetchChannels());
  }

  requestDirectMessages() {
    this.props.store.dispatch(fetchDirectMessages());
  }

  requestChannel(name) {
    this.props.store.dispatch(fetchChannel(name));
  }

  setSocket(channelName) {
    if (window.App.channel) {
      this.removeSocket();
    }
    this.addSocket(channelName);
  }

  removeSocket() {
    window.App.cable.subscriptions.remove(window.App.channel);
  }

  addSocket(channelName) {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'ChannelChannel',
      channel_name: channelName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        this.props.store.dispatch(receiveMessage(data.message));
      }
    });
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
          <Router history={hashHistory}>
            <Route component={App}>
              <Route path="/" component={SplashContainer} onEnter={ this._redirectIfLoggedIn.bind(this) }>
                <IndexRoute component={SplashHome} />
                <Route path="/sign-in" component={SignInContainer} />
                <Route path="/sign-up" component={SignUpContainer} />
              </Route>
              <Route path="/messages" component={ChannelContainer}>
                <Route path=":channelName" component={MessagesIndexContainer} onEnter={ this.handleMessagesEnter.bind(this) }/>
              </Route>
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Root;
