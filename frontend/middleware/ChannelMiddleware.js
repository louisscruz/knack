import {
  FETCH_CHANNELS,
  FETCH_CHANNEL,
  receiveChannels,
  receiveChannel
} from '../actions/ChannelActions';
import { getChannels, getChannel } from '../util/ChannelsUtil';

export default ({ dispatch }) => next => action => {
  const fetchChannelsSuccess = channels => dispatch(receiveChannels(channels));
  const fetchChannelSuccess = channel => dispatch(receiveChannel(channel));
  switch(action.type) {
    case FETCH_CHANNELS:
      getChannels(fetchChannelsSuccess);
      return next(action);
    case FETCH_CHANNEL:
      getChannel(action.id, fetchChannelSuccess);
      return next(action);
    default:
      return next(action);
  }
};
