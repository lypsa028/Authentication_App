import './App.css';
import Loginpage from './pages/loginpage.jsx';
import Register from './pages/register.jsx';
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Profilepage from './pages/myprofile.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/profilepage" element={<Profilepage />} />
      </Routes>
    </Router>
  );
}

export default App;
