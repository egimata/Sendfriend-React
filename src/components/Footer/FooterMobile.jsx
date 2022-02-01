import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const Footer = ({custom_class}) => {
    
    return (
        <>
      <div class={custom_class}>
        <img class="asset-1bg1-1-2-gBjW7Z" src="img/asset-1bg1-1-2@2x.png" />
        <div class="rectangle-40-gBjW7Z"></div>
        <div class="to-learn-more-about-send-friend-gBjW7Z valign-text-middle montserrat-bold-white-14px-2">
          <span
            ><span class="span0-RsYvf7 montserrat-bold-white-14px">To learn more about</span
            ><span class="span1-RsYvf7 montserrat-bold-caribbean-green-14px"> SendFriend</span>
          </span>
        </div>
        <Link to="/contact-us">
        <div class="contact-us-gBjW7Z bp2-animate-enter7" show-on-scroll>
          <div class="rectangle-1-XbWypM smart-layers-pointers"></div>
          <div class="contact-us-XbWypM valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </div>
        </Link>
        <Link to="/">
        <div class="logo-gBjW7Z">
          <div class="frame-131-h0Texg"><img class="logo_menu-2-K8SRLr" src="img/logo-menu-2@2x.png" /></div>
        </div>
        </Link>
        
        <div class="middle-footer-gBjW7Z">
          <div class="company-k8XR3z valign-text-middle montserrat-bold-coconut-14px">COMPANY</div>
          <div class="support-k8XR3z valign-text-middle montserrat-bold-coconut-14px">SUPPORT</div>
          <Link to="/about-us" >
            <div class="history-k8XR3z montserrat-medium-white-11px">About Us</div> 
            </Link>
          <Link to="/privacy-policy" >
            <div class="privacy-policy-k8XR3z montserrat-medium-white-11px">Privacy Policy</div> 
            </Link>
          <Link to="/leadership" >
            <div class="leadership-k8XR3z montserrat-medium-white-11px">Leadership</div> 
            </Link>
          <Link to="/terms-of-use" >
            <div class="state-licence-k8XR3z montserrat-medium-white-11px">User Agreement</div> 
            </Link>
          <Link to="/careers" >
            <div class="careers-k8XR3z montserrat-medium-white-11px">Careers</div> 
            </Link>
          <Link to="/esign-policy" >
            <div class="udaap-policy-k8XR3z montserrat-medium-white-11px">E-sign Policy</div> 
            </Link>
          <Link to="/contact-us" >
            <div class="contact-us-k8XR3z montserrat-medium-white-11px">Contact Us</div>
             </Link><Link to="/file-complaint" >
            <div class="file-a-complaint-k8XR3z montserrat-medium-white-11px">File a Complaint</div>
          </Link>
          {/* <Link to="/complaints-policy" >
            <div class="complaints-policy-k8XR3z montserrat-medium-white-11px">Complaints Policy</div> 
            </Link> */}
        </div>
        <div class="bottom-footer-gBjW7Z">
          <img class="line-1-o8Fgec" src="img/line-1@2x.png" />
          <div class="x-o8Fgec montserrat-medium-white-14px">|</div>
          <div class="x-ag0KtK montserrat-medium-white-14px">|</div>
          <Link to="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="linked-in-o8Fgec montserrat-medium-white-11px">LinkedIn</div> </Link
          ><Link to="https://twitter.com/sendfriendinc" target="_blank"
            ><div class="twitter-o8Fgec montserrat-medium-white-11px">Twitter</div> </Link
          ><Link to="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div class="facebook-o8Fgec montserrat-medium-white-11px">Facebook</div>
          </Link>
          <div class="x2022-send-friend-all-rights-reserved-o8Fgec montserrat-medium-white-9px">
            © 2022 SendFriend. All Rights Reserved
          </div>
          <div class="send-friend-is-licen-o8Fgec montserrat-medium-white-9px">
            SendFriend is licensed as a money transmitter with the State of New Jersey&#39;s Department of Banking &amp;
            Insurance, License No. L070801. 101 Hudson St Suite 21099 Jersey City, NY 07302, US
          </div>
        </div>
      </div>
        </>
            
    );
}
export default Footer;



