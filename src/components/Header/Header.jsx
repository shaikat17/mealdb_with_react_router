import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between p-10'>
            <div className="logo"><h1>Recipe Project</h1></div>
            <div className="link no-underline">
                <Link to='/about' className='mr-5'>About Us</Link>
                <Link to='/contact' className='mr-5'>Contact Us</Link>
                <Link to='/search' className='mr-5'>Search</Link>
            </div>
        </nav>
    );
};

export default Header;