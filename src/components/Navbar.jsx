import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

      let navbar = <ul className='menu'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
      <li><Link to='/login'>Log In</Link></li>
    </ul>
      if(localStorage.getItem('token') && localStorage.getItem('user')){
        navbar = <ul className='menu'>
        <li><Link to='/feed'>Home</Link></li>
        {/* <li><Link to='/logout' onClick={logmeout}>Logout</Link></li>
        <li><Link to="#" >Welcome back, {props.auth.user.username}</Link></li> */}
      </ul>
      }
      return (
        <nav className='head'>
          <div className='head-wrapper'>
            <a className='logo' href='/'><img src="http://127.0.0.1:8000/uploads/kolologo.png" alt='logo' /></a>
    
    
          </div>
          {navbar}
        </nav>
      )
}

export default Navbar
