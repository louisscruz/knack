import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import merge from 'lodash/merge';

import FormErrors from './FormErrors';

const Subtitle = () => (
  <p>No account? <Link to="/"><FlatButton label="Sign Up" primary={true} /></Link></p>
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
            present: false,
            message: 'Email is required.'
          }
        }
      },
      password: {
        value: '',
        touched: false,
        errors: {
          required: {
            present: false,
            message: 'Password is required.'
          }
        }
      }
    };
  }

  update(attribute) {
    return e => {
      let newState = merge({}, this.state);
      newState[attribute].value = e.target.value;
      this.setState(newState, () => {
        this.setErrors(attribute);
      });
    };
  }

  updatePassword(password) {
    let newState = merge({}, this.state);
    newState.password.errors.required.present = false;
    if (password.length < 1) {
      newState.password.errors.required.present = true;
    }
    this.setState(newState);
  }

  getErrors(field) {
    const errors = this.state[field].errors;
    let messages = [];
    Object.keys(errors).forEach(error => {
      if (errors[error].present) messages.push(errors[error].message);
    });
    return messages.join(', ');
  }

  setTouched(field) {
    return () => {
      let newState = merge({}, this.state);
      newState[field].touched = true;
      this.setState(newState, () => this.setErrors(field));
    };
  }

  setErrors(field) {
    let newState = merge({}, this.state);
    newState[field].errors.required.present = false;
    if (this.state[field].value.length === 0) {
      newState[field].errors.required.present = true;
    }
    this.setState(newState);
  }

  formInvalid() {
    let invalid = false;
    const inputs = Object.keys(this.state);
    console.log(this.state);
    for (let i = 0; i < inputs.length; i++) {
      let errors = Object.keys(this.state[inputs[i]].errors);
      for (let j = 0; j < errors.length; j++) {
        if (this.state[inputs[i]].errors[errors[j]].present) invalid = true;
      }
    }
    return invalid;
  }

  render () {
    return (
      <Card className="auth" zDepth={5}>
        <CardTitle
          className="card-title"
          title="Sign In"
          subtitle={<Subtitle />}
          />
        <CardText className="fields">
          <TextField
            hintText="john@doe.com"
            floatingLabelText="Email"
            fullWidth={true}
            errorText={this.getErrors('email')}
            onChange={this.update('email')}
            onBlur={this.setTouched('email')}
            />
          <TextField
            hintText="password"
            floatingLabelText="Password"
            fullWidth={true}
            errorText={this.getErrors('password')}
            onChange={this.update('password')}
            onBlur={this.setTouched('password')}
            />
        </CardText>
        <CardActions>
          <RaisedButton label="Submit" primary={true} fullWidth={true} disabled={this.formInvalid()}/>
        </CardActions>
      </Card>
    );
  }
}

export default SignIn;
