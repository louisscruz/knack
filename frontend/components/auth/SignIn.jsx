import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';
import { formInvalid, getErrors, setErrors, setTouched } from './FormErrors';

const Subtitle = () => (
  <div>
    <p>No account? <Link to="/sign-up"><FlatButton label="Sign Up" primary={true} /></Link></p>
  </div>
);

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: true,
            message: 'Email is required'
          }
        }
      },
      password: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: true,
            message: 'Password is required'
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
      email: this.state.email.value.toLowerCase(),
      password: this.state.password.value
    };
    this.props.login(user);
  }

  handleGuestLogin() {
    let newState = merge({}, this.state);
    newState.email.value = 'guest@gmail.com';
    newState.password.value = 'password';
    this.setState(newState, () => {
      setTouched.call(this, 'password');
      setTouched.call(this, 'email');
      const user = {
        email: this.state.email.value.toLowerCase(),
        password: this.state.password.value
      };
      this.props.login(user);
    });
  }

  render () {
    return (
      <Card className="auth" zDepth={5}>
        <form onSubmit={this.handleSubmit}>
          <CardTitle
            className="card-title"
            title="Sign In"
            subtitle={<Subtitle />}
            />
          <RaisedButton onClick={this.handleGuestLogin} label="Guest Sign In" primary={true} />
          <CardText className="fields">
            <TextField
              hintText="john@doe.com"
              floatingLabelText="Email"
              fullWidth={true}
              errorText={getErrors.call(this, 'email')}
              value={this.state.email.value}
              onChange={this.update('email')}
              onBlur={setTouched.call(this, 'email')}
              />
            <TextField
              hintText="password"
              floatingLabelText="Password"
              fullWidth={true}
              errorText={getErrors.call(this, 'password')}
              value={this.state.password.value}
              onChange={this.update('password')}
              onBlur={setTouched.call(this, 'password')}
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

export default withRouter(SignIn);
