import {
  receiveCurrentUser,
  removeCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP } from '../actions/SessionActions';
import { login, logout, signUp } from '../util/UsersUtil';

export default ({dispatch}) => next => action => {
  const receiveUserSuccess = user => dispatch(receiveCurrentUser(user));
  const logoutSuccess = () => dispatch(removeCurrentUser());
  const receiveErrors = () => dispatch(receiveErrors());
  switch(action.type) {
    case LOGIN:
      login(action.user, receiveUserSuccess);
      return next(action);
    case LOGOUT:
      logout(logoutSuccess);
      return next(action);
    case SIGNUP:
      signUp(action.user, receiveUserSuccess, receiveErrors);
      return next(action);
    default:
      return next(action);
  }
};
