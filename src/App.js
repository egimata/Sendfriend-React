import { Homepage } from "./components/Homepage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { History } from "./components/History";
import { Contact } from "./components/Contact";
import { Leadership } from "./components/Leadership";
import ScrollButton from './components/ScrollButton';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

function App() {


    return (
      
      <Router>
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
        <ScrollButton />
        </ScrollToTop>
      </Router>
      
    );
  
}
export default App;
