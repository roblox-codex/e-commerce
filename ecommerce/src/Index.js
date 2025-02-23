// src/Index.js
import React, { useEffect } from 'react';
import './Index.css';
import './3d.css'; // Ensuring the additional CSS file is linked
import logo from './logo.png';
import cartIcon from './cart-icon.svg';
import * as THREE from 'three';

const Index = () => {
    useEffect(() => {
        // Initialize 3D Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('3d-canvas').appendChild(renderer.domElement);

        // Add a 3D Cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00f7ff });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Navigation Handlers
        document.getElementById('login-button').onclick = () => {
            window.location.href = 'login.html';
        };
        document.getElementById('signup-button').onclick = () => {
            window.location.href = 'signup.html';
        };
        document.getElementById('profile-button').onclick = () => {
            window.location.href = 'profile.html';
        };
        document.querySelector('.product-section button').onclick = () => {
            window.location.href = 'products.html';
        };
        document.querySelector('.service-section button').onclick = () => {
            window.location.href = 'services.html';
        };
        document.querySelector('.course-section button').onclick = () => {
            window.location.href = 'courses.html';
        };

        document.getElementById('search-button').onclick = () => {
            const query = document.getElementById('search-bar').value.trim();
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            } else {
                window.location.href = 'products.html';
            }
        };
    }, []);

    return (
        <div className="container">
            <h1 className="company-name">Trideisnyst Manufyr</h1>

            {/* Search Bar */}
            <div className="search-container">
                <input type="text" id="search-bar" placeholder="Search for products..." />
                <button id="search-button" aria-label="Search for products">Search</button>
            </div>
            
            {/* See My Profile Button */}
            <div className="profile-button">
                <button id="profile-button" aria-label="Go to Profile">See My Profile</button>
            </div>

            {/* Login and Signup Buttons */}
            <div className="auth-buttons">
                <button id="login-button" aria-label="Login to your account">Login</button>
                <button id="signup-button" aria-label="Sign up for an account">Signup</button>
            </div>

            {/* 3D Canvas Section */}
            <div id="3d-canvas"></div>

            {/* Products Section */}
            <div className="section product-section">
                <h2>Our Products</h2>
                <p>Explore our wide range of high-quality products that suit your needs and preferences.</p>
                <button>Shop Now</button>
            </div>

            {/* Services Section */}
            <div className="section service-section">
                <h2>Our Services</h2>
                <p>Discover the premium services we offer to ensure your satisfaction and success.</p>
                <button>Learn More</button>
            </div>

            {/* Free Courses Section */}
            <div className="section course-section">
                <h2>Free Courses</h2>
                <p>Join our free courses to learn the latest trends and technologies in the industry.</p>
                <button>Start Learning</button>
            </div>
        </div>
    );
};

export default Index;