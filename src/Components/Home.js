import React, { useState } from 'react'
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Home() {
    
    return (
        <div className="container m-auto px-6 py-40">
            <div className="flex flex-col items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8 space-y-8">
                <div className="w-10/12 text-2xl md:w-9/12 md:text-3xl text-center items-center">
                    <span className="">Let's Taco Bout Your IT Needs Today!</span>   
                </div>
                <div className="display cursor-pointer">
                    <a className="text-xl md:text-2xl flex flex-col items-center text-center " href='#contact'><ContactMailIcon id="ContactIcon" className="calltoaction__icon" style={{width: '40px', height: '40px', paddingRight: '10px'}} />Contact Us Today</a>
                    
                </div>
            </div>
           
        </div>
    )
}

export default Home
