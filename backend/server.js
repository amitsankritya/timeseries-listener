import { WebSocketServer, WebSocket } from "ws";
import dotenv from 'dotenv';

import { processMessage } from "./src/listener.js";

dotenv.config();

const emitterSocket = new WebSocket('wss://localhost:3030');

emitterSocket.on('open', () => {
    console.log('Connected to timeseries emitter service');
});

emitterSocket.on('message', (messageStream) => {
    console.log(`Message Recieved: ${messageStream}`);
    processMessage(messageStream);
});

emitterSocket.on('error', (error) => {
    console.log('Error: ', error );
});