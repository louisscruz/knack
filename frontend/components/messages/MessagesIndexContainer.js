import { connect } from 'react-redux';
import MessagesIndex from './MessagesIndex';

import { postMessage } from '../../actions/MessageActions';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  messages: state.currentChannel.messages
});

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesIndex);
