import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const Footer = ({custom_class}) => {
    
    return (
        <>
        <div class={custom_class}>

            <div className="footer-container">
                <div className="footer-widget-wrap">
                    <div className="footer-row">
                        <div className="col-footer">
                            <div className="subscribe-section"> 
                                <div className="footer-row">
                                    <div className="col-6">
                                        <div class="to-learn-more-about-send-friend-1xViFa valign-text-middle montserrat-bold-white-32px">
                                            <span>
                                                <span class="span0-FBAgGT montserrat-bold-white-32px-2">To learn more about</span>
                                                <span class="span1-FBAgGT"> SendFriend</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="contact-us-1xViFa">
                                            <Link style={{color: 'transparent'}} to="/contact">
                                                <div class="rectangle-1-yTZA7h ">
                                                    <div class="contact-us-yTZA7h">CONTACT US</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <HashLink smooth to="/">
                                <div class="footer-logo"><img src="img/homepage/logo-menu-2-3@2x.png" /></div>
                            </HashLink>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="footer-title">COMPANY</h4>
                            <div className="widget-link">
                                <ul className="list-style">
                                    <li>
                                        <Link className="list-link" to="/history">
                                            History
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className="list-link" to="/leadership">
                                            Leadership
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className="list-link" to="/contact">
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="list-link" to="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                        <h4 className="footer-title">SUPPORT</h4>
                            <div className="widget-link">
                                <ul className="list-style">
                                    <li>
                                        <Link className="list-link" to="/privacy-policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className="list-link" to="/terms-of-use">
                                            Terms of Use/Agreement
                                        </Link>
                                    </li>
                                    <li >
                                        <Link className="list-link" to="/esign-policy">
                                            E-sign Policy
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link className="list-link" to="/file-complaint">
                                            File a Complaint
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-copyright-area border-top">
                <div className="footer-container">
                    <div className="footer-row align-items-center">
                        <div className="col-6">
                            <div class="x2021-send-friend-all-rights-reserved-bUVegb montserrat-medium-white-14px">
                                © 2022 SendFriend. All Rights Reserved <br /> <span className="montserrat-normal-white-13px">SendFriend is licensed as a money transmitter with the State of New Jersey's Department of Banking & Insurance, License No. L070801.</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="socials">
                            <ul className="list-style">
                                 <li >
                                    <a class="text-decoration-none" href="https://www.facebook.com/sendfriendinc/" target="_blank" rel="noreferrer"><div class="social-link montserrat-medium-white-14px">Facebook</div></a>
                                </li>
                                <span>|</span>
                                <li >
                                    <a class="text-decoration-none" href="https://twitter.com/sendfriendinc" target="_blank" rel="noreferrer"><div class="social-link montserrat-medium-white-14px">Twitter</div></a>
                                </li>
                                <span>|</span>
                                <li>
                                    <a class="text-decoration-none" href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer"><div class="social-link montserrat-medium-white-14px">LinkedIn</div></a>
                                </li>
                            </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img class="asset-1bg1-1-2-bUVegb" src="img/homepage/asset-1bg1-1-2-1@2x.png" />
        </div>
        
        </>
            
    );
}
export default Footer;