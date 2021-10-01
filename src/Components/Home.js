import React, { useState } from 'react'

function Home() {
    const [homePage, sethomePage] = useState(true)
    
    return (
        <div className="homePage">
            <h2 className="titleText">Let's Taco Bout Your IT Needs Today!</h2>
            <div className="more-container">
                <div className="services"><span>Services</span></div>
                
                <div className="my-work"><span>My Work</span></div>
            </div>
        </div>
    )
}

export default Home
