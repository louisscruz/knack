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
      onTitleTouchTap={() => hashHistory.push('/')}
      zDepth={1500}
      style={{
        backgroundColor: 'transparent'
      }}
      />
  </header>
);

export default SplashHeader;
