import { connect } from 'react-redux';
import Channels from './Channels';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Channels);
