import { connect } from 'react-redux';
import MessagesIndex from './MessagesIndex';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesIndex);
