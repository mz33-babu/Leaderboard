import React, { useState, useEffect } from 'react';
import './GamePage.css';

const GamePage = () => {
  const [challenge, setChallenge] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [hintVisible, setHintVisible] = useState(false);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await fetch('/api/challenges/current');
        const data = await response.json();
        setChallenge(data);
      } catch (error) {
        // Handle network errors (e.g., display an error message)
      }
    };

    fetchChallenge();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/challenges/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userAnswer }),
      });

      if (response.ok) {
        // Handle successful answer submission (e.g., display a success message or load next challenge)
      } else {
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      // Handle network errors (e.g., display an error message)
    }
  };

  const handleHintClick = () => {
    setHintVisible(true);
  };

  if (!challenge) {
    return <p>Loading challenge...</p>;
  }

  return (
    <div className="game-page">
      <h1>Game Page</h1>
      <h2>{challenge.question}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userAnswer">Your Answer:</label>
        <input
          type="text"
          id="userAnswer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleHintClick}>Show Hint</button>
      {hintVisible && <p>Hint: {challenge.hint}</p>}
    </div>
  );
};

export default GamePage;
