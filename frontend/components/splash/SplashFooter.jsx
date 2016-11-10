import React from 'react'; // eslint-disable-line no-unused-vars
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { grey800 } from 'material-ui/styles/colors';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '64px',
  backgroundColor: grey800
};

const SplashFooter = ({activated}) => (
  <footer>
    <Paper
      zDepth={1}
      rounded={false}
      style={styles}>
      <Link to="/sign-up">
        <RaisedButton label="Sign Up" primary={activated}/>
      </Link>
    </Paper>
  </footer>
);

export default SplashFooter;
