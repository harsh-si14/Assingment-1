import React, { useState } from 'react';
import axios from 'axios';
import './Loginform.css';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/user', { username, password })
      .then(result => {
        alert('You are logged in!'); 
        setUsername('');
        setPassword(''); 
      })
      .catch(err => console.log(err));
  };

  const handleregister = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/employee', { username, email, password })
      .then(result => {
        alert('You are registered !'); 
        setUsername('');
        setPassword(''); 
        setEmail('');
      })
      .catch(err => console.log(err));
  };
  
  const registerLink = () =>{
    setAction('active');
  };

  const loginLink = () =>{
    setAction('');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    // Password validation rules
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasLowerCase = /[a-z]/.test(newPassword);
    const hasNumbers = /[0-9]/.test(newPassword);
    const hasSpecialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(newPassword);
    
    // Check if password meets all rules
    if (
      newPassword.length < minLength ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumbers ||
      !hasSpecialChars
    ) {
      setPasswordError("Password must be 8+ characters with uppercase, lowercase, number, and special character.");
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="input-box">
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FaEnvelope className="icon" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <FaLock className="icon" />
          </div>
          {passwordError && <p className="password-error">{passwordError}</p>}
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#" onClick={registerLink}>Register Now</a>
            </p>
          </div>
        </form>
      </div>
      <div className='form-box registration'>
        <form onSubmit={handleregister}>
          <h1>REGISTER</h1>
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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <FaLock className="icon" />
          </div>
          {passwordError && <p className="password-error">{passwordError}</p>}
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account? <a href="#" onClick={loginLink}>Login Now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
