import { WebSocketServer } from "ws";

export const broadcastToFrontend = (messages) => {

    const frontendSocket = new WebSocketServer({port: 4000});

    frontendSocket.on('open', () => {
        console.log('Connected to frontend service');
        frontendSocket.send(JSON.stringify(messages));
    });

    frontendSocket.on('error', (error) => {
        console.log('Frontend WebSocket Error:', error);
    });
};