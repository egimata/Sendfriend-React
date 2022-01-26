import React from 'react';
import SEO from '../components/common/SEO';
import sectiondata from '../data/jobdata.json';
import { Link } from 'react-router-dom';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import '../assets/css/bootstrap.min.css';

const JobList = () => {

    const publicUrl = process.env.PUBLIC_URL+'/'
    const imgattr = 'SendFriend Job Application'
    let data = sectiondata.joblisting


    return (
        <>
            <SEO title="Careers" />
                <div class="udaap screen">
                <Nav />
                <div className={ "job-listing-page pd-top-120 bg-none" }>
                <div className="container">
                    <div className="job-position-area">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                        <div className="section-title style-four">
                            <h2 className="title"  dangerouslySetInnerHTML={{__html: data.sectiontitle}}> 
                            </h2>
                        </div>
                        {/* single job list */}
                        { data.job.map(( item, i )=>
                            <div key={ i } className="single-job-list media">
                                <img src={ publicUrl+item.icon } alt={imgattr} />
                                <div className="media-body">
                                <h6>{ item.jobtitle }</h6>
                                <span>{ item.date }</span>
                                </div>
                                <Link to={{pathname: `${item.path}`, query: {id: item.id}}}>
                                <button className="job-apply-btn align-self-center float-right">
                                { data.buttontext }
                                </button>
                                </Link>
                            </div>
                            ) }
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer custom_class="section footer-section" />
                </div>
            <div class="mobile-udaap screen">
                <NavMobile />
                <div className={ "job-listing-page pd-top-120 bg-none" }>
                <div className="container">
                    <div className="job-position-area">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                        <div className="section-title style-four">
                            <h2 className="title"  dangerouslySetInnerHTML={{__html: data.sectiontitle}}> 
                            </h2>
                        </div>
                        {/* single job list */}
                        { data.job.map(( item, i )=>
                            <div key={ i } className="single-job-list media">
                                <img src={ publicUrl+item.icon } alt={imgattr} />
                                <div className="media-body">
                                <h6>{ item.jobtitle }</h6>
                                <span>{ item.date }</span>
                                </div>
                                <Link to={item.path}>
                                <button className="job-apply-btn align-self-center float-right">
                                { data.buttontext }
                                </button>
                                </Link>
                            </div>
                            ) }
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <FooterMobile custom_class="footer footer-udaap" />
            </div>
       </>
    );
}

export default JobList;