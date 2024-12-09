import { WebSocketServer, WebSocket } from "ws";
import dotenv from 'dotenv';

dotenv.config();

const emitterSocket = new WebSocket('wss://localhost:3030');

emitterSocket.on('open', () => {
    console.log('Connected to timeseries emitter service');
});

emitterSocket.on('message', (messageStream) => {
    console.log(`Message Recieved: ${messageStream}`);
});

emitterSocket.on('error', (error) => {
    console.log('Error: ', error );
});

// wss.on('connection', (ws) => {
//     ws.on('message', (messageStream) => {
//         console.log(`Message Recieved: ${messageStream}`);
//     })
// });

//const wss = new WebSocketServer({ port: 3000 });