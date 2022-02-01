import React from "react";
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import './history.css';
import Nav from './Navs/Nav';
import NavMobile from './Navs/NavMobile';
import Footer from './Footer/Footer';
import FooterMobile from './Footer/FooterMobile';

export const History = () => {

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
            pivoted the business model to focus on small and medium-sized enterprise customers requiring a more flexible transparent
            cost-effective, blockchain-enabled mode of sending payments internationally.
          </div>
          <div class="we-are-alumni-of-sev-iVdtxd montserrat-semi-bold-ebony-clay-14px">
            We are alumni of several top fintech start-up incubators<br /><br />Our team is comprised of international
            finance experts and innovative technologists<br /><br />We recently won a grant from a Polish-based EU
            innovation fund to build next-generation blockchain-based payment solutions for business and consumer
            customers
          </div>
          <Link to="/contact-us">
            <div class="rectangle-108-iU7JjP smart-layers-pointers">
              <div class="learn-more-iVdtxd montserrat-bold-ebony-clay-14px">LEARN MORE</div>
            </div>
          </Link>
        </div>
        <img class="background-img-MaQ2GE" src="img/history/history-page.jpg" />
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
        <Nav />
        
        <Footer custom_class="section footer-section footer-section-history" />
      </div>
    <div class="mobile-history screen">
      <img class="background-img-P2zxrg" src="img/history/history-page.jpg" />
      <NavMobile />
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
          pivoted the business model to focus on small and medium-sized enterprise customers requiring a more flexible transparent
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
        <Link to="/contact-us">
        <img class="learn-more-Obxx5p" src="img/learn-more@2x.png" />
        </Link>
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
          <img class="vector-qLdkJR" src="img/rippl.svg" />
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
        <img class="european-funds-hGV2f8" src="img/european-funds@2x.png" />
        <img class="en-logo-1-hGV2f8" src="img/enlogo-1@2x.png" />
      </div>
      <img class="rectangle-42-P2zxrg" src="img/rectangle-42@1x.png" />
      <div id="leadership" class="leadership-P2zxrg montserrat-extra-bold-caribbean-green-30px">Leadership</div>
      <div class="team1-P2zxrg">
      <HashLink smooth to="/leadership#david-mobile">
        <img class="image-2-kwPzJZ smart-layers-pointers" src="img/image-2@2x.png" />
        </HashLink>
        <div class="bio-kwPzJZ smart-layers-pointers">
          <div class="rectangle-45-rs3s2b"></div>
          <div class="david-lighton-rs3s2b montserrat-semi-bold-white-16px">David Lighton</div>
          <div class="founderceo-rs3s2b montserrat-normal-white-14px">Cofounder/CEO</div>
        </div>
      </div>
      <div class="team2-P2zxrg">
      <HashLink smooth to="/leadership#roy-mobile">
        <img class="image-3-aaSe2x smart-layers-pointers" src="img/image-3-1@2x.png" />
        </HashLink>
        <div class="bio-aaSe2x smart-layers-pointers">
          <div class="rectangle-45-V4Fvt2"></div>
          <div class="roy-vivasi-V4Fvt2 montserrat-semi-bold-white-16px">Roy Vivasi</div>
          <div class="cofoundercto-V4Fvt2 montserrat-normal-white-14px">Cofounder/CTO</div>
        </div>
      </div>
      <div class="team7-P2zxrg">
      <HashLink smooth to="/leadership#satwik-mobile">
        <img class="image-3-bwkCXv smart-layers-pointers" src="img/image-3@2x.png" />
        </HashLink>
        <div class="bio-bwkCXv smart-layers-pointers">
          <div class="rectangle-45-xwDT2I"></div>
          <div class="satwik-seshasai-xwDT2I montserrat-semi-bold-white-16px">Satwik Seshasai</div>
          <div class="director-xwDT2I montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team5-P2zxrg">
      <HashLink smooth to="/leadership#will-mobile">
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
      <HashLink smooth to="/leadership#sandra-mobile">
        <img class="image-5-jWdTUz smart-layers-pointers" src="img/image-5@2x.png" />
        </HashLink>
        <div class="bio-jWdTUz smart-layers-pointers">
          <div class="rectangle-45-wyjUxU"></div>
          <div class="sandra-ro-wyjUxU montserrat-semi-bold-white-16px">Sandra Ro</div>
          <div class="director-wyjUxU montserrat-normal-white-14px">Director</div>
        </div>
      </div>
      <div class="team4-P2zxrg">
      <HashLink smooth to="/leadership#rafal-mobile">
        <img class="rafal-1-zF3D13 smart-layers-pointers" src="img/rafal-1@2x.png" />
        </HashLink>
        <div class="bio-zF3D13 smart-layers-pointers">
          <div class="rafal-petsch-1xxUEA montserrat-semi-bold-white-16px">Rafal Petsch</div>
          <div class="general-manager-of-polish-operations-1xxUEA montserrat-normal-white-14px">
            General Manager of Polish Operations
          </div>
        </div>
      </div>
      <FooterMobile custom_class="footer footer-history" />
    </div>
      
    </div>
  );
}
