import './App.css';

import React, { useState } from 'react';
import InputGroup from "./components/base/moleculas/InputGroup";
import Container from 'react-bootstrap/Container';
import Header from './components/base/moleculas/Header';
import MessageBubble from './components/base/moleculas/MessageBubble';
import YazekaImageBlock from './components/templates/moleculas/YazekaImageBlock';

function App() {
  const [inputActive, setInputActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue }]);
      setInputValue('');
      setInputActive(false); // Switch back to default state
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%', gap: 8 }}>
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} text={msg.text} />
        ))}
        <YazekaImageBlock/>
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
