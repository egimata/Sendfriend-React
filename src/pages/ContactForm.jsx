import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = props => {

        let imgalt = 'image'
        let publicUrl = process.env.PUBLIC_URL+'/'
        let className = 'menu';
        const handleFocus = e => {
            e.target.nextSibling.classList.add("active");
        };
        const handleBlur = e => {
            e.target.nextSibling.classList.remove("active");
        };
   
    return <div>
            <div className="contact-form-area pd-top-112 pd-bottom-112">
                <div className="container display-block">
                    {/* <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center w-100">
                                <h2 className="title">Have a question about our product and service offerings?<br /> <span>Please drop us a line below</span></h2>
                            </div>
                        </div>
                    </div> */}
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center w-100">
                                <h2 className="title">Have a question about our product and service offerings?<br /> <span>Please drop us a line below</span></h2>
                            </div>
                            <form action="https://formspree.io/f/xlezgwwv" method="POST" className="riyaqas-form-wrap mt-5 mt-lg-0 pd-right-70">
                                <div className="row custom-gutters-16">
                                    <div className="col-md-6">
                                        <div className="single-input-wrap">
                                            <input  onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} name="Full-Name" type="text" className="single-input" required/>
                                            <label>Full Name *</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-input-wrap">
                                            <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" name="Email" className="single-input" required/>
                                            <label>E-mail *</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" name="company" className="single-input"/>
                                            <label>Company</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" name="mobile" className="single-input"/>
                                            <label>Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-input-wrap">
                                            <textarea onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} name="Message" className="single-input textarea" cols="20" required></textarea>
                                            <label className="single-input-label">Message *</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="job-apply-btn right" type="submit">Submit</button>
                                    </div> 
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-5 desktop-center-item map-area-wrap">
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
                                    <p><span>Mobile:</span> (917) 592-9956</p>
                                    <p><span>General hours of operation:</span> M-F, 9-5pm EST</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     }

export default ContactForm

