
import { Link } from 'react-router-dom';
import ButtonWhite from  '../Buttons/ButtonWhite';
const Header = ({subtitle, text, green_text, image, under_text }) => {

  return ( 
    <>
      <div className="section section-header slider-homepage-1-zYNucu" style={{backgroundImage: `url(${image})`}}>
        <div className="header-container">
            <div className="header-row">
                <div className="col-6"></div>
                <div className="col-6">
                    <div id="top" className="rectangle-87-zYNucu animate-enter" show-on-scroll>
                    <div className="header-text-zYNucu">
                        <div className="send-friend-n1joYR animate-enter3" show-on-scroll>{subtitle}</div>
                        <div className="faster-cheaper-multi-n1joYR animate-enter1">
                        {text} <span className="span1-kjm5Mi">{green_text}</span>
                        </div>
                        <div className="we-are-cheaper-faste-n1joYR animate-enter2" show-on-scroll>
                            {under_text}
                        </div>
                        
                        <Link to="/contact-us">
                            <div className="rectangle-1-rh6tbp animate-enter4 smart-layers-pointers">
                                <div className="contact-us-rh6tbp montserrat-bold-eerie-black-14px">CONTACT US</div>
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    
    </div>
    <img className="rectangle-106-zYNucu" src="img/homepage/rectangle-106@1x.png" />
    </>
  )
}

export default Header; 
