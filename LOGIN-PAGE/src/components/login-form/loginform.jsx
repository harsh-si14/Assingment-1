import React, { useState } from 'react';
import axios from 'axios';
import './Loginform.css';
import { FaLock, FaUser } from 'react-icons/fa';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:3001/user', { username, password });
    
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remeber-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        {error && <div className="error-message">{error}</div>}
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register Now</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
