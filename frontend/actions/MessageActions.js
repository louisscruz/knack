export const POST_MESSAGE = 'POST_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const postMessage = message => ({
  type: POST_MESSAGE,
  other: console.log('dispatched action'),
  message
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});
