import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { convertDirectMessageName } from '../../util/ChannelsUtil';
import { grey800 } from 'material-ui/styles/colors';

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
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      toolbarGroup: {
        flex: '1',
        maxWidth: this.maxWidth,
        display: 'inline'
      },
      toolbarTitle: {
        float: 'right',
        color: grey800
      }
    };
    let name = this.props.currentChannel.name;
    if (this.props.currentChannel.directMessage) {
      name = convertDirectMessageName(this.props.currentChannel.name, this.props.currentUser);
    }
    return (
      <div className="channel-content" style={channelContentStyle.globalMargin}>
        <div className="channel-content-container">
          <Toolbar className="channel-header" style={channelContentStyle.toolbar}>
            <ToolbarGroup style={channelContentStyle.toolbarGroup}>
              <IconButton onTouchTap={this.props.toggleSidebar} style={channelContentStyle.menuButton}><Menu /></IconButton>
              <ToolbarTitle text={name} style={channelContentStyle.toolbarTitle}/>
            </ToolbarGroup>
          </Toolbar>
          {React.cloneElement(this.props.children, {maxWidth: this.maxWidth})}
        </div>
      </div>
    );
  }
}

export default ChannelContainer;
