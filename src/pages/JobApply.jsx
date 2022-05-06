import React from 'react';
import SEO from '../components/common/SEO';
import sectiondata from '../data/jobdata.json';
import { Link } from 'react-router-dom';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import '../assets/css/bootstrap.min.css';

const JobApply = ({job}, props) => {

    const imgattr = 'SendFriend Job Application'
    const data = sectiondata.JobAplly
    const jobtitle = sectiondata.joblisting
    
    const handleFocus = e => {
        e.target.nextSibling.classList.add("active");
    };
    const handleBlur = e => {
        e.target.nextSibling.classList.remove("active");
    };

    const handleFileSubmit = e => {
        const fileName = e.target.value.split("\\").pop();
        e.target.nextSibling.classList.add("selected");
        e.target.nextSibling.innerText = fileName;

    }
    
    return (
        <>
          <SEO title={'Apply for - ' + job.jobtitle} />
          <div class="udaap screen bg-transparent">
            <Nav />
            <div>
                <div className= { "job-listing-page pd-top-120 pd-bottom-60" } >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="section-title text-center">
                                    <h2 className="title career main-color">{ data.sectiontitle }</h2>
                                    <p className='career'>{ data.sectionsubtitle }</p>
                                </div>
                                <div className="job-apply-area">
                                    <form className="riyaqas-form-wrap" action="https://formspree.io/f/xgedavpk" method="POST" encType="multipart/form-data">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" className="single-input" name="Full Name" required />
                                            <label>Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="email" className="single-input" name="Email" required />
                                            <label>E-mail</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" className="single-input" name="Country"  required/>
                                            <label>Country</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap mg-bottom-50">
                                            <select defaultValue={job.jobtitle} class="form-select custom-dropdown" name="Job-Selected" required>
                                            { jobtitle.job.map(( item, i )=>
                                                <option  value={item.jobtitle}>{item.jobtitle}</option>
                                            )}
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="custom-file riyaqas-file-input-wrap">
                                            <input onChange={handleFileSubmit} type="file" className="riyaqas-file-input" name="resume" id="sb-file-input" required />
                                            <label className="custom-file-label" htmlFor="sb-file-input">Upload Resume</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="job-apply-btn mg-bottom-50 mg-top-50" type="submit">Submit</button>
                                        </div> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer custom_class="section footer-section" />
          </div>
          <div class="mobile-udaap screen bg-transparent">
            <NavMobile />
            <div>
                <div className= { "job-listing-page pd-top-120 pd-bottom-60" } >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="section-title text-center">
                                    <h2 className="title main-color">{ data.sectiontitle }</h2>
                                    <p>{ data.sectionsubtitle }</p>
                                </div>
                                <div className="job-apply-area">
                                    <form className="riyaqas-form-wrap" action="https://formspree.io/f/xgedavpk" method="POST" encType="multipart/form-data">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="text" name="Full Name" className="single-input" required />
                                            <label>Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="email" name="Email" className="single-input" required />
                                            <label>E-mail</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="text" name="Country" className="single-input"  required/>
                                            <label>Country</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <select defaultValue={job.jobtitle} class="form-select custom-dropdown" required>
                                            { jobtitle.job.map(( item, i )=>
                                                <option value={item.jobtitle}>{item.jobtitle}</option>
                                            )}
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="custom-file riyaqas-file-input-wrap">
                                            <input type="file" className="riyaqas-file-input" id="sb-file-input" required/>
                                            <label className="custom-file-label" htmlFor="sb-file-input">Upload Resume</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="job-apply-btn mg-bottom-50 mg-top-50" type="submit">Submit</button>
                                        </div> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMobile custom_class="footer footer-udaap mg-top-custom-footer" />
          </div>
       </>
    );
}

export default JobApply;