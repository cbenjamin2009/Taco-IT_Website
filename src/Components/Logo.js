import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../Images/Website_Logo.png'

function Logo() {
    return (
       <div class='logo'>
       <Link to="/"><img className="website_logo" src={`${LogoImage}`} alt="Website Logo" srcset=""/></Link>
       </div>
    )
}

export default Logo
