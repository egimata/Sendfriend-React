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
import { StateLicence } from "./components/Policies/StateLicense";
import { Udaap } from "./components/Policies/Udaap";
import { Complaints } from "./components/Policies/ComplaintsPolicy";
import { FileComplaint } from "./components/Policies/FileComplaint";
import ScrollButton from './components/ScrollButton';
import ScrollToTop from './components/ScrollToTop';


function App() {

    return (
      
      <Router>
        <ScrollToTop>
        
        <Routes >
        
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/state-licence" element={<StateLicence />} />
          <Route path="/udaap-policy" element={<Udaap />} />
          <Route path="/complaints-policy" element={<Complaints />} />
          <Route path="/file-complaint" element={<FileComplaint />} />
        </Routes >
        <ScrollButton />
        </ScrollToTop>
      </Router>
      
    );
  
}
export default App;
