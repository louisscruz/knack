import { connect } from 'react-redux';
import ChannelContent from './ChannelContent';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelContent);
