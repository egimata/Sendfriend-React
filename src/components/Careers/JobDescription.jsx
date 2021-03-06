import React from 'react';
import SEO from '../common/SEO';
import { Link } from 'react-router-dom';
import Nav from '../Navs/Nav';
import NavMobile from '../Navs/NavMobile';
import Footer from '../Footer/Footer';
import FooterMobile from '../Footer/FooterMobile';

const JobDescription = ({job}) => {

    const publicUrl = process.env.PUBLIC_URL+'/'
    const jobDuties = job.duties;
    const jobReq = job.requirements;
    const jobNTH = job.nice_to_have;
    const widgetData = job.widgetData;

    return (
        <>
          <SEO title={'Careers - ' + job.jobtitle} />
          <div className="udaap screen">
            <Nav />
            <div className= { "job-details-area pd-top-112 " }>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 offset-xl-1">
                    <div className="section-title">
                      <h2 className="title">Job <span className='career-span'>Details</span></h2>
                    </div>
                    <h6 className="title">{job.jobtitle}</h6>
                    <span>{job.subtitle}</span>
                    <h6 className="sub-title">Primary Duties and Responsibilities:</h6>
                    <span>As a {job.jobtitle} you’ll be responsible for:</span>
                      <ul  >
                          { jobDuties.map(( item, i )=>
                              <li key={i}>{item}</li>
                          )}
                      </ul>
                    <h6 className="sub-title">Requirements</h6>
                    <span>The ideal candidate description:</span>
                      <ul  >
                          { jobReq.map(( item, i )=>
                              <li key={i}>{item}</li>
                          )}
                      </ul>
                    <h6 className="sub-title">Nice to have:</h6>
                      <ul  >
                          { jobNTH.map(( item, i )=>
                              <li key={i}>{item}</li>
                          )}
                      </ul>
                      <Link to={job.applypath} className="job-apply-btn">
                      Apply Now
                    </Link>
                  </div>
                  <div className="col-xl-3 col-lg-4 offset-xl-1">
                    <div className="widget widget-job-details">
                    <Link to={job.applypath} className="job-apply-btn mg-bottom-50 mg-left-9">
                      Apply Now
                    </Link>
                      <h3 className="widget-title">Job Details</h3>
                          {widgetData.map((item, index) => 
                              <div className="media single-job-details">
                              <img src={publicUrl+item.icon}  alt="icon" />
                              <div className="media-body">
                                  <h6>{item.name}</h6>
                                  <span>{item.description}</span>
                              </div>
                              </div>
                          )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer custom_class="section footer-section" />
          </div>
          <div className="mobile-udaap screen">
            <NavMobile />
            <div className= { "job-details-area pd-top-112 " }>
              <div className="container padding-custom">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 offset-xl-1">
                    <div className="section-title">
                      <h2 className="title">Job <span className='career-span'>Details</span></h2>
                    </div>
                    <h6 className="title">{job.jobtitle}</h6>
                    <span>{job.subtitle}</span>
                    <h6 className="sub-title">Primary Duties and Responsibilities:</h6>
                    <span>As a {job.jobtitle} you’ll be responsible for:</span>
                      <ul  >
                          { jobDuties.map(( item, i )=>
                              <li key={i}>{item}</li>
                          )}
                      </ul>
                    <h6 className="sub-title">Requirements</h6>
                    <span>The ideal candidate description:</span>
                      <ul  >
                          { jobReq.map(( item, i )=>
                              <li key={i}>{item}</li>
                          )}
                      </ul>
                    <h6 className="sub-title">Nice to have:</h6>
                      <ul  >
                          { jobNTH.map(( item, i )=>
                              <li key={i}>{item}</li>
                          )}
                      </ul>
                    <Link to={job.applypath} className="job-apply-btn">
                      Apply Now
                    </Link>
                  </div>
                  <div className="col-xl-3 col-lg-4 offset-xl-1">
                    <div className="widget widget-job-details d-none-mobile">

                      <h3 className="widget-title">Job Details</h3>
                          {widgetData.map((item, index) => 
                              <div className="media single-job-details">
                              <img src={publicUrl+item.icon}  alt="icon" />
                              <div className="media-body">
                                  <h6>{item.name}</h6>
                                  <span>{item.description}</span>
                              </div>
                              </div>
                          )}
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

export default JobDescription;