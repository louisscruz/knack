import React from 'react';
import MessagesIndexItem from '../messages/MessagesIndexItem';

const messageBodies = [
  'Hey there!',
  'Knack is a live messaging application built for people to work together!',
  'It\'s very cool, if I say so myself...',
  'What are you waiting for? Sign up, sign in, and get knackin!'
];

const generateNextMessage = index => {
  return {
    author: {
      username: 'knack_bot'
    },
    body: messageBodies[index],
    created_at: new Date()
  };
};

const randomDuration = () => {
  return (Math.random() * 1000) + 3000;
};

class SplashHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.startMessageAnimation(messageBodies.length);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  startMessageAnimation(count) {
    const duration = count === messageBodies.length ? 750 : randomDuration();
    setTimeout(() => {
      if (count === 0) return this.props.toggleActivated();
      let newMessages = this.state.messages.slice();
      const message = generateNextMessage(messageBodies.length - count);
      newMessages.push(message);
      this.setState({messages: newMessages}, this.startMessageAnimation(--count));
    }, duration);
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  render() {
    const currentUser = {
      username: 'knack_bot'
    };
    return (
      <div>
        {this.state.messages.map((el, idx) => (
          <MessagesIndexItem
            key={idx}
            message={this.state.messages[idx]}
            currentUser={currentUser} />
        ))}
      </div>
    );
  }
}


export default SplashHome;
