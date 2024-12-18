import { useEffect } from 'react';

const WebSocketClient = ({ onNewMessage }) => {
  
  useEffect(() => {

    const socket = new WebSocket('ws://localhost:4000');

    socket.onopen = () => {
      console.log('Connected to Timeseries Listener Backend');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      onNewMessage(message);
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    return () => {
      socket.close();
    };
  }, [onNewMessage]);

  return null;
};

export default WebSocketClient;