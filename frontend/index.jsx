import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  injectTapEventPlugin();
  ReactDOM.render(<Root store={store}/>, root);
});
