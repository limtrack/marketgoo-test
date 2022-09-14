// Constants
import { API_URL } from './config';
// Libs
import socketIOClient from "socket.io-client";

const socket = socketIOClient(API_URL);

socket.on('update/players', data => {
    console.log(data);
})
