import React, { useState, useEffect } from 'react';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users/leaderboard');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        // Handle network errors (e.g., display an error message)
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Pseudo Name</th>
            <th>Score</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.pseudoName}</td>
              <td>{user.score}</td>
              <td>
                {/* Render avatar here. If the avatar is an image URL, use an img tag */}
                <img src={user.avatar} alt="Avatar" width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;
