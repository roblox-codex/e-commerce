// src/ClientPurchaseForm.js
import React, { useState } from 'react';

const ClientPurchaseForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        deliveryOption: '',
        specialNotes: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/submit-purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setIsSubmitted(true);
                alert('Your purchase details have been submitted successfully!');
            } else {
                alert('There was an error submitting your details. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your details. Please try again.');
        });
    };

    const proceedToPayment = () => {
        window.location.href = "payment.html"; // Replace with actual payment integration
    };

    return (
        <div className="container">
            <h2>Client Purchase Form</h2>
            
            <form id="purchaseForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" placeholder="10-digit number" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Shipping Address:</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="4" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryOption">Preferred Delivery Option:</label>
                    <select id="deliveryOption" name="deliveryOption" value={formData.deliveryOption} onChange={handleChange} required>
                        <option value="">Select an option</option>
                        <option value="standard">Standard Delivery (5-7 business days)</option>
                        <option value="express">Express Delivery (2-3 business days)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="specialNotes">Special Notes or Instructions (Optional):</label>
                    <textarea id="specialNotes" name="specialNotes" value={formData.specialNotes} onChange={handleChange} rows="4"></textarea>
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit Purchase Information" />
                </div>
            </form>

            <div className="gap"></div>

            <div className="payment-section">
                <h3>Your order is ready to be paid!</h3>
                <p>Please click the button below to proceed with payment.</p>
                <button id="payNowBtn" className="payment-btn" style={{ display: isSubmitted ? 'inline-block' : 'none' }} onClick={proceedToPayment}>Pay Now</button>
            </div>
        </div>
    );
}

export default ClientPurchaseForm;