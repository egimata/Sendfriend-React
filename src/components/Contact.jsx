import React from "react";
import { HashLink } from 'react-router-hash-link';
import header_img from "../img/unsplash-q8u1ygbarqk@1x.png"
import green_bg from "../img/rectangle-107@2x.svg"
import facebook_icon from '../img/bx-bxl-facebook@2x.svg';
import twitter_icon from '../img/ant-design-twitter-outlined@2x.svg';
import linkedin_icon from '../img/vector-8@2x.svg';
import menu_bg from '../img/vector-9@1x.svg';
import arrow_company from '../img/vector-16@2x.svg';
import logo_title from '../img/logo-title@2x.svg';
import logo from '../img/original-logo@2x.svg';
import footer_line from '../img/line-1@1x.svg';
import send_button from '../img/send-button@2x.svg';
import footer_contact from '../img/contact-us-button-footer@2x.svg';
import bottom_asset from '../img/asset-1bg1-1-2@2x.png';
import svg1 from '../img/path-45@2x.svg';
import svg2 from '../img/ellipse-8@2x.svg';
import svg3 from '../img/path-46@2x.svg';
import svg4 from '../img/ellipse-9@2x.svg';
import svg5 from '../img/path-47@2x.svg';
import svg6 from '../img/path-48@2x.svg';
import svg7 from '../img/path-49@2x.svg';
import svg8 from '../img/path-50@2x.svg';
import './contact-us.css'


export const Contact = () => {
  return (
    <div>
        <input type="hidden" id="anPageName" name="page" value="contact-us" />
        <div class="container-center-horizontal">
        <div class="contact-us screen">
            <div class="rectangle-42-q2xQ3x"></div>
            <img class="rectangle-107-q2xQ3x" src={green_bg} />
            <img class="unsplashq8-u1-yg-ba-r-qk-q2xQ3x" src={header_img} />
            <div class="rectangle-87-q2xQ3x animate-enter"></div>
            <div class="top-header-q2xQ3x">
                <div class="rectangle-97-64rcff"></div>
                <div class="bxbxl-facebook-64rcff">
                    <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
                        <img class="vector-Hyky9U" src={facebook_icon} />
                    </a>
                </div>
                <a href="https://twitter.com/sendfriendinc" target="_blank">
                    <div class="ant-designtwitter-outlined-64rcff">
                        <img class="vector-molF0M" src={twitter_icon} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/company/sendfriend/" target="_blank">
                    <img class="vector-64rcff" src={linkedin_icon} />
                </a>
            </div>
            <div class="navbar-q2xQ3x">
                <img class="vector-PUJjp0" src={menu_bg} />

                <a href="javascript:ShowOverlay('dropdown-menu', 'animate-appear');">
                    <div class="company-dropdown-PUJjp0">
                        <img class="vector-BlwT8x" src={arrow_company} />
                        <div class="company-BlwT8x montserrat-bold-white-14px">COMPANY</div>
                    </div>
                </a>
                
                <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
                    <div class="login-button-default-PUJjp0 smart-layers-pointers">
                        <div class="rectangle-100-gay3xq smart-layers-pointers border-5px-caribbean-green"></div>
                        <div class="login-gay3xq montserrat-bold-white-14px">LOGIN</div>
                    </div>
                </a>

                <img class="original-logo-PUJjp0" src={logo} />
                <img class="logo-title-PUJjp0" src={logo_title} />
                <HashLink smooth to="/#platform-section">
                <div class="platform-PUJjp0 montserrat-bold-white-14px">PLATFORM</div>
            </HashLink>;
            <HashLink smooth to="/#partnerships">
            <div class="partners-PUJjp0 montserrat-bold-white-14px">PARTNERS</div>
            </HashLink>;
                
                <a style={{color: '#000000'}} href="/#/contact">
                    <div class="contact-us-PUJjp0 montserrat-bold-white-14px">CONTACT US</div>
                </a>
            </div>
            <div class="header-text-q2xQ3x animate-enter1" show-on-scroll>
                <div class="contact-us-su2A3v">
                    <span class="span0-xxjJkh">Contact </span><span class="span1-xxjJkh">Us</span>
                </div>
                <div class="we-are-cheaper-faste-su2A3v montserrat-semi-bold-white-24px">
                    We are cheaper, faster, more reliable and secure.
            </div>
            <div class="send-friend-su2A3v montserrat-bold-caribbean-green-24px">SendFriend</div>
            </div>
            <div class="have-a-question-need-q2xQ3x montserrat-bold-white-32px">
            <span class="span0-ZYlUMA montserrat-bold-oxford-blue-32px">Have a question? </span
            ><span class="span1-ZYlUMA montserrat-bold-white-32px-2">Need help?</span
            ><span class="span2-ZYlUMA montserrat-bold-oxford-blue-32px"> Don&#39;t hesitate, drop us a line</span>
            </div>           
            
            <form action="https://formspree.io/f/xrgjgkdo" method="POST" >


                <div class="name-form-q2xQ3x">
                <div class="rectangle-65-as6hgS border-1px-mist-gray"></div>
                <input
                    class="your-name-as6hgS montserrat-normal-quick-silver-16px"
                    name="name"
                    placeholder="Your Name*"
                    type="text"
                    required
                />
                </div>
    
                <div class="name-text-q2xQ3x">
                <div class="please-enter-your-real-name-4MxKvx montserrat-light-white-14px">Please enter your real name:</div>
                <div class="your-name-4MxKvx montserrat-medium-white-16px">Your Name:</div>
                </div>
                
                <div class="email-form-q2xQ3x">
                <div class="rectangle-66-rOfp8x border-1px-mist-gray"></div>
                <input
                    class="your-email-address-rOfp8x montserrat-normal-quick-silver-16px"
                    type="email" name="_replyto"
                    placeholder="Your Email Address*"
                    required
                />
                </div>
                <div class="email-text-q2xQ3x">
                <div class="please-carefully-che-Re3uw6 montserrat-light-white-14px">
                    Please carefully check your email address for accuracy
                </div>
                    <div class="your-email-address-Re3uw6 montserrat-medium-white-16px">Your Email Address:</div>
                </div>
                <div class="company-form-q2xQ3x">
                <div class="rectangle-68-8JjHSV border-1px-mist-gray"></div>
                <input
                    class="company-8JjHSV montserrat-normal-quick-silver-16px"
                    name="company"
                    placeholder="Company"
                    type="text"
                />
                </div>
                <div class="your-company-q2xQ3x montserrat-medium-white-16px">Your Company</div>
                <div class="mobile-form-q2xQ3x">
                <div class="rectangle-69-yJf8Ne border-1px-mist-gray"></div>
                <input
                    class="mobile-yJf8Ne montserrat-normal-quick-silver-16px"
                    name="mobile"
                    placeholder="Mobile"
                    type="number"
                />
                </div>
                <div class="your-mobile-nr-q2xQ3x montserrat-medium-white-16px">Your Mobile Nr.</div>
                <div class="message-form-q2xQ3x">
                <div class="rectangle-67-Sv04Lu border-1px-mist-gray"></div>
                <textarea
                    class="i-have-a-question-about-Sv04Lu montserrat-normal-quick-silver-16px"
                    name="message"
                    placeholder="I have a question about...:"
                    type="text"
                    required
                ></textarea>
                </div>
                <div class="message-text-q2xQ3x">
                <div class="please-carefully-che-Z617ya montserrat-light-white-14px">
                    Please carefully check your email address for accuracy
                </div>
                <div class="explain-your-question-in-details-Z617ya montserrat-medium-white-16px">
                    Explain your question in details:
                </div>
                </div>
                <button type="submit" class="send-button-q2xQ3x smart-layers-pointers"  >
                    <div class="contact-us-xNdJvB">SEND</div>
                </button>
            </form>
            <div class="footer-q2xQ3x">
                <div class="rectangle-89-FjfUj9"></div>
                    <div class="x2021-send-friend-all-rights-reserved-FjfUj9 montserrat-medium-white-14px">
                        © 2021 SendFriend. All Rights Reserved
                    </div>
                    {/* <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"><div class="linked-in-bUVegb montserrat-medium-white-14px">| LinkedIn</div> </a>
                        <a href="https://twitter.com/sendfriendinc" target="_blank">
                        <div class="twitter-bUVegb montserrat-medium-white-14px">Twitter</div> </a>
                        <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
                        <div class="facebook-bUVegb montserrat-medium-white-14px">Facebook</div> 
                        </a> */}
                    <div class="facebook-twitter-linked-in-FjfUj9 montserrat-medium-white-14px">
                        Facebook | Twitter | LinkedIn
                    </div>
            <div class="rectangle-40-FjfUj9"></div>
            <div class="to-learn-more-about-send-friend-FjfUj9 montserrat-bold-white-32px">
                <span class="span0-Ao0NjO montserrat-bold-white-32px-2">To learn more about</span
                ><span class="span1-Ao0NjO montserrat-bold-caribbean-green-32px"> SendFriend</span>
            </div>
            <div class="group-45-FjfUj9">

                <img class="path-45-3cxTM6" src={svg1} />
                <img class="ellipse-8-3cxTM6" src={svg2} />
                <img class="path-46-3cxTM6" src={svg3} />
                <img class="ellipse-9-3cxTM6" src={svg4}/>
                <img class="path-47-3cxTM6" src={svg5}/>
                <img class="path-48-3cxTM6" src={svg6} />
                <img class="path-49-3cxTM6" src={svg7} />
                <img class="path-50-3cxTM6" src={svg8} />
            </div>
            <img class="line-1-FjfUj9" src={footer_line} />
            <img class="asset-1bg1-1-2-FjfUj9" src={bottom_asset} />
            <div class="friend-FjfUj9">
                <img class="vector-RzPxPp" src="img/vector-22@2x.svg" />
                <img class="vector-uFUx19" src="img/vector-33@2x.svg" />
                <img class="vector-SYEzEv" src="img/vector-24@2x.svg" />
                <img class="vector-tPezbP" src="img/vector-8@2x.svg" />
                <img class="vector-qxDH26" src="img/vector-4@2x.svg" />
                <img class="vector-txvxvA" src="img/vector-10@2x.svg" />
                <img class="vector-wYWj33" src="img/vector-28@2x.svg" />
            </div>
            <div class="send-FjfUj9">
                <img class="vector-SzED9M" src="img/vector-39@2x.svg" />
                <img class="vector-S7Gryw" src="img/vector-8@2x.svg" />
                <img class="vector-S7Nacb" src="img/vector-14@2x.svg" />
                <img class="vector-cigqHK" src="img/vector-10@2x.svg" />
            </div>
            <div
                class="contact-us-button-footer-FjfUj9 smart-layers-pointers"
                 >
            <div class="contact-us-xNdJvB1 valign-text-middle">Contact Us</div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
  
  }