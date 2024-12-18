import crypto from 'crypto';

// decrypt encrypted message
export const decryptMessage = (encryptedMessage, passphrase) => {

    const ivFromEncrypted = encryptedMessage.slice(0, 16);

    const encryptedData = encryptedMessage.slice(16);

    const key = crypto
        .createHash('sha256')
        .update(passphrase)
        .digest('hex')
        .substring(0, 32);

    const decipher = crypto.createDecipheriv('aes-256-ctr', key, ivFromEncrypted);

    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');

    decrypted += decipher.final('utf8');

    return JSON.parse(decrypted);
};

// validate the message using the secret_key
export const validateMessage = (message) => {
    console.log(message);
    const calculatedSecretKey = crypto.createHash('sha256').update(JSON.stringify(message)).digest('hex');
    return message.secret_key === calculatedSecretKey;
};
