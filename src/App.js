import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./components/Homepage"; 
import { AboutUs } from "./components/AboutUs";
import { Leadership } from "./components/Leadership";
import { PrivacyPolicy } from "./components/Policies/PrivacyPolicy";
import { TermsOfUse } from "./components/Policies/TermsOfUse";
import { FileComplaint } from "./components/Policies/FileComplaint";
import JobList from './pages/JobList';
import JobDescription from "./pages/JobDescription";
import JobApply from "./pages/JobApply";
import ContactUs from "./pages/ContactUs";
import ScrollButton from './components/ScrollButton';
import ScrollToTop from './components/ScrollToTop';
import sectiondata from './data/jobdata.json';
import { ESignPolicy } from "./components/Policies/ESignPolicy";

import './assets/scss/style.scss'


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
          
          { data.job.map(( item, i )=>
            <Route key={i} path={item.path} element={<JobDescription job={item} />} />
          )}
          { data.job.map(( item, i )=>
          <Route path={item.applypath} element={<JobApply  job={item} />} />
          )}
        </Routes >
        <ScrollButton />
        </ScrollToTop>
      </Router>
      
    );
  
}
export default App;
