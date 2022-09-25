import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LandingPage';
import Campaigns from './components/Campaigns';
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"
=======
import VirtualReality from './components/VirtualReality';
// import "bootstrap/dist/css/bootstrap.min.css"
>>>>>>> 407417341a25903496744dfdd7eb512c5343866d
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
      <Route path="/" exact element={<LoginForm />} />
      <Route path="/campaigns" exact element={<Campaigns/>} />
      <Route path="/virtualReality" exact element={<VirtualReality/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
