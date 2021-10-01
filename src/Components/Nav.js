import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Services from './Services'
import ErrorPage from './ErrorPage'


function Nav() {
    const [active, setActive] = useState('Home')

    let nav;

    //cleanup all active class states 
    function cleanup(){
        let allnav = document.querySelectorAll('.nav-link')
        allnav.forEach(e => e.classList.remove('active'))
    }

        //set active class based on link clicked. 
    switch(active){
        case 'Contact': 
            cleanup();
            nav = document.getElementById('nav-link-contact')
            nav.classList.add('active');
            break;
        case 'About':
            cleanup();
            nav = document.getElementById('nav-link-about')
            nav.classList.add('active')
            break;
        case 'Services':
            cleanup();
            nav = document.getElementById('nav-link-services')
            nav.classList.add('active')
            break;
        case 'Work':
            cleanup();
            nav = document.getElementById('nav-link-work')
            nav.classList.add('active')
            break;
        default:
            cleanup();
            nav = document.getElementById('nav-link-home')
            // nav.classList.add('active')
            break;
    }
    
    return (
        <Router>
        <nav>
            <ul className="navbar">
                <li>
                    <Link to={'/'} id="nav-link-home" className="nav-link active" onClick={()=>setActive('Home')} > Home</Link>
                </li>
                <li>
                    <Link to={'/contact'} id="nav-link-contact"  className="nav-link" onClick={()=>setActive('Contact')} > Contact</Link>
                </li>
                <li>
                    <Link to={'/about'} id="nav-link-about"  className="nav-link"  onClick={()=>setActive('About')}> About</Link>
                </li>
                <li>
                    <Link to={'/services'} id="nav-link-services"  className="nav-link"  onClick={()=>setActive('Services')}> Services</Link>
                </li>
                <li>
                    <Link to={'/work'} id="nav-link-work"  className="nav-link" onClick={()=>setActive('Work')}> My Work </Link>
                </li>

            </ul>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Contact' component={Contact} />
                <Route path='/About' component={About} />
                <Route path='/Services' component={Services} />
                <Route path='/Work' component={Work} />
                <Route component={ErrorPage} />
            </Switch>
        </nav>
        </Router>
    )
}

export default Nav
