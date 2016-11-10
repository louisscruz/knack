import React from 'react'; // eslint-disable-line no-unused-vars
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const SplashHeader = () => (
  <header>
    <AppBar
      title={<Link to="/"
              style={{textDecoration: 'none', color: 'white'}}>
              kn@ck
            </Link>}
      iconElementLeft={<span></span>}
      iconElementRight={<FlatButton label="Sign In" href="/#/sign-in" />}
      zDepth={1}
      style={{
        backgroundColor: 'transparent'
      }}
      />
  </header>
);

export default SplashHeader;
