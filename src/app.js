import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DesignerProfiles from './components/DesignerProfiles';
import DesignRequestForm from './components/DesignRequestForm';
import ChatInterface from './components/ChatInterface';
import VideoConferencing from './components/VideoConferencing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/designers" element={<DesignerProfiles />} />
        <Route path="/request" element={<DesignRequestForm />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/video" element={<VideoConferencing />} />
      </Routes>
    </Router>
  );
};

export default App;
