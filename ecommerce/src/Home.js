// src/Home.js
import React, { useEffect } from 'react';
import './Home.css';
import logo from './logo.png';  // Ensure the logo image exists.
import cartIcon from './cart-icon.svg';  // Ensure the cart icon image exists.
import manImg from './man-320276.png'; // Ensure the image exists
import tinCanImg from './tin-can-3984776.png'; // Ensure the image exists
import productImg from './man-320276.jpg'; // Ensure the image exists
import * as THREE from 'three';

const Home = () => {
    useEffect(() => {
        // Initialize 3D Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('three-d-canvas').appendChild(renderer.domElement);

        // Add a 3D object (PCB or Product Example)
        const geometry = new THREE.BoxGeometry(1, 0.1, 1);  // Thin box simulating PCB
        const material = new THREE.MeshPhongMaterial({ color: 0x333333, flatShading: true });
        const pcb = new THREE.Mesh(geometry, material);
        scene.add(pcb);

        // Add light
        const light = new THREE.AmbientLight(0x404040, 2); // Ambient light
        scene.add(light);

        // Adjust camera
        camera.position.z = 2;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            pcb.rotation.x += 0.01;
            pcb.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Hide Scroll Indicator after scroll
        window.addEventListener('scroll', () => {
            const scrollDownElement = document.querySelector('.scroll-down');
            if (window.scrollY > 100) {
                scrollDownElement.style.opacity = '0';
            } else {
                scrollDownElement.style.opacity = '1';
            }
        });
    }, []);

    return (
        <div>
            <header>
                <div className="container">
                    <a href="#" className="logo"><img src={logo} alt="Trideisnyst Manufyr Logo" /></a>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="cart.html" className="cart-icon">
                                <img src={cartIcon} alt="Cart" />
                                <span className="cart-count">3</span>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="parallax-section">
                <h2>"Who We Are"</h2>
                <p>At <span className="highlight">Trideisnyst Manufyr</span>, we specialize in providing tailored <span className="highlight">3D design services</span>, offering hands-on courses in <span className="highlight">3D design</span> and <span className="highlight">robotics</span>, and supplying high-quality <span className="highlight">robotics components</span> for hobbyists, students, and professionals. Whether you are an entrepreneur, a student, or a maker, we are here to support you every step of the way with innovative solutions and comprehensive educational resources.</p>
            </section>

            <div className="feature-icons">
                <div className="icon">
                    <i className="fas fa-cogs"></i>
                    <h3>Custom 3D Design</h3>
                    <p>Cutting-edge 3D design tailored to your needs.</p>
                </div>
                <div className="icon">
                    <i className="fas fa-microchip"></i>
                    <h3>PCB Manufacturing</h3>
                    <p>Advanced PCB manufacturing for modern devices.</p>
                </div>
                <div className="icon">
                    <i className="fas fa-building"></i>
                    <h3>Architectural Design</h3>
                    <p>Innovative 3D models for construction projects.</p>
                </div>
            </div>

            <section className="hero-text">
                <h1 className="slide-in">Innovative Solutions for Modern Designs</h1>
                <p className="fade-in">Your one-stop shop for 3D design, PCB manufacturing, and architecture models.</p>
            </section>

            <div className="hover-effect-container">
                <img src={manImg} alt="3D Design" className="hover-effect" />
            </div>
            <div className="hover1-effect-container">
                <img src={tinCanImg} alt="3D Design" className="hover-effect" />
            </div>

            <section className="product-cards">
                <div className="product-card">
                    <div className="product-front">
                        <img src={productImg} alt="Premium 3D Printer" />
                        <h3>Premium 3D Printer</h3>
                        <p>$299.99</p>
                    </div>
                    <div className="product-back">
                        <p>High-quality 3D printer for professional use.</p>
                        <a href="products.html" className="btn">Buy Now</a>
                    </div>
                </div>

                {/* More product cards can be added here */}
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Start Your Project Today</h2>
                    <p>Let us help you turn your ideas into reality with our advanced design and manufacturing services.</p>
                    <a href="services.html" className="btn">Get Started</a>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2023 Trideisnyst Manufyr. All Rights Reserved.</p>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                        <li><a href="sitemap.html">Sitemap</a></li>
                    </ul>
                </div>
            </footer>

            <div id="three-d-canvas"></div>
        </div>
    );
};

export default Home;