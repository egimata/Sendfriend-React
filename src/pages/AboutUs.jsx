import React from "react";
import "../components/Navbar.css";
import '../components/history.css';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import HeaderTest from "../components/Headers/HeaderTest";
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import SectionOne from "../components/AboutUs/SectionOne";
import EvolutionSection from "../components/AboutUs/EvolutionSection";
import TeamOne from "../components/Teams/Team";
import Careers from "../components/Headers/Careers";
import SectionPoland from "../components/AboutUs/SectionPoland";
import EvolutionSectionMobile from "../components/AboutUs/EvolutionSectionMobile";

export const AboutUs = () => {

  return (
    <div>
    {/* Desktop */}
      <div className="udaap screen">
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
        <SectionPoland data$={SectionPoland} />
        <TeamOne column={"justify-content-center text-center"}/>
        <Footer custom_class="footer-section" />
      </div>
      {/* Desktop End */}
      <div className="mobile-history screen">
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
