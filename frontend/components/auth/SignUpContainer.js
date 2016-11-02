import { connect } from 'react-redux';
import { login, signUp } from '../../actions/SessionActions';
import SignUp from './SignUp';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signUp: user => dispatch(signUp(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
