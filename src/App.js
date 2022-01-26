import { Homepage } from "./components/Homepage";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import { History } from "./components/History";
import { Contact } from "./components/Contact";
import { Leadership } from "./components/Leadership";
import { PrivacyPolicy } from "./components/Policies/PrivacyPolicy";
import { TermsOfUse } from "./components/Policies/TermsOfUse";
import { FileComplaint } from "./components/Policies/FileComplaint";
import JobDescription from "./pages/JobDescription";
import Team from "./components/TestPage";
import ScrollButton from './components/ScrollButton';
import ScrollToTop from './components/ScrollToTop';
import JobList from './pages/JobList';
import sectiondata from './data/jobdata.json';
import { ESignPolicy } from "./components/Policies/ESignPolicy";

//Css Here 
import './assets/scss/style.scss';
import { keyframes } from "styled-components";


function App() {

  let data = sectiondata.joblisting

    return (
      
      <Router>
        <ScrollToTop>
        
        <Routes >
        
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/esign-policy" element={<ESignPolicy />} />
          <Route path="/file-complaint" element={<FileComplaint />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element ={<JobList />} />
          { data.job.map(( item, i )=>
            <Route key={i} path={item.path} element={<JobDescription job={item} />} />
          )}
        </Routes >
        <ScrollButton />
        </ScrollToTop>
      </Router>
      
    );
  
}
export default App;
