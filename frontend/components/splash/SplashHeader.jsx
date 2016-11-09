import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { hashHistory } from 'react-router';

const SplashHeader = () => (
  <header>
    <AppBar
      title="kn@ck"
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
