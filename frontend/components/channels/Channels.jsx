import React from 'react';
import ChannelSidebarContainer from './ChannelSidebarContainer';
import ChannelContentContainer from './ChannelContentContainer';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <ChannelSidebarContainer />
        <ChannelContentContainer />
      </div>
    );
  }
}

export default Channels;
