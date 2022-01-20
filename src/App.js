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
import ScrollButton from './components/ScrollButton';
import ScrollToTop from './components/ScrollToTop';
import { ESignPolicy } from "./components/Policies/ESignPolicy";


function App() {

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
        </Routes >
        <ScrollButton />
        </ScrollToTop>
      </Router>
      
    );
  
}
export default App;
