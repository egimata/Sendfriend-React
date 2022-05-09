import React from "react";
import "./Navbar.css";
import './history.css';
import Nav from './Navs/Nav';
import NavMobile from './Navs/NavMobile';
import HeaderTest from "./Headers/HeaderTest";
import Footer from './Footer/Footer';
import FooterMobile from './Footer/FooterMobile';
import SectionOne from "./AboutUs/SectionOne";
import EvolutionSection from "./AboutUs/EvolutionSection";
import TeamOne from "./Teams/Team";
import Careers from "./Headers/Careers";
import SectionPoland from "./AboutUs/SectionPoland";
import EvolutionSectionMobile from "./AboutUs/EvolutionSectionMobile";

export const AboutUs = () => {

  return (
    <div>
    {/* Desktop */}
      <div class="udaap screen">
        <Nav />
        <HeaderTest 
            text="One connection to the world of"
            green_text='payments.'
            subtitle='About us'
            image='img/history/history-page.jpg'
            under_text='We are cheaper, faster, more reliable and secure.'
            button={false}
        />
        <SectionOne />
        <EvolutionSection />
        <SectionPoland />
        <TeamOne column={"justify-content-center text-center"}/>
        <Footer custom_class="footer-section" />
      </div>
      {/* Desktop End */}
      <div class="mobile-history screen">
        <NavMobile />
        <Careers 
              text="One connection to the world of"
              green_text='payments.'
              subtitle='About Us'
              image='img/history/history-page.jpg'
              under_text='We are cheaper, faster, more reliable and secure.'
          />
        <SectionOne />
        <EvolutionSectionMobile />
        <SectionPoland />
        <TeamOne column={"justify-content-center text-center"}/>
        <FooterMobile custom_class="footer footer-udaap top-0" />
      </div>
    </div>
  );
}
