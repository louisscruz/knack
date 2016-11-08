import React from 'react'; // eslint-disable-line no-unused-vars
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import ChipInput from 'material-ui-chip-input';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import { debounce } from 'lodash';

class MessageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      users: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleAddChip = this.handleAddChip.bind(this);
    this.fetchUsers = debounce(this.fetchUsers.bind(this), 200);
  }

  update(e) {
    const values = e.map(el => el.toLowerCase());
    this.setState({members: values});
  }

  handleAddChip(chip) {
    const value = chip.toLowerCase();
    if (value === this.props.currentUser.username.toLowerCase()) return;
    if (this.state.members.indexOf(value) === -1) {
      this.setState({ members: this.state.members.concat(value) });
    }
  }

  handleDeleteChip(chip) {
    const value = chip.toLowerCase();
    const index = this.state.members.indexOf(value);
    if (index !== -1) {
      let newMembers = this.state.members.slice();
      newMembers.splice(index, 1);
      this.setState({ members: newMembers });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let members = [this.props.currentUser.username, ...this.state.members];
    const name = members.sort().map(el => `@${el}`).join('_');
    const messageKeys = Object.keys(this.props.directMessages);
    for (let i = 0; i < messageKeys.length; i++) {
      if (this.props.directMessages[messageKeys[i]].name === name) {
        this.setState({members: []});
        this.props.router.push(`/messages/${name}`);
        return this.props.closeModal();
      }
    }
    const channel = {
      creator_id: this.props.currentUser.id,
      members: this.state.members
    };
    this.props.postDirectMessage(channel);
    this.props.closeModal();
    this.setState({members: []});
  }

  fetchUsers(value) {
    const that = this;
    if (value.length === 0) return;
    $.ajax({
      url: 'api/users/search',
      type: 'GET',
      dataType: 'json',
      data: { value },
      success: function(res) {
        let usernames = res.map(el => el.username);
        that.setState({ users: usernames });
      }
    });
  }

  render () {
    const styles = {
      modal: {
        display: this.props.open ? 'flex' : 'none',
      },
      input: {
        width: '100%'
      }
    };
    const valid = this.state.members.length > 0;
    return (
      <div className="modal" style={styles.modal}>
        <IconButton className="close" onTouchTap={this.props.closeModal}>
          <Clear />
        </IconButton>
        <Paper className="paper">
            <ChipInput
              floatingLabelText="Start a conversation"
              onUpdateInput={this.fetchUsers}
              onChange={this.update}
              style={styles.input}
              value={this.state.members}
              onRequestAdd={(chip) => this.handleAddChip(chip) }
              onRequestDelete={(chip) => this.handleDeleteChip(chip)}
              dataSource={this.state.users}
              />
            <RaisedButton
              type="button"
              fullWidth={true}
              onTouchTap={this.handleSubmit}
              disabled={!valid}
              primary={true}>
              Go
            </RaisedButton>
        </Paper>
      </div>
    );
  }
}

export default withRouter(MessageModal);
