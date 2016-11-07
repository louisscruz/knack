import {
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  POST_CHANNEL,
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
import {
  getChannels,
  getChannel,
  createChannel
} from '../util/ChannelsUtil';

export default ({ dispatch }) => next => action => {
  const fetchChannelsSuccess = channels => dispatch(receiveChannels(channels));
  const fetchChannelSuccess = channel => dispatch(receiveChannel(channel));
  const postChannelSuccess = channel => dispatch(receiveChannel(channel));
  const postMessageSuccess = message => dispatch(receiveMessage(message));
  switch(action.type) {
    case FETCH_CHANNELS:
      getChannels(fetchChannelsSuccess);
      return next(action);
    case FETCH_CHANNEL:
      getChannel(action.id, fetchChannelSuccess);
      return next(action);
    case POST_CHANNEL:
      createChannel(action.channel, postChannelSuccess);
      return next(action);
    case POST_MESSAGE:
      postMessage(action.message, postMessageSuccess);
      return next(action);
    default:
      return next(action);
  }
};
