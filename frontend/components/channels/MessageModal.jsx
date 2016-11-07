import React from 'react'; // eslint-disable-line no-unused-vars
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import ChipInput from 'material-ui-chip-input';
import RaisedButton from 'material-ui/RaisedButton';

class MessageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    console.log(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    const channel = {
      creator_id: this.props.currentUser.id,
      members: ['one', 'two']
    };
    this.props.postChannel(channel);
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
    return (
      <div className="modal" style={styles.modal}>
        <IconButton className="close" onTouchTap={this.props.closeModal}>
          <Clear />
        </IconButton>
        <Paper className="paper">
            <ChipInput
              floatingLabelText="Start a conversation"
              onChange={this.update}
              style={styles.input}
              />
            <RaisedButton
              type="button"
              fullWidth={true}
              onTouchTap={this.handleSubmit}
              primary={true}>
              Go
            </RaisedButton>
        </Paper>
      </div>
    );
  }
}

export default MessageModal;
