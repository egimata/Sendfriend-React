import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage"; 
import { AboutUs } from "./pages/AboutUs";
import { PrivacyPolicy } from "./components/Policies/PrivacyPolicy";
import { TermsOfUse } from "./components/Policies/TermsOfUse";
import { FileComplaint } from "./components/Policies/FileComplaint";
import  JobList  from './pages/JobList';
import  JobDescription from "./components/Careers/JobDescription";
import  JobApply from "./components/Careers/JobApply";
import  ContactUs from "./pages/ContactUs";
import  ScrollButton from './components/common/ScrollButton';
import  ScrollToTop from './components/common/ScrollToTop';
import  sectiondata from './data/jobdata.json';
import  PolandPage from "./pages/PolandPage";
import { ESignPolicy } from "./components/Policies/ESignPolicy";

import './assets/scss/style.scss'
import Leadership from "./pages/Leadership";


function App() {

  let data = sectiondata.joblisting;

    return (
      
      <Router>
        <ScrollToTop>
        
        <Routes >
          <Route path="/" element ={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/esign-policy" element={<ESignPolicy />} />
          <Route path="/file-complaint" element={<FileComplaint />} />
          <Route path="/careers" element ={<JobList />} />
          <Route path="/contact-us" element ={<ContactUs />} />
          <Route path="/poland" element ={<PolandPage />} />
          
          { data.job.map(( item, i )=>
            <Route key={i} path={item.path} element={<JobDescription job={item} />} />
          )}
          { data.job.map(( item, i )=>
          <Route path={item.applypath} element={<JobApply job={item} />} />
          )}
        </Routes >
        <ScrollButton />
        </ScrollToTop>
      </Router>
      
    );
  
}
export default App;
