import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";
import './contact-us.css'
import {Link} from 'react-router-dom';
import Nav from "./Navs/Nav";
import NavMobile from "./Navs/NavMobile";
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import FooterMobile from './Footer/FooterMobile';


export const Contact = () => {

  return (
    <div>
      <input type="hidden" id="anPageName" name="page" value="contact-us" />
      <div class="contact-us screen">
        <Nav />
        {/* <Header 
          text=" Contact" 
          green_text='Us'
          subtitle='SendFriend'
          image='img/unsplash-q8u1ygbarqk-1@1x.png'
          under_text='We are cheaper, faster, and more reliable and secure.'
        /> */}
        <img class="unsplashq8-u1-yg-ba-r-qk-q2xQ3x" src="img/unsplash-q8u1ygbarqk-1@1x.png" />
    
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
            
            <span class="span0-qKndKo">Have a question about our product and service offerings? <br />Please drop us a line below</span> <br />
            {/* <span class="span1-qKndKo">Need help? For all customer service-related inquiries, contact: <a class="text-decoration-none span1-qKndKo" href="mailto:info@sendfriend.io" >info@sendfriend.io</a></span> <br /> */}
            
          </div>
          <form action="https://formspree.io/f/xlezgwwv" method="POST" >
              <div class="name-qtxwMM">
                  <div class="rectangle-65-RviPmu border-1px-mist-gray"></div>
                  <textarea
                      class="your-name-RviPmu montserrat-normal-quick-silver-16px"
                      name="name"
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
                      name="email"
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
                      name="message"
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
    
        <Footer custom_class="section footer-section footer-section-contact"/>
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
          <span>
            <span class="span0-QTu2o6 montserrat-extra-bold-eerie-black-21px">Have a question about our product and service offerings? <br />Please drop us a line below</span><br />
            {/* <span class="span1-QTu2o6">Need help? For all customer service-related inquiries, contact:<br /><a class="text-decoration-none span1-QTu2o6" href="mailto:info@sendfriend.io" >info@sendfriend.io</a></span><br /> */}
          </span>
        </div>
        <form action="https://formspree.io/f/xlezgwwv" method="POST" >
        <div class="name-form-xM44hz">
          <div class="rectangle-65-SFsB0t border-1px-mist-gray"></div>
          <input
            class="your-name-SFsB0t montserrat-normal-quick-silver-11px"
            name="name"
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
            name="email"
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
            name="message"
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

          <FooterMobile custom_class="footer footer-contact" />
        <div class="contact-us-xM44hz valign-text-middle">
          <span><span class="span0-a4MIm9">Contact </span><span class="span1-a4MIm9">Us</span> </span>
        </div>
        <div class="send-friend-xM44hz valign-text-middle montserrat-bold-caribbean-green-18px">SendFriend</div>
      </div>
    </div>
  );
  
  }