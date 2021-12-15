import React from "react";
import { HashLink } from 'react-router-hash-link';
import header_img from "../img/unsplash-q8u1ygbarqk@1x.png"
import green_bg from "../img/rectangle-107@2x.svg"
import facebook_icon from '../img/bx-bxl-facebook@2x.svg';
import twitter_icon from '../img/ant-design-twitter-outlined@2x.svg';
import linkedin_icon from '../img/vector-8@2x.svg';
import menu_bg from '../img/vector-9@1x.svg';
import arrow_company from '../img/vector-16@2x.svg';
import logo_menu from '../img/logo_menu.png';
import footer_line from '../img/line-1@1x.svg';
import footer_logo from '../img/logo_footer.png';
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
            <div class="contact-us screen ">
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
                    <a href="#/">
                        <img class="original-logo-PUJjp0" src={logo_menu} />
                    </a>    
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
                    <span class="span0-ZYlUMA montserrat-bold-oxford-blue-32px">Have a question? </span>
                    <span class="span1-ZYlUMA montserrat-bold-white-32px-2">Need help?</span>
                    <span class="span2-ZYlUMA montserrat-bold-oxford-blue-32px"> Don&#39;t hesitate, drop us a line</span>
                </div>           

                {/* Form Start */}
                <form action="https://formspree.io/f/xknynqkb" method="POST" >

          
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
                        <img class="vector-RzPxPp" src="img/logo_footer.png" />
                    
                    </div>
                    
                    
                    <div class="contact-us-button-footer-FjfUj9 smart-layers-pointers" >
                        <div class="contact-us-xNdJvB1 valign-text-middle">Contact Us</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div class="container-center-horizontal">
            <div class="iphone-13-13-pro-1 screen">
                <div class="overlap-group8-1">
                    <img class="unsplashq8-u1-yg-ba-r-qk-1" src="img/unsplash-q8u1ygbarqk-1@1x.png" />
                    <div class="rectangle-126"></div>
                    <img class="rectangle-124" src="img/rectangle-124@2x.svg" />

                    <div class="header-text-1 bp2-animate-enter" show-on-scroll>
                        <div class="contact-us-3 valign-text-middle montserrat-bold-white-50px">
                        <span>
                            <span class="montserrat-bold-white-50px-2">Contact </span>
                            <span class="montserrat-bold-caribbean-green-50px">Us</span>
                        </span>
                    </div>

                    <div class="we-are-cheaper-fast-1 valign-text-middle montserrat-semi-bold-white-24px">
                        We are cheaper, faster, more reliable and secure.
                    </div>
                    <div class="send-friend-1 valign-text-middle montserrat-bold-caribbean-green-24px">SendFriend</div>
                </div>
                <img class="rectangle-106" src="img/green_bg.svg" />
                <div class="have-a-question-nee-1 valign-text-middle">
                    <span>
                        <span class="span-2">Have a question? </span>
                        <span class="span1">Need help?</span>
                        <span class="span-2"> Don&#39;t hesitate, drop us a line</span>
                    </span>
                </div>

                <form action="https://formspree.io/f/xknynqkb" method="POST" >
                    <div class="your-name-1 montserrat-medium-white-11px">Your Name:</div>
                    <p class="please-enter-your-real-name-1 montserrat-light-white-11px">Please enter your real name:</p>
                    <div class="overlap-group-2">
                        <div class="rectangle-6 border-1px-mist-gray"></div>
                        <input
                        class="your-1 montserrat-normal-quick-silver-11px"
                        name="Full-Name"
                        placeholder="Your Name*"
                        type="text"
                        required
                        />
                    </div>
                    <div class="overlap-group1">
                        <p class="please-carefully-che-1 montserrat-light-white-11px">
                        Please carefully check your email address for accuracy
                        </p>
                        <div class="your-email-address-1 montserrat-medium-white-11px">Your Email Address:</div>
                    </div>
                    <div class="company-2 montserrat-medium-white-11px">Company</div>
                    <div class="place montserrat-medium-white-11px">Mobile</div>
                    <div class="overlap-group2-1">
                        <div class="rectangle-6 border-1px-mist-gray"></div>
                        <input
                        class="your-1 montserrat-normal-quick-silver-11px"
                        name="Email"
                        placeholder="Your Email Address*"
                        type="email"
                        required
                        />
                    </div>
                    <div class="overlap-group3-1 border-1px-mist-gray">
                        <input
                        class="company-3 montserrat-normal-quick-silver-11px"
                        name="Company"
                        placeholder="Company"
                        type="text"
                        />
                    </div>
                    <div class="overlap-group4-1 border-1px-mist-gray">
                        <input
                        class="mobile-1 montserrat-normal-quick-silver-11px"
                        name="Mobile"
                        placeholder="Mobile"
                        type="number"
                        />
                    </div>
                    <div class="message-text-1">
                        <p class="explain-your-question-in-details-1 montserrat-medium-white-11px">
                        Explain your question in details:
                        </p>
                        <p class="please-carefully-che-2 montserrat-light-white-11px">
                        Please carefully check your email address for accuracy
                        </p>
                    </div>
                    <div class="overlap-group5-1 border-1px-mist-gray">
                        <textarea
                        class="i-have-a-question-about-1 montserrat-normal-quick-silver-11px"
                        name="Message-Request"
                        placeholder="I have a question about...:"
                        type="text"
                        required
                        ></textarea>
                    </div>
                    <button type="submit" class="send-button-1">SEND</button>
                </form>

                
                <div class="footer-1">
                    <div class="overlap-group6-1">
                    <div class="text-1 montserrat-medium-white-14px">|</div>
                    <div class="text-2 montserrat-medium-white-14px">|</div>
                    <div class="overlap-group2-2">
                        <div class="text montserrat-medium-white-14px"></div>
                        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
                        ><div class="linked-in montserrat-medium-white-11px">LinkedIn</div>
                        </a>
                    </div>
                    <a href="https://twitter.com/sendfriendinc" target="_blank"
                        ><div class="twitter montserrat-medium-white-11px">Twitter</div> </a
                    ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
                        ><div class="facebook montserrat-medium-white-11px">Facebook</div>
                    </a>
                    <div class="overlap-group3-2">
                        <div class="rectangle-40"></div>
                        <p class="to-learn-more-about-send-friend-1 valign-text-middle">
                        <span
                            ><span class="montserrat-bold-white-14px">To learn more about</span
                            ><span class="span1-1"> SendFriend</span>
                        </span>
                        </p>
                        <img class="line-1-1" src="img/line-1-1@2x.svg" />
                        <img class="asset-1bg1-1-2-1" src="img/asset-1bg1-1-2-1@2x.png" />
                    </div>
                    <div class="group-122 bp2-animate-enter1" show-on-scroll>
                        <div class="overlap-group-3">
                        <div class="rectangle-1"></div>
                        <div class="contact-us-4 valign-text-middle">CONTACT US</div>
                        </div>
                    </div>
                        <a href="#/">
                    <img class="original-logo-1" src={footer_logo} />
                    </a>

                    </div>
                    <img class="learn-more" src="img/learn-more@2x.svg" />
                </div>
                <p class="x2021-send-friend-all-rights-reserved-1">© 2021 SendFriend. All Rights Reserved</p>
                <div id="overlay-mobile-menu" class="overlay" style={{minHeight: '5881px'}}>
          <div class="container-center-horizontal">
            <div class="mobile-menu screen">
              <a href="javascript:HideOverlay('mobile-menu', 'animate-disappear');">
                <div class="close-jxzQz0">
                  <img class="line-17-6rcJjs" src="img/line-17-1@2x.svg" />
                  <img class="line-18-6rcJjs" src="img/line-18-1@2x.svg" />
                </div>
              </a>
              <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
                <div class="login-button-mobile-jxzQz0">
                  <div class="group-123-tg1hNG">
                    <div class="rectangle-100-UNPDgx smart-layers-pointers"></div>
                    <div class="login-UNPDgx montserrat-bold-white-8px">LOGIN</div>
                  </div>
                </div>
              </a>
              <HashLink smooth to="/#platform-section">
                <div class="platform-jxzQz0 montserrat-bold-white-8px">Platform</div>
              </HashLink>
              <HashLink smooth to="/#partnerships">
                <div class="partnership-jxzQz0 montserrat-bold-white-8px">Partnership</div>
              </HashLink>
              <div class="company-jxzQz0 montserrat-bold-white-8px">Company</div>
              <a href="/#/contact">
                <div class="contact-jxzQz0 montserrat-bold-white-8px"> 
                  Contact
                </div>
              </a>
                
            </div>
          </div>
        </div>
                <div class="frame-8">
                    <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');">
                        <div class="hamburger">
                            <img class="vector-16-1" src="img/vector-16-1@2x.svg" />
                            <img class="vector-17-1" src="img/vector-17-1@2x.svg" />
                            <img class="vector-18-1" src="img/vector-17-1@2x.svg" />
                        </div>
                    </a>
                </div>
                
                <div class="rectangle-125"></div>
                    <a href="#/">
                        <img class="original-logo-2" src={logo_menu} />
                    </a>

                </div>
            </div>
        </div>
    </div>
  );
  
  }