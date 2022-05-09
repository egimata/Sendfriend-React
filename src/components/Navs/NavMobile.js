import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css";
import { Link } from 'react-router-dom';
import { hideOverlay, showOverlay } from '../../Helpers';

function NavMobile() {
    const altimg = "SendFriend";
    // const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
    
    const closeMobileMenu = () => {
      hideOverlay ('mobile-menu', 'animate-disappear');
    }
    const openMobileMenu = () => {
      showOverlay ('mobile-menu', 'animate-appear')
    }
    const openPopupOverlay = () => {
      showOverlay ('frame-6', 'animate-appear')
    }
    return (
    <div class="header-qujsfd">
        <a href="#!" onClick={openMobileMenu} >
          <div class="hamburger-smneFN">
            <img alt={altimg} class="vector-16-y8AOCp" src="img/vector-16-1@2x.svg" />
            <img alt={altimg} class="vector-17-y8AOCp" src="img/vector-16-1@2x.svg" /> 
            <img alt={altimg} class="vector-18-y8AOCp" src="img/vector-16-1@2x.svg" />
          </div>
        </a>
        <div id="overlay-mobile-menu" class="overlay" style={{minHeight: '5881px'}}>
                 <div class="container-center-horizontal">
                     <div class="mobile-menu screen">
                         <a href="#!" onClick={closeMobileMenu}>
                            <div class="close-jxzQz0">
                            <img alt={altimg} class="line-17-6rcJjs" src="img/line-17-1@2x.svg" />
                            <img alt={altimg} class="line-18-6rcJjs" src="img/line-18-1@2x.svg" />
                            </div>
                        </a>
                        <div>
                        <HashLink smooth to="/#platform-section-mobile" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                            <div class="platform-jxzQz0 montserrat-bold-white-8px">Platform</div>
                        </HashLink></div>
                        <HashLink smooth to="/#partners-mobile" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                            <div class="partnership-jxzQz0 montserrat-bold-white-8px">Partnership</div>
                        </HashLink>
                        <div class="dropdown company-jxzQz0">
                            <div class="dropbtn  montserrat-bold-white-8px">Company &#42780;</div>
                            <div class="dropdown-content">
                            <Link onClick={closeMobileMenu} to="/about-us">About Us</Link>
                            <Link onClick={closeMobileMenu} to="/leadership">
                            Leadership</Link>
                            <Link onClick={closeMobileMenu} to="/careers">Careers</Link>
                            </div>
                        </div>
                        
                        <Link class="contact-jxzQz0 montserrat-bold-white-8px" onClick={closeMobileMenu} to="/contact-us" style={{ textDecoration: 'none' }}>
                            <div > 
                            Contact
                            </div>
                        </Link>
                        
                            <div class="login-button-mobile-jxzQz0">
                            <a href="#!" onClick={openPopupOverlay}>
                            <div class="group-123-tg1hNG">
                                <div class="rectangle-100-UNPDgx smart-layers-pointers"></div>
                                <div class="login-UNPDgx montserrat-bold-white-8px">LOGIN</div>
                            </div>
                            </a>
                            </div>
                        
                      </div>
                    </div>
                    </div>
                    <Link onClick={closeMobileMenu} to="/">
                      <div class="logo-smneFN">
                        <div class="frame-131-oxZ3QX"><img alt={altimg} class="logo_menu-2-ILoGHQ" src="img/logo-menu-2@2x.png" /></div>
                      </div>
                    </Link>
      </div>
    )
}
export default NavMobile;