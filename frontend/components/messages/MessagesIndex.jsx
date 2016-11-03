import React from 'react';
import TextField from 'material-ui/TextField';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
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

  updateMessage(e) {
    this.setState({message: e.target.value});
  }

  handleMessageSubmit(e) {
    e.preventDefault();
    this.props.postMessage(this.state);
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
                  <Card key={key}>
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
        <h2>No messages yet!</h2>
      );
    }
    return (
      <div className="messages-container">
        <div className="channel-messages">
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
              onChange={this.updateMessage}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MessagesIndex;
