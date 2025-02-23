// src/ESP8266.js
import React from 'react';
import './ESP8266series.css';
import logo from './logo.png';  // Make sure you have the logo image in the appropriate directory.
import cartIcon from './cart-icon.png';  // Make sure you have the cart icon image in the appropriate directory.
import espWroom02d from './ESP-WROOM-02D_result.png';  // Ensure this image exists in the correct directory.
import espWroom02u from './esp-wroom-02u.jpg';  // Ensure this image exists in the correct directory.
import espWroom02 from './esp-wroom-02.jpg';  // Ensure this image exists in the correct directory.
import esp32Wroom32 from './ESP32-WROOM-32E_result.png';  // Ensure this image exists in the correct directory.
import esp32Wrover from './esp32-wrover.jpg';  // Ensure this image exists in the correct directory.
import esp32Cam from './esp32-cam.jpg';  // Ensure this image exists in the correct directory.

const ESP8266 = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <div className="container flex justify-between items-center">
                    <a href="index.html" className="logo">
                        <img src={logo} alt="ESP8266 E-Commerce Logo" />
                    </a>
                    <nav>
                        <ul className="flex">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="ContactUs.html">Contact</a></li>
                            <li><a href="cart.html">Cart</a></li>
                        </ul>
                    </nav>
                    <div className="cart-icon">
                        <span className="cart-count">3</span> {/* Cart count for demo purposes */}
                        <img src={cartIcon} alt="Cart Icon" />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>ESP8266 Series Products</h1>
                    <p>Choose the best ESP8266-based module for your IoT project!</p>
                    <a href="#products" className="btn">Shop Now</a>
                </div>
            </section>

            {/* ESP8266 Product Section */}
            <section id="products">
                <div className="services-list">
                    {/* Product 1: ESP-WROOM-02D */}
                    <div className="service-card">
                        <img src={espWroom02d} alt="ESP-WROOM-02D" />
                        <h3>ESP-WROOM-02D</h3>
                        <p>ESP-WROOM-02D is an ESP8266EX-based module with optimized RF performance, ideal for various IoT applications.</p>
                        <ul>
                            <li><strong>Chip Embedded:</strong> ESP8266EX</li>
                            <li><strong>Pins:</strong> 18</li>
                            <li><strong>Flash (MB):</strong> 2MB, 4MB</li>
                            <li><strong>Antenna:</strong> PCB Antenna</li>
                            <li><strong>Footprint:</strong> 2D</li>
                        </ul>
                        <a href="esp-wroom-02d.pdf" className="btn">View PDF</a>
                        <button className="btn">Add to Cart</button>
                    </div>

                    {/* Product 2: ESP-WROOM-02U */}
                    <div className="service-card">
                        <img src={espWroom02u} alt="ESP-WROOM-02U" />
                        <h3>ESP-WROOM-02U</h3>
                        <p>ESP-WROOM-02U integrates a U.FL connector for better antenna connection. It offers optimized RF performance.</p>
                        <ul>
                            <li><strong>Chip Embedded:</strong> ESP8266EX</li>
                            <li><strong>Pins:</strong> 18</li>
                            <li><strong>Flash (MB):</strong> 2MB, 4MB</li>
                            <li><strong>Antenna:</strong> IPEX Antenna Connector</li>
                            <li><strong>Footprint:</strong> 2D</li>
                        </ul>
                        <a href="esp-wroom-02u.pdf" className="btn">View PDF</a>
                        <button className="btn">Add to Cart</button>
                    </div>

                    {/* Product 3: ESP-WROOM-02 */}
                    <div className="service-card">
                        <img src={espWroom02} alt="ESP-WROOM-02" />
                        <h3>ESP-WROOM-02</h3>
                        <p>ESP-WROOM-02 offers a compact design perfect for space-constrained IoT applications.</p>
                        <ul>
                            <li><strong>Chip Embedded:</strong> ESP8266EX</li>
                            <li><strong>Pins:</strong> 18</li>
                            <li><strong>Flash (MB):</strong> 2MB, 4MB</li>
                            <li><strong>Antenna:</strong> PCB Antenna</li>
                            <li><strong>Footprint:</strong> 2D</li>
                        </ul>
                        <a href="esp-wroom-02.pdf" className="btn">View PDF</a>
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* ESP32 SERIES Section */}
            <section id="esp32-series-header" className="esp32-series-header">
                <div className="container">
                    <h2>ESP32 SERIES</h2>
                    <p>Explore the next-generation ESP32 modules with more power, enhanced Wi-Fi & Bluetooth features for advanced IoT projects.</p>
                </div>
            </section>

            {/* ESP32 Product Section */}
            <section id="esp32-products">
                <div className="services-list">
                    {/* Product 1: ESP32-WROOM-32 */}
                    <div className="service-card">
                        <img src={esp32Wroom32} alt="ESP32-WROOM-32" />
                        <h3>ESP32-WROOM-32</h3>
                        <p>The ESP32-WROOM-32 is a powerful Wi-Fi + Bluetooth SoC for IoT applications, offering dual-core processing.</p>
                        <ul>
                            <li><strong>Chip Embedded:</strong> ESP32</li>
                            <li><strong>Pins:</strong> 38</li>
                            <li><strong>Flash (MB):</strong> 4MB</li>
                            <li><strong>Antenna:</strong> PCB Antenna</li>
                            <li><strong>Footprint:</strong> 2D</li>
                        </ul>
                        <a href="esp32-wroom-32.pdf" className="btn">View PDF</a>
                        <button className="btn">Add to Cart</button>
                    </div>

                    {/* Product 2: ESP32-WROVER */}
                    <div className="service-card">
                        <img src={esp32Wrover} alt="ESP32-WROVER" />
                        <h3>ESP32-WROVER</h3>
                        <p>ESP32-WROVER is ideal for high-performance applications, integrating more memory and an external antenna connector.</p>
                        <ul>
                            <li><strong>Chip Embedded:</strong> ESP32</li>
                            <li><strong>Pins:</strong> 38</li>
                            <li><strong>Flash (MB):</strong> 4MB, 8MB</li>
                            <li><strong>Antenna:</strong> IPEX Antenna Connector</li>
                            <li><strong>Footprint:</strong> 2D</li>
                        </ul>
                        <a href="esp32-wrover.pdf" className="btn">View PDF</a>
                        <button className="btn">Add to Cart</button>
                    </div>

                    {/* Product 3: ESP32-CAM */}
                    <div className="service-card">
                        <img src={esp32Cam} alt="ESP32-CAM" />
                        <h3>ESP32-CAM</h3>
                        <p>The ESP32-CAM features a built-in camera and offers both Wi-Fi and Bluetooth capabilities for versatile IoT projects.</p>
                        <ul>
                            <li><strong>Chip Embedded:</strong> ESP32</li>
                            <li><strong>Pins:</strong> 38</li>
                            <li><strong>Flash (MB):</strong> 4MB</li>
                            <li><strong>Antenna:</strong> PCB Antenna</li>
                            <li><strong>Footprint:</strong> 2D</li>
                        </ul>
                        <a href="esp32-cam.pdf" className="btn">View PDF</a>
                        <button className="btn">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <div className="container">
                    <h2>Ready to Build Your IoT Project?</h2>
                    <p>Get your ESP8266 and ESP32 modules now and start building incredible projects with seamless Wi-Fi and Bluetooth connectivity.</p>
                    <a href="products.html" className="btn">Browse Products</a>
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <div className="container">
                    <p>&copy; 2025 ESP8266 E-Commerce Store. All Rights Reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default ESP8266;