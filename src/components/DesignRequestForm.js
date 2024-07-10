import React, { useState } from 'react';
import axios from 'axios';
import './DesignRequestForm.css'; // Import CSS file for styling

const DesignRequestForm = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/design-requests', { description });
      console.log('Design request submitted:', response.data);
      alert('Design request submitted successfully!');
      setDescription(''); // Clear description after submission
    } catch (error) {
      console.error('Error submitting design request:', error);
      alert('Failed to submit design request. Please try again later.');
    }
  };

  return (
    <div className="design-request-container">
      <h2>Submit a Design Request</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="description-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your design request"
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default DesignRequestForm;
