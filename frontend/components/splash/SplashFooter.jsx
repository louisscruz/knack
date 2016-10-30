import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';

const SplashFooter = (state) => (
  <footer>
    <Paper zDepth={1} rounded={false}>
      <List>
        <ListItem primaryText="Sign In" />
      </List>
    </Paper>
  </footer>
);

export default SplashFooter;
