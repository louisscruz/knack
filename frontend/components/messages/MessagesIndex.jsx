import React from 'react';
import Paper from 'material-ui/Paper';

class MessagesIndex extends React.Component {
  render () {
    return (
      <Paper zDepth={3} style={{height: '100%', padding: '20px'}}>
        <h1>{this.props.currentChannel.name} messages</h1>
      </Paper>
    );
  }
}

export default MessagesIndex;
