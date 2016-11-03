export const FETCH_CHANNELS = 'FETCH_CHANNELS';
export const FETCH_CHANNEL = 'FETCH_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const fetchChannels = () => ({
  type: FETCH_CHANNELS
});

export const fetchChannel = id => ({
  type: FETCH_CHANNEL,
  id
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});
