import {
  RECEIVE_CHANNEL,
  POST_MESSAGE
} from '../actions/ChannelActions';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHANNEL:
      return action.channel;
    case POST_MESSAGE:
      return state;
    default:
      return state;
  }
};
