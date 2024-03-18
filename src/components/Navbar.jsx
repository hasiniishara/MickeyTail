import React from 'react';
import logo from '../images/logo.jpg';

export const Navbar =() => {
  return (
    <nav className='navbar'>
            <img src={logo} className='logo'></img>
            <h1 className='headText'>MickeyTail</h1>
        <div className="links">
            <a href="">Home</a>
            <a href="" style={{
                color:'white',
                backgroundColor:"#ad2173",
                borderRadius: '25px'
            }}>Signup</a>
            <a href="" style={{
                color:'white',
                backgroundColor:"#ad2173",
                borderRadius: '25px'
            }}>Login</a>
        </div>
    </nav>
  )
}
