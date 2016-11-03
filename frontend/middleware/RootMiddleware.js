import { applyMiddleware } from 'redux';
import SessionMiddleware from './SessionMiddleware';
import ChannelMiddleware from './ChannelMiddleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ChannelMiddleware
);

export default RootMiddleware;
