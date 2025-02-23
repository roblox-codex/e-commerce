// src/App.js
import React from 'react';
import './App.css';
import './SignIn.css'; 
import './SignUp.css'; 

import Index from './Index';
import Login from './Login';
import Payment from './Payment';
import ProductGenerator from './ProductGenerator';
import Products from './Products';
import Profile from './Profile';
import Services from './Services';
import SignIn from './SignIn'; 
import SignUp from './SignUp'; 

function App() {
  return (
    <div className="App">
      <Index />
      <Login />
      <Payment />
      <ProductGenerator />
      <Products />
      <Profile />
      <Services />
      <SignIn /> {/* Add the SignIn component */}
      <SignUp /> {/* Add the SignUp component */}
    </div>
  );
}

export default App;