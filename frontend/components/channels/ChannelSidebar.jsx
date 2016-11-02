import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';

class ChannelSidebar extends React.Component {
  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if (!this.props.currentUser) {
      this.props.router.replace('/');
    }
  }

  render () {
    return (
      <Drawer open={true}>
        <MenuItem><h1>kn@ck</h1></MenuItem>
        <MenuItem>{this.props.currentUser.username}</MenuItem>
        <button onClick={this.props.logout}>sign out</button>
      </Drawer>
    );
  }
}

export default withRouter(ChannelSidebar);
