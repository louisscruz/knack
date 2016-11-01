import {
  LOGIN,
  RECEIVE_CURRENT_USER
} from '../actions/SessionActions';
import { merge } from 'lodash';

const emptySession = {
  loggedIn: false,
  currentUser: {
    id: null,
    username: null,
    email: null
  }
};

export default (state = emptySession, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case LOGIN:
      return state;
    case RECEIVE_CURRENT_USER:
      newState.loggedIn = true;
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return state;
  }
};
