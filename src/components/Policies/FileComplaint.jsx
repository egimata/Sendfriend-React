import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import "../Navbar.css";
import '../contact-us.css'
import {Link} from 'react-router-dom';
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
    <div class="mobile-udaap screen">
        <NavMobile />
        <div className="container">
            <div className="row">
                <div className="col-footer">
                    <div class="main-text-header montserrat-bold-caribbean-green-21px bp2-animate-enter2">
                        File a Complaint
                    </div>
                </div>
                <div className="col-footer">
                    <div class="sub-text">To file a complaint click the button below</div>
                </div>
                <div className="col-footer">
                    <button onClick={showDiv} class="form-button-DfyQb5">
                        <div class="file-a-complaint-cUYzgn valign-text-middle montserrat-semi-bold-white-14px">FILE A COMPLAINT</div>
                    </button>
                </div>
            </div>
        </div>
        <div id="form-mobile" class="hide form-class-mobile montserrat-medium-black-14px">
            <form>
                <div class="name-6dhdIK">
                    <div class="your-name-TbWxNY montserrat-medium-eerie-black-11px">Your Name:</div>
                    <div class="optional-o8ORHz montserrat-light-eerie-black-8px">Optional</div>

                    <div class="rectangle-65-o8ORHz border-1px-mist-gray"></div>
                    <input
                        class="your-name-o8ORHz montserrat-normal-quick-silver-8px"
                        name="yourname"
                        placeholder="Your Name*"
                        type="text"
                        
                    />
                </div>
                <div class="email-6dhdIK">
                    <div class="your-email-address-w4qgxr montserrat-medium-eerie-black-11px">Your Email Address:</div>
                    <div class="optional-lepMu8 montserrat-light-eerie-black-8px">Optional</div>
                    <div class="rectangle-66-lepMu8 border-1px-mist-gray"></div>
                    <input
                        class="your-email-address-lepMu8 montserrat-normal-quick-silver-8px"
                        name="youremailaddress"
                        placeholder="Your Email Address*"
                        type="email"
                       
                    />
                </div>
                <div class="mobile-6dhdIK">
                    <div class="mobile-h8qunN">Mobile:</div>
                    <div class="optional-mSc92I montserrat-light-eerie-black-8px">Optional</div>
                    <div class="rectangle-69-mSc92I border-1px-mist-gray"></div>
                    <input
                        class="mobile-mSc92I montserrat-normal-quick-silver-8px"
                        name="mobile"
                        placeholder="Mobile"
                        type="number"
                    />
                </div>

                <div class="message-form-6dhdIK">
                    <div class="message-X3NXn4">Message</div>
                    <div class="rectangle-67-X3NXn4 border-1px-mist-gray"></div>
                    <textarea
                        class="i-have-a-complaint-about-X3NXn4 montserrat-normal-quick-silver-11px"
                        name="ihaveacomplaintabout_"
                        placeholder="I have a question about...:"
                        type="text"
                        required
                    ></textarea>
                </div>
                <div class="upload-6dhdIK">
                    <div class="upload-your-cv-DNzkh0 montserrat-medium-eerie-black-11px">Upload File</div>
                    <div class="upload-file-DNzkh0 border-1px-mist-gray">
                        <input
                        class="choose-file-DASVoD montserrat-normal-quick-silver-8px"
                        name="file"
                        type="file"
                        
                        />
                    </div>
                </div>
                <button type="submit" class=" button-mobile">SEND</button>
            </form>
        </div>
        <FooterMobile custom_class="footer footer-udaap" />
    </div>
    <div class="udaap screen">
        <Nav />
        <div class="main-text montserrat-bold-caribbean-green-32px bp1-animate-enter4">
            File a Complaint
        </div>
        
        <div class="to-file-a-complaint-1aEoaJ">To file a complaint click the button below</div>

        <div className="container">
            <div className="row">
                <div className="col-footer">
                    <button class="send-button-1aEoaJ" onClick={showDiv}>
                        <div class="file-a-complaint-p9Z50J valign-text-middle montserrat-semi-bold-white-14px">FILE A COMPLAINT</div>
                    </button>
                </div>
            </div>
        </div>
        <div id='form' class=" hide form-class montserrat-medium-black-14px">
        
            <form >
            <div class="form-section-1aEoaJ">
                <div class="name-VrtM0o">
                    <div class="rectangle-65-VxtOf5 border-1px-mist-gray"></div>
                    <textarea
                        class="your-name-VxtOf5 montserrat-normal-quick-silver-16px"
                        name="yourname"
                        placeholder="Your Name*"
                        type="text"
                        
                    ></textarea>
                    <div class="optional-VxtOf5 montserrat-light-ebony-clay-14px">Optional</div>
                    <div class="your-name-N5Eq4D montserrat-medium-ebony-clay-16px">Your Name:</div>
                </div>
                <div class="email-VrtM0o">
                    <div class="rectangle-66-HJ7YyE border-1px-mist-gray"></div>
                    <input
                        class="your-email-address-HJ7YyE montserrat-normal-quick-silver-16px"
                        name="youremailaddress"
                        placeholder="Your Email Address*"
                        type="email"
                        
                    />
                    <div class="optional-HJ7YyE montserrat-light-ebony-clay-14px">Optional</div>
                    <div class="your-email-address-pANW1x montserrat-medium-ebony-clay-16px">Your Email Address:</div>
                </div>
                <div class="mobile-VrtM0o">
                    <div class="rectangle-69-7TM6at border-1px-mist-gray"></div>
                    <div class="optional-7TM6at montserrat-light-ebony-clay-14px">Optional</div>
                    <input
                        class="mobile-7TM6at montserrat-normal-quick-silver-16px"
                        name="mobile"
                        placeholder="Mobile"
                        type="number"
                    />
                    <div class="mobile-UxGnyQ montserrat-medium-ebony-clay-16px">Mobile:</div>
                </div>
                <div class="message-VrtM0o">
                    <div class="rectangle-67-Y4lbfk border-1px-mist-gray"></div>
                    <textarea
                        class="i-have-a-complaint-about-Y4lbfk montserrat-normal-quick-silver-16px"
                        name="ihaveacomplaintabout_"
                        placeholder="I have a question about...:"
                        type="text"
                        required
                    ></textarea>
                    <div class="messsage-Y4lbfk montserrat-medium-ebony-clay-16px">Messsage</div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Upload File</label><br /><br />
                    <input type="file" name="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" class="send-button-VrtM0o">
                    <div class="send-PgDJ8V valign-text-middle montserrat-bold-white-14px">SEND</div>
                </button>
            </div>
            </form>
        
        </div>
        
        <Footer custom_class="section footer-section footer-section-udaap" />
    </div>

</div>

);
}