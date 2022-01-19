import React from "react";
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css";
import '../contact-us.css'
import {Link} from 'react-router-dom';
import Nav from "../Navs/Nav";
import NavMobile from "../Navs/NavMobile";
import FooterMobile from "../Footer/FooterMobile";
import Footer from '../Footer/Footer';


export const StateLicence = () => {

  return (
    <div >
    <div class="state-licences screen">
      <Nav />
      <Footer custom_class="section footer-section footer-section-licence" />
      <div class="state-of-new-jersey-xNEGnw montserrat-medium-black-14px">
        <br /><h1>NEW JERSEY</h1><br /><strong>Toll Free Number:</strong> 609-292-7272<br /><br />
        <br /><br /><strong>Email Address:</strong> bliconline@dobi.nj.gov<br /><br />
        <br /><br />The mission of the Department of Banking and Insurance is to regulate the banking, insurance and
        real estate industries in a professional and timely manner that protects and educates consumers and promotes the
        growth, financial stability and efficiency of those industries.<br /><br />
        <br /><br />The Department’s main offices are located in the Mary Roebling building at 20 West State Street
        (corner of West State Street and North Warren Street), in Trenton.
      </div>
      <div class="state-licences-xNEGnw montserrat-bold-caribbean-green-32px bp1-animate-enter3">State Licences</div>
      <img class="new_jersey_seal-1-xNEGnw" src="img/new-jersey-seal-1@2x.png" />
    </div>
    <div class="mobile-state-licences screen">
      <NavMobile />
      <div class="state-of-new-jersey-GrxhxW montserrat-medium-black-14px">
        <br />State of New Jersey Seal<br />NEW JERSEY<br />Toll Free Number: 609-292-7272<br /><br />
        <br /><br />Email Address: bliconline@dobi.nj.gov<br /><br />
        <br /><br />The mission of the Department of Banking and Insurance is to regulate the banking, insurance and
        real estate industries in a professional and timely manner that protects and educates consumers and promotes the
        growth, financial stability and efficiency of those industries.<br /><br />
        <br /><br />The Department’s main offices are located in the Mary Roebling building at 20 West State Street
        (corner of West State Street and North Warren Street), in Trenton.
      </div>
      <div class="state-licences-GrxhxW montserrat-bold-caribbean-green-21px bp2-animate-enter9">State Licences</div>
      <FooterMobile custom_class="footer footer-licence" />
      <img class="new_jersey_seal-1-GrxhxW" src="img/new-jersey-seal-1-1@2x.png" />
    </div>
    </div>
  );
  
  }

