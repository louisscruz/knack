import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { pinkA200, fullWhite } from 'material-ui/styles/colors';

class MessagesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  componentWillMount() {
    App.room = App.cable.subscriptions.create("RoomChannel", {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        return store.dispatch(addMessage(data['message']));
      },
      speak: function(message) {
        return this.perform('speak', {
          message: message
        });
      }
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  updateMessage(e) {
    this.setState({message: e.target.value});
  }

  handleMessageSubmit(e) {
    e.preventDefault();
    const message = {
      body: this.state.message,
      channel_id: this.props.currentChannel.id,
      author_id: this.props.currentUser.id
    };
    this.props.postMessage(message);
    this.setState({ message: '' });
  }

  scrollToBottom() {
    const height = this.refs.channelMessages.scrollHeight;
    ReactDOM.findDOMNode(this.refs.channelMessages).scrollTop = height;
  }

  render () {
    let messages = (
      <h1>loading...</h1>
    );
    if (this.props.currentChannel && this.props.messages) {
      const keys = Object.keys(this.props.messages);
      if (keys.length > 0) {
        messages = (
          Object.keys(this.props.messages)
                .map(key => (
                  <Card key={key} className="message">
                    <CardTitle title={this.props.messages[key].author.username} />
                    <CardText>
                      {this.props.messages[key].body}
                    </CardText>
                  </Card>
                ))
        );
      }
    } else {
      messages = (
        <div className="no-messages">
          <h2>No messages yet!</h2>
        </div>
      );
    }
    return (
      <div className="messages-container">
        <div className="channel-messages" ref="channelMessages">
          {messages}
        </div>
        <div className="message-input-container">
          <form onSubmit={this.handleMessageSubmit}>
            <IconButton type="submit"><AddCircleOutline color={'white'}/></IconButton>
            <TextField
              fullWidth={true}
              floatingLabelText={'New Message'}
              className="messages-input"
              inputStyle={{color: pinkA200}}
              floatingLabelStyle={{ color: fullWhite }}
              value={this.state.message}
              onChange={this.updateMessage}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MessagesIndex;
