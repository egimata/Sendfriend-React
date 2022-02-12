
import { Link } from 'react-router-dom';
const HeaderTest = ({subtitle, text, green_text, image, under_text }) => {

  return ( 
    <>
      <div className="section-header slider-homepage" style={{backgroundImage: `url(${image})`}}>
        <div id="top" className="grey-bg animate-enter" show-on-scroll>
            <div className="container">
                <div className="row">
                    <div className="col-6">
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
    </>
  )
}

export default HeaderTest; 
