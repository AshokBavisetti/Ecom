import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <ul>
       <Link to="/"><li>Login</li></Link> 
             <Link to="/Home"><li>Home</li></Link> 
            <Link to="/cart"><li>cart</li></Link> 
            <Link to="/Logout"><li>Logout</li></Link> 



    </ul>
  )
}

export default Navbar