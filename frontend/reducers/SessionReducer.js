import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  REMOVE_CURRENT_USER
} from '../actions/SessionActions';
import { merge } from 'lodash';

const emptySession = {
  currentUser: null
};

export default (state = emptySession, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case LOGOUT:
      return emptySession;
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case REMOVE_CURRENT_USER:
      return emptySession;
    default:
      return state;
  }
};
