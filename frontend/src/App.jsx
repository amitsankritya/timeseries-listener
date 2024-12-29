// src/App.jsx
import React, { useState } from 'react';
import { Text } from '@chakra-ui/react';
import WebSocketClient from './components/WebSocketClient.jsx';
import DisplayMessages from './components/DisplayMessages.jsx';

const App = () => {

  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages(message);
  };

  return (
    <div>
      <Text fontSize="2xl" fontWeight="bold" color="teal.500" textAlign="center" mt={5} mb={5}>
        TimeSeries Messages
      </Text>
      
      <WebSocketClient onNewMessage={handleNewMessage} />
      <DisplayMessages messages={messages} />
    </div>
  );
};

export default App;