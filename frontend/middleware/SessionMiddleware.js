import {
  receiveCurrentUser,
  LOGIN } from '../actions/SessionActions';
import { login } from '../util/UsersUtil';

export default ({dispatch}) => next => action => {
  const receiveUserSuccess = user => dispatch(receiveCurrentUser(user));
  switch(action.type) {
    case LOGIN:
      login(action.user, receiveUserSuccess);
      return next(action);
    default:
      return next(action);
  }
};
