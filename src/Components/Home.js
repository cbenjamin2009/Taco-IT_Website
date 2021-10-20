import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Home() {
    
    return (
        <div className="homePage">
            <h1 className="titleText">Let's Taco Bout Your IT Needs Today!</h1>
            <div className="calltoaction">
                <Link className="calltoaction__link" to={'/Contact'}><ContactMailIcon id="ContactIcon" className="calltoaction__icon" style={{width: '40px', height: '40px', paddingRight: '10px'}}/>Contact Us Today</Link>
            </div>
        </div>
    )
}

export default Home
