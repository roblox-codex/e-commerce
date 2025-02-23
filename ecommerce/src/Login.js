// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [showOtpContainer, setShowOtpContainer] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (data.success) {
            setShowOtpContainer(true);
            setMessage('');
        } else {
            setMessage(data.message);
        }
    };

    const handleVerifyOtp = async () => {
        const response = await fetch('/api/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ otp })
        });

        const data = await response.json();
        setMessage(data.message);
        if (data.success) {
            setMessage(data.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            
            {/* Login Form */}
            <form id="login-form" onSubmit={handleLogin} style={{ display: showOtpContainer ? 'none' : 'block' }}>
                <input 
                    type="email" 
                    id="login-email" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    id="login-password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" className="submit-btn">Login</button>
            </form>
            
            {/* OTP Verification Section */}
            <div id="otp-container" className="otp-container" style={{ display: showOtpContainer ? 'block' : 'none' }}>
                <input 
                    type="text" 
                    id="otp" 
                    placeholder="Enter OTP" 
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required 
                />
                <button id="verify-otp" className="submit-btn" onClick={handleVerifyOtp}>Verify OTP</button>
            </div>
            
            {/* Feedback Message */}
            <div id="message" className="message" style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</div>

            {/* Forgot Password Link */}
            <div className="forgot-password">
                <a href="#">Forgot Password?</a>
            </div>
        </div>
    );
};

export default Login;