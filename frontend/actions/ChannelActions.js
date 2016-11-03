export const FETCH_CHANNELS = 'FETCH_CHANNELS';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

export const fetchChannels = () => ({
  type: FETCH_CHANNELS
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});
