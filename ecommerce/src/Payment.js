// src/Payment.js
import React, { useState, useEffect } from 'react';
import './Payment.css';

const Payment = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [paymentSection, setPaymentSection] = useState(false);

  const sendOtp = async () => {
    if (!phone) {
      alert('Please enter your phone number');
      return;
    }

    const response = await fetch('http://localhost:3000/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone })
    });

    const data = await response.json();
    if (data.message === 'OTP sent successfully') {
      alert('OTP sent to your phone');
      document.getElementById('send-otp-btn').disabled = true;
    } else {
      alert(data.message);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    const response = await fetch('http://localhost:3000/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone, otp })
    });

    const data = await response.json();
    setMessage(data.message);
    if (data.message === 'OTP verified successfully. Proceed to payment.') {
      alert('OTP verified successfully');
      setPaymentSection(true);
    } else {
      alert(data.message);
    }
  };

  const handleCardSubmit = event => {
    event.preventDefault();
    // Handle card payment submission
  };

  const handleUpiSubmit = event => {
    event.preventDefault();
    const upiId = document.getElementById('upi-id').value;

    fetch('submit-upi-payment.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'upi-id': upiId,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Payment successful: ' + data.message);
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch(error => {
      alert('Error: Could not complete the transaction. Please try again.');
      console.error(error);
    });
  };

  const payNow = () => {
    fetch('/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 500 })
    })
    .then(response => response.json())
    .then(data => {
      const orderId = data.orderId;
      var options = {
        "key": "YOUR_RAZORPAY_KEY_ID", 
        "amount": 50000, 
        "currency": "INR",
        "order_id": orderId, 
        "handler": function(response) {
          var paymentDetails = {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature
          };

          fetch('/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(paymentDetails)
          })
          .then(response => response.json())
          .then(data => {
            alert(data.message);
          });
        }
      };

      var rzp1 = new Razorpay(options);
      rzp1.open();
    })
    .catch(error => {
      alert('Failed to create order. Please try again later.');
      console.error('Error creating order:', error);
    });
  };

  useEffect(() => {
    document.getElementById("razorpay-button").addEventListener("click", payNow);
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src="logo.png" alt="Company Logo" />
          </a>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="home.html">About Us</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="ContactUs.html">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Our Secure Payment Portal</h1>
            <p>Make your purchases effortlessly and securely with our trusted payment options.</p>
          </div>
        </section>
        <section className="payment-options">
          <div className="container">
            <h2>Choose Your Payment Method</h2>
            <div className="payment-methods">
              <div className="payment-option card-option">
                <h3><i className="fas fa-credit-card"></i> Credit/Debit Card</h3>
                <form id="card-form" onSubmit={handleCardSubmit}>
                  <div className="form-group">
                    <label htmlFor="card-number">Card Number</label>
                    <input type="text" id="card-number" name="card-number" maxLength="16" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" maxLength="3" placeholder="123" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date (MM/YY)</label>
                    <input type="text" id="expiry" name="expiry" maxLength="5" placeholder="MM/YY" required />
                  </div>
                  <div className="payment-container">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <button type="button" id="send-otp-btn" onClick={sendOtp}>Send OTP</button>
                    </div>
                    <div className="form-group">
                      <label htmlFor="otp">Enter OTP</label>
                      <input type="text" id="otp" name="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <button type="button" id="verify-otp-btn" onClick={verifyOtp}>Verify OTP</button>
                    </div>
                  </div>
                  <div id="payment-section" style={{ display: paymentSection ? 'block' : 'none' }}>
                    <h3>Payment Details</h3>
                    <button type="submit">Pay Now</button>
                  </div>
                </form>
              </div>
              <div className="payment-option upi-option">
                <h3><i className="fas fa-university"></i> Pay via UPI</h3>
                <form id="upi-form" onSubmit={handleUpiSubmit}>
                  <div className="form-group">
                    <label htmlFor="upi-id">Enter UPI ID</label>
                    <input type="text" id="upi-id" name="upi-id" placeholder="example@upi" required />
                  </div>
                  <button type="submit" className="btn">Pay with UPI</button>
                </form>
              </div>
              <div className="payment-option razorpay-option">
                <h3><i className="fas fa-credit-card"></i> Pay with Razorpay</h3>
                <button id="razorpay-button" className="btn">Pay Now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="customer-care">
          <div className="container">
            <h2>Need Help?</h2>
            <p>Our support team is here to assist you. If you have any issues or queries, feel free to contact us.</p>
            <a href="contact-us.html" className="btn">Contact Customer Care</a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-links">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <p>&copy; 2023 Business Payment Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Payment;