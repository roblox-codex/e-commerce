// src/Cart.js
import React, { useState, useEffect } from 'react';
import './cart.css';
import logo from './logo.png';
import cartIcon from './cart-icon.svg';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        let tempTotal = 0;
        let tempCartCount = 0;

        storedCart.forEach(item => {
            tempTotal += item.price * item.quantity;
            tempCartCount += item.quantity;
        });

        setCart(storedCart);
        setTotal(tempTotal.toFixed(2));
        setCartCount(tempCartCount);
    };

    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = parseInt(quantity, 10);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
        loadCart();
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
        loadCart();
    };

    const proceedToCheckout = () => {
        window.location.href = "clientinfo.html";
    };

    const createInvoice = () => {
        let invoiceHTML = '<h3>Invoice</h3><ul>';
        cart.forEach(item => {
            invoiceHTML += `<li>${item.name} - Quantity: ${item.quantity}, Price: $${item.price}, Total: $${(item.price * item.quantity).toFixed(2)}</li>`;
            if (item.isBattery) {
                invoiceHTML += `<li>Battery Value: ${item.batteryValue} mAh</li>`;
            }
        });
        invoiceHTML += `</ul><p>Total Amount: $${total}</p>`;

        document.getElementById('invoice').innerHTML = invoiceHTML;
        document.getElementById('download-invoice').style.display = 'inline-block';
    };

    const downloadInvoice = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        let y = 30;
        cart.forEach(item => {
            doc.text(`${item.name} - Quantity: ${item.quantity}, Price: $${item.price}, Total: $${(item.price * item.quantity).toFixed(2)}`, 20, y);
            y += 10;
            if (item.isBattery) {
                doc.text(`Battery Value: ${item.batteryValue} mAh`, 20, y);
                y += 10;
            }
        });
        doc.text(`Total Amount: $${total}`, 20, y + 10);
        doc.save('invoice.pdf');
    };

    return (
        <div className="App">
            <header>
                <div className="container">
                    <a href="/" className="logo"><img src={logo} alt="Trideisnyst Manufyr Logo" /></a>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/cart" className="cart-icon">
                                <img src={cartIcon} alt="Cart" />
                                <span className="cart-count">{cartCount}</span>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="cart-section">
                <div className="container">
                    <h2>Your Shopping Cart</h2>
                    <div id="cart-items">
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item, index) => (
                                <div className="cart-item" key={index}>
                                    <img src={`/path-to-product-image`} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    <p>Quantity: <input type="number" value={item.quantity} min="1" onChange={(e) => updateQuantity(index, e.target.value)} className="quantity-input" /></p>
                                    <p>Price: ${item.price}</p>
                                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    {item.isBattery && <p>Battery Value: {item.batteryValue} mAh</p>} {/* Show battery value if product is a battery */}
                                    <button onClick={() => removeFromCart(index)} className="btn remove-btn">Remove</button>
                                </div>
                            ))
                        )}
                    </div>

                    <button onClick={createInvoice}>Purchase</button>
                    <button id="download-invoice" style={{ display: 'none' }} onClick={downloadInvoice}>Download Invoice</button>
                    <div id="invoice"></div>

                    <div className="cart-summary">
                        <h3>Total: ${total}</h3>
                        <button id="order-now" onClick={proceedToCheckout} className="btn" style={{ display: cart.length === 0 ? 'none' : 'inline-block' }}>Order Now</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2023 Trideisnyst Manufyr. All Rights Reserved.</p>
                    <ul>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Sitemap</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Cart;