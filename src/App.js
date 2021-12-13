import { Homepage } from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { History } from "./components/History";
import { Contact } from "./components/Contact";
import ScrollButton from './components/ScrollButton';
import { useMediaQuery  } from "react-responsive";
import { mediaQueries } from './responsive';
import PopupLogin from './components/PopupLogin';
import { Content, Heading } from './components/Styles';
import { HomePageMobile } from "./components/HomePageMobile";

function App() {

  // const isMobile = useMediaQuery({ query: mediaQueries.mobileQuery});
  // const isDesktop = useMediaQuery({ query: mediaQueries.desktopQuery});

  // if (isMobile) {
  //   return (
  //     <Router>
  //     <Routes>
  //       <Route path="/" element={<HomePageMobile />} />
  //       <Route path="/history" element={<History />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Routes>
  //     <ScrollButton />
  //   </Router>
  //   );
  // }
  // if(isDesktop){

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
