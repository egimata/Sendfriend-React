import React from 'react';
import Nav from '../components/Navs/Nav';
import SEO from '../components/common/SEO';
import Careers from '../components/Headers/Careers';
import HeaderTest from '../components/Headers/HeaderTest';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer/Footer';
import NavMobile from '../components/Navs/NavMobile';
import FooterMobile from '../components/Footer/FooterMobile';

const ContactUs = () => {
    return <>
        <SEO title={'Contact Us'} />
        <div className="udaap screen bg-transparent">
            <Nav />
            <HeaderTest 
                text="Contact"
                green_text='Us'
                subtitle='SendFriend'
                image='img/headers/contact.png'
                under_text='We are cheaper, faster, more reliable and secure.'
                button={false}
            />
            <ContactForm />
            <Footer custom_class="section footer-section" />
        </div>
        <div className="mobile-udaap screen bg-transparent">
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

