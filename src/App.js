import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LandingPage';
import Campaigns from './components/Campaigns';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
      <Route path="/" exact element={<LoginForm />} />
      <Route path="/campaigns" exact element={<Campaigns/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
