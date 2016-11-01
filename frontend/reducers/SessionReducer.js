import {
  LOGIN,
  RECEIVE_CURRENT_USER
} from '../actions/SessionActions';
import { merge } from 'lodash';
// import { hashHistory } from 'react-router';

const emptySession = {
  currentUser: null
};

export default (state = emptySession, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case LOGIN:
      return state;
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      // hashHistory.push('/messages');
      return newState;
    default:
      return state;
  }
};
