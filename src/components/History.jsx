import React, {useState} from "react";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './history.css'

export const History = () => {
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
      <input type="hidden" id="anPageName" name="page" value="history" />
      <div class="history screen">
      <img id="leadership" class="rectangle-42-MaQ2GE" src="img/rectangle-42-1@1x.png" />
      <img class="asset-1bg1-1-1-MaQ2GE" src="img/asset-1bg1-1-1@1x.png" />
      <img class="rectangle-106-MaQ2GE" src="img/rectangle-106@1x.png" />
      <div class="team7-MaQ2GE">
      <HashLink smooth to="/leadership#satwik">
        <img class="image-3-lfHTtk smart-layers-pointers" src="img/image-3@2x.png" />
        </HashLink>
        <div class="bio-lfHTtk smart-layers-pointers">
          <div class="rectangle-45-NxFrnF"></div>
          <div class="satwik-seshasai-NxFrnF montserrat-semi-bold-white-16px">Satwik Seshasai</div>
          <div class="director-NxFrnF montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team6-MaQ2GE">
      <HashLink smooth to="/leadership#sandra">
        <img class="image-5-x60cHe smart-layers-pointers" src="img/image-5@2x.png" />
        </HashLink>
        <div class="bio-x60cHe smart-layers-pointers">
          <div class="rectangle-45-u1Pqxx"></div>
          <div class="sandra-ro-u1Pqxx montserrat-semi-bold-white-16px">Sandra Ro</div>
          <div class="director-u1Pqxx montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team5-MaQ2GE">
      <HashLink smooth to="/leadership#will">
        <img class="img_8101-1-1-UJkMtH smart-layers-pointers" src="img/img-8101--1--1-1@2x.png" />
        </HashLink>
        <div class="bio-UJkMtH smart-layers-pointers">
          <div class="rectangle-45-bcVoIv"></div>
          <div class="will-ferrer-bcVoIv montserrat-semi-bold-white-16px">Will Ferrer</div>
          <div class="director-of-operations-and-strategy-bcVoIv montserrat-normal-white-14px">
            Director of Operations and Strategy
          </div>
        </div>
      </div>
      <div class="team4-MaQ2GE">
      <HashLink smooth to="/leadership#rafal">
        <img class="rafal-1-7t5cul smart-layers-pointers" src="img/rafal-1@2x.png" />
        </HashLink>
        <div class="bio-7t5cul smart-layers-pointers">
          <div class="rectangle-45-4lyrRm"></div>
          <div class="rafal-petsch-4lyrRm montserrat-semi-bold-white-16px">Rafal Petsch</div>
          <div class="general-manager-of-polish-operations-4lyrRm montserrat-normal-white-14px">
            General Manager of Polish Operations
          </div>
        </div>
      </div>
      <div class="team2-MaQ2GE">
      <HashLink smooth to="/leadership#roy">
        <img class="image-3-H3vWAl smart-layers-pointers" src="img/image-3-1@2x.png" />
        </HashLink>
        <div class="bio-H3vWAl smart-layers-pointers">
          <div class="rectangle-45-dxCGs5"></div>
          <div class="roy-vivasi-dxCGs5 montserrat-semi-bold-white-16px">Roy Vivasi</div>
          <div class="cofoundercto-dxCGs5 montserrat-normal-white-14px">Cofounder/CTO</div>
        </div>
      </div>
      <div class="team1-MaQ2GE">
      <HashLink smooth to="/leadership#david">
        <img class="image-2-x0uKuI smart-layers-pointers" src="img/image-2@2x.png" />
        </HashLink>
        <div class="bio-x0uKuI smart-layers-pointers">
          <div class="rectangle-45-rMTOpx"></div>
          <div class="david-lighton-rMTOpx montserrat-semi-bold-white-16px">David Lighton</div>
          <div class="founderceo-rMTOpx montserrat-normal-white-14px">Cofounder/CEO</div>
        </div>
      </div>
      <div class="leadership-MaQ2GE montserrat-extra-bold-caribbean-green-36px">Leadership</div>
      <div class="send-friends-evolution-MaQ2GE montserrat-extra-bold-white-36px">
        <span class="span0-DGKJkk montserrat-extra-bold-ebony-clay-36px">SendFriend’s </span
        ><span class="span1-DGKJkk montserrat-extra-bold-caribbean-green-36px">evolution</span>
      </div>
      <div class="group-108-MaQ2GE">
        <img class="rectangle-114-4HT3Ns" src="img/rectangle-114-1@1x.png" />
        <img class="mit-delta-v-1-4HT3Ns" src="img/mit-delta-v-1@2x.png" />
        <div class="rippl-4HT3Ns">
          <img class="vector-sxgOHs" src="img/rippl.svg" />

        </div>
        <img class="vector-4HT3Ns" src="img/vector-15@2x.png" />
        <img
          class="barclays_-accelerator_-logo_16_9medium-1-4HT3Ns"
          src="img/barclays-accelerator-logo-16-9-medium-1@2x.png"
        />
        <img class="line-19-4HT3Ns" src="img/line-19@2x.png" />
        <img class="line-20-4HT3Ns" src="img/line-19@2x.png" />
        <img class="line-21-4HT3Ns" src="img/line-19@2x.png" />
        <img class="line-22-4HT3Ns" src="img/line-19@2x.png" />
        <img class="vector-DYmmhH" src="img/vector-16@2x.png" />
        <img class="knick-capital-1-4HT3Ns" src="img/knick-capital-1@2x.png" />
        <img class="coins-ph-1-4HT3Ns" src="img/coins-ph-1@2x.png" />
        <div class="celo-4HT3Ns">
          <div class="artboard-1-1-RsUDxF">
            <img class="bottom_-ring-IViC0Q" src="img/bottom-ring-1@2x.png" />
            <img class="top_-ring-IViC0Q" src="img/top-ring-1@2x.png" />
            <img class="rings_-overlap-IViC0Q" src="img/rings-overlap-1@2x.png" />
          </div>
          <div class="celo-RsUDxF">CELO</div>
        </div>
        <img class="evolve-4HT3Ns" src="img/evolve@2x.png" />
        <img class="european-funds-4HT3Ns" src="img/european-funds@2x.png" />
        <img class="en-logo-1-4HT3Ns" src="img/enlogo-1@2x.png" />
        <div class="incorporated-in-2017-4HT3Ns montserrat-normal-ebony-clay-14px">
          Incorporated in 2017 within the context of MIT Sloan’s Full-time MBA program.&nbsp;&nbsp;Participated in
          MIT&#39;s delta V NYC summer start-up accelerator
        </div>
        <div class="pivoted-business-mod-4HT3Ns montserrat-normal-ebony-clay-14px">
          Pivoted business model to focus on business-to-business cross-border remittances. Secured European Union
          Growth Funds grant to develop B2B technology
        </div>
        <div class="launched-beta-test-o-4HT3Ns montserrat-normal-ebony-clay-14px">
          Launched beta test of P2P remittance platform servicing US-Phillipine corridor. Continued pre-seed funding
          with 8 Decimal Capital and Knickerbocker Capital.
        </div>
        <div class="participated-in-barc-4HT3Ns montserrat-normal-ebony-clay-14px">
          Participated in Barclays’ Techstars accelerator.&nbsp;&nbsp;Partnered with Ripple to co-develop P2P remittance
          application. Raised pre-seed round
        </div>
        <div class="re-launching-send-fr-4HT3Ns montserrat-normal-ebony-clay-14px">
          Re-launching SendFriend B2B / B2C cross-border remittance platform. Securing new payment infrastructure
          partners and onboarding initial customers
        </div>
        <div class="x2021-4HT3Ns montserrat-semi-bold-ebony-clay-36px">2021</div>
        <div class="x2020-4HT3Ns montserrat-semi-bold-ebony-clay-36px">2020</div>
        <div class="x2019-4HT3Ns montserrat-semi-bold-ebony-clay-36px">2019</div>
        <div class="x2018-4HT3Ns montserrat-semi-bold-ebony-clay-36px">2018</div>
        <div class="x2017-4HT3Ns montserrat-semi-bold-ebony-clay-36px">2017</div>
        <div class="ellipse-59-4HT3Ns"></div>
        <div class="ellipse-57-4HT3Ns"></div>
        <div class="ellipse-60-4HT3Ns"></div>
        <div class="ellipse-58-4HT3Ns"></div>
        <div class="ellipse-61-4HT3Ns"></div>
      </div>
      <img class="man_phone_sendy-1-MaQ2GE bp1-animate-enter24" show-on-scroll src="img/man-phone-sendy-1@1x.png" />
      <div class="group-92-MaQ2GE">
        <div class="ant-designcheck-circle-outlined-iVdtxd">
          <img class="vector-axCJZt" src="img/vector-34@2x.png" />
          <img class="vector-tZw3K0" src="img/vector-35@2x.png" />
        </div>
        <div class="ant-designcheck-circle-outlined-xb8x9U">
          <img class="vector-cDO4Za" src="img/vector-34@2x.png" />
          <img class="vector-xFS6tQ" src="img/vector-35@2x.png" />
        </div>
        <div class="ant-designcheck-circle-outlined-ivqNJN">
          <img class="vector-FpS8xG" src="img/vector-34@2x.png" />
          <img class="vector-h0GAxK" src="img/vector-35@2x.png" />
        </div>
        <div class="our-story-iVdtxd montserrat-extra-bold-white-36px-2">Our story</div>
        <div class="send-friend-began-it-iVdtxd montserrat-semi-bold-ebony-clay-14px">
          SendFriend began its journey as an MIT Sloan-incubated peer-to-peer remittance start-up in 2017. The company
          launched its initial product - a US-to-Phillipines personal payments platform leveraging RippleNet - in 2018,
          enjoying some initial success servicing the Phillipine ex-pat community in New Jersey, USA. In late 2019, we
          pivoted the business model to focus on small and medium-sized enterprise customers requiring a more flexible,
          cost-effective, blockchain-enabled mode of sending payments internationally.
        </div>
        <div class="we-are-alumni-of-sev-iVdtxd montserrat-semi-bold-ebony-clay-14px">
          We are alumni of several top fintech start-up incubators<br /><br />Our team is comprised of international
          finance experts and innovative technologists<br /><br />We recently won a grant from a Polish-based EU
          innovation fund to build next-generation blockchain-based payment solutions for business and consumer
          customers
        </div>
        <a  href="/#/contact">
             
                  <div class="rectangle-108-iU7JjP smart-layers-pointers">
                    <div class="learn-more-iVdtxd montserrat-bold-ebony-clay-14px">LEARN MORE</div>
                  </div>
              
            </a>

      </div>
      <img class="background-img-MaQ2GE" src="img/background-img-1@1x.png" />
      <div class="rectangle-87-MaQ2GE bp1-animate-enter25" show-on-scroll></div>
      <div class="header-text-MaQ2GE bp1-animate-enter26" show-on-scroll>
        <div class="one-connection-to-the-world-of-payments-5s6dz4">
          <span class="span0-HC0PbN">One connection to the world of </span><span class="span1-HC0PbN">payments.</span>
        </div>
        <div class="we-are-cheaper-faste-5s6dz4 montserrat-semi-bold-white-24px">
          We are cheaper, faster, more reliable and secure.
        </div>
        <div class="about-us-5s6dz4 montserrat-bold-caribbean-green-24px">About us</div>
      </div>
      <div class="header-MaQ2GE">
        <div class="top-header-mpTiB9">
          <a href="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><img class="facebook-icon-7ubx3b" src="img/facebook-icon@2x.png" /> </a>
            <a href="https://twitter.com/sendfriendinc" target="_blank">
            <img class="twitter-icon-7ubx3b" src="img/twitter-icon@2x.png" />
            </a>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><img class="linkedin-icon-7ubx3b" src="img/linkedin-icon-1@2x.svg" />
          </a>
        </div>
        <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
          <div class="login-button-default-mpTiB9 smart-layers-pointers border-5px-caribbean-green">
            <div class="login-9jZGSg montserrat-bold-white-14px">LOGIN</div>
          </div></a>
        <div class="menu-mpTiB9">
            <HashLink smooth to="/#platform-section">
          <div class="platform-Y4BXGH montserrat-bold-white-14px">PLATFORM</div>
          </HashLink>
          <HashLink smooth to="/#partners">
          <div class="partners-Y4BXGH montserrat-bold-white-14px">PARTNERS</div>
          </HashLink>
          <div class="company-dropdown-kYUAzc ">
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
              {/* <img class="vector-rLMcIQ" src="img/homepage/vector@2x.svg" />
              <div class="company-rLMcIQ montserrat-bold-white-14px">COMPANY</div> */}
            </div>
          <a href="/#/contact">
          <div class="contact-us-Y4BXGH montserrat-bold-white-14px">CONTACT US</div>
          </a>
        </div>
        <a href="/#/">
        <div class="logo-menu-mpTiB9"><img class="logo_menu-2-e0LYTx" src="img/logo-menu-2-2@2x.png" /></div>
        </a>
      </div>
      <div class="footer-MaQ2GE">
        <div class="top-4ykixH">
          <div class="rectangle-40-Duyp4C"></div>
          <a href="/#/contact">
          <div class="contact-us-Duyp4C">
            <div class="rectangle-1-CHL23r smart-layers-pointers">
            <div class="contact-us-CHL23r montserrat-bold-white-14px">CONTACT US</div>
            </div>
          </div>
          </a>
          <div class="to-learn-more-about-send-friend-Duyp4C valign-text-middle montserrat-bold-white-32px">
            <span
              ><span class="span0-reItX9 montserrat-bold-white-32px-2">To learn more about</span
              ><span class="span1-reItX9 montserrat-bold-caribbean-green-32px"> SendFriend</span>
            </span>
          </div>
        </div>
        <img class="asset-1bg1-1-2-4ykixH" src="img/asset-1bg1-1-2@2x.png" />
        <a href="/#/">
        <div class="logo-menu-4ykixH"><img class="logo_menu-2-fs0WMg" src="img/logo-menu-2-7@2x.png" /></div>
        </a>
        <img class="line-1-4ykixH" src="img/line-1-1@1x.png" />
        <div class="x2021-send-friend-all-rights-reserved-4ykixH montserrat-medium-white-14px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="socials-4ykixH">
          <div class="x-F8zhmN montserrat-medium-white-14px">|</div>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="linked-in-F8zhmN montserrat-medium-white-14px">LinkedIn</div> </a
          ><a href="https://twitter.com/sendfriendinc" target="_blank"
            ><div class="twitter-F8zhmN montserrat-medium-white-14px">Twitter</div> </a
          ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div class="facebook-F8zhmN montserrat-medium-white-14px">Facebook</div> </a
          ><a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="x-SXxLoL montserrat-medium-white-14px">|</div>
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-history screen">
      <img class="background-img-P2zxrg" src="img/background-img@2x.png" />
      <div class="header-P2zxrg">
        <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');">
          <div class="hamburger-DhsyMs">
            <img class="vector-16-Ltx1vy" src="img/vector-16-1@2x.svg" />
            <img class="vector-17-Ltx1vy" src="img/vector-16-1@2x.svg" /> 
            <img class="vector-18-Ltx1vy" src="img/vector-16-1@2x.svg" />
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
                       
                        <HashLink 
                        style={{ textDecoration: 'none' }}
                         to="/#platform-section"
                         scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
                         >
                            <div class="platform-jxzQz0 montserrat-bold-white-8px">Platform</div>
                        </HashLink>
                        <HashLink smooth to="/#partners" style={{ textDecoration: 'none' }}>
                            <div class="partnership-jxzQz0 montserrat-bold-white-8px">Partnership</div>
                        </HashLink>
                        <div class="dropdown company-jxzQz0 ">
                            <div class="dropbtn montserrat-bold-white-8px">Company	&#42780;</div>
                            <div class="dropdown-content">
                            <Link style={{ textDecoration: 'none' }} to="/history">History</Link>
                            <Link style={{ textDecoration: 'none' }} to="/leadership">
                            Leadership</Link>
                            <Link style={{ textDecoration: 'none' }} to="/contact">Career</Link>
                            </div>
                        </div>
                        <Link style={{ textDecoration: 'none' }} to="/contact">
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
                    <a href="/#/">
        <div class="logo-DhsyMs">
          <div class="frame-131-BYoKY4"><img class="logo_menu-2-3LDBe8" src="img/logo-menu-2@2x.png" /></div>
        </div>
        </a>
      </div>
      <div class="header-text-P2zxrg bp2-animate-enter26" show-on-scroll>
        <div class="about-us-6qkFGB montserrat-bold-caribbean-green-18px">About Us</div>
        <div class="one-connection-to-the-world-of-payments-6qkFGB valign-text-middle">
          <span
            ><span class="span0-FKSP6y">One connection to the world of </span
            ><span class="span1-FKSP6y montserrat-extra-bold-caribbean-green-30px">payments.</span>
          </span>
        </div>
        <div class="we-are-cheaper-faste-6qkFGB valign-text-middle montserrat-semi-bold-white-16px">
          We are cheaper, faster, more reliable and secure.
        </div>
      </div>
      <div class="group-92-P2zxrg">
        <div class="our-story-Obxx5p montserrat-extra-bold-white-21px-2">Our story</div>
        <div class="send-friend-began-it-Obxx5p montserrat-semi-bold-ebony-clay-12px">
          SendFriend began its journey as an MIT Sloan-incubated peer-to-peer remittance start-up in 2017. The company
          launched its initial product - a US-to-Phillipines personal payments platform leveraging RippleNet - in 2018,
          enjoying some initial success servicing the Phillipine ex-pat community in New Jersey, USA. In late 2019, we
          pivoted the business model to focus on small and medium-sized enterprise customers requiring a more flexible,
          cost-effective, blockchain-enabled mode of sending payments internationally.
        </div>
        <div class="group-129-Obxx5p">
          <div class="ant-designcheck-circle-outlined-TFL9Hz">
            <img class="vector-7vgQhx" src="img/vector-34@2x.png" />
            <img class="vector-zfj22C" src="img/vector-35@2x.png" />
          </div>
          <div class="we-are-alumni-of-sev-TFL9Hz montserrat-semi-bold-ebony-clay-12px">
            We are alumni of several top fintech start-up incubators<br /><br />Our team is comprised of international
            finance experts and innovative technologists<br /><br />We recently won a grant from a Polish-based EU
            innovation fund to build next-generation blockchain-based payment solutions for business and consumer
            customers
          </div>
          <div class="ant-designcheck-circle-outlined-Yx5wBq">
            <img class="vector-YQxqvC" src="img/vector-34@2x.png" />
            <img class="vector-2Zxdpl" src="img/vector-35@2x.png" />
          </div>
          <div class="ant-designcheck-circle-outlined-c2stQM">
            <img class="vector-zX57b5" src="img/vector-34@2x.png" />
            <img class="vector-X4Kxpx" src="img/vector-35@2x.png" />
          </div>
        </div>
        <a href="/#/contact">
        <img class="learn-more-Obxx5p" src="img/learn-more@2x.png" />
        </a>
      </div>
      <div class="rectangle-127-P2zxrg"></div>
      <div class="send-friends-evolution-P2zxrg montserrat-extra-bold-white-21px">
        <span class="span0-5Rslv2 montserrat-extra-bold-ebony-clay-21px">SendFriend’s </span
        ><span class="span1-5Rslv2 montserrat-extra-bold-caribbean-green-21px">evolution</span>
      </div>
      <img class="rectangle-114-P2zxrg" src="img/rectangle-114-1@1x.png" />
      <div class="frame-108-P2zxrg">
        <div class="ellipse-59-ZB3txP"></div>
        <div class="ellipse-57-ZB3txP"></div>
        <div class="ellipse-60-ZB3txP"></div>
        <div class="ellipse-58-ZB3txP"></div>
        <div class="ellipse-61-ZB3txP"></div>
      </div>
      <div class="frame-130-P2zxrg">
        <div class="x2017-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2017</div>
        <div class="incorporated-in-2017-hGV2f8 montserrat-normal-ebony-clay-12px">
          Incorporated in 2017 within the context of MIT Sloan’s Full-time MBA program.&nbsp;&nbsp;Participated in
          MIT&#39;s delta V NYC summer start-up accelerator
        </div>
        <div class="x2018-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2018</div>
        <div class="participated-in-barc-hGV2f8 montserrat-normal-ebony-clay-12px">
          Participated in Barclays’ Techstars accelerator.&nbsp;&nbsp;Partnered with Ripple to co-develop P2P remittance
          application. Raised pre-seed round
        </div>
        <div class="x2019-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2019</div>
        <div class="launched-beta-test-o-hGV2f8 montserrat-normal-ebony-clay-12px">
          Launched beta test of P2P remittance platform servicing US-Phillipine corridor. Continued pre-seed funding
          with 8 Decimal Capital and Knickerbocker Capital.
        </div>
        <img class="mit-delta-v-1-hGV2f8" src="img/mit-delta-v-1@2x.png" />
        <div class="rippl-hGV2f8">
          <img class="vector-qLdkJR" src="img/vector-8@2x.png" />
          <img class="vector-j9fkxz" src="img/vector-9@2x.png" />
          <img class="vector-NlpJng" src="img/vector-10@2x.png" />
          <img class="vector-lOs5Vw" src="img/vector-11@2x.png" />
          <img class="vector-vwkkFn" src="img/vector-12@2x.png" />
          <img class="vector-ng0O8E" src="img/vector-29@2x.png" />
          <img class="vector-pcxp9g" src="img/vector-14@2x.png" />
        </div>
        <img
          class="barclays_-accelerator_-logo_16_9medium-1-hGV2f8"
          src="img/barclays-accelerator-logo-16-9-medium-1@2x.png"
        />
        <img class="vector-hGV2f8" src="img/vector-6@2x.png" />
        <img class="vector-4gUhW6" src="img/vector-7@2x.png" />
        <img class="knick-capital-1-hGV2f8" src="img/knick-capital-1@2x.png" />
        <img class="coins-ph-1-hGV2f8" src="img/coins-ph-1@2x.png" />
        <div class="x2020-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2020</div>
        <div class="pivoted-business-mod-hGV2f8 montserrat-normal-ebony-clay-12px">
          Pivoted business model to focus on business-to-business cross-border remittances. Secured European Union
          Growth Funds grant to develop B2B technology
        </div>
        <div class="x2021-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2021</div>
        <div class="re-launching-send-fr-hGV2f8 montserrat-normal-ebony-clay-12px">
          Re-launching SendFriend B2B / B2C cross-border remittance platform. Securing new payment infrastructure
          partners and onboarding initial customers
        </div>
        <div class="celo-hGV2f8">
          <div class="artboard-1-1-uxDftm">
            <img class="bottom_-ring-2QXmxx" src="img/bottom-ring@2x.png" />
            <img class="top_-ring-2QXmxx" src="img/top-ring@2x.png" />
            <img class="rings_-overlap-2QXmxx" src="img/rings-overlap@2x.png" />
          </div>
          <div class="celo-uxDftm">CELO</div>
        </div>
        <img class="evolve-hGV2f8" src="img/evolve@2x.png" />
        <img class="european-funds-hGV2f8" src="img/european-funds@2x.png" />
        <img class="en-logo-1-hGV2f8" src="img/enlogo-1@2x.png" />
      </div>
      <img class="rectangle-42-P2zxrg" src="img/rectangle-42@1x.png" />
      <div id="leadership" class="leadership-P2zxrg montserrat-extra-bold-caribbean-green-30px">Leadership</div>
      <div class="team1-P2zxrg">
      <HashLink smooth to="/leadership#david">
        <img class="image-2-kwPzJZ smart-layers-pointers" src="img/image-2@2x.png" />
        </HashLink>
        <div class="bio-kwPzJZ smart-layers-pointers">
          <div class="rectangle-45-rs3s2b"></div>
          <div class="david-lighton-rs3s2b montserrat-semi-bold-white-16px">David Lighton</div>
          <div class="founderceo-rs3s2b montserrat-normal-white-14px">Cofounder/CEO</div>
        </div>
      </div>
      <div class="team2-P2zxrg">
      <HashLink smooth to="/leadership#roy">
        <img class="image-3-aaSe2x smart-layers-pointers" src="img/image-3-1@2x.png" />
        </HashLink>
        <div class="bio-aaSe2x smart-layers-pointers">
          <div class="rectangle-45-V4Fvt2"></div>
          <div class="roy-vivasi-V4Fvt2 montserrat-semi-bold-white-16px">Roy Vivasi</div>
          <div class="cofoundercto-V4Fvt2 montserrat-normal-white-14px">Cofounder/CTO</div>
        </div>
      </div>
      <div class="team7-P2zxrg">
      <HashLink smooth to="/leadership#satwik">
        <img class="image-3-bwkCXv smart-layers-pointers" src="img/image-3@2x.png" />
        </HashLink>
        <div class="bio-bwkCXv smart-layers-pointers">
          <div class="rectangle-45-xwDT2I"></div>
          <div class="satwik-seshasai-xwDT2I montserrat-semi-bold-white-16px">Satwik Seshasai</div>
          <div class="director-xwDT2I montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team5-P2zxrg">
      <HashLink smooth to="/leadership#will">
        <img class="img_8101-1-1-eR0lmw smart-layers-pointers" src="img/img-8101--1--1@2x.png" />
        </HashLink>
        <div class="bio-eR0lmw smart-layers-pointers">
          <div class="will-ferrer-DOtB67 montserrat-semi-bold-white-16px">Will Ferrer</div>
          <div class="director-of-operations-and-strategy-DOtB67 valign-text-middle montserrat-normal-white-14px">
            Director of Operations&nbsp;&nbsp;and Strategy
          </div>
        </div>
      </div>
      <div class="team6-P2zxrg">
      <HashLink smooth to="/leadership#sandra">
        <img class="image-5-jWdTUz smart-layers-pointers" src="img/image-5@2x.png" />
        </HashLink>
        <div class="bio-jWdTUz smart-layers-pointers">
          <div class="rectangle-45-wyjUxU"></div>
          <div class="sandra-ro-wyjUxU montserrat-semi-bold-white-16px">Sandra Ro</div>
          <div class="director-wyjUxU montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team4-P2zxrg">
      <HashLink smooth to="/leadership#rafal">
        <img class="rafal-1-zF3D13 smart-layers-pointers" src="img/rafal-1@2x.png" />
        </HashLink>
        <div class="bio-zF3D13 smart-layers-pointers">
          <div class="rafal-petsch-1xxUEA montserrat-semi-bold-white-16px">Rafal Petsch</div>
          <div class="general-manager-of-polish-operations-1xxUEA montserrat-normal-white-14px">
            General Manager of Polish Operations
          </div>
        </div>
      </div>
      <div class="footer-P2zxrg">
        <div class="rectangle-89-M7ZC0M"></div>
        <div class="rectangle-40-M7ZC0M"></div>
        <div class="to-learn-more-about-send-friend-M7ZC0M valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span class="span0-Fd5ux2 montserrat-bold-white-14px">To learn more about</span
            ><span class="span1-Fd5ux2 montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <img class="line-1-M7ZC0M" src="img/line-1@2x.png" />
        <img class="asset-1bg1-1-2-M7ZC0M" src="img/asset-1bg1-1-2@2x.png" />
        <div class="x-M7ZC0M montserrat-medium-white-14px">|</div>
        <div class="x-fisDOd montserrat-medium-white-14px">|</div>
        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
          ><div class="linked-in-M7ZC0M montserrat-medium-white-11px">LinkedIn</div> </a
        ><a href="https://twitter.com/sendfriendinc" target="_blank"
          ><div class="twitter-M7ZC0M montserrat-medium-white-11px">Twitter</div> </a
        ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
          ><div class="facebook-M7ZC0M montserrat-medium-white-11px">Facebook</div>
        </a>
        <div class="x2021-send-friend-all-rights-reserved-M7ZC0M montserrat-medium-white-9px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="contact-us-M7ZC0M bp2-animate-enter27" show-on-scroll>
          <a href="/#/contact">
          <div class="rectangle-1-WoAt4O smart-layers-pointers"></div>
          <div class="contact-us-WoAt4O valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
          </a>
        </div>
        <a href="/#/">
        <div class="logo-M7ZC0M">
          <div class="frame-131-jJkQcB"><img class="logo_menu-2-FTMmZu" src="img/logo-menu-2@2x.png" /></div>
        </div>
        </a>
      </div>
    </div>
      {/* <div class="container-center-horizontal">
        <div class="history screen">
          <div class="footer-MaQ2GE">
            <div class="rectangle-89-4ykixH"></div>
            <div class="x-4ykixH montserrat-medium-white-14px">|</div>
            <div class="x2021-send-friend-all-rights-reserved-4ykixH montserrat-medium-white-14px">
              © 2021 SendFriend. All Rights Reserved
            </div>
            <div class="text-4ykixH montserrat-medium-white-14px"></div>
            <a
              href="https://www.linkedin.com/company/sendfriend/"
              target="_blank"
            >
              <div class="linked-in-4ykixH montserrat-medium-white-14px">
                | LinkedIn
              </div>{" "}
            </a>
            <a href="https://twitter.com/sendfriendinc" target="_blank">
              <div class="twitter-4ykixH montserrat-medium-white-14px">
                Twitter
              </div>{" "}
            </a>
            <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
              <div class="facebook-4ykixH montserrat-medium-white-14px">
                Facebook
              </div>
            </a>
            <div class="rectangle-40-4ykixH"></div>
            <a href="/#/contact">
            <div class="contact-us-button-footer-FjfUj9 smart-layers-pointers" >
                <div class="contact-us-xNdJvB1 valign-text-middle">Contact Us</div>
            </div></a>

            <div class="to-learn-more-about-send-friend-4ykixH">
              <span class="span0-uis1QI">To learn more about</span>
              <span class="span1-uis1QI"> SendFriend</span>
            </div>
            <img class="line-1-4ykixH" src="img/line-1@1x.svg" />
            <img
              class="asset-1bg1-1-2-4ykixH"
              src="img/asset-1bg1-1-2@2x.png"
            />
           
            <a href="/#/">
            <img class="original-logo-4ykixH" src={footer_logo} />
            </a>
          </div>
          <img class="rectangle-42-MaQ2GE" src="img/rectangle-42@1x.svg" />
          <img class="asset-1bg1-1-1-MaQ2GE" src="img/asset-1bg1-1-1@1x.png" />
          <div class="rectangle-106-MaQ2GE"></div>
          <img class="rectangle-107-MaQ2GE" src="img/rectangle-107@1x.svg" />

          <div class="team7-MaQ2GE">
            <img class="image-3-lfHTtk smart-layers-pointers" src="img/image-3@2x.png" />
            <div class="bio-lfHTtk smart-layers-pointers">
              <div class="rectangle-45-NxFrnF"></div>
              <div class="satwik-seshasai-NxFrnF montserrat-semi-bold-white-16px">
                Satwik Seshasai
              </div>
              <div class="director-NxFrnF montserrat-normal-white-14px">
                Director
              </div>
            </div>
          </div>
          <div class="team6-MaQ2GE">
            <img
              class="image-5-x60cHe smart-layers-pointers"
              src="img/image-5@2x.png"
            />
            <div class="bio-x60cHe smart-layers-pointers">
              <div class="rectangle-45-u1Pqxx"></div>
              <div class="sandra-ro-u1Pqxx montserrat-semi-bold-white-16px">
                Sandra Ro
              </div>
              <div class="director-u1Pqxx montserrat-normal-white-14px">
                Director
              </div>
            </div>
          </div>

          <div class="team4-MaQ2GE">
            <img
              class="rafal-1-7t5cul smart-layers-pointers"
              src="img/rafal-1@2x.png"
            />
            <div class="bio-7t5cul smart-layers-pointers">
              <div class="rectangle-45-4lyrRm"></div>
              <div class="rafal-petsch-4lyrRm montserrat-semi-bold-white-16px">
                Rafal Petsch
              </div>
              <div class="general-manager-of-polish-operations-4lyrRm montserrat-normal-white-14px">
                General Manager of Polish Operations
              </div>
            </div>
          </div>
          <div class="team3-MaQ2GE">
            <img
              class="image-4-k3sB65 smart-layers-pointers"
              src="img/img-8101--1--1@2x.png"
            />
            <div class="bio-k3sB65 smart-layers-pointers">
              <div class="rectangle-45-2fIJn6"></div>
              <div class="raj-sheth-2fIJn6 montserrat-semi-bold-white-16px">
                Will Ferrer
              </div>
              <div class="head-of-business-development-2fIJn6 montserrat-normal-white-14px">
                Director of Operations and Strategy
              </div>
            </div>
          </div>
          <div class="team2-MaQ2GE">
            <img
              class="image-3-H3vWAl smart-layers-pointers"
              src="img/image-3-1@2x.png"
            />
            <div class="bio-H3vWAl smart-layers-pointers">
              <div class="rectangle-45-dxCGs5"></div>
              <div class="roy-vivasi-dxCGs5 montserrat-semi-bold-white-16px">
                Roy Vivasi
              </div>
              <div class="cofoundercto-dxCGs5 montserrat-normal-white-14px">
                Cofounder/CTO
              </div>
            </div>
          </div>
          <div class="team1-MaQ2GE">
            <img
              class="image-2-x0uKuI smart-layers-pointers"
              src="img/image-2@2x.png"
            />
            <div class="bio-x0uKuI smart-layers-pointers">
              <div class="rectangle-45-rMTOpx"></div>
              <div class="david-lighton-rMTOpx montserrat-semi-bold-white-16px">
                David Lighton
              </div>
              <div class="founderceo-rMTOpx montserrat-normal-white-14px">
                Founder/CEO
              </div>
            </div>
          </div>
          <div class="leadership-MaQ2GE montserrat-extra-bold-caribbean-green-36px">
            Leadership
          </div>
          <img class="mit-delta-v-1-MaQ2GE" src="img/mit-delta-v-1@2x.png" />
          <img class="rippl-MaQ2GE" src={partners2} />
          <img class="vector-MaQ2GE" src="img/vector-3@2x.svg" />
          <img
            class="barclays_-accelerator_-logo_16_9medium-1-MaQ2GE"
            src="img/barclays-accelerator-logo-16-9-medium-1@2x.png"
          />
          <img class="line-19-MaQ2GE" src="img/line-19-1@2x.svg" />
          <img class="line-20-MaQ2GE" src="img/line-19-1@2x.svg" />
          <img class="line-21-MaQ2GE" src="img/line-19-1@2x.svg" />
          <img class="line-22-MaQ2GE" src="img/line-19-1@2x.svg" />
          <img class="vector-AZbh0X" src="img/vector-4@2x.svg" />
          <img
            class="knick-capital-1-MaQ2GE"
            src="img/knick-capital-1@2x.png"
          />
          <img class="coins-ph-1-MaQ2GE" src="img/coins-ph-1@2x.png" />
          <div class="celo-MaQ2GE">
            <div class="artboard-1-1-r6GglC">
              <img class="bottom_-ring-h0TSQx" src="img/bottom-ring@2x.svg" />
              <img class="top_-ring-h0TSQx" src="img/top-ring@2x.svg" />
              <img
                class="rings_-overlap-h0TSQx"
                src="img/rings-overlap@2x.svg"
              />
            </div>
            <div class="celo-r6GglC">CELO</div>
          </div>
          <img class="evolve-MaQ2GE" src="img/evolve@2x.png" />
          <img class="european-funds-MaQ2GE" src="img/european-funds@2x.png" />
          <img class="en-logo-1-MaQ2GE" src="img/enlogo-1@2x.png" />
          <div class="incorporated-in-2017-MaQ2GE montserrat-normal-ebony-clay-14px">
            Incorporated in 2017 within the context of MIT Sloan’s Full-time MBA
            program.&nbsp;&nbsp;Participated in MIT&#39;s delta V NYC summer
            start-up accelerator
          </div>
          <div class="x2021-MaQ2GE montserrat-semi-bold-ebony-clay-36px">
            2021
          </div>
          <div class="pivoted-business-mod-MaQ2GE montserrat-normal-ebony-clay-14px">
            Pivoted business model to focus on business-to-business cross-border
            remittances. Secured European Union Growth Funds grant to develop
            B2B technology
          </div>
          <div class="x2020-MaQ2GE montserrat-semi-bold-ebony-clay-36px">
            2020
          </div>
          <div class="launched-beta-test-o-MaQ2GE montserrat-normal-ebony-clay-14px">
            Launched beta test of P2P remittance platform servicing
            US-Phillipine corridor. Continued pre-seed funding with 8 Decimal
            Capital and Knickerbocker Capital.
          </div>
          <div class="x2019-MaQ2GE montserrat-semi-bold-ebony-clay-36px">
            2019
          </div>
          <div class="participated-in-barc-MaQ2GE montserrat-normal-ebony-clay-14px">
            Participated in Barclays’ Techstars
            accelerator.&nbsp;&nbsp;Partnered with Ripple to co-develop P2P
            remittance application. Raised pre-seed round
          </div>
          <div class="x2018-MaQ2GE montserrat-semi-bold-ebony-clay-36px">
            2018
          </div>
          <div class="x2017-MaQ2GE montserrat-semi-bold-ebony-clay-36px">
            2017
          </div>
          <div class="re-launching-send-fr-MaQ2GE montserrat-normal-ebony-clay-14px">
            Re-launching SendFriend B2B / B2C cross-border remittance platform.
            Securing new payment infrastructure partners and onoarding initial
            customers
          </div>
          <div class="send-friends-evolution-MaQ2GE montserrat-extra-bold-white-36px">
            <span class="span0-DGKJkk montserrat-extra-bold-ebony-clay-36px">
              SendFriend’s{" "}
            </span>
            <span class="span1-DGKJkk montserrat-extra-bold-caribbean-green-36px">
              EVOLUTION
            </span>
          </div>
          <div class="group-108-MaQ2GE">
            <img class="rectangle-114-4HT3Ns" src="img/rectangle-114@1x.svg" />
            <div class="ellipse-59-4HT3Ns"></div>
            <div class="ellipse-57-4HT3Ns"></div>
            <div class="ellipse-60-4HT3Ns"></div>
            <div class="ellipse-58-4HT3Ns"></div>
            <div class="ellipse-61-4HT3Ns"></div>
          </div>
          <img
            class="man_phone_sendy-1-MaQ2GE animate-enter"
            show-on-scroll
            src="img/man-phone-sendy-1@1x.png"
          />
          <div class="group-92-MaQ2GE">
            <div class="ant-designcheck-circle-outlined-iVdtxd">
              <img class="vector-axCJZt" src="img/vector-29@2x.svg" />
              <img class="vector-tZw3K0" src="img/vector-1@2x.svg" />
            </div>
            <div class="ant-designcheck-circle-outlined-xb8x9U">
              <img class="vector-cDO4Za" src="img/vector-29@2x.svg" />
              <img class="vector-xFS6tQ" src="img/vector-1@2x.svg" />
            </div>
            <div class="ant-designcheck-circle-outlined-ivqNJN">
              <img class="vector-FpS8xG" src="img/vector-29@2x.svg" />
              <img class="vector-h0GAxK" src="img/vector-1@2x.svg" />
            </div>
            <div class="our-story-iVdtxd montserrat-extra-bold-white-36px-2">
              Our Story
            </div>
            <div class="send-friend-began-it-iVdtxd montserrat-semi-bold-ebony-clay-14px">
              SendFriend began its journey as an MIT Sloan-incubated
              peer-to-peer remittance start-up in 2017. The company launched its
              initial product - a US-to-Phillipines personal payments platform
              leveraging RippleNet - in 2018, enjoying some initial success
              servicing the Phillipine ex-pat community in New Jersey, USA. In
              late 2019, we pivoted the business model to focus on small and
              medium-sized enterprise customers requiring a more flexible,
              cost-effective, blockchain-enabled mode of sending payments
              internationally.
            </div>
            <div class="we-are-alumni-of-sev-iVdtxd montserrat-semi-bold-ebony-clay-14px">
              We are alumni of several top fintech start-up incubators
              <br />
              <br />
              Our team is comprised of international finance experts and
              innovative technologists
              <br />
              <br />
              We recently won a grant from a Polish-based EU innovation fund to
              build next-generation blockchain-based payment solutions for
              business and consumer customers
            </div>
            
              
            
            <a  href="/#/contact">
             
                  <div class="rectangle-108-iU7JjP smart-layers-pointers">
                    <div class="learn-more-iU7JjP montserrat-bold-ebony-clay-14px">LEARN MORE</div>
                  </div>
              
            </a>
          </div>
          <img class="background-img-MaQ2GE" src={historyBackgroundImg} />
          <div class="rectangle-87-MaQ2GE animate-enter1" show-on-scroll></div>

          <div class="header-text-MaQ2GE animate-enter2" show-on-scroll>
            <div class="one-connection-to-the-world-of-payments-5s6dz4">
              <span class="span0-HC0PbN">One connection to the world of </span>
              <span class="span1-HC0PbN">Payments.</span>
            </div>
            <div class="we-are-cheaper-faste-5s6dz4">
              We are cheaper, faster, more reliable and secure.
            </div>
            <div class="about-us-5s6dz4">ABOUT US</div>
          </div>

          <div class="navbar-MaQ2GE">
            <img class="vector-OBUuxy" src="img/vector-9@1x.svg" />
            <a href="javascript:ShowOverlay('dropdown-menu', 'animate-appear');">
              <div class="company-dropdown-OBUuxy">
                <img class="vector-1sK89J" src="img/vector-16@2x.svg" />
                <div class="company-1sK89J montserrat-bold-white-14px">
                  COMPANY
                </div>
              </div>
            </a>
            <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
              <div class="login-button-default-OBUuxy smart-layers-pointers">
                <div class="rectangle-100-067scl smart-layers-pointers">
                <div class="login-067scl montserrat-bold-white-14px">LOGIN</div>
                </div>
              </div>
            </a>
            <a href="#/">
                <img class="original-logo-OBUuxy" src={logo_menu} /></a>
            
            <HashLink smooth to="/#platform-section">
              <div class="platform-OBUuxy montserrat-bold-white-14px">
                PLATFORM
              </div>
            </HashLink>
            <HashLink smooth to="/#partnerships">
              <div class="partners-OBUuxy montserrat-bold-white-14px">
                PARTNERS
              </div>
            </HashLink>
            <a style={{color: '#000000'}} href="/#/contact">
              <div class="contact-us-OBUuxy montserrat-bold-white-14px">
                CONTACT US
              </div>
            </a>

          </div>
          <div class="top-header-MaQ2GE">
            <div class="rectangle-97-xZpYYr"></div>
            <div class="bxbxl-facebook-xZpYYr">
              <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
                <img class="vector-u6dsiS" src={facebook_icon} />
              </a>
            </div>
            <a href="https://twitter.com/sendfriendinc" target="_blank">
              <div class="ant-designtwitter-outlined-xZpYYr">
                <img class="vector-vC3QWf" src={twitter_icon} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/sendfriend/"
              target="_blank"
            >
              <img class="vector-xZpYYr" src={linkedin_icon} />
            </a>
          </div>
        </div>
      </div>
      <div class="iphone-13-13-pro-2 screen">
      <img class="background-img-fvgTPB" src="img/background-img@2x.png" />
      <div class="header-text-fvgTPB bp2-animate-enter" show-on-scroll>
        <div class="about-us-eEXB0k montserrat-bold-caribbean-green-24px">About Us</div>
        <div class="one-connection-to-the-world-of-payments-eEXB0k valign-text-middle">
          <span
            ><span class="span0-dSVYrd">One connection to the world of </span
            ><span class="span1-dSVYrd montserrat-extra-bold-caribbean-green-30px">Payments.</span>
          </span>
        </div>
        <div class="we-are-cheaper-faste-eEXB0k valign-text-middle montserrat-semi-bold-white-24px">
          We are cheaper, faster, more reliable and secure.
        </div>
      </div>
      <div class="group-92-fvgTPB">
        <div class="our-story-qAu7DX">Our Story</div>
        <div class="send-friend-began-it-qAu7DX montserrat-semi-bold-ebony-clay-12px">
          SendFriend began its journey as an MIT Sloan-incubated peer-to-peer remittance start-up in 2017. The company
          launched its initial product - a US-to-Phillipines personal payments platform leveraging RippleNet - in 2018,
          enjoying some initial success servicing the Phillipine ex-pat community in New Jersey, USA. In late 2019, we
          pivoted the business model to focus on small and medium-sized enterprise customers requiring a more flexible,
          cost-effective, blockchain-enabled mode of sending payments internationally.
        </div>
        <div class="group-129-qAu7DX">
          <div class="ant-designcheck-circle-outlined-4gk5Ac">
            <img class="vector-SjxLM3" src={outlined_circle} />
          </div>
          <div class="we-are-alumni-of-sev-4gk5Ac montserrat-semi-bold-ebony-clay-12px">
            We are alumni of several top fintech start-up incubators<br /><br />Our team is comprised of international
            finance experts and innovative technologists<br /><br />We recently won a grant from a Polish-based EU
            innovation fund to build next-generation blockchain-based payment solutions for business and consumer
            customers
          </div>
          <div class="ant-designcheck-circle-outlined-y4m6lC">
            <img class="vector-Nrxjr9" src={outlined_circle} />
          </div>
          <div class="ant-designcheck-circle-outlined-CYvggm">
            <img class="vector-f5plpI" src={outlined_circle} />
          </div>
        </div>
        <a href="/#/contact">
        <img class="learn-more-qAu7DX" src="img/learn-more@2x.png" />
        </a>
      </div>
      <div class="rectangle-127-fvgTPB"></div>
      <div class="send-friends-evolution-fvgTPB">
        <span class="span0-uUEflU">SendFriend’s </span
        ><span class="span1-uUEflU montserrat-extra-bold-caribbean-green-30px">EVOLUTION</span>
      </div>
      <img class="rectangle-114-fvgTPB" src="img/rectangle-114-1@1x.png" />
      <div class="frame-108-fvgTPB">
        <div class="ellipse-59-xAyEMa"></div>
        <div class="ellipse-57-xAyEMa"></div>
        <div class="ellipse-60-xAyEMa"></div>
        <div class="ellipse-58-xAyEMa"></div>
        <div class="ellipse-61-xAyEMa"></div>
      </div>
      <div class="frame-130-fvgTPB">
        <div class="x2017-0qRsxd montserrat-semi-bold-ebony-clay-24px">2017</div>
        <div class="incorporated-in-2017-0qRsxd">
          Incorporated in 2017 within the context of MIT Sloan’s Full-time MBA program.&nbsp;&nbsp;Participated in
          MIT&#39;s delta V NYC summer start-up accelerator
        </div>
        <div class="x2018-0qRsxd montserrat-semi-bold-ebony-clay-24px">2018</div>
        <div class="participated-in-barc-0qRsxd montserrat-normal-ebony-clay-14px">
          Participated in Barclays’ Techstars accelerator.&nbsp;&nbsp;Partnered with Ripple to co-develop P2P remittance
          application. Raised pre-seed round
        </div>
        <div class="x2019-0qRsxd montserrat-semi-bold-ebony-clay-24px">2019</div>
        <div class="launched-beta-test-o-0qRsxd montserrat-normal-ebony-clay-14px">
          Launched beta test of P2P remittance platform servicing US-Phillipine corridor. Continued pre-seed funding
          with 8 Decimal Capital and Knickerbocker Capital.
        </div>
        <img class="mit-delta-v-1-0qRsxd" src="img/mit-delta-v-1@2x.png" />

        <img class="rippl-0qRsxd" src={partners2} />

        <img
          class="barclays_-accelerator_-logo_16_9medium-1-0qRsxd"
          src="img/barclays-accelerator-logo-16-9-medium-1@2x.png"
        />
        <img class="vector-0qRsxd" src="img/vector-6@2x.png" />
        <img class="vector-Sma1tu" src="img/vector-7@2x.png" />
        <img class="knick-capital-1-0qRsxd" src="img/knick-capital-1@2x.png" />
        <img class="coins-ph-1-0qRsxd" src="img/coins-ph-1@2x.png" />
        <div class="x2020-0qRsxd montserrat-semi-bold-ebony-clay-24px">2020</div>
        <div class="pivoted-business-mod-0qRsxd montserrat-normal-ebony-clay-14px">
          Pivoted business model to focus on business-to-business cross-border remittances. Secured European Union
          Growth Funds grant to develop B2B technology
        </div>
        <div class="x2021-0qRsxd montserrat-semi-bold-ebony-clay-24px">2021</div>
        <div class="re-launching-send-fr-0qRsxd montserrat-normal-ebony-clay-14px">
          Re-launching SendFriend B2B / B2C cross-border remittance platform. Securing new payment infrastructure
          partners and onoarding initial customers
        </div>
        <div class="celo-0qRsxd">
          <div class="artboard-1-1-UBXbyQ">
            <img class="bottom_-ring-BNkeSO" src="img/bottom-ring@2x.png" />
            <img class="top_-ring-BNkeSO" src="img/top-ring@2x.png" />
            <img class="rings_-overlap-BNkeSO" src="img/rings-overlap@2x.png" />
          </div>
          <div class="celo-UBXbyQ">CELO</div>
        </div>
        <img class="evolve-0qRsxd" src="img/evolve@2x.png" />
        <img class="european-funds-0qRsxd" src="img/european-funds@2x.png" />
        <img class="en-logo-1-0qRsxd" src="img/enlogo-1@2x.png" />
      </div>
      <img class="rectangle-42-fvgTPB" src="img/rectangle-42-1@1x.png" />
      <div class="leadership-fvgTPB montserrat-extra-bold-caribbean-green-30px">Leadership</div>
      <div class="team1-fvgTPB">
        <img class="image-2-6Ssmvh smart-layers-pointers" src="img/image-2@2x.png" />
        <div class="bio-6Ssmvh smart-layers-pointers">
          <div class="rectangle-45-GvnbiF"></div>
          <div class="david-lighton-GvnbiF montserrat-semi-bold-white-16px">David Lighton</div>
          <div class="founderceo-GvnbiF montserrat-normal-white-14px">Founder/CEO</div>
        </div>
      </div>
      <div class="team2-fvgTPB">
        <img class="image-3-Hk57m7 smart-layers-pointers" src="img/image-3-1@2x.png" />
        <div class="bio-Hk57m7 smart-layers-pointers">
          <div class="rectangle-45-oGN7fV"></div>
          <div class="roy-vivasi-oGN7fV montserrat-semi-bold-white-16px">Roy Vivasi</div>
          <div class="cofoundercto-oGN7fV montserrat-normal-white-14px">Cofounder/CTO</div>
        </div>
      </div>
      <div class="team5-fvgTPB">
        <img class="img_8101-1-1-bbMdtS smart-layers-pointers" src="img/img-8101--1--1@2x.png" />
        <div class="bio-bbMdtS smart-layers-pointers">
          <div class="will-ferrer-TQLDvz montserrat-semi-bold-white-16px">Will Ferrer</div>
          <div class="director-of-operations-and-strategy-TQLDvz montserrat-normal-white-14px">
            Director of Operations <br />and Strategy
          </div>
        </div>
      </div>
      <div class="team6-fvgTPB">
        <img class="image-5-Vn8NQa smart-layers-pointers" src="img/image-5-1@2x.png" />
        <div class="bio-Vn8NQa smart-layers-pointers">
          <div class="rectangle-45-zkSgD3"></div>
          <div class="sandra-ro-zkSgD3 montserrat-semi-bold-white-16px">Sandra Ro</div>
          <div class="director-zkSgD3 montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team7-fvgTPB">
        <img class="image-3-sx5xxt smart-layers-pointers" src="img/image-3-3@2x.png" />
        <div class="bio-sx5xxt smart-layers-pointers">
          <div class="rectangle-45-MZ3RqQ"></div>
          <div class="satwik-seshasai-MZ3RqQ montserrat-semi-bold-white-16px">Satwik Seshasai</div>
          <div class="director-MZ3RqQ montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team4-fvgTPB">
        <img class="rafal-1-T3vr9d smart-layers-pointers" src="img/rafal-1-1@2x.png" />
        <div class="bio-T3vr9d smart-layers-pointers">
          <div class="rafal-petsch-9axK0z montserrat-semi-bold-white-16px">Rafal Petsch</div>
          <div class="general-manager-of-polish-operations-9axK0z montserrat-normal-white-14px">
            General Manager of Polish Operations
          </div>
        </div>
      </div>
      <div class="footer-fvgTPB">
        <div class="rectangle-89-x2srWP"></div>
        <div class="x-x2srWP montserrat-medium-white-14px">|</div>
        <div class="x-aevxyk montserrat-medium-white-14px">|</div>
        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
          ><div class="linked-in-x2srWP montserrat-medium-white-11px">LinkedIn</div> </a
        ><a href="https://twitter.com/sendfriendinc" target="_blank"
          ><div class="twitter-x2srWP montserrat-medium-white-11px">Twitter</div> </a
        ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
          ><div class="facebook-x2srWP montserrat-medium-white-11px">Facebook</div>
        </a>
        <div class="rectangle-40-x2srWP"></div>
        <div class="to-learn-more-about-send-friend-x2srWP valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span class="span0-OhGRSn montserrat-bold-white-14px">To learn more about</span
            ><span class="span1-OhGRSn montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <img class="line-1-x2srWP" src="img/line-1-1@2x.png" />
        <img class="asset-1bg1-1-2-x2srWP" src="img/asset-1bg1-1-2-1@2x.png" />
        <a href="/#/contact"> 
        <div class="group-122-x2srWP bp2-animate-enter1" show-on-scroll>
          <div class="rectangle-1-TJh9kE smart-layers-pointers"></div>
          <div class="contact-us-TJh9kE valign-text-middle montserrat-bold-eerie-black-9px">CONTACT US</div>
        </div>
        </a>
        <a href="/#/">
        <img class="original-logo-x2srWP" src={footer_logo} /></a>
        <p class="x2021-send-friend-all-rights-reserved-1">© 2021 SendFriend. All Rights Reserved</p>
      </div>
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
              <div class="dropdown">
                <div class="dropbtn company-jxzQz0 montserrat-bold-white-8px">Company</div>
                <div class="dropdown-content">
                <a href="/#/history">History</a>
                <a href="#">Leadership</a>
                <a href="#">Career</a>
                </div>
              </div>
              <a href="/#/contact">
                <div class="contact-jxzQz0 montserrat-bold-white-8px"> 
                  Contact
                </div>
              </a>
                
            </div>
          </div>
        </div>
        
      <div class="frame-8-fvgTPB">
        
      <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');">
          <div class="hamburger-8LCNNa">
            <img class="vector-16-CypR7f"  src="img/vector-16-1@2x.svg" />
            <img class="vector-17-CypR7f"  src="img/vector-17-1@2x.svg" />
            <img class="vector-18-CypR7f"  src="img/vector-17-1@2x.svg" />
            </div>
          </a>
      </div>
      <div class="rectangle-125-fvgTPB"></div>
      <a href="/#/">
      <img class="original-logo-fvgTPB" src={logo_menu} /></a>
    </div> */}
      
    </div>
  );
}
