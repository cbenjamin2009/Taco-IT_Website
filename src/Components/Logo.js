import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../Images/Website_Logo.png'

function Logo() {
    return (
       <div className='mx-2 px-4'>
       <Link to="/"><img className="mr-2 w-42 h-24 xl:w-50 xl:h-32" src={`${LogoImage}`} alt="Website Logo" srcset=""/></Link>
       </div>
    )
}

export default Logo
