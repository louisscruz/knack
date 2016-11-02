import React from 'react';
import ChannelSidebarContainer from './ChannelSidebarContainer';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <ChannelSidebarContainer />
        <h1>test</h1>
      </div>
    );
  }
}

export default Channels;
