import React from 'react';
import TimeAgo from 'react-timeago';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { pinkA200 } from 'material-ui/styles/colors';

const MessagesIndexItem = ({message, currentUser}) => {
  const avatar = name => {
    let backgroundColor;
    if (currentUser.username === message.author.username) {
      backgroundColor = pinkA200;
    } else {
      backgroundColor = '#1a237e';
    }
    return (
      <Avatar backgroundColor={backgroundColor}>{name[0]}</Avatar>
    );
  };

  const subtitle = date => {
    return (
      <TimeAgo date={date} />
    );
  };

  return (
    <Card className="message">
      <CardHeader
        title={message.author.username}
        subtitle={subtitle(message.created_at)}
        avatar={avatar(message.author.username)} />
      <CardText>
        {message.body}
      </CardText>
    </Card>
  );
};

export default MessagesIndexItem;
