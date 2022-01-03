import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
    <>
    <div class="top-header-num0gs">
          <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
            <img class="facebook-icon-EMXBRh" src="img/homepage/facebook-icon@2x.png" /> 
          </a>
          <a href="https://twitter.com/sendfriendinc" target="_blank">
            <img class="twitter-icon-EMXBRh" src="img/homepage/twitter-icon@2x.png" />
          </a>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank">
            <img class="linkedin-icon-EMXBRh" src="img/homepage/linkedin-icon@2x.svg" />
          </a>
        </div>
        <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
          <div class="login-button-default-num0gs smart-layers-pointers">
            <div class="login-Aoc3Ls montserrat-bold-white-14px">LOGIN</div>
          </div>
        </a>
      <nav className='navbar'>
      <HashLink smooth to="#top">
        <div class="logo-menu-num0gs"><img class="logo_menu-2-a4JE9e" src="img/homepage/logo-menu-2-2@2x.png" /></div>
        </HashLink>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              PLATFORM
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              PARTNERS
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              COMPANY <i className='fa fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </li>
         
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;