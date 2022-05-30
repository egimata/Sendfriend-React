import React from 'react';
import SEO from '../components/common/SEO';
import sectiondata from '../data/jobdata.json';
import { Link } from 'react-router-dom';
import Careers from '../components/Headers/Careers';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import '../assets/css/bootstrap.min.css';
import HeaderTest from '../components/Headers/HeaderTest';

const JobList = () => {

    const publicUrl = process.env.PUBLIC_URL+'/'
    const imgattr = 'SendFriend Job Application'
    let data = sectiondata.joblisting


    return (
        <>
            <SEO title="Careers" />
                <div className="udaap screen bg-custom">
                <Nav />
                <HeaderTest 
                    text="SendFriend"
                    green_text='Careers'
                    subtitle='Careers'
                    image='img/headers/careers.png'
                    under_text='We are building a team of innovative technologists and fintech enthusiasts who are driven to make an impact in the world of global payments'
                />
                <div>
                    <div className={ "job-listing-page pd-top-120 pd-bottom-60 bg-none" }>
                    <div className="container">
                        <div className="job-position-area">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                            <div className="section-title style-four-career">
                                <h3 className="title"  dangerouslySetInnerHTML={{__html: data.sectiontitle}}> 
                                </h3>
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
                </div>
                <Footer custom_class="section footer-section" />
                </div>
            <div className="mobile-udaap screen bg-custom">
                <NavMobile />
                <Careers 
                    text="SendFriend"
                    green_text='Careers'
                    subtitle='Careers'
                    image='img/headers/careers.png'
                    under_text='We are building a team of innovative technologists and fintech enthusiasts who are driven to make an impact in the world of global payments'
                />
                <div>
                <div className={ "job-listing-page pd-top-120 bg-none" }>
                <div className="container">
                    <div className="job-position-area">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                        <div className="section-title  style-four-career">
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
                </div>
                <FooterMobile custom_class="footer footer-udaap" />
            </div>
       </>
    );
}

export default JobList;