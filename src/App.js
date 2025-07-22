import './App.css';

import React, { useState } from 'react';
import InputGroup from "./components/base/moleculas/InputGroup";
import Container from 'react-bootstrap/Container';
import Header from './components/base/moleculas/Header';
import MessageBubble from './components/base/moleculas/MessageBubble';
import YazekaImageBlock from './components/templates/moleculas/YazekaImageBlock';
import { getOpenAIResponse } from './api';

function App() {
  const [inputActive, setInputActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInputValue('');
      setInputActive(false);
      setLoading(true);

      const botResponse = await getOpenAIResponse(inputValue);
      const botMessage = { text: botResponse, sender: 'bot', showImage: false };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setLoading(false);
    }
  };

  return (
    <Container
      fluid
      style={{
        minHeight: '100dvh',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 16,
        overflow: 'hidden',
        gap: 16,
      }}
      className="m-0"
    >
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 8 }}>
        {messages.map((msg, idx) => {
          if (msg.sender === 'bot') {
            return <YazekaImageBlock key={idx} showImage={msg.showImage} text={msg.text} />;
          }
          return (
            <div key={idx} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <MessageBubble text={msg.text} />
            </div>
          );
        })}
        {loading && <p>Yazeka is thinking...</p>}
      </div>
      <div style={{ flexGrow: 1 }} />
      <InputGroup
        figmaActive={inputActive}
        onInputFocus={() => setInputActive(true)}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onSend={handleSend}
      />
    </Container>
  );
}

export default App;
