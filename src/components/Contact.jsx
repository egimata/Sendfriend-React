import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";
import './contact-us.css'
import {Link} from 'react-router-dom';
import Nav from "./Navs/Nav";
import NavMobile from "./Navs/NavMobile";


export const Contact = () => {

  return (
    <div>
        <input type="hidden" id="anPageName" name="page" value="contact-us" />
        <div class="contact-us screen">
      <img class="unsplashq8-u1-yg-ba-r-qk-q2xQ3x" src="img/unsplash-q8u1ygbarqk-1@1x.png" />
      <Nav />
      <div class="rectangle-87-q2xQ3x bp1-animate-enter"></div>
      <div class="header-text-q2xQ3x bp1-animate-enter1" show-on-scroll>
        <div class="contact-us-su2A3v">
          <span class="span0-xxjJkh">Contact </span><span class="span1-xxjJkh">us</span>
        </div>
        <div class="we-are-cheaper-faste-su2A3v montserrat-semi-bold-white-24px">
          We are cheaper, faster, more reliable and secure.
        </div>
        <div class="send-friend-su2A3v montserrat-bold-caribbean-green-24px">SendFriend</div>
      </div>
      <div class="rectangle-42-q2xQ3x"></div>

      
      <div class="form-section-q2xQ3x">
        <img class="form-section-qtxwMM" src="img/form-section@1x.png" />
        <div id="top-form-dt" class="have-a-question-need-qtxwMM montserrat-bold-white-32px">
          <span class="span0-qKndKo">Have a question? </span
          ><span class="span1-qKndKo montserrat-bold-white-32px-2">Need help?</span
          ><span class="span2-qKndKo"> Don&#39;t hesitate, drop us a line</span>
        </div>
        <form action="https://formspree.io/f/xknynqkb" method="POST" >
            <div class="name-qtxwMM">
                <div class="rectangle-65-RviPmu border-1px-mist-gray"></div>
                <textarea
                    class="your-name-RviPmu montserrat-normal-quick-silver-16px"
                    name="yourname"
                    placeholder="Your Name*"
                    type="text"
                    required
                ></textarea>
                <div class="please-enter-your-real-name-RviPmu">Please enter your real name</div>
                <div class="your-name-fwh2XB montserrat-medium-white-16px">Your Name:</div>
            </div>
            <div class="email-qtxwMM">
                <div class="rectangle-66-fjai0k border-1px-mist-gray"></div>
                <input
                    class="your-email-address-fjai0k montserrat-normal-quick-silver-16px"
                    name="youremailaddress"
                    placeholder="Your Email Address*"
                    type="email"
                    required
                />
                <div class="please-carefully-che-fjai0k">Please carefully check your email address for accuracy</div>
                <div class="your-email-address-wGcm9a montserrat-medium-white-16px">Your Email Address:</div>
            </div>
            <div class="company-qtxwMM">
                <div class="rectangle-68-Gm8LQ8 border-1px-mist-gray"></div>
                <textarea
                    class="company-Gm8LQ8 montserrat-normal-quick-silver-16px"
                    name="company"
                    placeholder="Company"
                    type="text"
                ></textarea>
                <div class="company-jp7mUn montserrat-medium-white-16px">Company:</div>
            </div>
            <div class="mobile-qtxwMM">
                <div class="rectangle-69-S2oUnU border-1px-mist-gray"></div>
                <input
                    class="mobile-S2oUnU montserrat-normal-quick-silver-16px"
                    name="mobile"
                    placeholder="Mobile"
                    type="number"
                />
                <div class="mobile-pZJDii montserrat-medium-white-16px">Mobile:</div>
            </div>
            <div class="message-qtxwMM">
            <div class="rectangle-67-Kn8wJi border-1px-mist-gray"></div>
                <textarea
                    class="i-have-a-question-about-Kn8wJi montserrat-normal-quick-silver-16px"
                    name="ihaveaquestionabout_"
                    placeholder="I have a question about...:"
                    type="text"
                    required
                ></textarea>
                <div class="explain-your-question-in-detail-Kn8wJi montserrat-medium-white-16px">
                    Explain your question in detail:
                </div>
            </div>
            <button type="submit" class="send-button-qtxwMM"  >
                <div class="send-mfnRlm valign-text-middle montserrat-bold-white-14px">SEND</div>
            </button>
        </form>
      </div>
      <div class="footer-q2xQ3x">
        <div class="top-FjfUj9">
          <div class="rectangle-40-hxxK78"></div>
          <div class="contact-us-hxxK78">
          
            <HashLink smooth to="#top-form-dt">
                <div class="rectangle-1-ugEqN0 smart-layers-pointers">
                <div class="contact-us-ugEqN0 montserrat-bold-white-14px">CONTACT US</div>
            </div>
            </HashLink>
          </div>
          <div class="to-learn-more-about-send-friend-hxxK78 valign-text-middle montserrat-bold-white-32px">
            <span
              ><span class="span0-m9cMa5 montserrat-bold-white-32px-2">To learn more about</span
              ><span class="span1-m9cMa5 montserrat-bold-caribbean-green-32px"> SendFriend</span>
            </span>
          </div>
        </div>
        <img class="asset-1bg1-1-2-FjfUj9" src="img/asset-1bg1-1-2@2x.png" />
        <Link to="/">
        <div class="logo-menu-FjfUj9"><img class="logo_menu-2-gi5pJK" src="img/logo-menu-2-3@2x.png" /></div>
        </Link>
        <img class="line-1-FjfUj9" src="img/line-1-1@1x.png" />
        <div class="x2021-send-friend-all-rights-reserved-FjfUj9 montserrat-medium-white-14px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="socials-FjfUj9">
          <div class="x-BfltE1 montserrat-medium-white-14px">|</div>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer"
            ><div class="linked-in-BfltE1 montserrat-medium-white-14px">LinkedIn</div> </a
          ><a href="https://twitter.com/sendfriendinc" target="_blank" rel="noreferrer"
            ><div class="twitter-BfltE1 montserrat-medium-white-14px">Twitter</div> </a
          ><a href="https://www.facebook.com/sendfriendinc/" target="_blank" rel="noreferrer"
            ><div class="facebook-BfltE1 montserrat-medium-white-14px">Facebook</div> </a
          ><a href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer"
            ><div class="x-URXQ1e montserrat-medium-white-14px">|</div>
          </a>
        </div>
      </div>
    </div>

    <div class="mobile-contact-us screen">
      <img class="unsplashq8-u1-yg-ba-r-qk-xM44hz" src="img/unsplash-q8u1ygbarqk@2x.png" />
      <div class="rectangle-126-xM44hz"></div>
      <NavMobile />
      <div class="we-are-cheaper-faste-xM44hz valign-text-middle montserrat-semi-bold-white-16px">
        We are cheaper, faster, more reliable and secure.
      </div>
      <img class="rectangle-124-xM44hz" src="img/rectangle-124@2x.png" />
      <img class="rectangle-106-xM44hz" src="img/rectangle-106@1x.svg" />
      <div id="top-form" class="have-a-question-need-xM44hz valign-text-middle montserrat-extra-bold-white-21px">
        <span
          ><span class="span0-QTu2o6 montserrat-extra-bold-eerie-black-21px">Have a question? </span
          ><span class="span1-QTu2o6 montserrat-extra-bold-white-21px-2">Need help?</span
          ><span class="span2-QTu2o6 montserrat-extra-bold-eerie-black-21px"> Don&#39;t hesitate, drop us a line</span>
        </span>
      </div>
      <form  action="https://formspree.io/f/xknynqkb" method="POST" >
      <div class="name-form-xM44hz">
        <div class="rectangle-65-SFsB0t border-1px-mist-gray"></div>
        <input
          class="your-name-SFsB0t montserrat-normal-quick-silver-11px"
          name="yourname"
          placeholder="Your Name*"
          type="text"
          required
        />
        <div class="your-name-76rwej montserrat-medium-white-11px">Your Name:</div>
        <div class="please-enter-your-real-name-SFsB0t">Please enter your real name</div>
      </div>
      <div class="email-form-xM44hz">
        <div class="rectangle-66-xmbDNp border-1px-mist-gray"></div>
        <input
          class="your-email-address-xmbDNp montserrat-normal-quick-silver-11px"
          name="youremailaddress"
          placeholder="Your Email Address*"
          type="email"
          required
        />
        <div class="please-carefully-che-xmbDNp">Please carefully check your email address for accuracy</div>
        <div class="your-email-address-y5nMNb montserrat-medium-white-11px">Your Email Address:</div>
      </div>
      <div class="company-form-xM44hz">
        <div class="company-wwA1UD montserrat-medium-white-11px">Company:</div>
        <div class="rectangle-68-wwA1UD border-1px-mist-gray"></div>
        <input
          class="company-3BjWJk montserrat-normal-quick-silver-11px"
          name="company"
          placeholder="Company"
          type="text"
        />
      </div>
      <div class="mobile-form-xM44hz">
        <div class="rectangle-69-kxcBUx border-1px-mist-gray"></div>
        <input
          class="mobile-kxcBUx montserrat-normal-quick-silver-11px"
          name="mobile"
          placeholder="Mobile"
          type="number"
        />
        <div class="mobile-MlxwfZ montserrat-medium-white-11px">Mobile:</div>
      </div>
      <div class="message-form-xM44hz">
        <div class="rectangle-67-CnTEL5 border-1px-mist-gray"></div>
        <textarea
          class="i-have-a-question-about-CnTEL5 montserrat-normal-quick-silver-11px"
          name="ihaveaquestionabout_"
          placeholder="I have a question about...:"
          type="text"
          required
        ></textarea>
        <div class="explain-your-question-in-detail-CnTEL5 montserrat-medium-white-11px">
          Explain your question in detail:
        </div>
      </div>
      <button type="submit" class=" send-button-xM44hz smart-layers-pointers">SEND</button>
      {/* <img class="send-button-xM44hz smart-layers-pointers" src="img/send-button@2x.png" /> */}
      </form>

      <div class="footer-xM44hz">
        <div class="rectangle-89-r1QSs6"></div>
        <div class="rectangle-40-r1QSs6"></div>
        <div class="to-learn-more-about-send-friend-r1QSs6 valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span class="span0-FwF3Zi montserrat-bold-white-14px">To learn more about</span
            ><span class="span1-FwF3Zi montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <img class="line-1-r1QSs6" src="img/line-1@2x.png" />
        <img class="asset-1bg1-1-2-r1QSs6" src="img/asset-1bg1-1-2@2x.png" />
        <div class="x-r1QSs6 montserrat-medium-white-14px">|</div>
        <div class="x-zYR6WX montserrat-medium-white-14px">|</div>
        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer"
          ><div class="linked-in-r1QSs6 montserrat-medium-white-11px">LinkedIn</div> </a
        ><a href="https://twitter.com/sendfriendinc" target="_blank" rel="noreferrer"
          ><div class="twitter-r1QSs6 montserrat-medium-white-11px">Twitter</div> </a
        ><a href="https://www.facebook.com/sendfriendinc/" target="_blank" rel="noreferrer"
          ><div class="facebook-r1QSs6 montserrat-medium-white-11px">Facebook</div>
        </a>
        <div class="x2021-send-friend-all-rights-reserved-r1QSs6 montserrat-medium-white-9px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="contact-us-r1QSs6 bp2-animate-enter" show-on-scroll>
        <HashLink smooth to="#top-form">
          <div class="rectangle-1-ZgAp2o smart-layers-pointers"></div>
          <div class="contact-us-ZgAp2o valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </HashLink>
        </div>
        <div class="logo-r1QSs6">
          <div class="frame-131-Eb7xT1"><img class="logo_menu-2-6IVunm" src="img/logo-menu-2@2x.png" /></div>
        </div>
      </div>
      <div class="contact-us-xM44hz valign-text-middle">
        <span><span class="span0-a4MIm9">Contact </span><span class="span1-a4MIm9">Us</span> </span>
      </div>
      <div class="send-friend-xM44hz valign-text-middle montserrat-bold-caribbean-green-18px">SendFriend</div>
    </div>
    </div>
  );
  
  }