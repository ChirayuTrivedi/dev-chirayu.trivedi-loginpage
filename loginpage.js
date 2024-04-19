

import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check username
    if (!username || username.length < 5) {
      setError('Username must be at least 5 characters long.');
      return;
    }

    // Check password
    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    // Validation passes
    setError('');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="LoginPage">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
