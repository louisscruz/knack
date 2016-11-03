import { connect } from 'react-redux';
import Channels from './Channels';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
