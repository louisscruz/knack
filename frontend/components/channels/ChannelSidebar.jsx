import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import { withRouter, hashHistory } from 'react-router';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.logout = this.logout.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if (!this.props.currentUser) {
      this.props.router.replace('/');
    }
  }

  logout() {
    this.props.logout();
    hashHistory.push('/');
  }

  handleTouchTap(e) {
    e.preventDefault();
    this.setState({
      menuOpen: true,
      anchorEl: e.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      menuOpen: false,
    });
  }

  setCurrentChannel(name) {
    return () => {
      const url = `/messages/${name}`;
      this.props.router.push(url);
    };
  }

  render () {
    return (
      <Drawer open={true} className="sidebar">
        <MenuItem><h1>kn@ck</h1></MenuItem>
        <MenuItem
          className="account-menu"
          primaryText={this.props.currentUser.username}
          rightIcon={<ArrowDropDown />}
          onTouchTap={this.handleTouchTap}>
          <Popover
            open={this.state.menuOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'middle', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            animation={PopoverAnimationVertical}
          >
            <Menu>
              <MenuItem primaryText="Sign out" onTouchTap={this.logout}/>
            </Menu>
          </Popover>
        </MenuItem>
        <Divider />
        <p className="list-title">Channels</p>
        <div className="channels-container">
          {
            Object.keys(this.props.channels).map(id => {
              return (
                <MenuItem
                  key={id}
                  primaryText={this.props.channels[id].name}
                  onTouchTap={this.setCurrentChannel(this.props.channels[id].name)}
                  style={{minHeight: '32px', lineHeight: '32px'}}
                />
              )
            })
          }
        </div>
        <Divider />
        <p className="list-title">Direct Messages <IconButton><AddCircleOutline /></IconButton></p>
      </Drawer>
    );
  }
}

export default withRouter(ChannelSidebar);
