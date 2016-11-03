import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import ChannelReducer from './ChannelReducer';
import CurrentChannelReducer from './CurrentChannelReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  currentChannel: CurrentChannelReducer
});

export default RootReducer;
