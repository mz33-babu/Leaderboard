import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LeaderboardPage from './components/LeaderboardPage';
import GamePage from './components/GamePage';
import AdminPage from './components/AdminPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
