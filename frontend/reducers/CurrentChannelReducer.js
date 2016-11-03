import {
  RECEIVE_CHANNEL
} from '../actions/ChannelActions';
// import merge from 'lodash/merge';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};
