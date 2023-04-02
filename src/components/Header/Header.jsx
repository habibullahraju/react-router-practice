import React from 'react';
// import { Link as ActiveLink } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='header'>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;