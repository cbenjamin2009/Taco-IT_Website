import React from 'react'
import HomeIcon from "@mui/icons-material/Home"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function Nav() {
      
    return (
        <nav className="">
            <ul className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto space-x-4 text-white mr-10">
                <li className="flex flex-col items-center"> 
                    <HomeIcon id="HomeIcon" className=""/>
                    <a href='#' id="nav-link-home" className="">Home</a>
                </li>
                <li className="flex flex-col items-center"> 
                    <ContactMailIcon id="ContactIcon" className=""/>
                    <a href='#contact' id="nav-link-contact"  className="" >Contact</a>
                </li>
                <li className="flex flex-col items-center">
                <InfoIcon id="AboutIcon" className=""/>
                    <a href='#about' id="nav-link-about"  className="" >About</a>
                </li>
                <li className="flex flex-col items-center">
                <DesignServicesIcon id="ServicesIcon"  className=""/>
                    <a href='#services' id="nav-link-services"  className="">Services</a>
                </li>

            </ul>

        </nav>
    
    )
}

export default Nav
