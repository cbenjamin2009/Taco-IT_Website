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
        <nav className="">
            <ul className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto space-x-4 text-white mr-10">
                <li className="flex flex-col items-center"> 
                    <HomeIcon id="HomeIcon" className=""/>
                    <Link to={'/'} id="nav-link-home" className="" onClick={()=>setActive('Home')} >Home</Link>
                </li>
                <li className="flex flex-col items-center"> 
                    <ContactMailIcon id="ContactIcon" className=""/>
                    <Link to={'/contact'} id="nav-link-contact"  className="" onClick={()=>setActive('Contact')} >Contact</Link>
                </li>
                <li className="flex flex-col items-center">
                <InfoIcon id="AboutIcon" className=""/>
                    <Link to={'/about'} id="nav-link-about"  className=""  onClick={()=>setActive('About')}>About</Link>
                </li>
                <li className="flex flex-col items-center">
                <DesignServicesIcon id="ServicesIcon"  className=""/>
                    <Link to={'/services'} id="nav-link-services"  className=""  onClick={()=>setActive('Services')}>Services</Link>
                </li>
                <li className="flex flex-col items-center">
                <BusinessIcon id="WorkIcon" className=""/>
                    <Link to={'/work'} id="nav-link-work"  className="" onClick={()=>setActive('Work')}>My Work </Link>
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
