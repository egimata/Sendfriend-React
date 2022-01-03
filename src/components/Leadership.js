import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import first_image from '../img/api-async-1@2x.png';
import second_image from '../img/api-second.jpeg';
import third_image from '../img/api-third.jpeg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import "./leadership-style.css"


 
export const Leadership = () => {
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
              <input type="hidden" id="anPageName" name="page" value="leadership" />
    <div class="leadership screen">
      <div class="rectangle-118-T3zxx0"></div>
      <img class="unsplashrxp-th-owu-vg-e-T3zxx0" src="img/leadership/unsplash-rxpthowuvge@1x.png" />
      <div class="rectangle-87-T3zxx0"></div>
      <div class="our-expert-team-T3zxx0">
        <span class="span0-isc3t7">Our expert</span><span class="span1-isc3t7">&nbsp;</span
        ><span class="span2-isc3t7">team</span>
      </div>
      <div id="david" class="david-lighton-is-sen-T3zxx0 montserrat-normal-white-18px">
        David Lighton is SendFriend’s Co-Founder and CEO. <br /><br />David developed the concept for SendFriend in 2017
        while getting his MBA from MIT Sloan’s full-time program. David stewarded his early team into MIT’s delta V
        Accelerator and Barclays Accelerator TechStars. <br />In the process, he sourced pre-seed funding for the
        venture from leading sources including the European Union Smart Growth fund, Ripple, MIT Media Lab, Knick
        Capital, and 8 Decimal Capital. <br />Prior to SendFriend and Sloan, David was an analyst for five years at the
        World Bank&#39;s Haiti desk in Washington, DC, where he served on the Special Envoy’s staff overseeing an $800M
        investment portfolio for earthquake reconstruction.<br />Since 2019, David has been a Yale Global Justice
        Fellow, appointed to conduct and advise on research related to cross-border payments and blockchain. He also
        sits on the Johns Hopkins University Dean’s Advisory Board. Additionally, David is a Co-Founder of Lithium
        Finance, a blockchain platform designed to value private assets via the wisdom of crowds and algorithms. David
        holds his MBA from MIT Sloan, MA from John Hopkins School of International Studies (SAIS) with honors, and BA in
        International Studies from Johns Hopkins University.
      </div>
      <div id="roy" class="roy-vivasi-joined-se-T3zxx0 montserrat-normal-white-18px">
        Roy Vivasi joined SendFriend as Chieft Technology Officer in mid-2021. <br /><br />Roy has extensive experience
        building electronic, algorithmic trading strategies and in software development. Prior to SendFriend, Roy was a
        developer for BGC Partners (2019-2021), where he oversaw the development and implementation of predictive
        analytic tools for various tradable instruments and managed a team of algorithmic traders. <br />From 2018-2019,
        he worked for the OTCex Group as a Senior Sales Trader, actively involved in developing and improving their
        electronic fixed income products. From 2014-2018, he worked at Bank of America Merrill Lynch in London as VP,
        developing algorithmic-driven trading models covering various fixed income asset classes. <br />From 2010-2014,
        he worked at Morgan Stanley as Analyst and then Associate trading almost every liquid sovereign in the EGB
        space, while building risk management systems and analytic tools for trading opportunity identification. Roy
        holds a Masters in Mathematics from the University of Oxford (Magdalene College, Oxford Scholar)
      </div>
      <div id="will" class="will-ferrer-is-send-T3zxx0 montserrat-normal-white-18px">
        Will Ferrer is SendFriend’s Director of Strategy &amp; Operations, joining the team in late 2021.
        <br /><br />Will has diverse experience in strategy, finance, and operations across the finance and technology
        sectors. Prior to SendFriend, he worked at technology firm PTC on their Corporate Strategy team, primarily
        serving as internal consultant driving strategic initiatives. <br /><br />From 2017-2018, while studying in the
        full-time MBA program at MIT Sloan, Will co-founded a water filtration technology start-up, Divaqua, with an MIT
        Chemistry PhD student, and participated in the prestigious delta V Accelerator program. <br />From 2013-2016, he
        was a business analyst at healthcare IT firm Arcadia Healthcare Solutions, where he managed a range of programs
        related to sales operations and marketing strategy. Prior to Arcadia, he worked in equity research at Lazard
        Capital Markets in NYC, covering the shipping and logistics sector (FINRA Series 7, 63, 86, and 87 certified).
        Will holds his MBA from MIT Sloan with Certificate in Sustainability Management, and BA in History from Amherst
        College.
      </div>
      <div id="sandra" class="sandra-ro-is-the-cur-T3zxx0 montserrat-normal-white-18px">
        Sandra Ro is the current CEO of the Global Blockchain Business Council, and a recognized thought leader in the
        blockchain space, having built blockchain-based products at the Chicago Mercantile Exchange. She holds a BA from
        Yale and an MBA from the London Business School.
      </div>
      <div id="satwik" class="satwik-seshasai-is-t-T3zxx0 montserrat-normal-white-18px">
        Satwik Seshasai is the head of AI Infrastructure Engineering at Compass. Previously he served as CTO at
        ShopSpring, an e-commerce business. He is the co-founder of Segovia Technology, an international payments
        platform, which was backed by Greylock Partners and was recently acquired by Crown Agents Bank and Helios
        Partners. He holds a PhD from MIT.
      </div>
      <div id="rafal" class="rafal-petsch-is-send-T3zxx0 montserrat-normal-white-18px">
        Rafal Petsch is SendFriend’s General Manager of its Polish subsidiary. <br /><br />He boasts over 25 years of
        experience working in the international banking sector.&nbsp;&nbsp;He started his career in 1994 in the Treasury
        Department of the Warsaw branch of ING bank. Afterwards, he spent 5 years with Bank of America Group, where, he
        co-founded the BOA Warsaw branch, held the positions of Chief Trader, Treasurer and Member of the Management
        Board. At BoA in London, Rafal was the head of the Exotic Currencies team, and later managed PLN currency
        positions at Citibank N.A.&nbsp;&nbsp;After returning to Poland, he was appointed Director of the Treasury
        Department at DZ Bank Polska. In 2004, he became Head of the Treasury and Investment Finance Department at the
        newly established Dexia Kommunalredit Bank.&nbsp;&nbsp;The remainder of his banking career was spent developing
        the Pekao S.A. group (Unicredit), the largest corporate bank in Poland.&nbsp;&nbsp;Since 2009, he has held the
        position of Managing Director of the Financial Institutions and Public Sector Department, Managing Director of
        the Strategic Clients Department, as well as was a member of the Management Board of Pekao Investement Banking
        S.A.&nbsp;&nbsp;He was also the head of two strategic projects (Go Poland and Agromania), and was an active
        member of the bank&#39;s credit committee. Since January 2021, he has been a Managing Director at Ipopema
        Securities. Rafal is also one of the founding members of PLUS Connector - a platform that supports innovative US
        companies with their expansion into Polish and European Markets. He also holds a Board Member position at
        Sendfriend Polska Sp. z o.o. He is a graduate of INSEAD, as well as the Warsaw School of Economics.
      </div>
      <div class="team1-T3zxx0">
        <img class="image-2-2x9LGi " src="img/leadership/image-2@2x.png" />
        <div class="bio-2x9LGi smart-layers-pointers">
          <div class="rectangle-45-sdNsJH"></div>
          <div class="david-lighton-sdNsJH valign-text-middle">David Lighton</div>
          <div class="cofounderceo-sdNsJH valign-text-middle montserrat-normal-white-24px">Cofounder/CEO</div>
        </div>
      </div>
      <div class="team2-T3zxx0">
        <img class="image-3-UEE3eZ " src="img/leadership/image-3@2x.png" />
        <div class="bio-UEE3eZ smart-layers-pointers">
          <div class="rectangle-45-LmyE4x"></div>
          <div class="roy-vivasi-LmyE4x valign-text-middle">Roy Vivasi</div>
          <div class="cofoundercto-LmyE4x valign-text-middle montserrat-normal-white-24px">Cofounder/CTO</div>
        </div>
      </div>
      <div class="team5-T3zxx0">
        <img class="img_8101-1-1-rdzoz5 " src="img/leadership/img-8101--1--1@2x.png" />
        <div class="bio-rdzoz5 smart-layers-pointers">
          <div class="will-ferrer-1Hd3n7 valign-text-middle montserrat-semi-bold-white-24px">Will Ferrer</div>
          <div class="director-of-operations-and-strategy-1Hd3n7 valign-text-middle">
            Director of Operations&nbsp;&nbsp;and Strategy
          </div>
        </div>
      </div>
      <div class="team6-T3zxx0">
        <img class="image-5-3FjGyJ " src="img/leadership/image-5@2x.png" />
        <div class="bio-3FjGyJ smart-layers-pointers">
          <div class="rectangle-45-2FV952"></div>
          <div class="sandra-ro-2FV952 valign-text-middle montserrat-semi-bold-white-24px">Sandra Ro</div>
          <div class="director-2FV952 valign-text-middle montserrat-normal-white-24px">Director</div>
        </div>
      </div>
      <div class="team7-T3zxx0">
        <img class="image-3-zElZt1 " src="img/leadership/image-3-1@2x.png" />
        <div class="bio-zElZt1 smart-layers-pointers">
          <div class="rectangle-45-KijxAU"></div>
          <div class="satwik-seshasai-KijxAU valign-text-middle montserrat-semi-bold-white-24px">Satwik Seshasai</div>
          <div class="director-KijxAU valign-text-middle montserrat-normal-white-24px">Director</div>
        </div>
      </div>
      <div class="team4-T3zxx0">
        <img class="rafal-1-KNPzb9 " src="img/leadership/rafal-1@2x.png" />
        <div class="bio-KNPzb9 smart-layers-pointers">
          <div class="rafal-petsch-0h7mRp valign-text-middle montserrat-semi-bold-white-24px">Rafal Petsch</div>
          <div class="general-manager-of-polish-operations-0h7mRp valign-text-middle montserrat-normal-white-24px">
            General Manager of Polish Operations
          </div>
        </div>
      </div>
      <div class="footer-T3zxx0">
        <div class="top-R5Au6E">
          <div class="rectangle-40-cIdVQB"></div>
          <div class="contact-us-cIdVQB">
            <Link to="/contact"> 
            <div class="rectangle-1-HxWGrw smart-layers-pointers">
            <div class="contact-us-HxWGrw montserrat-bold-white-14px">CONTACT US</div>
            </div>
            </Link>
          </div>
          <div class="to-learn-more-about-send-friend-cIdVQB valign-text-middle montserrat-bold-white-32px">
            <span
              ><span class="span0-8l1jEQ montserrat-bold-white-32px-2">To learn more about</span
              ><span class="span1-8l1jEQ montserrat-bold-caribbean-green-32px"> SendFriend</span>
            </span>
          </div>
        </div>
        <img class="asset-1bg1-1-2-R5Au6E" src="img/leadership/asset-1bg1-1-2-1@2x.png" />
        <Link to="/">
        <div class="logo-menu-R5Au6E"><img class="logo_menu-2-ZBtDPS" src="img/leadership/logo-menu-2-3@2x.png" /></div>
        </Link>
        <img class="line-1-R5Au6E" src="img/leadership/line-1-1@1x.png" />
        <div class="x2021-send-friend-all-rights-reserved-R5Au6E montserrat-medium-white-14px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="socials-R5Au6E">
          <div class="x-nSa34U montserrat-medium-white-14px">|</div>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="linked-in-nSa34U montserrat-medium-white-14px">LinkedIn</div> </a
          ><a href="https://twitter.com/sendfriendinc" target="_blank"
            ><div class="twitter-nSa34U montserrat-medium-white-14px">Twitter</div> </a
          ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div class="facebook-nSa34U montserrat-medium-white-14px">Facebook</div> </a
          ><a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="x-6K5FLv montserrat-medium-white-14px">|</div>
          </a>
        </div>
      </div>

      <div class="header-T3zxx0">
        <div class="top-header-3dMOFZ">
            <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
              <img class="facebook-icon-feJqHX" src="img/leadership/facebook-icon@2x.png" />
            </a>
            <a href="https://twitter.com/sendfriendinc" target="_blank">
            <img class="twitter-icon-feJqHX" src="img/leadership/twitter-icon@2x.png" />
            </a>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><img class="linkedin-icon-feJqHX" src="img/leadership/linkedin-icon@2x.svg" />
          </a>
        </div>
        <a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
            <div class="login-button-default-3dMOFZ smart-layers-pointers border-5px-caribbean-green">
            <div class="login-vpnv8g montserrat-bold-white-14px">LOGIN</div>
            </div>
        </a>
        <div class="menu-3dMOFZ">
            <HashLink smooth to="/#platform-section">
            <div class="platform-oAlqox montserrat-bold-white-14px">PLATFORM</div>
            </HashLink>
            <HashLink smooth to="/#partners">
                <div class="partners-oAlqox montserrat-bold-white-14px">PARTNERS</div>
            </HashLink>

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
          <Link to="/contact">
          <div class="contact-us-oAlqox montserrat-bold-white-14px">CONTACT US</div>
          </Link>
        </div>
        <Link to="/">
            <div class="logo-menu-3dMOFZ"><img class="logo_menu-2-TxDPvT" src="img/leadership/logo-menu-2-2@2x.png" /></div>
        </Link>
      </div>
      <div class="header-text-T3zxx0 bp2-animate-enter1" show-on-scroll>
        <div class="send-friend-team-z4pxzX">
          <span class="span0-Q23LW4">SendFriend<br /></span><span class="span1-Q23LW4">team</span>
        </div>
        <div class="we-are-cheaper-faste-z4pxzX montserrat-semi-bold-white-24px">
          We are cheaper, faster, more reliable and secure.
        </div>
        <div class="leadership-z4pxzX montserrat-bold-caribbean-green-24px">Leadership</div>
      </div>
    </div>
    <div class="mobile-leadership screen">
      <img class="unsplashrxp-th-owu-vg-e-KMEx58" src="img/leadership/unsplash-rxpthowuvge-1@2x.png" />
      <div class="rectangle-87-KMEx58"></div>
      <div class="header-text-KMEx58">
        <div class="we-are-cheaper-faste-k9JzmZ valign-text-middle montserrat-semi-bold-white-16px">
          We are cheaper, faster, more reliable and secure.
        </div>
        <div class="send-friend-team-k9JzmZ valign-text-middle">
          <span><span class="span0-ox1gv9">SendFriend </span><span class="span1-ox1gv9">team</span> </span>
        </div>
        <div class="leadership-k9JzmZ valign-text-middle montserrat-bold-caribbean-green-18px">Leadership</div>
      </div>
      <div class="header-KMEx58">
        <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');">
            <div class="hamburger-q8Yv1k">
                <img class="vector-16-bDboLa" src="img/leadership/vector-16@2x.png" />
                <img class="vector-17-bDboLa" src="img/leadership/vector-16@2x.png" /> 
                <img class="vector-18-bDboLa" src="img/leadership/vector-16@2x.png" />
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
                       
                        <HashLink smooth to="/#platform-section">
                            <div class="platform-jxzQz0 montserrat-bold-white-8px">Platform</div>
                        </HashLink>
                        <HashLink smooth to="/#partners">
                            <div class="partnership-jxzQz0 montserrat-bold-white-8px">Partnership</div>
                        </HashLink>
                        <div class="dropdown company-jxzQz0 ">
                            <div class="dropbtn montserrat-bold-white-8px">Company	&#42780;</div>
                            <div class="dropdown-content">
                            <a href="/#/history">History</a>
                            <HashLink to="#">
                            Leadership</HashLink>
                            <a href="/#/contact">Career</a>
                            </div>
                        </div>
                        <a href="/#/contact">
                            <div class="contact-jxzQz0 montserrat-bold-white-8px"> 
                            Contact
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
                
                        </div>
                    </div>
                    </div>
        <div class="logo-q8Yv1k">
          <div class="frame-131-SbOZkS"><img class="logo_menu-2-upuDXj" src="img/leadership/logo-menu-2@2x.png" /></div>
        </div>
      </div>
      <div class="our-expert-team-KMEx58 valign-text-middle">
        <span
          ><span class="span0-Xxxcpu">Our Expert</span><span class="span1-Xxxcpu">&nbsp;</span
          ><span class="span2-Xxxcpu">team</span>
        </span>
      </div>
      <div class="team1-KMEx58">
        <img class="image-2-HuxJgL smart-layers-pointers" src="img/leadership/image-2-1@2x.png" />
        <div class="bio-HuxJgL smart-layers-pointers">
          <div class="rectangle-45-mWcmHb"></div>
          <div class="david-lighton-mWcmHb valign-text-middle montserrat-semi-bold-white-9px">David Lighton</div>
          <div class="cofounderceo-mWcmHb valign-text-middle montserrat-normal-white-7px">Cofounder/CEO</div>
        </div>
        <div class="david-lighton-is-sen-HuxJgL">
          David Lighton is SendFriend’s Co-Founder and CEO. <br /><br />David developed the concept for SendFriend in
          2017 while getting his MBA from MIT Sloan’s full-time program. David stewarded his early team into MIT’s delta
          V Accelerator and Barclays Accelerator TechStars. <br />In the process, he sourced pre-seed funding for the
          venture from leading sources including the European Union Smart Growth fund, Ripple, MIT Media Lab, Knick
          Capital, and 8 Decimal Capital. <br />Prior to SendFriend and Sloan, David was an analyst for five years at
          the World Bank&#39;s Haiti desk in Washington, DC, where he served on the Special Envoy’s staff overseeing an
          $800M investment portfolio for earthquake reconstruction.<br />Since 2019, David has been a Yale Global
          Justice Fellow, appointed to conduct and advise on research related to cross-border payments and blockchain.
        </div>
        <div class="he-also-sits-on-the-HuxJgL">
          He also sits on the Johns Hopkins University Dean’s Advisory Board. Additionally, David is a Co-Founder of
          Lithium Finance, a blockchain platform designed to value private assets via the wisdom of crowds and
          algorithms. David holds his MBA from MIT Sloan, MA from John Hopkins School of International Studies (SAIS)
          with honors, and BA in International Studies from Johns Hopkins University.
        </div>
      </div>
      <div class="team2-KMEx58">
        <img class="image-3-UfW2Ke smart-layers-pointers" src="img/leadership/image-3-2@2x.png" />
        <div class="bio-UfW2Ke smart-layers-pointers">
          <div class="rectangle-45-irWUfd"></div>
          <div class="roy-vivasi-irWUfd valign-text-middle montserrat-semi-bold-white-9px">Roy Vivasi</div>
          <div class="cofoundercto-irWUfd valign-text-middle montserrat-normal-white-7px">Cofounder/CTO</div>
        </div>
        <div class="roy-vivasi-joined-se-UfW2Ke montserrat-normal-white-6-5px">
          Roy Vivasi joined SendFriend as Chieft Technology Officer in mid-2021. <br /><br />Roy has extensive
          experience building electronic, algorithmic trading strategies and in software development. Prior to
          SendFriend, Roy was a developer for BGC Partners (2019-2021), where he oversaw the development and
          implementation of predictive analytic tools for various tradable instruments and managed a team of algorithmic
          traders. <br />From 2018-2019, he worked for the OTCex Group as a Senior Sales Trader, actively involved in
          developing and improving their electronic fixed income products. From 2014-2018, he worked at Bank of America
          Merrill Lynch in London as VP, developing algorithmic-driven trading models covering various fixed income
          asset classes.
        </div>
      </div>
      <div class="from-2010-2014-he-wo-KMEx58 montserrat-normal-white-6-5px">
        From 2010-2014, he worked at Morgan Stanley as Analyst and then Associate trading almost every liquid sovereign
        in the EGB space, while building risk management systems and analytic tools for trading opportunity
        identification. Roy holds a Masters in Mathematics from the University of Oxford (Magdalene College, Oxford
        Scholar)
      </div>
      <div class="team5-KMEx58">
        <img class="img_8101-1-1-oxfA6n smart-layers-pointers" src="img/leadership/img-8101--1--1-1@2x.png" />
        <div class="bio-oxfA6n smart-layers-pointers">
          <div class="will-ferrer-WybKbN valign-text-middle montserrat-semi-bold-white-9px">Will Ferrer</div>
          <div class="director-of-operations-and-strategy-WybKbN valign-text-middle montserrat-normal-white-7px">
            Director of Operations&nbsp;&nbsp;and Strategy
          </div>
        </div>
        <div class="will-ferrer-is-send-oxfA6n montserrat-normal-white-6-5px">
          Will Ferrer is SendFriend’s Director of Strategy &amp; Operations, joining the team in late 2021.
          <br /><br />Will has diverse experience in strategy, finance, and operations across the finance and technology
          sectors. Prior to SendFriend, he worked at technology firm PTC on their Corporate Strategy team, primarily
          serving as internal consultant driving strategic initiatives. <br /><br />From 2017-2018, while studying in
          the full-time MBA program at MIT Sloan, Will co-founded a water filtration technology start-up, Divaqua, with
          an MIT Chemistry PhD student, and participated in the prestigious delta V Accelerator program. <br />From
          2013-2016, he was a business analyst at healthcare IT firm Arcadia Healthcare Solutions, where he managed a
          range of programs related to sales operations and marketing strategy. Prior to Arcadia, he worked in equity
          research at Lazard Capital Markets in NYC, covering the shipping and logistics sector (FINRA Series 7, 63, 86,
          and 87 certified). Will holds his MBA from MIT Sloan with Certificate in Sustainability Management, and BA in
          History from Amherst College.
        </div>
      </div>
      <div class="team6-KMEx58">
        <img class="image-5-2cFUi5 smart-layers-pointers" src="img/leadership/image-5-1@2x.png" />
        <div class="bio-2cFUi5 smart-layers-pointers">
          <div class="rectangle-45-erd8Rf"></div>
          <div class="sandra-ro-erd8Rf valign-text-middle montserrat-semi-bold-white-9px">Sandra Ro</div>
          <div class="director-erd8Rf valign-text-middle montserrat-normal-white-7px">Director</div>
        </div>
        <div class="sandra-ro-is-the-cur-2cFUi5 montserrat-normal-white-6-5px">
          Sandra Ro is the current CEO of the Global Blockchain Business Council, and a recognized thought leader in the
          blockchain space, having built blockchain-based products at the Chicago Mercantile Exchange. She holds a BA
          from Yale and an MBA from the London Business School.
        </div>
      </div>
      <div class="team7-KMEx58">
        <img class="image-3-cx6SIn smart-layers-pointers" src="img/leadership/image-3-3@2x.png" />
        <div class="bio-cx6SIn smart-layers-pointers">
          <div class="rectangle-45-R0XJ2c"></div>
          <div class="satwik-seshasai-R0XJ2c valign-text-middle montserrat-semi-bold-white-9px">Satwik Seshasai</div>
          <div class="director-R0XJ2c valign-text-middle montserrat-normal-white-7px">Director</div>
        </div>
        <div class="satwik-seshasai-is-t-cx6SIn montserrat-normal-white-6-5px">
          Satwik Seshasai is the head of AI Infrastructure Engineering at Compass. Previously he served as CTO at
          ShopSpring, an e-commerce business. He is the co-founder of Segovia Technology, an international payments
          platform, which was backed by Greylock Partners and was recently acquired by Crown Agents Bank and Helios
          Partners. He holds a PhD from MIT.
        </div>
      </div>
      <div class="team4-KMEx58">
        <img class="rafal-1-mW9Xxr smart-layers-pointers" src="img/leadership/rafal-1-1@2x.png" />
        <div class="bio-mW9Xxr smart-layers-pointers">
          <div class="rafal-petsch-iaezLb valign-text-middle montserrat-semi-bold-white-9px">Rafal Petsch</div>
          <div class="general-manager-of-polish-operations-iaezLb valign-text-middle montserrat-normal-white-7px">
            General Manager of Polish Operations
          </div>
        </div>
        <div class="rafal-petsch-is-send-mW9Xxr montserrat-normal-white-6-5px">
          Rafal Petsch is SendFriend’s General Manager of its Polish subsidiary. <br /><br />He boasts over 25 years of
          experience working in the international banking sector.&nbsp;&nbsp;He started his career in 1994 in the
          Treasury Department of the Warsaw branch of ING bank. Afterwards, he spent 5 years with Bank of America Group,
          where, he co-founded the BOA Warsaw branch, held the positions of Chief Trader, Treasurer and Member of the
          Management Board. At BoA in London, Rafal was the head of the Exotic Currencies team, and later managed PLN
          currency positions at Citibank N.A.&nbsp;&nbsp;After returning to Poland, he was appointed Director of the
          Treasury Department at DZ Bank Polska.<br />In 2004, he became Head of the Treasury and Investment Finance
          Department at the newly established Dexia Kommunalredit Bank.
        </div>
        <div class="the-remainder-of-his-mW9Xxr montserrat-normal-white-6-5px">
          The remainder of his banking career was spent developing the Pekao S.A. group (Unicredit), the largest
          corporate bank in Poland.&nbsp;&nbsp;Since 2009, he has held the position of Managing Director of the
          Financial Institutions and Public Sector Department, Managing Director of the Strategic Clients Department, as
          well as was a member of the Management Board of Pekao Investement Banking S.A.&nbsp;&nbsp;He was also the head
          of two strategic projects (Go Poland and Agromania), and was an active member of the bank&#39;s credit
          committee. Since January 2021, he has been a Managing Director at Ipopema Securities. Rafal is also one of the
          founding members of PLUS Connector - a platform that supports innovative US companies with their expansion
          into Polish and European Markets. He also holds a Board Member position at Sendfriend Polska Sp. z o.o. He is
          a graduate of INSEAD, as well as the Warsaw School of Economics.
        </div>
      </div>
      <div class="footer-KMEx58">
        <div class="rectangle-89-xJcTZB"></div>
        <div class="rectangle-40-xJcTZB"></div>
        <div class="to-learn-more-about-send-friend-xJcTZB valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span class="span0-9dwwYj montserrat-bold-white-14px">To learn more about</span
            ><span class="span1-9dwwYj montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <img class="line-1-xJcTZB" src="img/leadership/line-1@2x.png" />
        <img class="asset-1bg1-1-2-xJcTZB" src="img/leadership/asset-1bg1-1-2@2x.png" />
        <div class="x-xJcTZB montserrat-medium-white-14px">|</div>
        <div class="x-Hl09Sr montserrat-medium-white-14px">|</div>
        <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
          ><div class="linked-in-xJcTZB montserrat-medium-white-11px">LinkedIn</div> </a
        ><a href="https://twitter.com/sendfriendinc" target="_blank"
          ><div class="twitter-xJcTZB montserrat-medium-white-11px">Twitter</div> </a
        ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
          ><div class="facebook-xJcTZB montserrat-medium-white-11px">Facebook</div>
        </a>
        <div class="x2021-send-friend-all-rights-reserved-xJcTZB montserrat-medium-white-9px">
          © 2021 SendFriend. All Rights Reserved
        </div>
        <div class="contact-us-xJcTZB bp1-animate-enter2" show-on-scroll>
            <Link to="/contact">
          <div class="rectangle-1-CqxZJp smart-layers-pointers"></div>
          <div class="contact-us-CqxZJp valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
          </Link>
        </div>
        <Link to="/">
        <div class="logo-xJcTZB">
          <div class="frame-131-mWitQN"><img class="logo_menu-2-vkp9lZ" src="img/leadership/logo-menu-2@2x.png" /></div>
        </div>
        </Link>
      </div>
    </div>
      </div>
      );
    }