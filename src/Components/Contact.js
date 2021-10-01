import React from 'react'

function Contact() {

    function handleClick(e) {
        e.preventDefault();

    }

    return (
        <>
       <form className="contactForm">
        <input type="text"></input>
        <input type="email"></input>
       </form>
        </>
    )
}

export default Contact
