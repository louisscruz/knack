import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import { formInvalid, getErrors, setErrors, setTouched } from './FormErrors';

const Subtitle = () => (
  <p>Have an account? <Link to="/sign-in"><FlatButton label="Sign In" primary={true} /></Link></p>
);

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: true,
            message: 'Username is required'
          }
        }
      },
      email: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: true,
            message: 'Email is required.'
          },
          format: {
            present: true,
            message: 'Email is invalid'
          }
        }
      },
      password: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: true,
            message: 'Password is required.'
          },
          minlength: {
            present: true,
            message: 'Password must be at least 8 characters'
          }
        }
      },
      passwordConfirmation: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: true,
            message: 'Password confirmation is required.'
          },
          unequal: {
            present: false,
            message: 'Password confirmation must match password'
          }
        }
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }


  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.currentUser) {
      this.props.router.replace('/messages/general');
    }
  }

  update(attribute) {
    let newState = merge({}, this.state);
    return e => {
      newState[attribute].value = e.target.value;
      this.setState(newState, () => {
        setErrors.call(this, attribute);
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username.value,
      email: this.state.email.value,
      password: this.state.password.value
    };
    this.props.signUp(user);
  }

  handleGuestLogin() {
    const user = {
      email: 'guest@gmail.com',
      password: 'password'
    };
    this.props.login(user);
  }

  render () {
    return (
      <Card className="auth" zDepth={5}>
        <form onSubmit={this.handleSubmit}>
          <CardTitle
            className="card-title"
            title="Sign Up"
            subtitle={<Subtitle />}
            />
          <RaisedButton onClick={this.handleGuestLogin} label="Guest Sign In" primary={true} />
          <CardText className="fields">
            <TextField
              hintText="johndoe"
              floatingLabelText="Username"
              fullWidth={true}
              errorText={getErrors.call(this, 'username')}
              onChange={this.update('username')}
              onBlur={setTouched.call(this, 'username')}
              />
            <TextField
              hintText="john@doe.com"
              floatingLabelText="Email"
              fullWidth={true}
              errorText={getErrors.call(this, 'email')}
              onChange={this.update('email')}
              onBlur={setTouched.call(this, 'email')}
              />
            <TextField
              hintText="password"
              floatingLabelText="Password"
              fullWidth={true}
              errorText={getErrors.call(this, 'password')}
              onChange={this.update('password')}
              onBlur={setTouched.call(this, 'password')}
              type="password"
              />
            <TextField
              hintText="password"
              floatingLabelText="Password Confirmation"
              fullWidth={true}
              errorText={getErrors.call(this, 'passwordConfirmation')}
              onChange={this.update('passwordConfirmation')}
              onBlur={setTouched.call(this, 'passwordConfirmation')}
              type="password"
              />
          </CardText>
          <CardActions>
            <RaisedButton type="submit" label="Submit" primary={true} fullWidth={true} disabled={formInvalid.call(this)}/>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default withRouter(SignUp);
