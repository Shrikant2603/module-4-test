import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <span className="scart">
                Shopping Cart
            </span>
            <div className="direct">
                <Link style={{ textDecoration: 'none', color:"white" }} to="/">Home Page</Link>
                <Link style={{ textDecoration: 'none', color:"white" }} to="/cart">Cart Page</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar