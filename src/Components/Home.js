import React, { useState } from 'react'

function Home() {
    const [homePage, sethomePage] = useState(true)
    
    return (
        <div className="homePage">
            <h1 className="titleText">Let's Taco Bout Your IT Needs Today!</h1>
            
        </div>
    )
}

export default Home
