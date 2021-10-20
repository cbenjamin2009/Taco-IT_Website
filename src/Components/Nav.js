import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Services from './Services'
import ErrorPage from './ErrorPage'
import HomeIcon from "@mui/icons-material/Home"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BusinessIcon from '@mui/icons-material/Business';

function Nav() {
    const [active, setActive] = useState('Home')

    let nav;
    let icon;

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
            icon = document.getElementById('ContactIcon')
            icon.classList.add('active')
            break;
        case 'About':
            cleanup();
            nav = document.getElementById('nav-link-about')
            nav.classList.add('active')
            icon = document.getElementById('AboutIcon')
            icon.classList.add('active')
            break;
        case 'Services':
            cleanup();
            nav = document.getElementById('nav-link-services')
            nav.classList.add('active')
            icon = document.getElementById('ServicesIcon')
            icon.classList.add('active')
            break;
        case 'Work':
            cleanup();
            nav = document.getElementById('nav-link-work')
            nav.classList.add('active')
            icon = document.getElementById("WorkIcon")
            icon.classList.add('active')
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
                <li className="navbar__item"> 
                    <Link to={'/'} id="nav-link-home" className="nav-link active" onClick={()=>setActive('Home')} ><HomeIcon id="HomeIcon" className="nav-link active"/> Home</Link>
                </li>
                <li className="navbar__item"> 
                    <Link to={'/contact'} id="nav-link-contact"  className="nav-link" onClick={()=>setActive('Contact')} ><ContactMailIcon id="ContactIcon" className="nav-link"/> Contact</Link>
                </li>
                <li className="navbar__item">
              
                    <Link to={'/about'} id="nav-link-about"  className="nav-link"  onClick={()=>setActive('About')}> <InfoIcon id="AboutIcon" className="nav-link"/> About</Link>
                </li>
                <li className="navbar__item">
                  
                    <Link to={'/services'} id="nav-link-services"  className="nav-link"  onClick={()=>setActive('Services')}>  <DesignServicesIcon id="ServicesIcon"  className="nav-link"/> Services</Link>
                </li>
                <li className="navbar__item">
                    
                    <Link to={'/work'} id="nav-link-work"  className="nav-link" onClick={()=>setActive('Work')}><BusinessIcon id="WorkIcon" className="nav-link"/> My Work </Link>
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
