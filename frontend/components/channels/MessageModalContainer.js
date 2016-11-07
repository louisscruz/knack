import { connect } from 'react-redux';
import MessageModal from './MessageModal';
import { postChannel } from '../../actions/ChannelActions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  postChannel: channel => dispatch(postChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);
