import { connect } from 'react-redux';
import { login } from '../../actions/SessionActions';
import SignIn from './SignIn';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
