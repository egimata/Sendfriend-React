import React from 'react';
import "../components/Navbar.css";
import HeaderTest from '../components/Headers/HeaderTest';
import "../components/leadership-style.css";  
import Careers from '../components/Headers/Careers';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import TeamBio from '../components/Leadership/TeamBio';
import SEO from '../components/common/SEO';

const Leadership = () => {
    return (
      <div>
        <SEO title="Leadership" />
        <div className="udaap screen bg-custom">
          <Nav />
          <HeaderTest 
            text="SendFriend"
            green_text='Team'
            subtitle='Leadership'
            image='img/leadership/leadership-page.png'
            under_text='We are cheaper, faster, more reliable and secure.'
            button={false}
          />
          <TeamBio />
          <Footer custom_class="section footer-section" />
        </div>
        {/* Desktop End */}
        {/* Mobile Start */}
        <div className="mobile-udaap screen bg-custom">
          <NavMobile />
          <Careers 
            text="SendFriend"
            green_text='Team'
            subtitle='Leadership'
            image='img/leadership/leadership-page.png'
            under_text='We are cheaper, faster, more reliable and secure.'
            button={false}
          />
          <TeamBio />
          <FooterMobile custom_class="footer footer-udaap top-0" />
        </div>
    </div>
  );
}
export default Leadership