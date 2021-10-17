import React from 'react'

function Contact() {

    function handleClick(e) {
        e.preventDefault();

    }

    return (
        <>
        <div className="contactDesription">
            <h2 className="section__title section__title--mywork">Contact us today</h2>
            <h4 className="section__subtitle">Fill out the form below and we will reply within 1 business day, we look forward to meeting you and discussing your business needs</h4>
        </div>
        <div className="contactFormContainer">
   <form className="contactForm" action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="61768859-935c-4f63-92f8-1f254a0346ad"/>
        <input type="text" name="honeypot" style={{display: 'none'}}/>
        <div className="nameContainer contact-flex">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name"/>
        </div>
        <div className="subjectContainer contact-flex">
        <label htmlFor="subject">Subject: </label>
        <input type="text" name="subject"/> 
        </div>
        <div className="emailContainer contact-flex">
        <label htmlFor="email">Email: </label>
        <input type="text" name="email"/> 
        </div>
        <div className="phoneContainer contact-flex">
        <label htmlFor="phone">Phone: </label>
        <input type="text" name="phone"/> 
        </div>
        <div className="messageContainer contact-flex">
        <label htmlFor="message">Message: </label>
        <textarea name="message"></textarea> 
        </div>

        <input type="hidden" name="replyTo" value="chris@taco-it.com"/> 
        <input type="hidden" name="redirectTo" value="https://taco-it.com"/> 
        <div className="submitContainer contact-flex">
        <input type="submit" value="Submit" />
        </div>
    </form>
        </div>
        </>
    )
}

export default Contact
