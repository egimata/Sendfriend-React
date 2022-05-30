import React from 'react';
import SEO from '../common/SEO';
import Nav from '../Navs/Nav';
import NavMobile from '../Navs/NavMobile';
import Footer from '../Footer/Footer';
import FooterMobile from '../Footer/FooterMobile';
import JobApplyForm from './jobApplyForm';

const JobApply = ({job}) => {

  return (
      <>
        <SEO title={'Apply for - ' + job.jobtitle} />
        <div className="udaap screen bg-transparent">
          <Nav />
          <JobApplyForm job={job} />
          <Footer custom_class="section footer-section" />
        </div>
        <div className="mobile-udaap screen bg-transparent">
          <NavMobile />
          <JobApplyForm job={job} />
          <FooterMobile custom_class="footer footer-udaap mg-top-custom-footer" />
        </div>
      </>
  );
}

export default JobApply;