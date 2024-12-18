import { WebSocket, WebSocketServer } from "ws";
import dotenv from 'dotenv';

import { processMessage } from "./src/listener.js";

dotenv.config();

const emitterSocket = new WebSocket('wss://localhost:3030');

let frontendSocket = null;

const connectToFrontend = () => {
    frontendSocket = new WebSocketServer({ port: 4000 });

    frontendSocket.on('open', () => {
        console.log('Connected to frontend service');
    });

    frontendSocket.on('error', (error) => {
        console.log('Frontend WebSocket Error:', error);
    });
};

connectToFrontend();

const broadcastToFrontend = (validMessages) => {
    console.log(frontendSocket.readyState);
    if (frontendSocket && frontendSocket.readyState === WebSocket.OPEN) {

        frontendSocket.send(JSON.stringify(validMessages));

    } else {
        console.log('Frontend WebSocket is not open');
    }
};

emitterSocket.on('open', () => {
    console.log('Connected to timeseries emitter service');
});

emitterSocket.on('message', (messageStream) => {
    console.log(`Message Recieved: ${messageStream}`);

    const validMessages = processMessage(messageStream);

    broadcastToFrontend(validMessages);
});

emitterSocket.on('error', (error) => {
    console.log('Error: ', error );
});