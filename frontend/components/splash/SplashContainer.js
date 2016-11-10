import { connect } from 'react-redux';
import Splash from './Splash';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(Splash);
