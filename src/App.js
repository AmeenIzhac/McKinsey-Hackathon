import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Campaigns from './components/Campaigns';
import logo from './logo.svg';
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
      <Route path="/" exact element={<LandingPage/>} />
      <Route path="/campaigns" exact element={<Campaigns/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
