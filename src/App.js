import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LandingPage';
import Campaigns from './components/Campaigns';
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"
=======
>>>>>>> 4045f9ba21d36181bf5c4ba07b3ecddb2561fb0c
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
