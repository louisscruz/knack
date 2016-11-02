import { connect } from 'react-redux';
import ChannelSidebar from './ChannelSidebar';
import { logout } from '../../actions/SessionActions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSidebar);
