import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [question, setQuestion] = useState('');
  const [answerFormat, setAnswerFormat] = useState('');
  const [hint, setHint] = useState('');
  const [phase, setPhase] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answerFormat, hint, phase }),
      });

      if (response.ok) {
        // Handle successful challenge creation (e.g., display a success message)
      } else {
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      // Handle network errors (e.g., display an error message)
    }
  };

  const handleReset = () => {
    // Implement logic to reset the game
  };

  const handleRestart = () => {
    // Implement logic to restart the game
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />

        <label htmlFor="answerFormat">Answer Format:</label>
        <input
          type="text"
          id="answerFormat"
          value={answerFormat}
          onChange={(e) => setAnswerFormat(e.target.value)}
          required
        />

        <label htmlFor="hint">Hint:</label>
        <input
          type="text"
          id="hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />

        <label htmlFor="phase">Phase:</label>
        <input
          type="number"
          id="phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
          required
        />

        <button type="submit">Create Challenge</button>
      </form>

      <button onClick={handleReset}>Reset Game</button>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default AdminPage;
