import React from 'react';
import './register.css';
import { FaLock } from 'react-icons/fa'; // Import FaLock icon

const RegisterForm = () => {
    // Define a placeholder for the error variable
    const error = null;

    return (
        <div className="wrapper">
            <form>
                <h1>REGISTER</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <FaLock className="icon" /> {/* Render the FaLock icon */}
                </div>
                <div className="remeber-forget">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Register</button>
                {/* Display error message if error is present */}
                {error && <div className="error-message">{error}</div>}
                <div className="register-link">
                    <p>
                        Already have an account? <a href="#">Login Now</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
