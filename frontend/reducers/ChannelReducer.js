import {
  RECEIVE_CHANNELS
} from '../actions/ChannelActions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};
