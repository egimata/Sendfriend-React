import { Homepage } from "./components/Homepage";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import { History } from "./components/History";
import { Leadership } from "./components/Leadership";
import { PrivacyPolicy } from "./components/Policies/PrivacyPolicy";
import { TermsOfUse } from "./components/Policies/TermsOfUse";
import { FileComplaint } from "./components/Policies/FileComplaint";
import JobList from './pages/JobList';
import JobDescription from "./pages/JobDescription";
import JobApply from "./pages/JobApply";
import ContactUs from "./pages/ContactUs";
import Team from "./components/TestPage";
import ScrollButton from './components/ScrollButton';
import ScrollToTop from './components/ScrollToTop';
import sectiondata from './data/jobdata.json';
import tabsdata from './data/tabsdata.json';
import { ESignPolicy } from "./components/Policies/ESignPolicy";
import TestPage from "./components/TestPage";

//Css Here 
import './assets/scss/style.scss';
import { keyframes } from "styled-components";



function App() {

  let data = sectiondata.joblisting;
  let tabdata = tabsdata.tabslisting;

    return (
      
      <Router>
        <ScrollToTop>
        
        <Routes >
        
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<History />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/esign-policy" element={<ESignPolicy />} />
          <Route path="/file-complaint" element={<FileComplaint />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element ={<JobList />} />
          <Route path="/contact-us" element ={<ContactUs />} />
          { tabdata.tabPanel.map(( item, i )=>
            <Route key={i} path="/test-page" element ={<TestPage tabPanel={item} />} />
          )}
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
