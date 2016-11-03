import {
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  receiveChannels,
  receiveChannel
} from '../actions/ChannelActions';
import {
  POST_MESSAGE,
  receiveMessage
} from '../actions/MessageActions';
import {
  postMessage
} from '../util/MessagesUtil';
import { getChannels, getChannel } from '../util/ChannelsUtil';

export default ({ dispatch }) => next => action => {
  const fetchChannelsSuccess = channels => dispatch(receiveChannels(channels));
  const fetchChannelSuccess = channel => dispatch(receiveChannel(channel));
  const postMessageSuccess = message => dispatch(receiveMessage(message));
  switch(action.type) {
    case FETCH_CHANNELS:
      getChannels(fetchChannelsSuccess);
      return next(action);
    case FETCH_CHANNEL:
      getChannel(action.id, fetchChannelSuccess);
      return next(action);
    case POST_MESSAGE:
      console.log('hit it');
      postMessage(action.message, postMessageSuccess);
      return next(action);
    default:
      return next(action);
  }
};
