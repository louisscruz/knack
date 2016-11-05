import { connect } from 'react-redux';
import MessagesIndex from './MessagesIndex';

import { postMessage, receiveMessage } from '../../actions/MessageActions';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  messages: state.currentChannel.messages,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message)),
  receiveMessage: message => dispatch(receiveMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesIndex);
