
import { Link } from 'react-router-dom';

export const Footer = ({custom_class}) => {

const altimg = "SendFriend"
    return (
        <>
      <div className={custom_class}>
        <img alt={altimg} className="asset-1bg1-1-2-gBjW7Z" src="img/asset-1bg1-1-2@2x.png" />
        <div className="rectangle-40-gBjW7Z"></div>
        <div className="to-learn-more-about-send-friend-gBjW7Z valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span className="span0-RsYvf7 montserrat-bold-white-14px">To learn more about</span
            ><span className="span1-RsYvf7 montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <Link to="/contact-us">
        <div className="contact-us-gBjW7Z bp2-animate-enter7" >
          <div className="rectangle-1-XbWypM smart-layers-pointers"></div>
          <div className="contact-us-XbWypM valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </div>
        </Link>
        <Link to="/">
        <div className="logo-gBjW7Z">
          <div className="frame-131-h0Texg"><img alt={altimg} className="logo_menu-2-K8SRLr" src="img/logo-menu-2@2x.png" /></div>
        </div>
        </Link>
        
        <div className="middle-footer-gBjW7Z">
          <div className="company-k8XR3z valign-text-middle montserrat-bold-coconut-14px">COMPANY</div>
          <div className="support-k8XR3z valign-text-middle montserrat-bold-coconut-14px">SUPPORT</div>
          <Link to="/about-us" >
            <div className="history-k8XR3z montserrat-medium-white-11px">About Us</div> 
            </Link>
          <Link to="/privacy-policy" >
            <div className="privacy-policy-k8XR3z montserrat-medium-white-11px">Privacy Policy</div> 
            </Link>
          <Link to="/leadership" >
            <div className="leadership-k8XR3z montserrat-medium-white-11px">Leadership</div> 
            </Link>
          <Link to="/terms-of-use" >
            <div className="state-licence-k8XR3z montserrat-medium-white-11px">User Agreement</div> 
            </Link>
          <Link to="/careers" >
            <div className="careers-k8XR3z montserrat-medium-white-11px">Careers</div> 
            </Link>
          <Link to="/esign-policy" >
            <div className="udaap-policy-k8XR3z montserrat-medium-white-11px">E-sign Policy</div> 
            </Link>
          <Link to="/contact-us" >
            <div className="contact-us-k8XR3z montserrat-medium-white-11px">Contact Us</div>
             </Link><Link to="/file-complaint" >
            <div className="file-a-complaint-k8XR3z montserrat-medium-white-11px">File a Complaint</div>
          </Link>
          {/* <Link to="/complaints-policy" >
            <div className="complaints-policy-k8XR3z montserrat-medium-white-11px">Complaints Policy</div> 
            </Link> */}
        </div>
        <div className="bottom-footer-gBjW7Z">
          <img alt={altimg} className="line-1-o8Fgec" src="img/line-1@2x.png" />
          <div className="x-o8Fgec montserrat-medium-white-14px">|</div>
          <div className="x-ag0KtK montserrat-medium-white-14px">|</div>
          <Link to="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div className="linked-in-o8Fgec montserrat-medium-white-11px">LinkedIn</div> </Link
          ><Link to="https://twitter.com/sendfriendinc" target="_blank"
            ><div className="twitter-o8Fgec montserrat-medium-white-11px">Twitter</div> </Link
          ><Link to="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div className="facebook-o8Fgec montserrat-medium-white-11px">Facebook</div>
          </Link>
          <div className="x2022-send-friend-all-rights-reserved-o8Fgec montserrat-medium-white-9px">
            © 2022 SendFriend. All Rights Reserved
          </div>
          <div className="send-friend-is-licen-o8Fgec montserrat-medium-white-9px">
            SendFriend is licensed as a money transmitter with the State of New Jersey&#39;s Department of Banking &amp;
            Insurance, License No. L070801. 101 Hudson St Suite 21099 Jersey City, NY 07302, US
          </div>
        </div>
      </div>
        </>
            
    );
}
export default Footer;



