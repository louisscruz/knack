import {
  RECEIVE_DIRECT_MESSAGES,
  RECEIVE_DIRECT_MESSAGE
} from '../actions/ChannelActions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.channels;
    case RECEIVE_DIRECT_MESSAGE:
      newState[action.channel.id] = action.channel;
      return newState;
    default:
      return state;
  }
};
