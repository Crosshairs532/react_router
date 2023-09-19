/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                {/* <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>User</Link>
                <Link to='/posts'>Posts</Link> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink >
                <NavLink to='/contact'>Contact</NavLink >
                <NavLink to='/users'>User</NavLink >
                <NavLink to='/posts'>Posts</NavLink >
            </nav>
        </div>
    );
};

export default Header;