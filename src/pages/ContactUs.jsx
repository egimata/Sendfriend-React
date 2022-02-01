import React from 'react';
import Nav from '../components/Navs/Nav';
import SEO from '../components/common/SEO';
import Careers from '../components/Headers/Careers';
import ContactForm from './ContactForm';
import Footer from '../components/Footer/Footer';
import NavMobile from '../components/Navs/NavMobile';
import FooterMobile from '../components/Footer/FooterMobile';

const ContactUs = () => {
    return <>
        <SEO title={'Contact Us'} />
        <div class="udaap screen bg-transparent">
            <Nav />
            <Careers 
                    text="Contact"
                    green_text='Us'
                    subtitle='SendFriend'
                    image='img/headers/contact.png'
                    under_text='We are cheaper, faster, more reliable and secure.'
                />
            <ContactForm />
            <Footer custom_class="section footer-section" />
        </div>
        <div class="mobile-udaap screen bg-transparent">
            <NavMobile />
            <Careers 
                    text="Contact"
                    green_text='Us'
                    subtitle='SendFriend'
                    image='img/headers/contact.png'
                    under_text='We are cheaper, faster, more reliable and secure.'
                />
            <ContactForm />
            <FooterMobile custom_class="footer footer-udaap mg-top-custom-footer" />
        </div>
    </>
}

export default ContactUs
