import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import ChannelReducer from './ChannelReducer';
import CurrentChannelReducer from './CurrentChannelReducer';
import SidebarReducer from './SidebarReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  currentChannel: CurrentChannelReducer,
  sidebarOpen: SidebarReducer
});

export default RootReducer;
