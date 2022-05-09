import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactInfo extends Component {
    render() {
        return <div className="col-xl-4 col-lg-5 desktop-center-item map-area-wrap">
        <div>
            <div className="contact-info">
                <h4 className="title">General business inquiries:</h4>
                <p className="sub-title">For general information about our product and pricing, please email: <a className="main-color" href="mailto:info@sendfriend.io">info@sendfriend.io</a></p>
                <h4 className="title">Technical support:</h4>
                
                <p className="sub-title">For technical support, please email: <a className="main-color" href="mailto:support@sendfriend.io">support@sendfriend.io</a></p>
                <p className="sub-title">Hours of operation: M-F, 24H</p>
                
                <h4 className="title">Careers:</h4>
                
                <p className="sub-title">To view our job openings, please visit our job board: <Link className="main-color" to="/careers">CAREERS</Link></p>
                <h4 className="title">Additional contact information:</h4>
                <p><span>Address:</span> SendFriend Inc. 101 Hudson St., Suite 21099, Jersey City, NJ 07302</p>
                <p><span>Mobile:</span>(201) 549-9750</p>
                <p><span>General hours of operation:</span> M-F, 9-5pm EST</p>
            </div>
        </div>
    </div>
    }
}

export default ContactInfo