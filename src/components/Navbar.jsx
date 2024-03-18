import React from 'react';
import logo from '../images/logo.jpg';

export const Navbar =() => {
  return (
    <nav className='navbar'>
        <div className='logoSet'>
            <h1 className='headText'>MickeyTail</h1>
            <img src={logo} className='logo'></img>
        </div>
        <div className="links">
            <a href="">Home</a>
            <a href="" style={{
                color:'white',
                backgroundColor:"#f1356d"
            }}>Signup</a>
        </div>
        
    </nav>
  )
}
