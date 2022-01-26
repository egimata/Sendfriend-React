import React from 'react';
import SEO from '../components/common/SEO';
import sectiondata from '../data/jobdata.json';
import { Link } from 'react-router-dom';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import '../assets/css/bootstrap.min.css';

const JobDescription = ({job}) => {

    const publicUrl = process.env.PUBLIC_URL+'/'
    const imgattr = 'SendFriend Job Application'
    let data = sectiondata.joblisting
    console.log(job);


    return (
        <>
            <SEO title="Careers" />
                <div class="udaap screen">
                <Nav />
                <div className= { "job-details-area pd-top-112 " }>
            <div className="container">
            
              <div className="row justify-content-center">
                  
                <div className="col-xl-6 col-lg-8 offset-xl-1">
                  <div className="section-title">
                    <h2 className="title">Job Details</h2>
                  </div>
                  <h6 className="title">{job.jobtitle}</h6>
                  <span>{job.subtitle}</span>
                  <h6 className="sub-title">Primary Duties and Responsibilities:</h6>
                  <span>As a {job.jobtitle} you’ll be responsible for:</span>
                  <ul  >
                  { data.job.map(( item, i )=>
                    <li>{item.duties}</li>
                  )}
                  </ul>
                  <h6 className="sub-title">Educational Requirements</h6>
                  <p>Bachelor of Fine Arts (B.F.A)</p>
                  <p>
                    Training/Trade Course: Shanto Mariam University of Creative
                    Technology,BGMEA University of Fashion
                  </p>
                  <p>
                    Technology students wi,Skills Required: Graphics Design; Local and
                    world populated Fashion house (Buyer)
                  </p>
                  <h6 className="sub-title">Experience Requirements</h6>
                  <p>1 to 3 year(s)</p>
                  <p>The applicants should have experience in the following area(s):</p>
                  <p>Fashion Design</p>
                  <h6 className="sub-title">Additional Requirements</h6>
                  <p>Age 26 to 35 years</p>
                  <p>Both males and females are allowed to apply</p>
                  <h6 className="sub-title">Job Location</h6>
                  <p>Gulshan, Dhaka Division, Dhaka.</p>
                  <h6 className="sub-title">Salary</h6>
                  <p className="m-0">Negotiable</p>
                  <a href="#" className="job-apply-btn">
                    Apply Now
                  </a>
                </div>
                <div className="col-xl-3 col-lg-4 offset-xl-1">
                  <div className="widget widget-job-details">
                    <h3 className="widget-title">Job Details</h3>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/1.png'}  alt="icon" />
                      <div className="media-body">
                        <h6>Department</h6>
                        <span>UI Designer</span>
                      </div>
                    </div>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/2.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Location</h6>
                        <span>Bangladesh</span>
                      </div>
                    </div>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/3.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Job Type</h6>
                        <span>Full Time</span>
                      </div>
                    </div>
                    <div className="media single-job-details">
                      <img src={publicUrl+'assets/img/icons/4.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Experience</h6>
                        <span>2 years</span>
                      </div>
                    </div>
                    <div className="media single-job-details mb-0">
                      <img src={publicUrl+'assets/img/icons/5.png'} alt="icon" />
                      <div className="media-body">
                        <h6>Salary</h6>
                        <span>$2000</span>
                      </div>
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

                <FooterMobile custom_class="footer footer-udaap" />
            </div>
       </>
    );
}

export default JobDescription;