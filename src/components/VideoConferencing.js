import React, { useRef, useState } from 'react';

const VideoConferencing = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(null);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStream(stream);
        setError(null);
      })
      .catch((err) => {
        console.error('Error accessing media devices.', err);
        setError('Failed to access media devices. Please check your camera and microphone settings.');
      });
  };

  const stopVideo = () => {
    stream.getTracks().forEach(track => track.stop());
    videoRef.current.srcObject = null;
    setStream(null);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '2rem' }}>Video Conferencing</h2>
      <p style={{ marginBottom: '20px', fontSize: '1rem', color: '#555' }}>
        Start a video call to connect with designers in real-time.
      </p>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={startVideo} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '1rem', 
            backgroundColor: '#FF5252', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            marginRight: '10px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#FF7961'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FF5252'}
        >
          Start Video
        </button>
        {stream && (
          <button 
            onClick={stopVideo} 
            style={{ 
              padding: '10px 20px', 
              fontSize: '1rem', 
              backgroundColor: '#FF5252', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#FF7961'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF5252'}
          >
            Stop Video
          </button>
        )}
      </div>
      {error && <p style={{ color: 'red', fontSize: '1rem' }}>{error}</p>}
      <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', display: 'inline-block', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <video ref={videoRef} width="600" height="400" style={{ borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default VideoConferencing;
