import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div className="section">
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
      <hr style={{ margin: '50px 0', border: '1px solid #ddd' }} />
      <div className="section">
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
          We For She
        </h2>
        <div className="picture-grid">
          <img src="https://i.pinimg.com/474x/b3/4c/c0/b34cc0b54a0954c4f6b40e77d76d33ce.jpg" alt="Fashion Design 1" className="picture" />
          <img src="https://i.pinimg.com/474x/e5/47/47/e54747e26e73c1f30c0ae3b2bc322121.jpg" alt="Fashion Design 2" className="picture" />
          <img src="https://i.pinimg.com/474x/1e/3c/d9/1e3cd9400a198eb262d6bf4118797322.jpg" alt="Fashion Design 2" className="picture" />
          <img src="https://i.pinimg.com/474x/e4/5d/b4/e45db4dddea2d5a91c628e6795964775.jpg" alt="Fashion Design 2" className="picture" />
          <img src="https://i.pinimg.com/474x/7c/b5/b3/7cb5b3c3d6eb6a38e7422692fe1143d1.jpg" alt="Fashion Design 2" className="picture" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
