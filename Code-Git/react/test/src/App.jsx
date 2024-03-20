import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo">홍<br />준일</div>
        </div>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
          <li>
            <Link className='link' to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
