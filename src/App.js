import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import Nav from './Components/Nav'
import Logo from './Components/Logo';
import Home from './Components/Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Logo/>
     <Nav />
    </div>
    </Router>
  );
}

export default App;
