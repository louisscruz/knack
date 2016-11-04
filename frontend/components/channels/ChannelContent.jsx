import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class ChannelContainer extends React.Component {
  render () {
    const channelContentStyle = {
      globalMargin: {
        marginLeft: this.props.sidebarOpen ? '256px' : '0px'
      },
      menuButton: {
        height: '100%',
        display: this.props.sidebarOpen ? 'none' : 'inline'
      }
    };
    return (
      <div className="channel-content" style={channelContentStyle.globalMargin}>
        <div className="channel-content-container">
          <Toolbar className="one">
            <ToolbarGroup>
              <IconButton onTouchTap={this.props.toggleSidebar} style={channelContentStyle.menuButton}><Menu /></IconButton>
            </ToolbarGroup>
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
