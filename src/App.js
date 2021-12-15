import { Homepage } from "./components/Homepage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { History } from "./components/History";
import { Contact } from "./components/Contact";
import ScrollButton from './components/ScrollButton';
// import Footer from './components/Footer';
import { useMediaQuery  } from "react-responsive";
import { mediaQueries } from './responsive';
import PopupLogin from './components/PopupLogin';
import { Content, Heading } from './components/Styles';
import { HomePageMobile } from "./components/HomePageMobile";

function App() {


    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollButton />

      </Router>
    );
  
}
export default App;
