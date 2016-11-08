import {
  FETCH_CHANNELS,
  FETCH_DIRECT_MESSAGES,
  FETCH_CHANNEL,
  POST_CHANNEL,
  POST_DIRECT_MESSAGE,
  receiveChannels,
  receiveDirectMessages,
  receiveDirectMessage,
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
  const fetchDirectMessagesSuccess = channels => dispatch(receiveDirectMessages(channels));
  const fetchChannelSuccess = channel => dispatch(receiveChannel(channel));
  const postChannelSuccess = channel => dispatch(receiveChannel(channel));
  const postDirectMessageSuccess = channel => dispatch(receiveDirectMessage(channel));
  const postMessageSuccess = message => dispatch(receiveMessage(message));
  switch(action.type) {
    case FETCH_CHANNELS:
      getChannels(false, fetchChannelsSuccess);
      return next(action);
    case FETCH_DIRECT_MESSAGES:
      getChannels(true, fetchDirectMessagesSuccess);
      return next(action);
    case FETCH_CHANNEL:
      getChannel(action.id, fetchChannelSuccess);
      return next(action);
    case POST_CHANNEL:
      createChannel(action.channel, postChannelSuccess);
      return next(action);
    case POST_DIRECT_MESSAGE:
      createChannel(action.channel, postDirectMessageSuccess);
      return next(action);
    case POST_MESSAGE:
      postMessage(action.message, postMessageSuccess);
      return next(action);
    default:
      return next(action);
  }
};
