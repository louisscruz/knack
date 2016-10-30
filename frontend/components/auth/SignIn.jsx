import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

const Subtitle = () => (
  <p>No account? <Link to="/"><FlatButton label="Sign Up" primary={true} /></Link></p>
);

const SignIn = (state) => (
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
        />
      <TextField
        hintText="password"
        floatingLabelText="Password"
        fullWidth={true}
        />
    </CardText>
    <CardActions>
      <RaisedButton label="Submit" primary={true} fullWidth={true}/>
    </CardActions>
  </Card>
);

export default SignIn;
