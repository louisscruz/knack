import { connect } from 'react-redux';
import ChannelSidebar from './ChannelSidebar';
import { logout } from '../../actions/SessionActions';
import { toggleSidebar } from '../../actions/SidebarActions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  channels: state.channels,
  sidebarOpen: state.sidebarOpen
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user)),
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSidebar);
