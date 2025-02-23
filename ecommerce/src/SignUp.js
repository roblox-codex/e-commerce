// src/SignUp.js
import React, { useState } from 'react';
import './SignUp.css'; // Make sure the CSS file exists

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: ''
    });
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [showOtp, setShowOtp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.success) {
                setShowOtp(true);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage(error.message);
        }
    };

    const handleOtpVerification = async () => {
        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ otp, email: formData.email })
            });

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Error:', error);
            setMessage(error.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Signup</h1>
            {showOtp ? (
                <div className="otp-container">
                    <input
                        type="text"
                        id="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button id="verify-otp" className="submit-btn" onClick={handleOtpVerification}>
                        Verify OTP
                    </button>
                </div>
            ) : (
                <form id="signup-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Your Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Set Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit-btn">Signup</button>
                </form>
            )}
            <div id="message" className="message" style={{ color: showOtp ? 'green' : 'red' }}>
                {message}
            </div>
        </div>
    );
};

export default SignUp;