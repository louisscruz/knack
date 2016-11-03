import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import ChannelReducer from './ChannelReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer
});

export default RootReducer;
