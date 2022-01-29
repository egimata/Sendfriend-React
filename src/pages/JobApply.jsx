import React from 'react';
import SEO from '../components/common/SEO';
import sectiondata from '../data/jobdata.json';
import { Link } from 'react-router-dom';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import '../assets/css/bootstrap.min.css';

const JobApply = ({job}) => {

    const publicUrl = process.env.PUBLIC_URL+'/'
    const imgattr = 'SendFriend Job Application'
    const data = sectiondata.JobAplly
    const jobtitle = sectiondata.joblisting

    return (
        <>
          <SEO title={'Apply for - ' + job.jobtitle} />
          <div class="udaap screen">
            <Nav />
            <div>
                <div className= { "job-listing-page pd-top-120 pd-bottom-60" } >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="section-title text-center">
                                    <h2 className="title">{ data.sectiontitle }</h2>
                                    <p>{ data.sectionsubtitle }</p>
                                </div>
                                <div className="job-apply-area">
                                    <form className="riyaqas-form-wrap" action="https://formspree.io/f/xgedavpk" method="POST" enctype="multipart/form-data">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="text" className="single-input" name="Full Name" required />
                                            <label>Full Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="email" className="single-input" name="Email" required />
                                            <label>E-mail</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="text" className="single-input" name="Country"  required/>
                                            <label>Country</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap mg-bottom-50">
                                            <select selected class="form-select custom-dropdown" name="Job-Selected" aria-label="Default select example" required>
                                            { jobtitle.job.map(( item, i )=>
                                                <option  value={item.jobtitle}>{item.jobtitle}</option>
                                            )}
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="custom-file riyaqas-file-input-wrap">
                                            <input type="file" className="riyaqas-file-input" name="resume" id="sb-file-input" required />
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
          <div class="mobile-udaap screen">
            <NavMobile />
            <div>
                <div className= { "job-listing-page pd-top-120 pd-bottom-60" } >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="section-title text-center">
                                    <h2 className="title">{ data.sectiontitle }</h2>
                                    <p>{ data.sectionsubtitle }</p>
                                </div>
                                <div className="job-apply-area">
                                    <form className="riyaqas-form-wrap">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="text" className="single-input" required />
                                            <label>First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="email" className="single-input" required />
                                            <label>E-mail</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <input type="text" className="single-input"  required/>
                                            <label>Country</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-input-wrap">
                                            <select class="form-select custom-dropdown" aria-label="Default select example" required>
                                            { jobtitle.job.map(( item, i )=>
                                                <option selected={item.jobtitle} value={item.jobtitle}>{item.jobtitle}</option>
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
                                            <button className="btn btn-blue" href="#">Submit</button>
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