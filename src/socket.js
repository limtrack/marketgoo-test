// Constants
import { API_URL } from './config';
// Socket
import socketIOClient from "socket.io-client";
// Redux
import store from './store';
import { SET_PLAYERS } from './store/players/actions'

const socket = socketIOClient(API_URL);

// Socket's events
socket.on('update/players', data => {
  // Update players
  store.dispatch({ type: SET_PLAYERS, payload: data })
})
