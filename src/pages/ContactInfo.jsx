import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactInfo extends Component {
    render() {
        return <div>
        <div className="map-area pd-top-120">
            <div className="container">
                <div className="map-area-wrap">
                    <div className="row no-gutters">
                        <div className="col-lg-8">
                        {/* <iframe title="riyaqas-map" width="1075" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> */}
                        
                        </div>  
                        <div className="col-lg-4 desktop-center-item">
                            <div>
                                <div className="contact-info">
                                    <h4 className="title">General business inquiries:</h4>
                                    <p className="sub-title">For general information about our product and pricing, please email: <a href="mailto:info@sendfriend.io">info@sendfriend.io</a></p>
                                    <h4 className="title">Technical support:</h4>
                                    
                                    <p className="sub-title">For technical support, please email: <a href="mailto:support@sendfriend.io">support@sendfriend.io</a></p>
                                    <p className="sub-title">Hours of operation: M-F, 24H</p>
                                    
                                    <h4 className="title">Careers:</h4>
                                    
                                    <p className="sub-title">To view our job openings, please visit our job board: <a href="/careers">support@sendfriend.io</a></p>
                                    <h4 className="title">Additional contact information:</h4>
                                    <p><span>Address:</span> SendFriend Inc. 101 Hudson St., Suite 21099, Jersey City, NJ 07302</p>
                                    <p><span>Mobile:</span> (917) 592-9956</p>
                                    <p><span>General hours of operation:</span>  M-F, 9-5pm EST</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}

export default ContactInfo