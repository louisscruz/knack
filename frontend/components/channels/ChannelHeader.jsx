import React from 'react';
import { Toolbar } from 'material-ui/Toolbar';

const ChannelHeader = ({name}) => {
  const title = name ? name : 'loading...';
  return (
    <Toolbar>{title}</Toolbar>
  );
};

export default ChannelHeader;
