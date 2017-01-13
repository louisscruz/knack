import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/Store';
import injectTapEventPlugin from 'react-tap-event-plugin';

document.addEventListener('DOMContentLoaded', () => {
  injectTapEventPlugin();
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
