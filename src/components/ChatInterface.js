import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './ChatInterface.css'; // Import CSS file for styling

const socket = io('http://localhost:5001');

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Event listener for incoming messages
    socket.on('chat message', (msg) => {
      setMessages(prevMessages => [...prevMessages, msg]);
      scrollToBottom(); // Scroll to bottom on new message
    });

    // Clean up socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to send a message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      socket.emit('chat message', { text: message, from: 'me', time: new Date() });
      setMessages(prevMessages => [...prevMessages, { text: message, from: 'me', time: new Date() }]);
      setMessage('');
      scrollToBottom(); // Scroll to bottom after sending message
    }
  };

  // Function to scroll to the bottom of the chat window
  const scrollToBottom = () => {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat with Designers</h2>
      <div id="chat-window" className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from === 'me' ? 'sent' : 'received'}`}>
            <p>{msg.text}</p>
            <span className="time">{new Date(msg.time).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
