import { WebSocket } from 'ws';
import dotenv from 'dotenv';
import { decryptMessage, validateMessage } from './utils.js';

dotenv.config();

export const processMessage = (messageStream) => {
    
    const messageString = messageStream instanceof Buffer ? messageStream.toString('utf-8') : messageStream;

    const encryptedMessages = messageString.split('|');

    encryptedMessages.forEach((encryptedMessage) => {
        console.log("Loop enc Message: " + encryptedMessage);
        try {
    
            const decryptedMessage = decryptMessage(encryptedMessage, process.env.PASSPHRASE);

            if (validateMessage(decryptedMessage)) {

                // TODO: save messages to influx db
                console.log("Valid Message:  " + decryptedMessage);

                // TODO: Stream Messages to Frontend

            } else {
                console.error('Invalid message integrity. Skipping this message.');
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });
}
