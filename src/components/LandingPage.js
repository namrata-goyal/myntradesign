import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Welcome to Myntra's Designer Connect
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        Revolutionizing Fashion with Personalized Designs
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
        Explore independent designers and create your bespoke fashion pieces.
      </p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '1.1rem',
          backgroundColor: '#FF5252',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          margin: '10px',
        }}
        onClick={() => navigate('/designers')}
      >
        Explore Designers
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '1.1rem',
          backgroundColor: '#FF5252',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          margin: '10px',
        }}
        onClick={() => navigate('/request')}
      >
        Request a Design
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '1.1rem',
          backgroundColor: '#FF5252',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          margin: '10px',
        }}
        onClick={() => navigate('/chat')}
      >
        Chat with Designers
      </button>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '1.1rem',
          backgroundColor: '#FF5252',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          margin: '10px',
        }}
        onClick={() => navigate('/video')}
      >
        Video Conferencing
      </button>
    </div>
  );
};

export default LandingPage;
