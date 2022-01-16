
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  return ( 
      <div>
        <img className="slider-homepage-1-zYNucu" src="img/homepage/slider-homepage-1@1x.jpg" />
        <div id="top" className="rectangle-87-zYNucu animate-enter" show-on-scroll></div>
        <div className="header-text-zYNucu">
        <div className="faster-cheaper-multi-n1joYR animate-enter1">
            Faster, Cheaper<br />Multi-Chain<br />Payments <span className="span1-kjm5Mi">Service.</span>
        </div>
        <div className="we-are-cheaper-faste-n1joYR animate-enter2" show-on-scroll>
            We are cheaper, faster, and more reliable and secure.
        </div>
        <div className="send-friend-n1joYR animate-enter3" show-on-scroll>SendFriend</div>
        <div className="group-120-n1joYR animate-enter4" show-on-scroll>
        <Link to="/contact">
            <div className="rectangle-1-rh6tbp smart-layers-pointers">
            <div className="contact-us-rh6tbp montserrat-bold-eerie-black-14px">CONTACT US</div>
            </div>
            </Link>
        </div>
        </div>
        <img className="rectangle-106-zYNucu" src="img/homepage/rectangle-106@1x.png" />
    </div>
  )
}

export default Header; 
