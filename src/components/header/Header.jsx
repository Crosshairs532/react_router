/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;