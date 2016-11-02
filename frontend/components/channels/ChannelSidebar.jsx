import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import { withRouter, browserHistory } from 'react-router';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.logout = this.logout.bind(this);
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
    browserHistory.push('/');
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      menuOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      menuOpen: false,
    });
  }

  render () {
    return (
      <Drawer open={true} className="sidebar">
        <MenuItem><h1>kn@ck</h1></MenuItem>
        <MenuItem
          className="account-menu"
          onTouchTap={this.handleTouchTap}>
          {this.props.currentUser.username}
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
        <MenuItem
          focusState="none"
          primaryText="Channels" />
      </Drawer>
    );
  }
}

export default withRouter(ChannelSidebar);
