import React from 'react';

class MessagesIndex extends React.Component {
  render () {
    return (
      <div className="messages-container">
        <h1>{this.props.currentChannel.name} messages</h1>
      </div>
    );
  }
}

export default MessagesIndex;
