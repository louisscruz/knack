import { connect } from 'react-redux';
import MessageModal from './MessageModal';
import { postDirectMessage } from '../../actions/ChannelActions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  directMessages: state.directMessages
});

const mapDispatchToProps = dispatch => ({
  postDirectMessage: channel => dispatch(postDirectMessage(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);
