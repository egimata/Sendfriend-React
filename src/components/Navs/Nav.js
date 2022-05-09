import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css";
import { Link } from 'react-router-dom';
import Dropdown from '../common/Dropdown';
import { hideOverlay, showOverlay } from '../../Helpers';

function Nav() {
    const altimg = "SendFriend";
    const [click] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    // const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
    hideOverlay ('mobile-menu', 'animate-disappear');
    }
    // const openMobileMenu = () => {
    // showOverlay ('mobile-menu', 'animate-appear')
    // }
    const openPopupOverlay = () => {
    showOverlay ('frame-6', 'animate-appear')
    }

    const onMouseEnter = () => {
    if (window.innerWidth < 960) {
        setDropdown(false);
    } else {
        setDropdown(true);
    }
    };

    const onMouseLeave = () => {
    if (window.innerWidth < 960) {
        setDropdown(false);
    } else {
        setDropdown(false);
    }
    };
    return (
        <div class="header-zYNucu">
        <div class="top-header-num0gs">
        <a href="https://www.facebook.com/sendfriendinc/" target="_blank" rel="noreferrer">
            <img alt={altimg} class="facebook-icon-EMXBRh" src="img/homepage/facebook-icon@2x.png" /> 
        </a>
        <a href="https://twitter.com/sendfriendinc" target="_blank" rel="noreferrer">
            <img alt={altimg} class="twitter-icon-EMXBRh" src="img/homepage/twitter-icon@2x.png" />
        </a>
        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer">
            <img alt={altimg} class="linkedin-icon-EMXBRh" src="img/homepage/linkedin-icon@2x.svg" />
        </a>
        </div>
        <a href="#!" onClick={openPopupOverlay}>
            <div class="login-button-default-num0gs smart-layers-pointers">
                <div class="login-Aoc3Ls montserrat-bold-white-14px">LOGIN</div>
            </div>
        </a>

        <div class="menu-num0gs">
        
        
        <HashLink smooth to="/#platform-section"><div class="platform-kYUAzc montserrat-bold-white-14px">PLATFORM</div></HashLink>
        <HashLink smooth to="/#partners"><div class="partners-kYUAzc montserrat-bold-white-14px">PARTNERS</div></HashLink>

            <div class="company-dropdown-kYUAzc">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                <Link
                    to='#'
                    className='nav-links montserrat-bold-white-14px'
                    onClick={closeMobileMenu}
                >
                    COMPANY 
                </Link><i className='fa fa-angle-down fa-lg' />
                {dropdown && <Dropdown />}
                </li>
            </ul>
            </div>

        <Link to="/contact-us">
        <div class="contact-us-kYUAzc montserrat-bold-white-14px">CONTACT US</div>
        </Link>
        </div>
        <HashLink smooth to="/">
        <div class="logo-menu-num0gs"><img alt={altimg} class="logo_menu-2-a4JE9e" src="img/logo/logo-menu.png" /></div>
        </HashLink>
    </div>
    )
}
export default Nav;


