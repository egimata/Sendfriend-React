import React from 'react';
import Footer from '../components/Footer/Footer';
import Careers from '../components/Headers/Careers';
import HeaderTest from '../components/Headers/HeaderTest';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import FooterMobile from '../components/Footer/FooterMobile';
import PolandInfo from '../components/PolandPage/polandInfo';

const PolandPage = () => {
    return(
        <>
        {/* Desktop */}
        <div className="udaap screen">
            <Nav />
            <HeaderTest 
                text="SendFriend "
                green_text='Poland'
                subtitle='SendFriend'
                image='img/homepage/slider-homepage.jpg'
                under_text=''
                button={false}
            />
            <PolandInfo />
            <Footer custom_class="footer-section" />
        </div>
        {/* Desktop End */}
        <div className="mobile-udaap screen bg-custom">
            <NavMobile />
            <Careers 
                 text="SendFriend "
                 green_text='Poland'
                 subtitle='SendFriend'
                 image='img/homepage/slider-homepage.jpg'
                 under_text=''
                 button={false}
            />
            <PolandInfo />
            <FooterMobile custom_class="footer footer-udaap top-0" />
        </div>
        </>
    )
}

export default PolandPage