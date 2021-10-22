import React from 'react'

function Contact() {

    function handleClick(e) {
        e.preventDefault();

    }

    return (
        <section id="contact" className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16 ">
            <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 capitalize">Contact us <span className="text-indigo-600">today</span></h2>
            <h4 className="section__subtitle">Fill out the form below and we will reply within 1 business day, we look forward to meeting you and discussing your business needs</h4>
        
        <form className="w-full ml-16 sm:ml-0 mt-10" action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="61768859-935c-4f63-92f8-1f254a0346ad"/>
                <input type="text" name="honeypot" style={{display: 'none'}}/>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-14 items-center ">
                    <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">Name:</label>
                    <input className="appearance-none block w-full md:w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="name"/>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-10 items-center ">
                    <label htmlFor="subject" className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">Subject:</label>
                    <input className="appearance-none block w-full md:w-1/2 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="subject"/>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-14 items-center ">
                    <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">Email:</label>
                    <input className="appearance-none block w-full md:w-1/2  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" name="subject"/>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-14 items-center ">
                    <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">Phone:</label>
                    <input className="appearance-none block w-full md:w-1/2  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="phone" name="subject"/>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 space-x-10 items-center ">
                    <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2">Message:</label>
                    <textarea rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="message" name="subject"/>
                </div>
                <div className="mx-auto bg-indigo-600 text-center w-24 rounded-lg h-14 items-center">
                    <button className="bg-transparent mt-3 text-white text-xl" type="submit" value="Submit">Submit</button>
                </div>
                    <input type="hidden" name="replyTo" value="chris@taco-it.com"/> 
                    <input type="hidden" name="redirectTo" value="https://taco-it.com"/> 
                  
            </form>
            </div>
        </section>
    )
}

export default Contact
