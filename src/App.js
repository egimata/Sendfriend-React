import { Homepage } from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { History } from "./components/History";
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <ScrollButton />
    </Router>
  );
  
}
export default App;
