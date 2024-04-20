import React, { useState } from 'react';
import axios from 'axios';
import './Loginform.css';
import { FaLock, FaUser } from 'react-icons/fa';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/user', { username, password })
      .then(result => {
        alert('You are logged in!'); // Show pop-up message upon successful login
        setUsername(''); // Clear username field
        setPassword(''); // Clear password field
      })
      .catch(err => console.log(err));
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
