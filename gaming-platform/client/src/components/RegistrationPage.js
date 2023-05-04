import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [pseudoName, setPseudoName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pseudoName }),
      });

      if (response.ok) {
        // Handle successful registration (e.g., redirect to the leaderboard)
      } else {
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      // Handle network errors (e.g., display an error message)
    }
  };

  return (
    <div className="registration-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudoName">Pseudo Name:</label>
        <input
          type="text"
          id="pseudoName"
          value={pseudoName}
          onChange={(e) => setPseudoName(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
