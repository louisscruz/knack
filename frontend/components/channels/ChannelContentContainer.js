import { connect } from 'react-redux';
import ChannelContent from './ChannelContent';
import { toggleSidebar } from '../../actions/SidebarActions';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  sidebarOpen: state.sidebarOpen
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelContent);
