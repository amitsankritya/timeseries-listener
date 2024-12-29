import { WebSocket, WebSocketServer } from "ws";
import dotenv from 'dotenv';

import { processMessage } from "./src/listener.js";

dotenv.config();

const frontendSocket = new WebSocketServer({ port: 4000 });

let frontendClients = [];

frontendSocket.on('connection', (fws) => {

    console.log('Frontend WebSocket connected');
    frontendClients.push(fws);

    fws.on('close', () => {
        frontendClients = frontendClients.filter(client => client !== fws);
    });

    fws.on('message', (message) => {
        console.log('Received from frontend:', message);
    });

    fws.on('error', (error) => {
        console.log('Frontend WebSocket Error:', error);
    });
});

const broadcastToFrontend = (validMessages) => {
    frontendClients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            console.log("Sending message to client...");
            client.send(JSON.stringify(validMessages));
        } else {
            console.log('Frontend WebSocket is not open');
        }
    });
};

const emitterSocket = new WebSocket('wss://localhost:3030');

emitterSocket.on('open', () => {
    console.log('Connected to timeseries emitter service');
});

emitterSocket.on('message', (messageStream) => {

    const validMessages = processMessage(messageStream);

    console.log(`Message Recieved: ${validMessages}`);

    broadcastToFrontend(validMessages);

});

emitterSocket.on('error', (error) => {
    console.log('Error: ', error );
});