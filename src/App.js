import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Contact} from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Homepage />} / >
        <Route path = '/contact' element = {<Contact />} / >
      </Routes>
    </Router>
  );
}

export default App;
