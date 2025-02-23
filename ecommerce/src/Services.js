// src/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <a href="index.html" className="logo">
                        <img src="logo.png" alt="Trideisnyst Manufyr Logo" />
                    </a>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="services.html" className="active">Services</a></li>
                            <li><a href="ContactUs.html">Contact Us</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="cart.html" className="cart-icon">
                                <img src="cart-icon.svg" alt="Cart" />
                                <span className="cart-count">3</span>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero-section">
                <div className="container">
                    <h1>Transforming Ideas into 3D Reality</h1>
                    <p>Explore our expert 3D services tailored for school and college projects. From product prototypes to architectural designs, we bring your ideas to life with cutting-edge technology.</p>
                </div>
            </section>

            <section className="robotics-mechanics-section">
                <div className="robot">
                    <div className="head">
                        <div className="antenna"></div>
                    </div>
                    <div className="body">
                        <div className="left-arm"></div>
                        <div className="right-arm"></div>
                        <div className="legs">
                            <div className="left-leg"></div>
                            <div className="right-leg"></div>
                        </div>
                    </div>
                    <div className="gears">
                        <div className="gear-left"></div>
                        <div className="gear-right"></div>
                    </div>
                    <div className="robot-eye"></div>
                </div>

                <div className="mechanical-elements">
                    <div className="moving-gears"></div>
                    <div className="moving-gears"></div>
                    <div className="moving-gears"></div>
                </div>
            </section>

            <section className="services-list">
                <div className="service-card">
                    <img src="product-design.jpg" alt="Product Design" />
                    <h3>Product Design</h3>
                    <p>Create functional and visually appealing products, ideal for prototypes, custom items, and educational projects.</p>
                    <a href="ProductGenerator.html" className="btn">Get Started</a>
                </div>

                <div className="service-card">
                    <img src="civil-design.jpg" alt="Civil Design" />
                    <h3>Civil Design (Interior & Exterior)</h3>
                    <p>Design and visualize interior and exterior spaces with precision for construction and engineering projects.</p>
                    <a href="contact.html" className="btn">Learn More</a>
                </div>

                <div className="service-card">
                    <img src="architecture-design.jpg" alt="Architecture Design" />
                    <h3>Architecture Design</h3>
                    <p>Bring architectural ideas to life with highly detailed 3D models, perfect for construction and academic projects.</p>
                    <a href="contact.html" className="btn">Explore Service</a>
                </div>

                <div className="service-card">
                    <img src="mechanical-design.jpg" alt="Mechanical Design" />
                    <h3>Mechanical Design</h3>
                    <p>Design mechanical parts and systems using precise 3D models, ideal for engineering and student projects.</p>
                    <a href="contact.html" className="btn">Start Your Project</a>
                </div>

                <div className="service-card">
                    <img src="robotic-design.jpg" alt="Robotic Design" />
                    <h3>Robotic Design</h3>
                    <p>Design robotic systems from the ground up, creating fully functional 3D models for academic competitions and experiments.</p>
                    <a href="contact.html" className="btn">Contact Us</a>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Ready to Create Your 3D Model?</h2>
                    <p>Contact us today to get started on your next project. Whether it's for an academic submission or a prototype, we are here to assist with all your 3D design needs.</p>
                    <a href="contact.html" className="btn">Start Your Project</a>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Trideisnyst Manufyr. All Rights Reserved.</p>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Services;