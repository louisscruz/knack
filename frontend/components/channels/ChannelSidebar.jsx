import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import Clear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import { fullWhite } from 'material-ui/styles/colors';
import { withRouter, hashHistory, Link } from 'react-router';

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
    const styles = {
      toggleButton: {
        position: 'absolute',
        right: '0px'
      },
      title: {
        margin: '4px 0'
      }
    };
    return (
      <Drawer open={this.props.sidebarOpen} className="sidebar">
        <IconButton
          onTouchTap={this.props.toggleSidebar}
          style={styles.toggleButton}
          >
          <Clear />
        </IconButton>
        <h1 style={styles.title}>kn@ck</h1>
        <MenuItem
          className="account-menu"
          primaryText={this.props.currentUser.username}
          rightIcon={<ArrowDropDown color={fullWhite}/>}
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
                <Link
                  to={`/messages/${this.props.channels[id].name}`}
                  key={id}
                  className="channel-item"
                  activeClassName="active"
                >
                  <MenuItem
                    key={id}
                    primaryText={this.props.channels[id].name}
                    style={{minHeight: '32px', lineHeight: '32px'}}
                  />
                </Link>

              );
            })
          }
        </div>
        <Divider />
        <p className="list-title">Direct Messages <IconButton><AddCircleOutline color={fullWhite}/></IconButton></p>
      </Drawer>
    );
  }
}

export default withRouter(ChannelSidebar);
