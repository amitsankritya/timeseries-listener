import { WebSocket } from 'ws';
import dotenv from 'dotenv';
import { decryptMessage, validateMessage } from './utils.js';

dotenv.config();

export const processMessage = (messageStream) => {
    
    const messageString = messageStream instanceof Buffer ? messageStream.toString('utf-8') : messageStream;

    const encryptedMessages = messageString.split('|');

    let validatedMessage = [];

    encryptedMessages.forEach((encryptedMessage) => {

        try {
            
            console.log("Passphrase :" + process.env.PASSPHRASE);

            const decryptedMessage = decryptMessage(encryptedMessage, process.env.PASSPHRASE);

            if (validateMessage(decryptedMessage)) {

                // TODO: save messages to influx db
                console.log("Valid Message:  " + decryptedMessage);

                validatedMessage.push(decryptedMessage);

            } else {
                console.error('Invalid message integrity. Skipping this message.');
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    return validatedMessage;
}
