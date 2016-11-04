import {
  TOGGLE_SIDEBAR
} from '../actions/SidebarActions';

export default (state = true, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};
