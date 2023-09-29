import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Home from './Component/Homepage/Home';
import Cart from './Component/cart/cart';
import Logout from './Component/Logout/Logout';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
            <Route path="/Logout" element={<Logout/>} />


    </Routes>
  </Router>
    </div>
  );
}

export default App;
