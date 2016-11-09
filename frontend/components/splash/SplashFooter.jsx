import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import { grey800 } from 'material-ui/styles/colors';

const SplashFooter = (state) => (
  <footer>
    <Paper
      zDepth={1}
      rounded={false}
      style={{height: 64, backgroundColor: grey800}}>
    </Paper>
  </footer>
);

export default SplashFooter;
