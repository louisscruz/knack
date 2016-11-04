import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class ChannelContainer extends React.Component {
  render () {
    return (
      <div className="channel-content">
        <div className="channel-content-container">
          <Toolbar className="one">
            <ToolbarGroup>
              <ToolbarTitle text={this.props.currentChannel.name} />
            </ToolbarGroup>
          </Toolbar>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ChannelContainer;
