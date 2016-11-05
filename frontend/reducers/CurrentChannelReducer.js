import { RECEIVE_CHANNEL } from '../actions/ChannelActions';
import { RECEIVE_MESSAGE } from '../actions/MessageActions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CHANNEL:
      return action.channel;
    case RECEIVE_MESSAGE:
      newState.messages[action.message.id] = action.message;
      return newState;
    default:
      return state;
  }
};
