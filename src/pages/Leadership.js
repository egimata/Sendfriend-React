import React from 'react';
import "../components/Navbar.css";
import HeaderTest from '../components/Headers/HeaderTest';
import "../components/leadership-style.css"
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import TeamBio from '../components/Leadership/TeamBio';
import TeamBioMobile from '../components/Leadership/TeamBioMobile';

export const Leadership = () => {
    const altImg = "SendFriend"
    return (
      <div>
    <div class="leadership screen">
      <Nav />
      <HeaderTest 
            text="SendFriend"
            green_text='Team'
            subtitle='Leadership'
            image='img/leadership/leadership-page.png'
            under_text='We are cheaper, faster, more reliable and secure.'
            button={true}
        />
      <TeamBio />
      <Footer custom_class="section footer-section leadership-footer footer-section-leadership" />
      
      <div class="header-text-T3zxx0 bp2-animate-enter1" >
        <div class="send-friend-team-z4pxzX">
          <span class="span0-Q23LW4">SendFriend<br /></span><span class="span1-Q23LW4">Team</span>
        </div>
        <div class="we-are-cheaper-faste-z4pxzX montserrat-semi-bold-white-24px">
          We are cheaper, faster, more reliable and secure.
        </div>
        <div class="leadership-z4pxzX montserrat-bold-caribbean-green-24px">Leadership</div>
      </div>
    </div>
    {/* Desktop End */}
    {/* Mobile Start */}
    <div class="mobile-leadership screen">
      <img alt={altImg} class="unsplashrxp-th-owu-vg-e-KMEx58" src="img/leadership/leadership-page.png" />
      <div class="rectangle-87-KMEx58"></div>
      <div class="header-text-KMEx58">
        <div class="we-are-cheaper-faste-k9JzmZ valign-text-middle montserrat-semi-bold-white-16px">
          We are cheaper, faster, more reliable and secure.
        </div>
        <div class="send-friend-team-k9JzmZ valign-text-middle">
          <span><span class="span0-ox1gv9">SendFriend </span><span class="span1-ox1gv9">Team</span> </span>
        </div>
        <div class="leadership-k9JzmZ valign-text-middle montserrat-bold-caribbean-green-18px">Leadership</div>
      </div>
      <NavMobile />
      <div class="our-expert-team-KMEx58 valign-text-middle">
        <span
          ><span class="span0-Xxxcpu">Our expert</span><span class="span1-Xxxcpu">&nbsp;</span
          ><span class="span2-Xxxcpu">team</span>
        </span>
      </div>
      <TeamBioMobile />
      <FooterMobile custom_class="footer footer-leadership" />
    </div>
      </div>
      );
}