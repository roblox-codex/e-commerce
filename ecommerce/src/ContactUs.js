// src/ContactUs.js
import React from 'react';
import './ContactUs.css';
import logo from './logo.png';  // Make sure you have this image in the appropriate directory.

const ContactUs = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="TriDesignyst Manufyr Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/products">Products</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="parallax-section contact-parallax">
                <h2>Contact Us</h2>
                <p>We are here to assist you with any questions or inquiries. Feel free to reach out!</p>
            </section>

            <section className="contact-form-section">
                <div className="container">
                    <h2>Get in Touch</h2>
                    <form className="contact-form" action="#" method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="tel" name="phone" placeholder="Your Contact Number" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h2>Our Location</h2>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7614527552636!2d-122.42067918468185!3d37.77825917975835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817e23cbb397%3A0xc6adf8f9111e34f4!2sTriDesignyst%20Manufyr!5e0!3m2!1sen!2sin!4v1619199989749!5m2!1sen!2sin"
                            width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2025 TriDesignyst Manufyr | All Rights Reserved</p>
                <ul>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms of Service</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default ContactUs;