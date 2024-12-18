// src/App.jsx
import React, { useState } from 'react';
import WebSocketClient from './components/WebSocketClient.jsx';
import DisplayMessages from './components/DisplayMessages.jsx';

const App = () => {

  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages([message]);
  };

  return (
    <div>
      <h1 color='black'>TimeSeries Messages</h1>
      <WebSocketClient onNewMessage={handleNewMessage} />
      <DisplayMessages messages={messages} />
    </div>
  );
};

export default App;