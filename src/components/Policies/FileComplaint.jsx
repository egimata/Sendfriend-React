import React from 'react';
import "../Navbar.css";
import Nav from "../Navs/Nav";
import NavMobile from "../Navs/NavMobile";
import FooterMobile from "../Footer/FooterMobile";
import Footer from '../Footer/Footer';


export const FileComplaint = () => {

    const showDiv = () => {
        document.getElementById('form').style.display = "block";
        document.getElementById('form-mobile').style.display = "block";
    }

  return (
<div>
    <div className="mobile-udaap screen">
        <NavMobile />
        <div className="container-custom">
            <div className="row">
                <div className="col-footer">
                    <div className="main-text-header montserrat-bold-caribbean-green-21px bp2-animate-enter2">
                        File a Complaint
                    </div>
                </div>
                <div className="col-footer">
                    <div className="sub-text">To file a complaint click the button below</div>
                </div>
                <div className="col-footer">
                    <button onClick={showDiv} className="form-button-DfyQb5">
                        <div className="file-a-complaint-cUYzgn valign-text-middle montserrat-semi-bold-white-14px">FILE A COMPLAINT</div>
                    </button>
                </div>
            </div>
        </div>
        <div id="form-mobile" className="hide form-class-mobile montserrat-medium-black-14px">
            <form action="https://formspree.io/f/mpzbqybn" method="POST" enctype="multipart/form-data">
                <div className="name-6dhdIK">
                    <div className="your-name-TbWxNY montserrat-medium-eerie-black-11px">Your Name:</div>
                    <div className="optional-o8ORHz montserrat-light-eerie-black-8px">Optional</div>

                    <div className="rectangle-65-o8ORHz border-1px-mist-gray"></div>
                    <input
                        className="your-name-o8ORHz montserrat-normal-quick-silver-8px"
                        name="yourname"
                        placeholder="Your Name*"
                        type="text"
                        
                    />
                </div>
                <div className="email-6dhdIK">
                    <div className="your-email-address-w4qgxr montserrat-medium-eerie-black-11px">Your Email Address:</div>
                    <div className="optional-lepMu8 montserrat-light-eerie-black-8px">Optional</div>
                    <div className="rectangle-66-lepMu8 border-1px-mist-gray"></div>
                    <input
                        className="your-email-address-lepMu8 montserrat-normal-quick-silver-8px"
                        name="youremailaddress"
                        placeholder="Your Email Address*"
                        type="email"
                       
                    />
                </div>
                <div className="mobile-6dhdIK">
                    <div className="mobile-h8qunN">Mobile:</div>
                    <div className="optional-mSc92I montserrat-light-eerie-black-8px">Optional</div>
                    <div className="rectangle-69-mSc92I border-1px-mist-gray"></div>
                    <input
                        className="mobile-mSc92I montserrat-normal-quick-silver-8px"
                        name="mobile"
                        placeholder="Mobile"
                        type="number"
                    />
                </div>

                <div className="message-form-6dhdIK">
                    <div className="message-X3NXn4">Message</div>
                    <div className="rectangle-67-X3NXn4 border-1px-mist-gray"></div>
                    <textarea
                        className="i-have-a-complaint-about-X3NXn4 montserrat-normal-quick-silver-11px"
                        name="ihaveacomplaintabout_"
                        placeholder="I have a complaint about...:"
                        type="text"
                        required
                    ></textarea>
                </div>
                <div className="upload-6dhdIK">
                    <div className="upload-your-cv-DNzkh0 montserrat-medium-eerie-black-11px">Upload File</div>
                    <div className="upload-file-DNzkh0 border-1px-mist-gray">
                        <input
                        className="choose-file-DASVoD montserrat-normal-quick-silver-8px"
                        name="upload"
                        type="file"
                        
                        />
                    </div>
                </div>
                <button type="submit" className=" button-mobile">SEND</button>
            </form>
        </div>
        <FooterMobile custom_class="footer footer-udaap" />
    </div>
    <div className="udaap screen">
        <Nav />
        <div className="main-text montserrat-bold-caribbean-green-32px bp1-animate-enter4">
            File a Complaint
        </div>
        
        <div className="to-file-a-complaint-1aEoaJ">To file a complaint click the button below</div>

        <div className="container-custom">
            <div className="row">
                <div className="col-footer">
                    <button className="send-button-1aEoaJ" onClick={showDiv}>
                        <div className="file-a-complaint-p9Z50J valign-text-middle montserrat-semi-bold-white-14px">FILE A COMPLAINT</div>
                    </button>
                </div>
            </div>
        </div>
        <div id='form'  className=" hide form-class montserrat-medium-black-14px">
        
            <form action="https://formspree.io/f/mpzbqybn" method="POST" enctype="multipart/form-data" >
            <div className="form-section-1aEoaJ">
                <div className="name-VrtM0o">
                    <div className="rectangle-65-VxtOf5 border-1px-mist-gray"></div>
                    <textarea
                        className="your-name-VxtOf5 montserrat-normal-quick-silver-16px"
                        name="yourname"
                        placeholder="Your Name*"
                        type="text"
                        
                    ></textarea>
                    <div className="optional-VxtOf5 montserrat-light-ebony-clay-14px">Optional</div>
                    <div className="your-name-N5Eq4D montserrat-medium-ebony-clay-16px">Your Name:</div>
                </div>
                <div className="email-VrtM0o">
                    <div className="rectangle-66-HJ7YyE border-1px-mist-gray"></div>
                    <input
                        className="your-email-address-HJ7YyE montserrat-normal-quick-silver-16px"
                        name="youremailaddress"
                        placeholder="Your Email Address*"
                        type="email"
                        
                    />
                    <div className="optional-HJ7YyE montserrat-light-ebony-clay-14px">Optional</div>
                    <div className="your-email-address-pANW1x montserrat-medium-ebony-clay-16px">Your Email Address:</div>
                </div>
                <div className="mobile-VrtM0o">
                    <div className="rectangle-69-7TM6at border-1px-mist-gray"></div>
                    <div className="optional-7TM6at montserrat-light-ebony-clay-14px">Optional</div>
                    <input
                        className="mobile-7TM6at montserrat-normal-quick-silver-16px"
                        name="mobile"
                        placeholder="Mobile"
                        type="number"
                    />
                    <div className="mobile-UxGnyQ montserrat-medium-ebony-clay-16px">Mobile:</div>
                </div>
                <div className="message-VrtM0o">
                    <div className="rectangle-67-Y4lbfk border-1px-mist-gray"></div>
                    <textarea
                        className="i-have-a-complaint-about-Y4lbfk montserrat-normal-quick-silver-16px"
                        name="ihaveacomplaintabout_"
                        placeholder="I have a complaint about...:"
                        type="text"
                        required
                    ></textarea>
                    <div className="messsage-Y4lbfk montserrat-medium-ebony-clay-16px">Messsage</div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload File</label><br /><br />
                    <input type="file" name="upload" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" className="send-button-VrtM0o">
                    <div className="send-PgDJ8V valign-text-middle montserrat-bold-white-14px">SEND</div>
                </button>
            </div>
            </form>
        
        </div>
        
        <Footer custom_class="section footer-section footer-section-udaap" />
    </div>

</div>

);
}