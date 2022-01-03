import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import first_image from '../img/api-async-1@2x.png';
import second_image from '../img/api-second.jpeg';
import third_image from '../img/api-third.jpeg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

// import 'react-tabs/style/react-tabs.css';
import './homepage.css'


 
export const Homepage = () => {
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
      <div>
       <input type="hidden" id="anPageName" name="page" value="homepage" />
       <div class="homepage">
      <img class="slider-homepage-1-zYNucu" src="img/homepage/slider-homepage-1@1x.jpg" />
      <div class="header-zYNucu">
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
                  </Link>
                  {dropdown && <Dropdown />}<i className='fa fa-angle-down fa-lg' />
                </li>
              </ul>
            </div>

          <a href="/#/contact">
          <div class="contact-us-kYUAzc montserrat-bold-white-14px">CONTACT US</div>
          </a>
        </div>
        <HashLink smooth to="#top">
        <div class="logo-menu-num0gs"><img class="logo_menu-2-a4JE9e" src="img/homepage/logo-menu-2-2@2x.png" /></div>
        </HashLink>
      </div>
      <div id="top" class="rectangle-87-zYNucu animate-enter" show-on-scroll></div>
      <div class="header-text-zYNucu">
        <div class="faster-cheaper-multi-n1joYR animate-enter1">
          <span class="span0-kjm5Mi">Faster, Cheaper<br />Multi-Chain<br />Payments </span
          ><span class="span1-kjm5Mi">Service.</span>
        </div>
        <div class="we-are-cheaper-faste-n1joYR animate-enter2" show-on-scroll>
          We are cheaper, faster, and more reliable and secure.
        </div>
        <div class="send-friend-n1joYR animate-enter3" show-on-scroll>SendFriend</div>
        <div class="group-120-n1joYR animate-enter4" show-on-scroll>
          <a href="/#/contact">
          <div class="rectangle-1-rh6tbp smart-layers-pointers">
          <div class="contact-us-rh6tbp montserrat-bold-eerie-black-14px">CONTACT US</div>
          </div>
          </a>
        </div>
      </div>
      <img class="rectangle-106-zYNucu" src="img/homepage/rectangle-106@1x.png" />
      <Tabs>
        <TabList>
          <Tab>

          <div class="cheaper-zYNucu">
            <div class="rectangle-101-kPiyGZ smart-layers-pointers border-1px-black-2">
            <div class="cheaper-kPiyGZ montserrat-bold-ebony-clay-16px">CHEAPER</div>
            <img class="x3-kPiyGZ smart-layers-pointers animate-enter5" src="img/homepage/3@1x.png" />
            </div>
          </div>
          </Tab>

          <Tab>
            <div class="faster-zYNucu">
              <div class="rectangle-102-aADbGy smart-layers-pointers border-1px-black-2">
              <div class="faster-aADbGy montserrat-bold-ebony-clay-16px">FASTER</div>
              <img class="x2-aADbGy smart-layers-pointers animate-enter6" src="img/homepage/2@2x.png" />
              </div>
            </div>
          </Tab>
            <Tab>
            <div class="multi-chain-zYNucu">
              <div class="rectangle-103-n8h6Li smart-layers-pointers border-1px-black-2">
              <div class="multichain-n8h6Li montserrat-bold-ebony-clay-16px">MULTICHAIN</div>
              <img
                class="eos-iconsblockchain-n8h6Li smart-layers-pointers animate-enter7"
                src="img/homepage/eos-icons-blockchain@2x.png"
              />
              </div>
            </div>
            </Tab>

                    <Tab>
                    <div class="more-secure-zYNucu">
        <div class="rectangle-104-dSxhqF smart-layers-pointers border-1px-black-2">
        <div class="more-secure-dSxhqF montserrat-bold-ebony-clay-16px">MORE SECURE</div>
        <div class="group-dSxhqF smart-layers-pointers">
          <img class="vector-A0gskj" src="img/homepage/vector-13@2x.png" />
          <img class="vector-GQyxdx" src="img/homepage/vector-14@2x.png" />
        </div>
        </div>
      </div>
                    </Tab>
                  </TabList>
                  <TabPanel>
                  <div class="section-1-zYNucu">
        <div class="checkbox-1-IQUIuZ">
          <img class="vector-7ml3I6" src="img/homepage/vector-15@2x.png" />
          <img class="vector-Ntfv89" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="checkbox-2-IQUIuZ">
          <img class="vector-AUWl73" src="img/homepage/vector-15@2x.png" />
          <img class="vector-cgxaVX" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="checkbox-3-IQUIuZ">
          <img class="vector-9vlWzS" src="img/homepage/vector-15@2x.png" />
          <img class="vector-X0jBtO" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="checkbox-4-IQUIuZ">
          <img class="vector-h1mMVQ" src="img/homepage/vector-15@2x.png" />
          <img class="vector-TyXY7m" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
          <span class="span0-vBeqzr">SendFriend delivers a</span
          ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2"> cheaper solution<br /></span
          ><span class="span2-vBeqzr">for transferring money across borders</span>
        </div>
        <div class="our-on-chain-solutio-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
          Our on-chain solutions avoid traditional payment rails that <br />carry high FX and other transaction fees. In
          short, we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective
          settlement
        </div>
        <div class="lower-fx-costs-IQUIuZ montserrat-semi-bold-ebony-clay-14px">Lower FX costs</div>
        <div class="no-pre-funding-burden-IQUIuZ montserrat-semi-bold-ebony-clay-14px">No pre-funding burden</div>
        <a href="/#/contact">
        <div class="frame-134-IQUIuZ">
          <div class="learn-more-oO60f0 montserrat-bold-eerie-black-14px">LEARN MORE</div>
        </div>
        </a>
        <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
        <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
        <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
        <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
        <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
        <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
        <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
          <img
            class="kisspng-clip-art-cit-vMHBtP"
            src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
          />
          <div class="group-101-vMHBtP">
            <img class="vector-4zDvQN" src="img/homepage/vector-26@2x.png" />
            <img class="vector-7a4eDp" src="img/homepage/vector-27@2x.png" />
            <img class="vector-aVzPZM" src="img/homepage/vector-28@2x.png" />
            <img class="vector-bbHgiR" src="img/homepage/vector-29@2x.png" />
            <img class="vector-cj5ELa" src="img/homepage/vector-30@2x.png" />
          </div>
        </div>
        <div class="uiwsetting-IQUIuZ">
          <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
            <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
            <div class="ellipse-16-kr4CWH"></div>
          </div>
          <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
        </div>
        <img class="arrow-3-IQUIuZ animate-enter10" show-on-scroll src="img/homepage/arrow-3@2x.png" />
        <img class="arrow-5-IQUIuZ animate-enter11" show-on-scroll src="img/homepage/arrow-5@2x.png" />
        <img class="arrow-2-IQUIuZ animate-enter12" show-on-scroll src="img/homepage/arrow-2@2x.png" />
        <img class="arrow-1-IQUIuZ animate-enter13" show-on-scroll src="img/homepage/arrow-1@2x.png" />
        <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
        <img class="x3-IQUIuZ animate-enter14" src="img/homepage/3@2x.png" />
        <img class="group-IQUIuZ1" src="img/homepage/group@1x.png" />
        <img
          class="eos-iconsblockchain-IQUIuZ1"
          show-on-scroll
          src="img/homepage/eos-icons-blockchain-1@1x.png"
        />
        <div class="carbonapi-1-IQUIuZ" show-on-scroll>
          <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
          <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
          <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
        </div>
        <img class="x2-IQUIuZ1" src="img/homepage/2@1x.png" />
        <img class="arrow-4-IQUIuZ animate-enter16" show-on-scroll src="img/homepage/arrow-4@2x.png" />
        <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
        <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
        <div class="fewer-correspondent-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
          Fewer correspondent and intermediary banks mean lower fees
        </div>
        <div class="access-to-a-least-co-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
          Access to a least-cost routing AI/ML algorithm to optimally select payment route via our multi-chain network
        </div>
      </div>
                  </TabPanel>
                  
                  <TabPanel>
                  <div class="section-1-zYNucu">
        <div class="checkbox-1-IQUIuZ">
          <img class="vector-7ml3I6" src="img/homepage/vector-15@2x.png" />
          <img class="vector-Ntfv89" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="checkbox-2-IQUIuZ">
          <img class="vector-AUWl73" src="img/homepage/vector-15@2x.png" />
          <img class="vector-cgxaVX" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="checkbox-3-IQUIuZ">
          <img class="vector-9vlWzS" src="img/homepage/vector-15@2x.png" />
          <img class="vector-X0jBtO" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="checkbox-4-IQUIuZ">
          <img class="vector-h1mMVQ" src="img/homepage/vector-15@2x.png" />
          <img class="vector-TyXY7m" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
          <span class="span0-vBeqzr">SendFriend offers a </span
          ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">speed advantage<br /></span
          ><span class="span2-vBeqzr">to traditional payment rails</span>
        </div>
        <div class="our-on-chain-solutio-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
        Both our on- and off-chain solutions leverage nimble systems to settle payments in nearly real-time
        </div>
        <div class="lower-fx-costs-IQUIuZ montserrat-semi-bold-ebony-clay-14px">Near-instant settlement</div>
        <div class="no-pre-funding-burden-IQUIuZ montserrat-semi-bold-ebony-clay-14px">Money and payment metadata flow over the same systems, ensuring faster settlement</div>
        <a href="/#/contact">
        <div class="frame-134-IQUIuZ">
          <div class="learn-more-oO60f0 montserrat-bold-eerie-black-14px">LEARN MORE</div>
        </div>
        </a>
        <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
        <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
        <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
        <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
        <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
        <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
        <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
          <img
            class="kisspng-clip-art-cit-vMHBtP"
            src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
          />
          <div class="group-101-vMHBtP">
            <img class="vector-4zDvQN" src="img/homepage/vector-26@2x.png" />
            <img class="vector-7a4eDp" src="img/homepage/vector-27@2x.png" />
            <img class="vector-aVzPZM" src="img/homepage/vector-28@2x.png" />
            <img class="vector-bbHgiR" src="img/homepage/vector-29@2x.png" />
            <img class="vector-cj5ELa" src="img/homepage/vector-30@2x.png" />
          </div>
        </div>
        <div class="uiwsetting-IQUIuZ">
          <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
            <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
            <div class="ellipse-16-kr4CWH"></div>
          </div>
          <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
        </div>
        <img class="arrow-3-IQUIuZ animate-enter10" show-on-scroll src="img/homepage/arrow-3@2x.png" />
        <img class="arrow-5-IQUIuZ animate-enter11" show-on-scroll src="img/homepage/arrow-5@2x.png" />
        <img class="arrow-2-IQUIuZ animate-enter12" show-on-scroll src="img/homepage/arrow-2@2x.png" />
        <img class="arrow-1-IQUIuZ animate-enter13" show-on-scroll src="img/homepage/arrow-1@2x.png" />
        <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
        <img class="x3-IQUIuZ1" src="img/homepage/3@2x.png" />
        <img class="group-IQUIuZ1 " src="img/homepage/group@1x.png" />
        <img
          class="eos-iconsblockchain-IQUIuZ1"
          show-on-scroll
          src="img/homepage/eos-icons-blockchain-1@1x.png"
        />
        <div class="carbonapi-1-IQUIuZ" show-on-scroll>
          <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
          <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
          <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
        </div>
        <img class="x2-IQUIuZ" src="img/homepage/2@1x.png" />
        <img class="arrow-4-IQUIuZ animate-enter16" show-on-scroll src="img/homepage/arrow-4@2x.png" />
        <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
        <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
        <div class="fewer-correspondent-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
        Blockchain-enabled payments are inherently faster, avoiding cumbersome traditional intermediaries
        </div>
        <div class="access-to-a-least-co-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
        For off-chain solutions, we leverage blockchain to route payment metadata faster
        </div>
      </div>
                  </TabPanel>
                  <TabPanel>
                  <div class="section-1-zYNucu">

        <div class="checkbox-2-IQUIuZ">
          <img class="vector-AUWl73" src="img/homepage/vector-15@2x.png" />
          <img class="vector-cgxaVX" src="img/homepage/vector-19@2x.png" />
        </div>

        <div class="checkbox-4-IQUIuZ1">
          <img class="vector-h1mMVQ" src="img/homepage/vector-15@2x.png" />
          <img class="vector-TyXY7m" src="img/homepage/vector-19@2x.png" />
        </div>
        <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
          <span class="span0-vBeqzr">SendFriend is building  </span
          ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">integrations  <br /></span
          ><span class="span2-vBeqzr">to a multitude of  blockchain-based < br /><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">payment systems</span></span>
        </div>
        <div class="our-on-chain-solutio-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
        We aim to offer multiple blockchain-enabled payment routing options depending on the use case, geography, and least-cost routing method
        </div>
        <a href="/#/contact">
        <div class="frame-134-IQUIuZ">
          <div class="learn-more-oO60f0 montserrat-bold-eerie-black-14px">LEARN MORE</div>
        </div>
        </a>
        <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
        <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
        <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
        <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
        <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
        <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
        <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
          <img
            class="kisspng-clip-art-cit-vMHBtP"
            src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
          />
          <div class="group-101-vMHBtP">
            <img class="vector-4zDvQN" src="img/homepage/vector-26@2x.png" />
            <img class="vector-7a4eDp" src="img/homepage/vector-27@2x.png" />
            <img class="vector-aVzPZM" src="img/homepage/vector-28@2x.png" />
            <img class="vector-bbHgiR" src="img/homepage/vector-29@2x.png" />
            <img class="vector-cj5ELa" src="img/homepage/vector-30@2x.png" />
          </div>
        </div>
        <div class="uiwsetting-IQUIuZ">
          <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
            <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
            <div class="ellipse-16-kr4CWH"></div>
          </div>
          <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
        </div>
        <img class="arrow-3-IQUIuZ animate-enter10" show-on-scroll src="img/homepage/arrow-3@2x.png" />
        <img class="arrow-5-IQUIuZ animate-enter11" show-on-scroll src="img/homepage/arrow-5@2x.png" />
        <img class="arrow-2-IQUIuZ animate-enter12" show-on-scroll src="img/homepage/arrow-2@2x.png" />
        <img class="arrow-1-IQUIuZ animate-enter13" show-on-scroll src="img/homepage/arrow-1@2x.png" />
        <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
        <img class="x3-IQUIuZ1" src="img/homepage/3@2x.png" />
        <img class="group-IQUIuZ1" src="img/homepage/group@1x.png" />
        <img
          class="eos-iconsblockchain-IQUIuZ animate-enter14"
          show-on-scroll
          src="img/homepage/eos-icons-blockchain-1@1x.png"
        />
        <div class="carbonapi-1-IQUIuZ" show-on-scroll>
          <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
          <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
          <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
        </div>
        <img class="x2-IQUIuZ1" src="img/homepage/2@1x.png" />
        <img class="arrow-4-IQUIuZ animate-enter16" show-on-scroll src="img/homepage/arrow-4@2x.png" />
        <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
        <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
        <div class="fewer-correspondent-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
        RippleNet has been our founding partner and fundamental to our initial cross-border remittance success
        </div>
        <div class="access-to-a-least-co-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
        We are building out additional blockchain network integrations so that our solution is chain-agnostic and can support lease-cost routing over time
        </div>
      </div>
                  </TabPanel>
                  <TabPanel>
                  <div class="section-1-zYNucu">
        
        <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
          <span class="span0-vBeqzr">SendFriend firmly believes that <br /></span
          ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">blockchain-based payment methods <br /></span
          ><span class="span2-vBeqzr">are the future because of the <br />inherent security benefits</span>
        </div>
        <div class="our-on-chain-solutio-IQUIuZ3 montserrat-semi-bold-ebony-clay-14px">
        Our blockchain-based approach leverages the added security benefits of sending monies and payment metadata over the same secure system
        </div>
        <a href="/#/contact">
        <div class="frame-134-IQUIuZ">
          <div class="learn-more-oO60f0 montserrat-bold-eerie-black-14px">LEARN MORE</div>
        </div>
        </a>
        <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
        <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
        <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
        <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
        <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
        <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
        <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
          <img
            class="kisspng-clip-art-cit-vMHBtP"
            src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
          />
          <div class="group-101-vMHBtP">
            <img class="vector-4zDvQN" src="img/homepage/vector-26@2x.png" />
            <img class="vector-7a4eDp" src="img/homepage/vector-27@2x.png" />
            <img class="vector-aVzPZM" src="img/homepage/vector-28@2x.png" />
            <img class="vector-bbHgiR" src="img/homepage/vector-29@2x.png" />
            <img class="vector-cj5ELa" src="img/homepage/vector-30@2x.png" />
          </div>
        </div>
        <div class="uiwsetting-IQUIuZ">
          <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
            <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
            <div class="ellipse-16-kr4CWH"></div>
          </div>
          <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
        </div>
        <img class="arrow-3-IQUIuZ animate-enter10" show-on-scroll src="img/homepage/arrow-3@2x.png" />
        <img class="arrow-5-IQUIuZ animate-enter11" show-on-scroll src="img/homepage/arrow-5@2x.png" />
        <img class="arrow-2-IQUIuZ animate-enter12" show-on-scroll src="img/homepage/arrow-2@2x.png" />
        <img class="arrow-1-IQUIuZ animate-enter13" show-on-scroll src="img/homepage/arrow-1@2x.png" />
        <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
        <img class="x3-IQUIuZ1" src="img/homepage/3@2x.png" />
        <img class="group-IQUIuZ animate-enter14" src="img/homepage/group@1x.png" />
        <img
          class="eos-iconsblockchain-IQUIuZ1 animate-enter14"
          show-on-scroll
          src="img/homepage/eos-icons-blockchain-1@1x.png"
        />
        <div class="carbonapi-1-IQUIuZ" show-on-scroll>
          <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
          <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
          <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
        </div>
        <img class="x2-IQUIuZ1" src="img/homepage/2@1x.png" />
        <img class="arrow-4-IQUIuZ animate-enter16" show-on-scroll src="img/homepage/arrow-4@2x.png" />
        <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
        <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
        
      </div>
                  </TabPanel>
                  </Tabs>
      
      
      
     
      
      <div class="platform-section-zYNucu" id="platform-section">
        <div class="a-flexible-cross-bor-ukK2kV montserrat-extra-bold-white-36px animate-enter18" show-on-scroll>
          <span class="span0-MPLrMf">A flexible cross-border payment solution<br /></span
          ><span class="span1-MPLrMf">expanding its international reach</span>
        </div>
        <div class="group-98-ukK2kV">
          <div class="servicing-internatio-hKfoR6 montserrat-bold-ebony-clay-14px">
            Servicing international remittance corridors in high-volume regions with traditionally burdensome costs and
            regulations
          </div>
          <div class="our-network-is-expan-hKfoR6 montserrat-bold-ebony-clay-14px">
            Our network is expanding as we develop new integrations and financial relationships
          </div>
          <div class="whether-fiat-to-fiat-hKfoR6 montserrat-bold-ebony-clay-14px">
            Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude
            of B2B and B2C remittance use cases
          </div>
          <div class="settling-payments-mo-hKfoR6 montserrat-bold-ebony-clay-14px">
            Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
          </div>
        </div>
        <img class="group-102-ukK2kV animate-enter19" show-on-scroll src="img/homepage/group-102@2x.svg" />
        <img class="line-15-ukK2kV" src="img/homepage/line-15@2x.png" />
        <img class="group-128-ukK2kV" src="img/homepage/group-128@1x.png" />
      </div>
      <div class="section-3-zYNucu">
        <img class="section-3-hLpjsq" src="img/homepage/section-3@1x.png" />
        <img class="asset-1bg1-1-1-hLpjsq" src="img/homepage/asset-1bg1-1-1@1x.png" />
        <img class="asset-1-1-hLpjsq" src="img/homepage/asset-1-1@1x.png" />
        <a href="/#/contact">
        <div class="button-hLpjsq">
          <div class="learn-more-UCT1KW montserrat-bold-eerie-black-14px">LEARN MORE</div>
        </div>
        </a>
        <div class="group-97-hLpjsq">
          <div class="our-api-based-platfo-kSsxZv">
            Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
            With that in mind, we can offfer&nbsp;&nbsp;bespoke solutions for MSB partners
          </div>
          <div class="in-short-we-are-buil-kSsxZv">
            In short, we are building a team to develop solutions across a range of use cases, where traditional payment
            rails come up short for small and medium size business with thorny cross-border remittance needs
          </div>
        </div>
        <div class="group-106-hLpjsq">
          <div class="servicing-a-variety-1TtheY montserrat-extra-bold-white-36px animate-enter20">
            <span class="span0-GtZLxa">Servicing a variety of cross-border payment use cases, </span
            ><span class="span1-GtZLxa montserrat-extra-bold-white-36px-2">while adapting to customer needs</span>
          </div>
        </div>
      </div>
      <img class="rectangle-92-zYNucu" src="img/homepage/rectangle-92@1x.png" />
      <div class="group-99-zYNucu">
        <div class="our-remittance-api-s-h3fqsu montserrat-extra-bold-white-36px animate-enter21" show-on-scroll>
          <span class="span0-nxQf97 montserrat-extra-bold-white-36px-2">Our remittance API </span
          ><span class="span1-nxQf97">seamlessly connects customers to a suite of multi-chain payment tools</span>
        </div>
        <a href="/#/contact">
        <div class="rectangle-108-h3fqsu smart-layers-pointers">
        <div class="learn-more-h3fqsu montserrat-bold-ebony-clay-14px">LEARN MORE</div>
        </div>
        </a>
      </div>
      <div class="group-104-zYNucu">
        
        <img class="vector-5-c0Knzr" src="img/homepage/vector-5-1@1x.png" />
        <img class="vector-6-c0Knzr" src="img/homepage/vector-6-1@2x.png" />
        <img class="vector-7-c0Knzr" src="img/homepage/vector-7-1@2x.png" />
        <Tabs>
                  <TabList>

                      <Tab>
                      <div class="rectangle-110-c0Knzr smart-layers-pointers border-1px-black-2">
                        <div class="smart-layers-pointers bp1-animate-enter22" />
                        <div class="code-c0Knzr montserrat-bold-ebony-clay-14px">Code</div>
                      </div>
                    </Tab>

                      <Tab>
                      <div class="rectangle-111-c0Knzr smart-layers-pointers border-1px-black-2">
                        <div class="smart-layers-pointers bp1-animate-enter22" />
                        <div class="get-fx-rate-c0Knzr montserrat-bold-ebony-clay-14px">Get FX Rate</div>
                    </div>
                    </Tab>

                      <Tab>
                      <div class="rectangle-112-c0Knzr smart-layers-pointers border-1px-black-2">
                        <div class="smart-layers-pointers bp1-animate-enter22" />
                         <div class="get-price-c0Knzr montserrat-bold-ebony-clay-14px">Get Price</div>
                      </div>
                    </Tab>

                  </TabList>

                  <TabPanel>
                  <img class="api-async-c0Knzr animate-enter22" show-on-scroll src={first_image} />
                  </TabPanel>

                  <TabPanel>
                  <img class="api-async-c0Knzr animate-enter22" show-on-scroll src={second_image} />
                  </TabPanel>

                  <TabPanel>
                  <img class="api-async-c0Knzr animate-enter22" show-on-scroll src={third_image} />
                  </TabPanel>

                </Tabs>
        
        
       
      </div>
      <div class="bottom-texts-zYNucu">
        <div class="our-api-architecture-aBc0W1 montserrat-bold-ebony-clay-14px">
          Our API architecture follows latest technologies and code standards to be robust.
        </div>
        <div class="robust-aBc0W1 montserrat-bold-ebony-clay-18px">Robust</div>
        <div class="scalable-aBc0W1 montserrat-bold-ebony-clay-18px">Scalable</div>
        <div class="secure-aBc0W1 montserrat-bold-ebony-clay-18px">Secure</div>
        <div class="serve-millions-of-us-aBc0W1 montserrat-bold-ebony-clay-14px">
          Serve millions of users and clients worldwide with an easy integration of our API.
        </div>
        <div class="following-latest-sec-aBc0W1 montserrat-bold-ebony-clay-14px">
          Following latest security standards, tested by time, our API is ready to handle million transactions per sec.
        </div>
      </div>
      <div id="partners" class="section-5-zYNucu">
        <img class="section-5-ZmCudT" src="img/homepage/section-5@1x.png" />
        <div class="partnerships-ZmCudT">
          <div class="rectangle-91-5wTBPE"></div>
          <img class="line-2-5wTBPE" src="img/homepage/line-2@1x.png" />
          <div class="group-100-5wTBPE">
            <div class="group-44-mivLU6">
              <div class="artboard-1-1-g5uSpk">
                <img class="bottom_-ring-DVJBLo" src="img/homepage/bottom-ring@2x.png" />
                <img class="top_-ring-DVJBLo" src="img/homepage/top-ring@2x.png" />
                <img class="rings_-overlap-DVJBLo" src="img/homepage/rings-overlap@2x.png" />
              </div>
              <div class="rippl-g5uSpk">
                <img class="vector-xsjmk9" src="img/homepage/vector-35@2x.png" />
                <img class="vector-NvxEFn" src="img/homepage/vector-36@2x.png" />
                <img class="vector-qwgDDp" src="img/homepage/vector-37@2x.png" />
                <img class="vector-jfLCTN" src="img/homepage/vector-38@2x.png" />
                <img class="vector-7GW01x" src="img/homepage/vector-39@2x.png" />
                <img class="vector-LpMtpk" src="img/homepage/vector-40@2x.png" />
                <img class="vector-0jSUdx" src="img/homepage/vector-41@2x.png" />
              </div>
              <div class="celo-g5uSpk">CELO</div>
            </div>
            <img class="group-45-mivLU6" src="img/group-partnerships.png" />
          </div>
          <div class="we-are-fortunate-to-5wTBPE montserrat-medium-white-14px">
            We are fortunate to be parterned with the following leaders in our space and global influencers of financial
            technology:
          </div>
          <div  class="partners-5wTBPE">Partners</div>
        </div>
      </div>
      <div class="footer-zYNucu">
        <div class="top-bUVegb">
          <div class="rectangle-40-1xViFa"></div>
          <div class="contact-us-1xViFa">
            <a href="/#/contact"> 
              <div class="rectangle-1-yTZA7h smart-layers-pointers">
                <div class="contact-us-yTZA7h montserrat-bold-white-14px">CONTACT US</div>
              </div>
            </a>
          </div>
          <div class="to-learn-more-about-send-friend-1xViFa valign-text-middle montserrat-bold-white-32px">
            <span
              ><span class="span0-FBAgGT montserrat-bold-white-32px-2">To learn more about</span
              ><span class="span1-FBAgGT"> SendFriend</span>
            </span>
          </div>
        </div>
        <img class="asset-1bg1-1-2-bUVegb" src="img/homepage/asset-1bg1-1-2-1@2x.png" />
        <HashLink smooth to="#top">
        <div class="logo-menu-bUVegb"><img class="logo_menu-2-LDb6iG" src="img/homepage/logo-menu-2-3@2x.png" /></div>
        </HashLink>
        <img class="line-1-bUVegb" src="img/homepage/line-1-1@1x.png" />
        <div class="x2021-send-friend-all-rights-reserved-bUVegb montserrat-medium-white-14px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="socials-bUVegb">
          <div class="x-m9BhFT montserrat-medium-white-14px">|</div>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="linked-in-m9BhFT montserrat-medium-white-14px">LinkedIn</div> </a
          ><a href="https://twitter.com/sendfriendinc" target="_blank"
            ><div class="twitter-m9BhFT montserrat-medium-white-14px">Twitter</div> </a
          ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div class="facebook-m9BhFT montserrat-medium-white-14px">Facebook</div> </a
          ><a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="x-84xXmO montserrat-medium-white-14px">|</div>
          </a>
        </div>
      </div>
    </div>

        <div class="mobile-homepage screen">
      <img class="slider-homepage-1-qujsfd bp2-animate-enter1" src="img/slider-homepage-1@1x.jpg" />
      <div class="rectangle-126-qujsfd"></div>
      <div class="header-qujsfd">
        <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');">
          <div class="hamburger-smneFN">
            <img class="vector-16-y8AOCp" src="img/vector-16-1@2x.svg" />
            <img class="vector-17-y8AOCp" src="img/vector-16-1@2x.svg" /> 
            <img class="vector-18-y8AOCp" src="img/vector-16-1@2x.svg" />
          </div>
        </a>
        <div id="overlay-mobile-menu" class="overlay" style={{minHeight: '5881px'}}>
                 <div class="container-center-horizontal">
                     <div class="mobile-menu screen">
                         <a href="javascript:HideOverlay('mobile-menu', 'animate-disappear');">
                            <div class="close-jxzQz0">
                            <img class="line-17-6rcJjs" src="img/line-17-1@2x.svg" />
                            <img class="line-18-6rcJjs" src="img/line-18-1@2x.svg" />
                            </div>
                        </a>
                        
                        <Link smooth to="/#platform-section" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                            <div class="platform-jxzQz0 montserrat-bold-white-8px">Platform</div>
                        </Link>
                        <Link smooth to="/#partners" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                            <div class="partnership-jxzQz0 montserrat-bold-white-8px">Partnership</div>
                        </Link>
                        <div class="dropdown company-jxzQz0">
                            <div class="dropbtn  montserrat-bold-white-8px">Company &#42780;</div>
                            <div class="dropdown-content">
                            <Link to="/history">History</Link>
                            <Link to="/leadership">
                            Leadership</Link>
                            <Link to="/#/contact">Career</Link>
                            </div>
                        </div>
                        <Link to="/contact" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                            <div class="contact-jxzQz0 montserrat-bold-white-8px"> 
                            Contact
                            </div>
                        </Link>
                        <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
                            <div class="login-button-mobile-jxzQz0">
                            <div class="group-123-tg1hNG">
                                <div class="rectangle-100-UNPDgx smart-layers-pointers"></div>
                                <div class="login-UNPDgx montserrat-bold-white-8px">LOGIN</div>
                            </div>
                            </div>
                        </a>
                
                        </div>
                    </div>
                    </div>
        <div class="logo-smneFN">
          <div class="frame-131-oxZ3QX"><img class="logo_menu-2-ILoGHQ" src="img/logo-menu-2@2x.png" /></div>
        </div>
      </div>
      
      <div class="faster-cheaper-multi-qujsfd bp2-animate-enter2">
        <span class="span0-GBW4Tf">Faster, Cheaper<br />Multi-Chain<br />Payments </span
        ><span class="span1-GBW4Tf montserrat-extra-bold-caribbean-green-30px">Service.</span>
      </div>
      <div class="we-are-cheaper-faste-qujsfd montserrat-semi-bold-white-16px bp2-animate-enter3" show-on-scroll>
        We are cheaper, faster, and more reliable and secure.
      </div>
      <div class="contact-us-qujsfd bp2-animate-enter4" show-on-scroll>
        <a href="/#/contact">
        <div class="rectangle-1-kXqD6c smart-layers-pointers"></div>
        <div class="contact-us-kXqD6c valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </a>
      </div>
      <img class="rectangle-106-qujsfd" src="img/rectangle-106-1@1x.png" />
      
      <div id="platform-section" class="a-flexible-cross-bor-qujsfd montserrat-extra-bold-white-21px bp2-animate-enter16" show-on-scroll>
        <span class="span0-okPgZq montserrat-extra-bold-caribbean-green-21px"
          >A flexible cross-border payment solution<br /></span
        ><span class="span1-okPgZq montserrat-extra-bold-ebony-clay-21px">expanding its international reach</span>
      </div>
      <div class="servicing-internatio-qujsfd montserrat-bold-ebony-clay-12px">
        Servicing international remittance corridors in high-volume regions with traditionally burdensome costs and
        regulations
      </div>
      <div class="our-network-is-expan-qujsfd montserrat-bold-ebony-clay-12px">
        Our network is expanding as we develop new integrations and financial relationships
      </div>
      <img class="left_image-1-qujsfd" src="img/left-image-1@2x.png" />
      <div class="settling-payments-mo-qujsfd montserrat-bold-ebony-clay-12px">
        Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
      </div>
      <img class="line-15-qujsfd" src="img/line-15@2x.png" />
      <img class="right_image-1-qujsfd" src="img/right-image-1@2x.png" />
      <div class="whether-fiat-to-fiat-qujsfd montserrat-bold-ebony-clay-12px">
        Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude of
        B2B and B2C remittance use cases
      </div>
      <img class="rectangle-124-qujsfd" src="img/rectangle-124-1@1x.png" />
      <div class="group-122-qujsfd bp2-animate-enter17" show-on-scroll>
        <HashLink to="/contact">
        <div class="rectangle-1-0LGubN smart-layers-pointers"></div>
        <div class="learn-more-0LGubN valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </HashLink>
      </div>
      <div class="servicing-a-variety-qujsfd valign-text-middle montserrat-extra-bold-white-21px bp2-animate-enter18">
        <span
          ><span class="span0-UWyt2t montserrat-extra-bold-caribbean-green-21px"
            >Servicing a variety of cross-border payment use cases, </span
          ><span class="span1-UWyt2t montserrat-extra-bold-white-21px-2">while adapting to customer needs</span>
        </span>
      </div>
      <div class="our-api-based-platfo-qujsfd">
        Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools. With
        that in mind, we can offfer&nbsp;&nbsp;bespoke solutions for MSB partners
      </div>
      <div class="in-short-we-are-buil-qujsfd">
        In short, we are building a team to develop solutions across a range of use cases, where traditional payment
        rails come up short for small and medium size business with thorny cross-border remittance needs
      </div>
      <img class="section-4-nifty-1-qujsfd" src="img/homepage/asset-1-1@1x.png" />
      <div class="rectangle-42-qujsfd"></div>
      <img class="rectangle-92-qujsfd" src="img/rectangle-92@1x.png" />
      <div class="our-remittance-api-s-qujsfd montserrat-extra-bold-white-21px bp2-animate-enter19" show-on-scroll>
        <span class="span0-R3hwcY montserrat-extra-bold-white-21px-2">Our Remittance API </span
        ><span class="span1-R3hwcY montserrat-extra-bold-ebony-clay-21px"
          >Seamlessly Connects Customers to a Suite of Multi-Chain Payment Tools</span
        >
      </div>
      <div class="tabs-qujsfd">
        <img class="vector-5-LkwvPL" src="img/vector-5-1@2x.png" />
        <img class="vector-6-LkwvPL" src="img/vector-6-1@2x.png" />
        <img class="vector-7-LkwvPL" src="img/vector-7-1@2x.png" />
        <Tabs>
            <TabList>
              <Tab>
              <div class="code-LkwvPL">
                
                <div class="code-rpFmxG valign-text-middle">Code</div>
              </div>
              </Tab>
              <Tab>
              <div class="get-fx-LkwvPL">
               
                <div class="get-fx-rate-O4lNUx valign-text-middle">Get FX Rate</div>
              </div>
              </Tab>
              <Tab>
              <div class="get-price-LkwvPL">
                
                <div class="get-price-kUWRox valign-text-middle">Get Price</div>
              </div>
              </Tab>
            </TabList>
            <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img class="api-async-cdudrr bp2-animate-enter20" show-on-scroll src={first_image}  />
        </div>
            </TabPanel>
            <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img class="api-async-cdudrr bp2-animate-enter20" show-on-scroll src={second_image} />
        </div>
            </TabPanel>
            <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img class="api-async-cdudrr bp2-animate-enter20" show-on-scroll src={third_image}  />
        </div>
            </TabPanel>
          </Tabs>
        
        
       
       
      </div>
      <div class="bottom-texts-qujsfd">
        <div class="our-api-architecture-cvev6f montserrat-bold-ebony-clay-12px">
          Our API architecture follows latest technologies and code standards to be robust.
        </div>
        <div class="robust-cvev6f montserrat-bold-ebony-clay-16px">Robust</div>
        <div class="secure-cvev6f montserrat-bold-ebony-clay-16px">Secure</div>
        <div class="following-latest-sec-cvev6f montserrat-bold-ebony-clay-12px">
          Following latest security standards, tested by time, our API is ready to handle million transactions per sec.
        </div>
        <div class="scalable-cvev6f montserrat-bold-ebony-clay-16px">Scalable</div>
        <div class="serve-millions-of-us-cvev6f montserrat-bold-ebony-clay-12px">
          Serve millions of users and clients world wide with an easy integration of our API.
        </div>
      </div>
      <div id="partners" class="partnerships-qujsfd">
        <div class="rectangle-91-RBdLCu"></div>
        <img class="line-2-RBdLCu" src="img/line-2@2x.png" />
        <div class="group-100-RBdLCu">
          <div class="group-44-nrzUja">
            <div class="artboard-1-1-vVV7dw">
              <img class="bottom_-ring-ZLM6y5" src="img/bottom-ring-2@2x.png" />
              <img class="top_-ring-ZLM6y5" src="img/top-ring-2@2x.png" />
              <img class="rings_-overlap-ZLM6y5" src="img/rings-overlap-2@2x.png" />
            </div>
            <div class="rippl-vVV7dw">
              <img class="vector-8Jmrad" src="img/homepage/vector-35@2x.png" />
              <img class="vector-zQfLsx" src="img/homepage/vector-36@2x.png" />
              <img class="vector-nAYXPr" src="img/homepage/vector-37@2x.png" />
              <img class="vector-UExn7f" src="img/homepage/vector-38@2x.png" />
              <img class="vector-DdwQzm" src="img/homepage/vector-39@2x.png" />
              <img class="vector-4yxsnS" src="img/homepage/vector-40@2x.png" />
              <img class="vector-h8WzEb" src="img/homepage/vector-41@2x.png" />
            </div>
            <img class="celo-vVV7dw" src="img/celo@2x.png" />
            <HashLink smooth to="#top">
            <img class="logo_footer-1-vVV7dw" src="img/logo-footer-1@2x.png" />
            </HashLink>
          </div>
          <div class="group-45-nrzUja">
            <img class="vector-nW5wWj" src="img/homepage/vector-71@2x.png" />
            <img
              class="d-au1-v-vb-visgik1-y-nW5wWj"
              src="img/dau1vvbvisgik1yviznyo4qx7gm1506515421272-200x200-1@2x.png"
            />
            <img class="vector-Hygbyv" src="img/homepage/group-45@1x.png" />
            <img class="european-funds-1-nW5wWj" src="img/european-funds-1-1@2x.png" />
            <img class="en-logo-1-nW5wWj" src="img/enlogo-1-2@2x.png" />
            <img class="knick-capital-1-nW5wWj" src="img/knick-capital-1-2@2x.png" />
            <img class="coins-ph-1-nW5wWj" src="img/coins-ph-1-2@2x.png" />
            <img
              class="barclays_-accelerator_-logo_16_9medium-1-nW5wWj"
              src="img/barclays-accelerator-logo-16-9-medium-1-2@2x.png"
            />
            <img class="evolve-1-nW5wWj" src="img/evolve-1-1@2x.png" />
          </div>
        </div>
        <div class="we-are-fortunate-to-RBdLCu">
          We are fortunate to be parterned with the following leaders in our space and global influencers of financial
          technology:
        </div>
        <div class="partners-RBdLCu montserrat-extra-bold-caribbean-green-21px">Partners</div>
      </div>
      <div class="send-friend-qujsfd montserrat-bold-caribbean-green-18px bp2-animate-enter21" show-on-scroll>
        SendFriend
      </div>
      <div class="footer-qujsfd">
        <div class="rectangle-89-pj8Nh2"></div>
        <div class="rectangle-40-pj8Nh2"></div>
        <div class="to-learn-more-about-send-friend-pj8Nh2 valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span class="span0-P9XVYF montserrat-bold-white-14px">To learn more about</span
            ><span class="span1-P9XVYF montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <img class="line-1-pj8Nh2" src="img/line-1@2x.png" />
        <img class="asset-1bg1-1-2-pj8Nh2" src="img/asset-1bg1-1-2@2x.png" />
        <div class="x-pj8Nh2 montserrat-medium-white-14px">|</div>
        <div class="x-6tUL0F montserrat-medium-white-14px">|</div>
        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
          ><div class="linked-in-pj8Nh2 montserrat-medium-white-11px">LinkedIn</div> </a
        ><a href="https://twitter.com/sendfriendinc" target="_blank"
          ><div class="twitter-pj8Nh2 montserrat-medium-white-11px">Twitter</div> </a
        ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
          ><div class="facebook-pj8Nh2 montserrat-medium-white-11px">Facebook</div>
        </a>
        <div class="x2021-send-friend-all-rights-reserved-pj8Nh2 montserrat-medium-white-9px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="contact-us-pj8Nh2 bp2-animate-enter22" show-on-scroll>
          <a href="/#/contact">
          <div class="rectangle-1-p9bmKV smart-layers-pointers"></div>
          <div class="contact-us-p9bmKV valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
          </a>
        </div>
        <HashLink smooth to="#top">
        <div class="logo-pj8Nh2">
          <div class="frame-131-kFw7fd"><img class="logo_menu-2-oxgJkC" src="img/logo-menu-2@2x.png" /></div>
        </div>
        </HashLink>
      </div>
      
        <Tabs>
          <TabList>
            <Tab>
      <div class="group-130-qujsfd">
        <div class="rectangle-101-7awJUp smart-layers-pointers">
        <div class="cheaper-7awJUp montserrat-bold-ebony-clay-6px">CHEAPER</div>
        <img class="x4-7awJUp smart-layers-pointers bp2-animate-enter23" src="img/homepage/3@1x.png" />
        </div>
      </div>
      </Tab>

      <Tab>
      <div class="group-131-qujsfd">
        <div class="rectangle-102-7LXeRP smart-layers-pointers">
        <div class="faster-7LXeRP montserrat-bold-ebony-clay-6px">FASTER</div>
        <img class="x5-7LXeRP smart-layers-pointers" src="img/5@2x.png" />
        </div>
      </div>
      </Tab>
      <Tab>
      <div class="group-132-qujsfd">
        <div class="rectangle-103-DYvcOX smart-layers-pointers">
        <div class="multichain-DYvcOX montserrat-bold-ebony-clay-6px">MULTICHAIN</div>

        <img
          class="eos-iconsblockchain-DYvcOX smart-layers-pointers bp2-animate-enter25"
          src="img/homepage/eos-icons-blockchain@2x.png"
        />
        </div>
      </div>
      </Tab>
      <Tab>
      <div class="group-133-qujsfd">
        <div class="rectangle-104-6HuZwK smart-layers-pointers">
        <div class="more-secure-6HuZwK valign-text-middle montserrat-bold-ebony-clay-6px">MORE SECURE</div>
        <div class="group-6HuZwK smart-layers-pointers">
          <img class="vector-15vxSa" src="img/homepage/vector-13@2x.png" />
          <img class="vector-HFRxah" src="img/homepage/vector-14@2x.png" />
        </div>
        </div>
      </div>
      </Tab>
      </TabList>
      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend delivers a</span
        ><span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> cheaper solution<br /></span
        ><span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px">for transferring money across borders</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/vector-26@2x.png" />
          <img class="vector-PZk3kn" src="img/homepage/vector-27@2x.png" />
          <img class="vector-DX7Xqu" src="img/homepage/vector-28@2x.png" />
          <img class="vector-3gCcwf" src="img/homepage/vector-29@2x.png" />
          <img class="vector-M1NPxG" src="img/homepage/vector-30@2x.png" />
        </div>
      </div>
      <img class="arrow-3-qujsfd bp2-animate-enter7" show-on-scroll src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd bp2-animate-enter8" show-on-scroll src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd bp2-animate-enter9" show-on-scroll src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd bp2-animate-enter10" show-on-scroll src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd bp2-animate-enter11" show-on-scroll src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/group@1x.png" /></div>
      <img
        class="eos-iconsblockchain-qujsfd bp2-animate-enter12"
        show-on-scroll
        src="img/eos-icons-blockchain@2x.png"
      />
      <div class="carbonapi-1-qujsfd bp2-animate-enter13" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/2@1x.png" />
      <img class="blockchain-1-qujsfd bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd">
        <img class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-2-qujsfd">
        <img class="vector-bUpblW" src="img/homepage/vector-15@2x.png" />
        <img class="vector-ZTqkXo" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-3-qujsfd">
        <img class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-4-qujsfd">
        <img class="vector-NBCqUF" src="img/homepage/vector-15@2x.png" />
        <img class="vector-hh7cSq" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="frame-132-qujsfd">
        <div class="lower-fx-costs-y3OOEg montserrat-semi-bold-ebony-clay-12px">Lower FX costs</div>
        <div class="fewer-correspondent-y3OOEg montserrat-semi-bold-ebony-clay-12px">
          Fewer correspondent and intermediary banks mean lower fees
        </div>
        <div class="no-pre-funding-burden-y3OOEg montserrat-semi-bold-ebony-clay-12px">No pre-funding burden</div>
        <div class="access-to-a-least-co-y3OOEg montserrat-semi-bold-ebony-clay-12px">
          Access to a least-cost routing AI/ML algorithm to optimally select payment route via our multi-chain network
        </div>
      </div>
      <div class="our-on-chain-solutio-qujsfd">
        Our on-chain solutions avoid traditional payment rails that carry high FX and other transaction fees. In short,
        we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective settlement
      </div>
      <div class="group-121-qujsfd bp2-animate-enter15" show-on-scroll>
        <a href="/#/contact">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </a>
      </div>
      </TabPanel>

      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend offers a</span>
        <span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> speed advantage<br /></span>
        <span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px">to traditional payment rails</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/vector-26@2x.png" />
          <img class="vector-PZk3kn" src="img/homepage/vector-27@2x.png" />
          <img class="vector-DX7Xqu" src="img/homepage/vector-28@2x.png" />
          <img class="vector-3gCcwf" src="img/homepage/vector-29@2x.png" />
          <img class="vector-M1NPxG" src="img/homepage/vector-30@2x.png" />
        </div>
      </div>
      <img class="arrow-3-qujsfd bp2-animate-enter7" show-on-scroll src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd bp2-animate-enter8" show-on-scroll src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd bp2-animate-enter9" show-on-scroll src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd bp2-animate-enter10" show-on-scroll src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd bp2-animate-enter11" show-on-scroll src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/group@1x.png" /></div>
      <img
        class="eos-iconsblockchain-qujsfd bp2-animate-enter12"
        show-on-scroll
        src="img/eos-icons-blockchain@2x.png"
      />
      <div class="carbonapi-1-qujsfd bp2-animate-enter13" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/2@1x.png" />
      <img class="blockchain-1-qujsfd bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd">
        <img class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-2-qujsfd1">
        <img class="vector-bUpblW" src="img/homepage/vector-15@2x.png" />
        <img class="vector-ZTqkXo" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-3-qujsfd2">
        <img class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-4-qujsfd2">
        <img class="vector-NBCqUF" src="img/homepage/vector-15@2x.png" />
        <img class="vector-hh7cSq" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="frame-132-qujsfd">
        <div class="lower-fx-costs-y3OOEg montserrat-semi-bold-ebony-clay-12px">Near-instant settlement</div>
        <div class="fewer-correspondent-y3OOEg montserrat-semi-bold-ebony-clay-12px">
        Blockchain-enabled payments are inherently faster, avoiding cumbersome traditional intermediaries
        </div>
        <div class="no-pre-funding-burden-y3OOEg1 montserrat-semi-bold-ebony-clay-12px">Money and payment metadata flow over the same systems, ensuring faster settlement</div>
        <div class="access-to-a-least-co-y3OOEg2 montserrat-semi-bold-ebony-clay-12px">
        For off-chain solutions, we leverage blockchain to route payment metadata faster
        </div>
      </div>
      <div class="our-on-chain-solutio-qujsfd">
      For off-chain solutions, we leverage blockchain to route payment metadata faster
      </div>
      <div class="group-121-qujsfd bp2-animate-enter15" show-on-scroll>
        <a href="/#/contact">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </a>
      </div>
      </TabPanel>

      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend is building
</span>
        <span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> integrations<br /></span>
        <span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px">to a multitude of blockchain-based
payment systems</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/vector-26@2x.png" />
          <img class="vector-PZk3kn" src="img/homepage/vector-27@2x.png" />
          <img class="vector-DX7Xqu" src="img/homepage/vector-28@2x.png" />
          <img class="vector-3gCcwf" src="img/homepage/vector-29@2x.png" />
          <img class="vector-M1NPxG" src="img/homepage/vector-30@2x.png" />
        </div>
      </div>
      <img class="arrow-3-qujsfd bp2-animate-enter7" show-on-scroll src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd bp2-animate-enter8" show-on-scroll src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd bp2-animate-enter9" show-on-scroll src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd bp2-animate-enter10" show-on-scroll src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd bp2-animate-enter11" show-on-scroll src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/group@1x.png" /></div>
      <img
        class="eos-iconsblockchain-qujsfd bp2-animate-enter12"
        show-on-scroll
        src="img/eos-icons-blockchain@2x.png"
      />
      <div class="carbonapi-1-qujsfd bp2-animate-enter13" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/2@1x.png" />
      <img class="blockchain-1-qujsfd bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd3">
        <img class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>

      <div class="check-box-3-qujsfd">
        <img class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>

      <div class="frame-132-qujsfd1">
        
        <div class="fewer-correspondent-y3OOEg montserrat-semi-bold-ebony-clay-12px">
        RippleNet has been our founding partner and fundamental to our initial cross-border remittance success
        </div>
        <div class="access-to-a-least-co-y3OOEg montserrat-semi-bold-ebony-clay-12px">
        We are building out additional blockchain network integrations so that our solution is chain-agnostic and can support lease-cost routing over time
        </div>
      </div>
      <div class="our-on-chain-solutio-qujsfd">
      We aim to offer multiple blockchain-enabled payment routing options depending on the use case, geography, and least-cost routing method
      </div>
      <div class="group-121-qujsfd bp2-animate-enter15" show-on-scroll>
        <a href="/#/contact">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </a>
      </div>
      </TabPanel>

      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend firmly believes that</span>
        <span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> blockchain-based payment methods<br /></span>
        <span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px"> are the future because of the inherent security benefits</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/vector-26@2x.png" />
          <img class="vector-PZk3kn" src="img/homepage/vector-27@2x.png" />
          <img class="vector-DX7Xqu" src="img/homepage/vector-28@2x.png" />
          <img class="vector-3gCcwf" src="img/homepage/vector-29@2x.png" />
          <img class="vector-M1NPxG" src="img/homepage/vector-30@2x.png" />
        </div>
      </div>
      <img class="arrow-3-qujsfd bp2-animate-enter7" show-on-scroll src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd bp2-animate-enter8" show-on-scroll src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd bp2-animate-enter9" show-on-scroll src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd bp2-animate-enter10" show-on-scroll src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd bp2-animate-enter11" show-on-scroll src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/group@1x.png" /></div>
      <img
        class="eos-iconsblockchain-qujsfd bp2-animate-enter12"
        show-on-scroll
        src="img/eos-icons-blockchain@2x.png"
      />
      <div class="carbonapi-1-qujsfd bp2-animate-enter13" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/2@1x.png" />
      <img class="blockchain-1-qujsfd bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
      
      
      <div class="our-on-chain-solutio-qujsfd4">
      Our blockchain-based approach leverages the added security benefits of sending monies and payment metadata over the same secure system
      </div>
      <div class="group-121-qujsfd1 bp2-animate-enter15" show-on-scroll>
        <a href="/#/contact">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </a>
      </div>
      </TabPanel>
      </Tabs>

    </div>
        {/* <div class="container-center-horizontal">
        <div class="iphone-8-1 screen">
        <div class="frame-8-TZ6asu">
          <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');">
            <div class="hamburger-8LCNNa">
              <img class="vector-16-21wlxZ" src="img/vector-16-1@2x.svg" />
              <img class="vector-17-21wlxZ" src="img/vector-16-1@2x.svg" />
              <img class="vector-18-21wlxZ" src="img/vector-16-1@2x.svg" /></div>
              </a>
        </div>
        <img class="slider-homepage-1-TZ6asu bp2-animate-enter" src="img/slider-homepage-1-1@1x.jpg" />
        <div class="faster-cheaper-multi-TZ6asu bp2-animate-enter1">
          <span class="span0-SlmvD4">Faster, Cheaper<br />Multi-Chain<br />Payments </span
          ><span class="span1-SlmvD4">Service.</span>
        </div>
        <div class="send-friend-TZ6asu bp2-animate-enter2" show-on-scroll>SendFriend</div>
        <div class="we-are-cheaper-faste-TZ6asu montserrat-semi-bold-white-16px bp2-animate-enter3" show-on-scroll>
          We are cheaper, faster, and more reliable and secure.
        </div>
        <a href="/#/contact">
        <div class="contact-us-TZ6asu bp2-animate-enter4" show-on-scroll>
          <div class="rectangle-1-BIxiSr smart-layers-pointers"></div>
          <div class="contact-us-BIxiSr valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </div>
        </a>
        <Tabs>

          <TabList>

            <Tab>
              <div class="rectangle-101-Ap9U61 smart-layers-pointers border-1px-black-2">
                <img class="x3-Ap9U61 smart-layers-pointers bp1-animate-enter22" src={cheaper_img} />
                <div class="cheaper-Ap9U61">CHEAPER</div>
              </div>
            </Tab>

            <Tab>
            <div class="rectangle-102-Ap9U61 smart-layers-pointers border-1px-black-2">
              <div class="faster-Ap9U61 montserrat-bold-ebony-clay-16px">FASTER</div>
              <img class="x2-Ap9U61 smart-layers-pointers bp1-animate-enter23" src={faster_img} />
            </div>
            </Tab>

            <Tab>
            <div class="rectangle-103-Ap9U61 smart-layers-pointers border-1px-black-2">
              <img class="eos-iconsblockchain-Ap9U61 smart-layers-pointers bp1-animate-enter24" src={multichain_img}/>
              <div class="multichain-Ap9U61 montserrat-bold-ebony-clay-16px">MULTICHAIN</div>
            </div>
            </Tab>

            <Tab>
            <div class="rectangle-104-Ap9U61 smart-layers-pointers border-1px-black-2">
              <div class="more-secure-Ap9U61 montserrat-bold-ebony-clay-16px">MORE SECURE</div>
              <img class="group-Ap9U61 smart-layers-pointers" src={moresecure_img} />
            </div>
            </Tab>

          </TabList>
          
          <TabPanel>
            <img class="rectangle-106-TZ6asu" src="img/rectangle-106-1@1x.svg" />
            <div class="send-friend-delivers-TZ6asu montserrat-extra-bold-white-21px">
              <span class="span0-xvsDj6">SendFriend delivers a</span>
              <span class="span1-xvsDj6 montserrat-extra-bold-white-21px-2"> cheaper method<br /></span>
              <span class="span2-xvsDj6">for transferring money across borders</span>
            </div>
            <div class="secure-TZ6asu montserrat-semi-bold-ebony-clay-10px">Secure</div>
            <div class="multichain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
            <div class="x1-api-connection-TZ6asu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
            <div class="blockchain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
            <div class="cost-effective-TZ6asu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
            <div class="fast-payment-TZ6asu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
            <div class="world-group-TZ6asu bp2-animate-enter5" show-on-scroll>
              <img
                class="kisspng-clip-art-cit-lwl3Gh"
                src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
              />
              <div class="group-101-lwl3Gh">
                <img class="vector-96OmQU" src={section2_group1} />
              </div>
            </div>
            <div class="uiwsetting-TZ6asu">
              <div class="group-122-M00Nhc bp2-animate-enter6" show-on-scroll>
                <img class="vector-8a7rby" src={section2_gear}/>
                <div class="ellipse-16-8a7rby"></div>
              </div>
              <img class="group-48-M00Nhc" src="img/group-48-1@1x.png" />
            </div>
            <img class="arrow-3-TZ6asu bp2-animate-enter7" show-on-scroll src="img/arrow-3-1@2x.svg" />
            <img class="arrow-5-TZ6asu bp2-animate-enter8" show-on-scroll src="img/arrow-5-1@2x.svg" />
            <img class="arrow-2-TZ6asu bp2-animate-enter9" show-on-scroll src="img/arrow-2-1@2x.svg" />
            <img class="arrow-1-TZ6asu bp2-animate-enter10" show-on-scroll src="img/arrow-1-1@2x.svg" />
            <img class="arrow-6-TZ6asu" src="img/arrow-6-1@2x.svg" />
            <img class="x3-TZ6asu" src="img/3@2x.png" />
            <div class="group-TZ6asu"><img class="vector-FChqZe" src={moresecure_img_section2}/></div>
            <img
              class="eos-iconsblockchain-TZ6asu bp2-animate-enter11"
              show-on-scroll
              src="img/eos-icons-blockchain-2@2x.svg"
            />
            <div class="carbonapi-1-TZ6asu bp2-animate-enter12" show-on-scroll>
              <img class="vector-d4HukN" src={api_img} />
            </div>
            <img class="x2-TZ6asu" src={faster_img_section2} />
            <img class="arrow-4-TZ6asu bp2-animate-enter13" show-on-scroll src="img/arrow-4-1@2x.svg" />
            <img class="blockchain-1-TZ6asu bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
            <div class="ant-designcheck-circle-outlined-TZ6asu">
              <img class="vector-yAINcH" src={outlined_circle} />
            </div>
            <div class="ant-designcheck-circle-outlined-kbS05m">
              <img class="vector-pJ0sN4"  src={outlined_circle} />
            </div>
            <div class="ant-designcheck-circle-outlined-TVjoxU">
              <img class="vector-IfaS3y"  src={outlined_circle} />
            </div>
            <div class="ant-designcheck-circle-outlined-3OxLCr">
              <img class="vector-REYIVx"  src={outlined_circle} />
            </div>
            <div class="lower-fx-costs-fewer-TZ6asu">
              Lower FX costs<br /><br />Fewer correspondent and intermediary banks mean lower fees<br /><br />No pre-funding
              burden<br /><br />Access to a least-cost routing AI/ML algorithm to optimally select payment route via our
              multi-chain network
            </div>
            <div class="our-on-chain-solutio-TZ6asu">
              Our on-chain solutions avoid traditional payment rails that carry high FX and other transaction fees. In
              short, we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective
              settlement
            </div>
            <a  href="/#/contact">
        <div class="group-121-TZ6asu bp2-animate-enter15" show-on-scroll>
          <div class="rectangle-1-imPfOu smart-layers-pointers"></div>
          <div class="learn-more-imPfOu valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </div>
        </a>
          </TabPanel>

          <TabPanel><img class="rectangle-106-TZ6asu" src="img/rectangle-106-1@1x.svg" />
            <div class="send-friend-delivers-TZ6asu montserrat-extra-bold-white-21px">
              <span class="span0-xvsDj6">SendFriend offers a</span>
              <span class="span1-xvsDj6 montserrat-extra-bold-white-21px-2"> speed advantage<br /></span>
              <span class="span2-xvsDj6"> to traditional payment rails</span>
            </div>
            <div class="secure-TZ6asu montserrat-semi-bold-ebony-clay-10px">Secure</div>
            <div class="multichain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
            <div class="x1-api-connection-TZ6asu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
            <div class="blockchain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
            <div class="cost-effective-TZ6asu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
            <div class="fast-payment-TZ6asu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
            <div class="world-group-TZ6asu bp2-animate-enter5" show-on-scroll>
              <img
                class="kisspng-clip-art-cit-lwl3Gh"
                src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
              />
              <div class="group-101-lwl3Gh">
                <img class="vector-96OmQU" src={section2_group1} />
              </div>
            </div>
            <div class="uiwsetting-TZ6asu">
              <div class="group-122-M00Nhc bp2-animate-enter6" show-on-scroll>
                <img class="vector-8a7rby" src={section2_gear}/>
                <div class="ellipse-16-8a7rby"></div>
              </div>
              <img class="group-48-M00Nhc" src="img/group-48-1@1x.png" />
            </div>
            <img class="arrow-3-TZ6asu bp2-animate-enter7" show-on-scroll src="img/arrow-3-1@2x.svg" />
            <img class="arrow-5-TZ6asu bp2-animate-enter8" show-on-scroll src="img/arrow-5-1@2x.svg" />
            <img class="arrow-2-TZ6asu bp2-animate-enter9" show-on-scroll src="img/arrow-2-1@2x.svg" />
            <img class="arrow-1-TZ6asu bp2-animate-enter10" show-on-scroll src="img/arrow-1-1@2x.svg" />
            <img class="arrow-6-TZ6asu" src="img/arrow-6-1@2x.svg" />
            <img class="x3-TZ6asu" src="img/3@2x.png" />
            <div class="group-TZ6asu"><img class="vector-FChqZe" src={moresecure_img_section2}/></div>
            <img
              class="eos-iconsblockchain-TZ6asu bp2-animate-enter11"
              show-on-scroll
              src="img/eos-icons-blockchain-2@2x.svg"
            />
            <div class="carbonapi-1-TZ6asu bp2-animate-enter12" show-on-scroll>
              <img class="vector-d4HukN" src={api_img} />
            </div>
            <img class="x2-TZ6asu" src={faster_img_section2} />
            <img class="arrow-4-TZ6asu bp2-animate-enter13" show-on-scroll src="img/arrow-4-1@2x.svg" />
            <img class="blockchain-1-TZ6asu bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
            <div class="ant-designcheck-circle-outlined-TZ6asu">
              <img class="vector-yAINcH" src={outlined_circle} />
            </div>
            <div class="ant-designcheck-circle-outlined-kbS05m">
              <img class="vector-pJ0sN4"  src={outlined_circle} />
            </div>
            <div class="ant-designcheck-circle-outlined-TVjoxU1">
              <img class="vector-IfaS3y"  src={outlined_circle} />
            </div>
            <div class="ant-designcheck-circle-outlined-3OxLCr1">
              <img class="vector-REYIVx"  src={outlined_circle} />
            </div>
            <div class="lower-fx-costs-fewer-TZ6asu">
              Near-instant settlement<br /><br />Blockchain-enabled payments are inherently faster, avoiding cumbersome traditional intermediaries<br /><br />
                        Money and payment metadata flow over the same systems, ensuring faster settlement<br /><br />
                        For off-chain solutions, we leverage blockchain to route payment metadata faster
            </div>
            <div class="our-on-chain-solutio-TZ6asu2">
            Both our on- and off-chain solutions leverage nimble systems to settle payments in nearly real-time
            </div>
            <a  href="/#/contact">
        <div class="group-121-TZ6asu bp2-animate-enter15" show-on-scroll>
          <div class="rectangle-1-imPfOu smart-layers-pointers"></div>
          <div class="learn-more-imPfOu valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </div>
        </a>
          </TabPanel>
          <TabPanel><img class="rectangle-106-TZ6asu" src="img/rectangle-106-1@1x.svg" />
            <div class="send-friend-delivers-TZ6asu montserrat-extra-bold-white-21px">
              <span class="span0-xvsDj6">SendFriend is building  </span>
              <span class="span1-xvsDj6 montserrat-extra-bold-white-21px-2">integrations to a multitude of<br /></span>
              <span class="span2-xvsDj6"> blockchain-based payment systems</span>
            </div>
            <div class="secure-TZ6asu montserrat-semi-bold-ebony-clay-10px">Secure</div>
            <div class="multichain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
            <div class="x1-api-connection-TZ6asu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
            <div class="blockchain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
            <div class="cost-effective-TZ6asu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
            <div class="fast-payment-TZ6asu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
            <div class="world-group-TZ6asu bp2-animate-enter5" show-on-scroll>
              <img
                class="kisspng-clip-art-cit-lwl3Gh"
                src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
              />
              <div class="group-101-lwl3Gh">
                <img class="vector-96OmQU" src={section2_group1} />
              </div>
            </div>
            <div class="uiwsetting-TZ6asu">
              <div class="group-122-M00Nhc bp2-animate-enter6" show-on-scroll>
                <img class="vector-8a7rby" src={section2_gear}/>
                <div class="ellipse-16-8a7rby"></div>
              </div>
              <img class="group-48-M00Nhc" src="img/group-48-1@1x.png" />
            </div>
            <img class="arrow-3-TZ6asu bp2-animate-enter7" show-on-scroll src="img/arrow-3-1@2x.svg" />
            <img class="arrow-5-TZ6asu bp2-animate-enter8" show-on-scroll src="img/arrow-5-1@2x.svg" />
            <img class="arrow-2-TZ6asu bp2-animate-enter9" show-on-scroll src="img/arrow-2-1@2x.svg" />
            <img class="arrow-1-TZ6asu bp2-animate-enter10" show-on-scroll src="img/arrow-1-1@2x.svg" />
            <img class="arrow-6-TZ6asu" src="img/arrow-6-1@2x.svg" />
            <img class="x3-TZ6asu" src="img/3@2x.png" />
            <div class="group-TZ6asu"><img class="vector-FChqZe" src={moresecure_img_section2}/></div>
            <img
              class="eos-iconsblockchain-TZ6asu bp2-animate-enter11"
              show-on-scroll
              src="img/eos-icons-blockchain-2@2x.svg"
            />
            <div class="carbonapi-1-TZ6asu bp2-animate-enter12" show-on-scroll>
              <img class="vector-d4HukN" src={api_img} />
            </div>
            <img class="x2-TZ6asu" src={faster_img_section2} />
            <img class="arrow-4-TZ6asu bp2-animate-enter13" show-on-scroll src="img/arrow-4-1@2x.svg" />
            <img class="blockchain-1-TZ6asu bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
            <div class="ant-designcheck-circle-outlined-TZ6asu">
              <img class="vector-yAINcH" src={outlined_circle} />
            </div>

            <div class="ant-designcheck-circle-outlined-TVjoxU2">
              <img class="vector-IfaS3y"  src={outlined_circle} />
            </div>

            <div class="lower-fx-costs-fewer-TZ6asu">
            RippleNet has been our founding partner and fundamental to our initial cross-border remittance success<br /><br />
                      We are building out additional blockchain network integrations so that our solution is chain-agnostic and can support lease-cost routing over time<br /><br />
            </div>
            <div class="our-on-chain-solutio-TZ6asu3">
            We aim to offer multiple blockchain-enabled payment routing options depending on the use case, geography, and least-cost routing method
            </div>
            <a  href="/#/contact">
        <div class="group-121-TZ6asu bp2-animate-enter15" show-on-scroll>
          <div class="rectangle-1-imPfOu smart-layers-pointers"></div>
          <div class="learn-more-imPfOu valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </div>
        </a>
          </TabPanel>
          <TabPanel><img class="rectangle-106-TZ6asu" src="img/rectangle-106-1@1x.svg" />
            <div class="send-friend-delivers-TZ6asu1 montserrat-extra-bold-white-21px">
              <span class="span0-xvsDj6">SendFriend firmly believes that </span>
              <span class="span1-xvsDj6 montserrat-extra-bold-white-21px-2"> blockchain-based payment methods<br /></span>
              <span class="span2-xvsDj6">are the future because of the inherent security benefits</span>
            </div>
            <div class="secure-TZ6asu montserrat-semi-bold-ebony-clay-10px">Secure</div>
            <div class="multichain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
            <div class="x1-api-connection-TZ6asu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
            <div class="blockchain-TZ6asu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
            <div class="cost-effective-TZ6asu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
            <div class="fast-payment-TZ6asu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
            <div class="world-group-TZ6asu bp2-animate-enter5" show-on-scroll>
              <img
                class="kisspng-clip-art-cit-lwl3Gh"
                src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
              />
              <div class="group-101-lwl3Gh">
                <img class="vector-96OmQU" src={section2_group1} />
              </div>
            </div>
            <div class="uiwsetting-TZ6asu">
              <div class="group-122-M00Nhc bp2-animate-enter6" show-on-scroll>
                <img class="vector-8a7rby" src={section2_gear}/>
                <div class="ellipse-16-8a7rby"></div>
              </div>
              <img class="group-48-M00Nhc" src="img/group-48-1@1x.png" />
            </div>
            <img class="arrow-3-TZ6asu bp2-animate-enter7" show-on-scroll src="img/arrow-3-1@2x.svg" />
            <img class="arrow-5-TZ6asu bp2-animate-enter8" show-on-scroll src="img/arrow-5-1@2x.svg" />
            <img class="arrow-2-TZ6asu bp2-animate-enter9" show-on-scroll src="img/arrow-2-1@2x.svg" />
            <img class="arrow-1-TZ6asu bp2-animate-enter10" show-on-scroll src="img/arrow-1-1@2x.svg" />
            <img class="arrow-6-TZ6asu" src="img/arrow-6-1@2x.svg" />
            <img class="x3-TZ6asu" src="img/3@2x.png" />
            <div class="group-TZ6asu"><img class="vector-FChqZe" src={moresecure_img_section2}/></div>
            <img
              class="eos-iconsblockchain-TZ6asu bp2-animate-enter11"
              show-on-scroll
              src="img/eos-icons-blockchain-2@2x.svg"
            />
            <div class="carbonapi-1-TZ6asu bp2-animate-enter12" show-on-scroll>
              <img class="vector-d4HukN" src={api_img} />
            </div>
            <img class="x2-TZ6asu" src={faster_img_section2} />
            <img class="arrow-4-TZ6asu bp2-animate-enter13" show-on-scroll src="img/arrow-4-1@2x.svg" />
            <img class="blockchain-1-TZ6asu bp2-animate-enter14" show-on-scroll src="img/blockchain-1-1@2x.png" />
            
            <div class="our-on-chain-solutio-TZ6asu1">
            Our blockchain-based approach leverages the added security benefits of sending monies and payment metadata over the same secure system
            </div>
            <a  href="/#/contact">
        <div class="group-121-TZ6asu1 bp2-animate-enter15" show-on-scroll>
          <div class="rectangle-1-imPfOu smart-layers-pointers"></div>
          <div class="learn-more-imPfOu valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </div>
        </a>
          </TabPanel>
        </Tabs>
        

        

        <div class="a-flexible-cross-bor-TZ6asu montserrat-extra-bold-white-21px bp2-animate-enter16" show-on-scroll>
          <span class="span0-GsHMgY">A flexible cross-border payment solution<br /></span
          ><span class="span1-GsHMgY">expanding its international reach</span>
        </div>
        <div class="servicing-internatio-TZ6asu montserrat-bold-ebony-clay-12px">
          Servicing international remittance corridors in high-volume regions with traditionally burdensome costs and
          regulations
        </div>
        <div class="our-network-is-expan-TZ6asu montserrat-bold-ebony-clay-12px">
          Our network is expanding as we develop new integrations and financial relationships
        </div>
        <img class="left_image-1-TZ6asu" src="img/left-image-1@2x.png" />
        <div class="settling-payments-mo-TZ6asu montserrat-bold-ebony-clay-12px">
          Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
        </div>
        <img class="line-15-TZ6asu" src="img/line-15-1@2x.svg" />
        <img class="right_image-1-TZ6asu" src="img/right-image-1@2x.svg" />
        <div class="whether-fiat-to-fiat-TZ6asu montserrat-bold-ebony-clay-12px">
          Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude of
          B2B and B2C remittance use cases
        </div>
        <img class="rectangle-124-TZ6asu" src="img/section-5-background-homepage.svg" />
        <a  href="/#/contact">
        <div class="group-122-TZ6asu bp2-animate-enter17" show-on-scroll>
          <div class="rectangle-1-7P4uO2 smart-layers-pointers"></div>
          <div class="learn-more-7P4uO2 valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </div>
        </a>
        <div class="servicing-a-variety-TZ6asu valign-text-middle montserrat-extra-bold-white-21px bp2-animate-enter18">
          <span><span class="span0-JdbhGp">Servicing a variety of cross-border payment use cases, </span>
          <span class="span1-JdbhGp montserrat-extra-bold-white-21px-2">while adapting to customer needs</span>
          </span>
        </div>
        <div class="our-api-based-platfo-TZ6asu">
          Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
          With that in mind, we can offer bespoke solutions for MSB partners
        </div>
        <div class="in-short-we-are-buil-TZ6asu">
          In short, we are building a team to develop solutions across a range of use cases where traditional payment
          rails come up short for small and medium size business with thorny cross-border remittance needs
        </div>
        <img class="section-4-nifty-1-TZ6asu" src="img/section-4-nifty-1@2x.svg" />
        <div class="rectangle-42-TZ6asu"></div>
        <img class="rectangle-92-TZ6asu" src="img/rectangle-92-1@1x.svg" />
        <div class="our-remittance-api-s-TZ6asu montserrat-extra-bold-white-21px bp2-animate-enter19" show-on-scroll>
          <span class="span0-jsb053 montserrat-extra-bold-white-21px-2">Our remittance API </span>
          <span class="span1-jsb053">seamlessly connects customers to a suite of multi-chain payment tools</span>
        </div>

        <div class="tabs-TZ6asu">
          <img class="vector-5-TpxI4K" src="img/vector-5-2@2x.svg" />
          <img class="vector-6-TpxI4K" src="img/vector-6-2@2x.svg" />
          <img class="vector-7-TpxI4K" src="img/vector-7-2@2x.svg" />
          
          <Tabs>
            <TabList>
              <Tab>
                <div class="rectangle-110-c0Knzr smart-layers-pointers border-1px-black-2">
                  <div class="smart-layers-pointers bp1-animate-enter22" />
                  <div class="code-c0Knzr montserrat-bold-white-14px">Code</div>
                </div>
              </Tab>
              <Tab>
                <div class="rectangle-111-c0Knzr smart-layers-pointers border-1px-black-2">
                  <div class="smart-layers-pointers bp1-animate-enter22" />
                  <div class="get-fx-rate-c0Knzr montserrat-bold-ebony-clay-14px">Get FX Rate</div>
                </div>
              </Tab>
              <Tab>
                <div class="rectangle-112-c0Knzr smart-layers-pointers border-1px-black-2">
                  <div class="smart-layers-pointers bp1-animate-enter22" />
                  <div class="get-price-c0Knzr montserrat-bold-ebony-clay-14px">Get Price</div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <div class="image-TpxI4K">
                <div class="rectangle-109-wMX5Ub"></div>
                <img class="api-async-wMX5Ub bp2-animate-enter20" show-on-scroll src="img/api-async-1@2x.png" />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="image-TpxI4K">
                <div class="rectangle-109-wMX5Ub"></div>
                <img class="api-async-wMX5Ub bp2-animate-enter20" show-on-scroll src="img/api-async-1@2x.png" />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="image-TpxI4K">
                <div class="rectangle-109-wMX5Ub"></div>
                <img class="api-async-wMX5Ub bp2-animate-enter20" show-on-scroll src="img/api-async-1@2x.png" />
              </div>
            </TabPanel>
          </Tabs>

        </div>
        <div class="bottom-texts-TZ6asu">
          <div class="our-api-architecture-OWBGC1 montserrat-bold-ebony-clay-12px">
            Our API architecture follows latest technologies and code standards to be robust.
          </div>
          <div class="robust-OWBGC1 montserrat-bold-ebony-clay-16px">Robust</div>
          <div class="secure-OWBGC1 montserrat-bold-ebony-clay-16px">Secure</div>
          <div class="following-latest-sec-OWBGC1 montserrat-bold-ebony-clay-12px">
            Following latest security standards, tested by time, our API is ready to handle million transactions per
            sec.
          </div>
          <div class="scalable-OWBGC1 montserrat-bold-ebony-clay-16px">Scalable</div>
          <div class="serve-millions-of-us-OWBGC1 montserrat-bold-ebony-clay-12px">
            Serve millions of users and clients worldwide with an easy integration of our API.
          </div>
        </div>
        <div class="partnerships-TZ6asu">
          <div class="rectangle-91-LIMP1Y"></div>
          <img class="line-2-LIMP1Y" src="img/line-2-1@2x.svg" />
          <div class="group-100-LIMP1Y">
            <div class="group-44-Fn5SCT">
              <div class="artboard-1-1-CJYd2x">
                <img class="bottom_-ring-t5n1Ov" src="img/bottom-ring-1@2x.svg" />
                <img class="top_-ring-t5n1Ov" src="img/top-ring-1@2x.svg" />
                <img class="rings_-overlap-t5n1Ov" src="img/rings-overlap-1@2x.svg" />
              </div>
              <div class="black-logo-2-CJYd2x">
              <img class="ellipse-9-NWZihp" src={footer_logo} />
                
              </div>
              <div class="rippl-CJYd2x">
                <img class="vector-CgSoA1" src="img/vector-126@2x.svg" />
                <img class="vector-vTyYaj" src="img/vector-127@2x.svg" />
                <img class="vector-S0zfx2" src="img/vector-128@2x.svg" />
                <img class="vector-1sd5Gd" src="img/vector-129@2x.svg" />
                <img class="vector-sgaSVX" src="img/vector-130@2x.svg" />
                <img class="vector-XxUyxl" src="img/vector-131@2x.svg" />
                <img class="vector-dUw7f7" src="img/vector-132@2x.svg" />
              </div>
              <img class="celo-CJYd2x" src="img/celo@2x.svg" />
            </div>
            <img class="group-45-Fn5SCT" src="img/group-45-1@2x.svg" />
          </div>
          <div class="we-are-fortunate-to-LIMP1Y montserrat-medium-white-11px">
            We are fortunate to be parterned with the following leaders in our space and global influencers of financial
            technology:
          </div>
          <div  id="partnerships" class="partnerships-LIMP1Y">Partnerships</div>
        </div>

        <div class="footer-TZ6asu">
          <div class="rectangle-89-cEztxT"></div>
          <div class="x-cEztxT montserrat-medium-white-14px">|</div>
          <div class="x-BixTYo montserrat-medium-white-14px">|</div>
          <div class="text-cEztxT montserrat-medium-white-14px"></div>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="linked-in-cEztxT montserrat-medium-white-11px">LinkedIn</div> </a
          ><a href="https://twitter.com/sendfriendinc" target="_blank"
            ><div class="twitter-cEztxT montserrat-medium-white-11px">Twitter</div> </a
          ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div class="facebook-cEztxT montserrat-medium-white-11px">Facebook</div>
          </a>
          <div class="rectangle-40-cEztxT"></div>
          <img class="learn-more-cEztxT smart-layers-pointers" src="img/learn-more@2x.svg" />
          <div class="to-learn-more-about-send-friend-cEztxT valign-text-middle">
            <span
              ><span class="span0-xXiAio montserrat-bold-white-14px">To learn more about</span
              ><span class="span1-xXiAio"> SendFriend</span>
            </span>
          </div>
          <img class="line-1-cEztxT" src="img/line-1-1@2x.svg" />
          <img class="asset-1bg1-1-2-cEztxT" src="img/asset-1bg1-1-2-1@2x.png" />
          <a href='/#/contact'>
          <div class="group-122-cEztxT bp2-animate-enter21" show-on-scroll>
            <div class="rectangle-1-xNdJvB smart-layers-pointers"></div>
            <div class="contact-us-xNdJvB valign-text-middle">CONTACT US</div>
          </div>
          </a>
          
          <img class="original-logo-cEztxT" src={footer_logo} />
        </div>
        <div class="x2021-send-friend-all-rights-reserved-TZ6asu">© 2021 SendFriend. All Rights Reserved</div>
        <div class="logo-TZ6asu">
          <div class="rectangle-125-kxtf4O"></div>
        
          <a href="#/">
                <img class="original-logo-kxtf4O" src={logo_menu} /></a>
      
         
        </div>
      </div>
        </div> */}
              
              
        </div>
        
        )
        
    }




 
