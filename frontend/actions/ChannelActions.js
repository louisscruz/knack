export const FETCH_CHANNELS = 'FETCH_CHANNELS';
export const FETCH_DIRECT_MESSAGES = 'FETCH_DIRECT_MESSAGES';
export const FETCH_CHANNEL = 'FETCH_CHANNEL';
export const POST_CHANNEL = 'POST_CHANNEL';
export const POST_DIRECT_MESSAGE = 'POST_DIRECT_MESSAGE';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const fetchChannels = () => ({
  type: FETCH_CHANNELS
});

export const fetchDirectMessages = () => ({
  type: FETCH_DIRECT_MESSAGES
});

export const fetchChannel = id => ({
  type: FETCH_CHANNEL,
  id
});

export const postChannel = channel => ({
  type: POST_CHANNEL,
  channel
});

export const postDirectMessage = (channel, success) => ({
  type: POST_DIRECT_MESSAGE,
  channel,
  success
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveDirectMessages = channels => ({
  type: RECEIVE_DIRECT_MESSAGES,
  channels
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveDirectMessage = (channel, success) => ({
  type: RECEIVE_DIRECT_MESSAGE,
  channel,
  success
});
