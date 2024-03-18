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
                backgroundColor:"#f1356d"
            }}>Signup</a>
            <a href="" style={{
                color:'white',
                backgroundColor:"#f1356d"
            }}>Login</a>
        </div>
    </nav>
  )
}
