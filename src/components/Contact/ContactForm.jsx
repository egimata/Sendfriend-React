import React from 'react';
import ContactInfo from './ContactInfo';

const ContactForm = props => {
        const handleFocus = e => {
            e.target.nextSibling.classList.add("active");
        };
        const handleBlur = e => {
            e.target.nextSibling.classList.remove("active");
        };
   
    return <div>
            <div className="contact-form-area pd-top-112 pd-bottom-112">
                <div className="container display-block">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center w-100">
                                <h3 className="title">Have a question about our product and service offerings?<br /> <span className='career-span'>Please drop us a line below</span></h3>
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
                        <ContactInfo />
                        
                    </div>
                </div>
            </div>
        </div>
     }

export default ContactForm

