import {
  FETCH_CHANNELS,
  receiveChannels
} from '../actions/ChannelActions';
import { getChannels } from '../util/ChannelsUtil';

export default ({ dispatch }) => next => action => {
  const fetchChannelsSuccess = channels => dispatch(receiveChannels(channels));
  switch(action.type) {
    case FETCH_CHANNELS:
      getChannels(fetchChannelsSuccess);
      return next(action);
    default:
      return next(action);
  }
};
