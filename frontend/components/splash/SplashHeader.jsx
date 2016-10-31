import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const SplashHeader = (state) => (
  <header>
    <AppBar
      title="knack"
      iconElementLeft={<span></span>}
      iconElementRight={<FlatButton label="Sign In" href="#/sign-in" />}
      onTouchTap={() => console.log('test')}
      onTitleTouchTap={() => console.log('test')}
      style={{
        backgroundColor: 'transparent'
      }}
      />
  </header>
);

export default SplashHeader;
