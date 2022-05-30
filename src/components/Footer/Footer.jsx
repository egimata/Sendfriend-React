import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import ButtonWhite from  '../Buttons/ButtonWhite';

export const Footer = ({custom_class}) => {

    const dataItems = [{
        title: "COMPANY",
        content: [
            {
                path: "/about-us",
                title: "About Us",
            },
            {
                path: "/leadership",
                title: "Leadership",
            },
            {
                path: "/careers",
                title: "Careers",
            },
            {
                path: "/contact-us",
                title: "Contact Us",
            }
        ]
      },
      {
        title: "SUPPORT",
        content: [
            {  
                title: "Privacy Policy",
                path: "/privacy-policy"
            },
            {  
                title: "User Agreement",
                path: "/terms-of-use"
            },
            {  
                title: "E-sign Policy",
                path: "/esign-policy"
            },
            {  
                title: "File a Complaint",
                path: "/file-complaint"
            }
        ]
      }
    ];
    const altimg = "SendFriend"
    
    return (
        <>
        <div className={custom_class}>

            <div className="container">
                <div className="footer-widget-wrap">
                    <div className="row justify-content-center"> 
                        <div className="col-10">
                            <div className="subscribe-section"> 
                                <div className="row justify-content-center align-items-center text-center">
                                    <div className="col-6">
                                        <div className="subs-title">
                                            <h4>To learn more about <span> SendFriend</span> </h4>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="right">
                                            <Link to="/contact-us">
                                                <ButtonWhite text='CONTACT US' custom_style="button-cta buttonWhite style-three" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <HashLink smooth to="/">
                                <div className="footer-logo"><img alt={altimg} src="img/homepage/logo-menu-footer.png" /></div>
                            </HashLink>
                        </div>
                        {dataItems.map((item, index) => 
                        <div className="col-lg-3 col-sm-6" key={index}>
                            <h4 className="footer-title">{item.title}</h4>
                            <ul className="list-style">
                                { item.content.map((c, i) =>
                                    <li>
                                        <Link key={i} className="list-link" to={c.path}>
                                            {c.title}
                                        </Link>
                                    </li>
                                    )}
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="footer-copyright-area border-top-custom">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6">
                                <div className="left-text montserrat-medium-white-14px">
                                    © 2022 SendFriend. All Rights Reserved <br /> <span className="montserrat-normal-white-13px">SendFriend is licensed as a money transmitter with the State of New Jersey's Department of Banking & Insurance, License No. L070801. </span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="socials">
                                <ul className="list-style">
                                    <li >
                                        <a className="text-decoration-none" href="https://www.facebook.com/sendfriendinc/" target="_blank" rel="noreferrer"><div className="social-link montserrat-medium-white-14px">Facebook</div></a>
                                    </li>
                                    <span>|</span>
                                    <li >
                                        <a className="text-decoration-none" href="https://twitter.com/sendfriendinc" target="_blank" rel="noreferrer"><div className="social-link montserrat-medium-white-14px">Twitter</div></a>
                                    </li>
                                    <span>|</span>
                                    <li>
                                        <a className="text-decoration-none" href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer"><div className="social-link montserrat-medium-white-14px">LinkedIn</div></a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img alt={altimg} className="left-img" src="img/homepage/asset-1bg1-1-2-1@2x.png" />
        </div>
        </>
            
    );
}
export default Footer;