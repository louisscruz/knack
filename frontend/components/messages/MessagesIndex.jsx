import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pinkA200, fullWhite } from 'material-ui/styles/colors';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import merge from 'lodash/merge';

import MessagesIndexItem from './MessagesIndexItem';

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      valid: false
    };
    this.updateMessage = this.updateMessage.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  updateMessage(e) {
    let newState = merge({}, this.state);
    newState.message = e.target.value;
    if (!this.state.valid) {
      if (newState.message.length > 0) {
        newState.valid = true;
      }
    } else if (newState.message.length === 0) {
      newState.valid = false;
    }
    this.setState(newState);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') this.handleMessageSubmit(e);
  }

  handleMessageSubmit(e) {
    e.preventDefault();
    const message = {
      body: this.state.message,
      channel_id: this.props.currentChannel.id,
      author_id: this.props.currentUser.id
    };
    this.props.postMessage(message);
    this.setState({ message: '', valid: false });
  }

  scrollToBottom() {
    const height = this.refs.channelMessages.scrollHeight;
    this.refs.channelMessages.scrollTop = height;
  }

  render () {
    let messages;
    if (this.props.currentChannel && this.props.messages) {
      const keys = Object.keys(this.props.messages);
      if (keys.length > 0) {
        messages = (
          Object.keys(this.props.messages)
                .map(key => <MessagesIndexItem
                              key={key}
                              currentUser={this.props.currentUser}
                              message={this.props.messages[key]} />)
        );
      }
    } else {
      messages = (
        <div className="no-messages">
          <h2>No messages yet!</h2>
        </div>
      );
    }
    const styles = {
      form: {
        maxWidth: this.props.maxWidth
      },
      submitButton: {
        marginRight: '16px'
      }
    };
    return (
      <div className="messages-container">
        <div
          className="channel-messages"
          ref="channelMessages">
          <div className="padder">
            <ReactCSSTransitionGroup
              transitionName="message"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {messages}
            </ReactCSSTransitionGroup>
          </div>
        </div>
        <div className="message-input-container">
          <form onSubmit={this.handleMessageSubmit} style={styles.form}>
            <TextField
              fullWidth={true}
              floatingLabelText={'New Message'}
              className="messages-input"
              textareaStyle={{color: pinkA200}}
              floatingLabelStyle={{color: fullWhite}}
              value={this.state.message}
              onKeyDown={this.handleKeyDown}
              onChange={this.updateMessage}
              multiLine={true}
              rows={1}
              rowsMax={2}
              />
            <FloatingActionButton
              type="submit"
              mini={true}
              disabled={!this.state.valid}
              style={styles.submitButton}
              >
              <ContentAdd />
            </FloatingActionButton>
          </form>
        </div>
      </div>
    );
  }
}

export default MessagesIndex;
