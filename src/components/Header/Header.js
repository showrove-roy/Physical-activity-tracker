import React from 'react';
import './Header.css';
import Logo from '../../logo.png';

const Header = () => {
    return (
        <div className='headerContainer'>
           <img src={Logo} alt="" />
        </div>
    );
};

export default Header;