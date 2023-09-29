import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css';
const Navbar = () => {
  return (
    <ul>
       <Link to="/"><li>Login</li></Link> 
             <Link to="/Home"><li>Home</li></Link> 
            <Link to="/Cart"><li>Cart</li></Link> 
            <Link to="/Logout"><li>Logout</li></Link> 



    </ul>
  )
}

export default Navbar