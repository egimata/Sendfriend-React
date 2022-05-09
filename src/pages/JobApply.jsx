import React from 'react';
import SEO from '../components/common/SEO';
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import '../assets/css/bootstrap.min.css';
import JobApplyForm from './Careers/jobApplyForm';

const JobApply = ({job}, props) => {

  return (
      <>
        <SEO title={'Apply for - ' + job.jobtitle} />
        <div class="udaap screen bg-transparent">
          <Nav />
          <JobApplyForm job={job} />
          <Footer custom_class="section footer-section" />
        </div>
        <div class="mobile-udaap screen bg-transparent">
          <NavMobile />
          <JobApplyForm job={job} />
          <FooterMobile custom_class="footer footer-udaap mg-top-custom-footer" />
        </div>
      </>
  );
}

export default JobApply;