import React from 'react'
import './Navbar.css'
import  logo from '../../src/assets/logo.png'
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        <div className="container">
            <div className="loGo">
                <img src={logo} alt="" className='logo'/>
                <h3 className='logoContent'>Learning Exp.</h3>
            </div>
            
            <div className="navbar">
      <div className="navbarItems">
        <NavLink exact to="/" className='alink' activeClassName='activeLink'>Home</NavLink>
        <NavLink to="/componentTwo" className='alink' activeClassName='activeLink'>Services Us</NavLink>
        <NavLink to="/componentThree" className='alink' activeClassName='activeLink'>Why Us</NavLink>
        <NavLink to="/componentFour" className='alink' activeClassName='activeLink'>Our Goals</NavLink>
      </div>
      <button className='btn'>Contact Us</button>
    </div>
        </div>
    </div>
  )
}

export default Navbar
