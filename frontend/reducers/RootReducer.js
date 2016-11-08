import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import ChannelReducer from './ChannelReducer';
import CurrentChannelReducer from './CurrentChannelReducer';
import DirectMessageReducer from './DirectMessageReducer';
import SidebarReducer from './SidebarReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  currentChannel: CurrentChannelReducer,
  directMessages: DirectMessageReducer,
  sidebarOpen: SidebarReducer
});

export default RootReducer;
