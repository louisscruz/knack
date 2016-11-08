import React from 'react';
import { withRouter, hashHistory, Link } from 'react-router';
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
import { convertDirectMessageName } from '../../util/ChannelsUtil';
import MessageModalContainer from './MessageModalContainer';

class ChannelSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      messageModalOpen: true
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.logout = this.logout.bind(this);
    this.setCurrentChannel = this.setCurrentChannel.bind(this);
    this.toggleMessageModal = this.toggleMessageModal.bind(this);
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

  toggleMessageModal() {
    this.setState({messageModalOpen: !this.state.messageModalOpen});
  }

  render () {
    const styles = {
      toggleButton: {
        position: 'absolute',
        right: '0px'
      },
      title: {
        margin: '10px 0'
      },
      messageModal: {
        display: this.state.messageModalOpen ? 'inline' : 'none',
        backgroundColor: 'white',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '1400'
      }
    };
    return (
      <aside>
        <MessageModalContainer open={this.state.messageModalOpen} closeModal={this.toggleMessageModal}/>
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
          <p className="list-title">Direct Messages <IconButton onTouchTap={this.toggleMessageModal}><AddCircleOutline color={fullWhite}/></IconButton></p>
          <div className="channels-container">
            {
              Object.keys(this.props.directMessages).map(id => {
                return (
                  <Link
                    to={`/messages/${this.props.directMessages[id].name}`}
                    key={id}
                    className="channel-item"
                    activeClassName="active"
                    >
                    <MenuItem
                      key={id}
                      primaryText={convertDirectMessageName(this.props.directMessages[id].name, this.props.currentUser)}
                      style={{minHeight: '32px', lineHeight: '32px'}}
                      />
                  </Link>
                );
              })
            }
          </div>
        </Drawer>
      </aside>
    );
  }
}

export default withRouter(ChannelSidebar);
