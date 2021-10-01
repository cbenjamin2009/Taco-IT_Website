import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Nav from './Components/Nav'
import Logo from './Components/Logo';

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
