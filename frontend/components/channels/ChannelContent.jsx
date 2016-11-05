import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

class ChannelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.maxWidth = '960px';
  }
  render () {
    const channelContentStyle = {
      globalMargin: {
        marginLeft: this.props.sidebarOpen ? '256px' : '0px'
      },
      menuButton: {
        height: '100%',
        display: this.props.sidebarOpen ? 'none' : 'inline'
      },
      toolbar: {
        justifyContent: 'center'
      },
      toolbarGroup: {
        flex: '1',
        maxWidth: this.maxWidth,
        display: 'inline'
      },
      toolbarTitle: {
        float: 'right'
      }
    };
    return (
      <div className="channel-content" style={channelContentStyle.globalMargin}>
        <div className="channel-content-container">
          <Toolbar className="one" style={channelContentStyle.toolbar}>
            <ToolbarGroup style={channelContentStyle.toolbarGroup}>
              <IconButton onTouchTap={this.props.toggleSidebar} style={channelContentStyle.menuButton}><Menu /></IconButton>
              <ToolbarTitle text={this.props.currentChannel.name} style={channelContentStyle.toolbarTitle}/>
            </ToolbarGroup>
          </Toolbar>
          {React.cloneElement(this.props.children, {maxWidth: this.maxWidth})}
        </div>
      </div>
    );
  }
}

export default ChannelContainer;
