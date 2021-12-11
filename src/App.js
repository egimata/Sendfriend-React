import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {History} from './components/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Homepage />} / >
        <Route path = '/history' element = {<History />} / >
      </Routes>
    </Router>
  );
}

export default App;
