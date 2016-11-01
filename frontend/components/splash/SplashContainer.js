import { connect } from 'react-redux';
import Splash from './Splash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
