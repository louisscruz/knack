import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

const SplashHeader = (state) => (
  <header>
    <AppBar
      title="kn@ck"
      iconElementLeft={<span></span>}
      iconElementRight={<FlatButton label="Sign In" href="/sign-in" />}
      onTitleTouchTap={() => browserHistory.push('/')}
      style={{
        backgroundColor: 'transparent'
      }}
      />
  </header>
);

export default SplashHeader;
