// src/Products.js
import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [quantity, setQuantity] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('search') || '';
        setSearchQuery(query.toLowerCase());
        updateCartCount();
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }, [cart]);

    const addToCart = (productId, productName, price) => {
        const qty = quantity[productId] || 1;
        const newCart = [...cart];
        const existingProductIndex = newCart.findIndex(item => item.productId === productId);

        if (existingProductIndex > -1) {
            newCart[existingProductIndex].quantity += qty;
        } else {
            newCart.push({ productId, name: productName, price, quantity: qty });
        }

        setCart(newCart);
    };

    const updateCartCount = () => {
        document.querySelector('.cart-count').textContent = cart.length;
    };

    const handleQuantityChange = (productId, value) => {
        setQuantity({ ...quantity, [productId]: parseInt(value) });
    };

    const products = [
        {
            id: 1,
            img: 'arduino-mega-2560_result.png',
            title: 'Arduino Mega 2560',
            price: 24.99,
            description: 'Perfect for beginners and advanced users alike. Take your DIY projects to the next level with the Arduino Mega 2560’s versatility and simplicity.',
            details: 'Best For: Larger, More complex projects, Processor: ATmega2560, Clock Speed: 16 MHz, Flash Memory: 256 KB, RAM: 8 KB, Digital I/O Pins: 54 (15 PWM), Analog Pins: 16'
        },
        {
            id: 2,
            img: 'Arduino-Nano.png',
            title: 'Arduino Nano',
            price: 24.99,
            description: 'The Arduino Nano is an essential tool for anyone looking to explore the world of electronics and embedded systems.',
            details: 'Best For: Compact projects and prototyping, Processor: ATmega328P, Clock Speed: 16 MHz, Flash Memory: 32 KB, RAM: 2 KB, Digital I/O Pins: 14 (6 PWM), Analog Pins: 8'
        },
        {
            id: 3,
            img: 'Arduino-Due_result.png',
            title: 'Arduino Due',
            price: 24.99,
            description: 'The Arduino Due is the ultimate board for high-performance, complex projects.',
            details: 'Best For: Advanced projects requiring more computational power, Processor: ARM Cortex-M3, Clock Speed: 84 MHz, Flash Memory: 512 KB, RAM: 96 KB, Digital I/O Pins: 54 (12 PWM), Analog Pins: 12 (12-bit resolution)'
        },
        {
            id: 4,
            img: 'Raspberry-Pi-4-Model-B_result.png',
            title: 'Raspberry Pi 4 Model B',
            price: 2500.00,
            description: 'Powerful, versatile, and compact computing for demanding applications.',
            details: 'Enhanced Performance: Broadcom BCM2711 quad-core ARM Cortex-A72 processor running at 1.5GHz, Memory: 8GB of LPDDR4-3200 SDRAM'
        }
        // Other products can be added similarly
    ];

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery));

    return (
        <div>
            <header>
                <div className="container">
                    <a href="#" className="logo">
                        <img src="logo.png" alt="Trideisnyst Manufyr Logo" />
                    </a>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li> {/* Current page */}
                            <li><a href="services.html">Services</a></li>
                            <li><a href="ContactUs.html">Contact Us</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="cart.html" className="cart-icon">
                                <img src="cart-icon.svg" alt="Cart" />
                                <span className="cart-count">0</span>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="product-grid">
                <div className="container">
                    <h2>Our Premium Products - Perfect for Your Next Project</h2>
                    <p>Explore our collection of high-quality products designed for innovation, creativity, and success. Shop now and bring your ideas to life!</p>
                    <div className="grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id} data-product-id={product.id}>
                                <img src={product.img} alt={product.title} />
                                <h4>{product.title}</h4>
                                <p className="price">${product.price}</p>
                                <p className="description">{product.description}</p>
                                <p className="details">{product.details}</p>
                                <input type="number" id={`quantity${product.id}`} min="1" value={quantity[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, e.target.value)} />
                                <button className="add-to-cart" onClick={() => addToCart(product.id, product.title, product.price)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>&copy; 2023 Trideisnyst Manufyr. All Rights Reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Products;