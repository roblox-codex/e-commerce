// src/ProductGenerator.js
import React, { useState } from 'react';
import './ProductGenerator.css';

const ProductGenerator = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productDescription: '',
        productFeatures: ''
    });
    const [prototype, setPrototype] = useState(null);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPrototype(null);
        
        const response = await fetch('/generate-prototype', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: formData.productName, description: formData.productDescription, features: formData.productFeatures })
        });

        const data = await response.json();
        setPrototype(data.prototype);
        setLoading(false);
        setFeedback(true);
    };

    const finalizePrototype = () => {
        alert("Your prototype has been finalized and saved!");
        setPrototype(null);
        setFeedback(false);
        setFormData({
            productName: '',
            productDescription: '',
            productFeatures: ''
        });
    };

    const giveFeedback = (response) => {
        if (response === 'yes') {
            alert("Your prototype is ready!");
        } else {
            alert("Please refine your idea and try again.");
        }
    };

    return (
        <div>
            <header>
                <div className="container">
                    <h1>AI-Powered Product Design</h1>
                    <p>Bring your product idea to life with ease using our AI tool for fast, customized prototyping.</p>
                </div>
            </header>

            <section id="how-it-works">
                <div className="container">
                    <h2>How It Works</h2>
                    <ol>
                        <li>
                            <h3>Step 1: Share Your Idea</h3>
                            <p>Fill out the form with your product details, including type, features, design elements, and materials.</p>
                        </li>
                        <li>
                            <h3>Step 2: AI Prototype Generation</h3>
                            <p>Our AI tool will generate a 3D prototype of your product based on your inputs. You can interact with it in real time.</p>
                        </li>
                        <li>
                            <h3>Step 3: Review & Feedback</h3>
                            <p>Review the generated prototype. If it's not exactly what you imagined, provide feedback to make adjustments.</p>
                        </li>
                        <li>
                            <h3>Step 4: Finalize & Perfection</h3>
                            <p>Once you're happy with the design, we'll perfect it for you and make it production-ready.</p>
                        </li>
                        <li>
                            <h3>Step 5: Download & Store</h3>
                            <p>After finalizing, you'll receive the design files and we'll securely store your prototype for future revisions.</p>
                        </li>
                    </ol>
                </div>
            </section>

            <section id="customer-form">
                <div className="container">
                    <h2>Start Creating Your Prototype</h2>
                    <form id="product-idea-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" id="product-name" name="productName" required placeholder="What is the name of your product?" value={formData.productName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productDescription">Product Description</label>
                            <textarea id="product-description" name="productDescription" rows="4" required placeholder="Describe your product" value={formData.productDescription} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productFeatures">Product Features</label>
                            <textarea id="product-features" name="productFeatures" rows="4" required placeholder="List the features of your product" value={formData.productFeatures} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Generate Prototype</button>
                    </form>
                </div>
            </section>

            <section id="ai-prototype">
                <div className="container">
                    <h2>Your Prototype</h2>
                    {loading && <p>Generating prototype... Please wait.</p>}
                    {prototype && (
                        <div className="prototype-display">
                            <div id="prototype-output">{prototype}</div>
                            <button className="review-btn" onClick={() => giveFeedback('yes')}>Is this the product you imagined?</button>
                            <div id="feedback-section" style={{ display: feedback ? 'block' : 'none' }}>
                                <button className="feedback-btn" onClick={() => finalizePrototype()}>Yes, it’s perfect!</button>
                                <button className="feedback-btn" onClick={() => giveFeedback('no')}>Needs Adjustments</button>
                                <button className="feedback-btn" onClick={() => finalizePrototype()}>Start Over</button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section id="finalize-design">
                <div className="container">
                    <h2>Finalize Your Design</h2>
                    <p>Once you approve your prototype, we'll perfect the design and provide you with the finalized files.</p>
                </div>
            </section>

            <section id="pricing-plans">
                <div className="container">
                    <h2>Pricing & Plans</h2>
                    <ul>
                        <li><strong>Basic Plan:</strong> Simple prototypes with a few revisions.</li>
                        <li><strong>Premium Plan:</strong> Full customization and design tweaks.</li>
                        <li><strong>Enterprise Plan:</strong> Ongoing design assistance for large-scale projects.</li>
                    </ul>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <h2>Need Help?</h2>
                    <p>If you have any questions or need further assistance, don’t hesitate to reach out to our team.</p>
                    <p>Email: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2025 [Your Company Name]. All rights reserved.</p>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Follow Us</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default ProductGenerator;