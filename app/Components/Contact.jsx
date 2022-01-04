import React from 'react'

function Contact() {

    function handleClick(e) {
        e.preventDefault();

    }

    return (
        <section id="contact" className="max-w-screen-md mx-auto p-2 pt-10">
        <div className="">
            <h2 className=" text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 capitalize overflow-hidden">Contact us <span className="text-indigo-600">today</span></h2>
            <h4 className="my-2 px-2 text-center">Fill out the form below and we will reply within 1 business day, we look forward to meeting you and discussing your business needs.</h4>
        
        <form className="max-w-sm lg:max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden p-6 space-y-10" action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="61768859-935c-4f63-92f8-1f254a0346ad"/>
                <input type="text" name="honeypot" style={{display: 'none'}}/>
                <div className="outline relative border-2 focus-within:border-blue-500">
                    <input className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" type="text" name="name"/>
                    <label htmlFor="name" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Name:</label>

                </div>
                <div className="outline relative border-2 focus-within:border-blue-500 ">
                    <input className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" type="text" name="subject"/>
                    <label htmlFor="subject" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Subject:</label>

                </div>
                <div className="outline relative border-2 focus-within:border-blue-500 ">
                    <input className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" type="email" name="subject"/>
                    <label htmlFor="email" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Email:</label>

                </div>
                <div className="outline relative border-2 focus-within:border-blue-500">
                    <input className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" type="phone" name="subject"/>
                    <label htmlFor="phone" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Phone:</label>

                </div>
                <div className="outline relative border-2 focus-within:border-blue-500 ">
                    <textarea rows="10" className="block p-4 w-full h-32 text-lg appearance-none focus:outline-none bg-transparent" type="message" name="subject"/>
                    <label htmlFor="message" className="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Message:</label>

                </div>
                <div className="mx-auto bg-indigo-600 text-center w-24 rounded-lg h-14 items-center hover:bg-slate-800 hover:text-white">
                    <button className="bg-transparent mt-3 text-white text-xl hover:bg-slate-800 hover:text-white" type="submit" value="Submit">Submit</button>
                </div>
                    <input type="hidden" name="replyTo" value="chris@taco-it.com"/> 
                    <input type="hidden" name="redirectTo" value="https://taco-it.com"/> 
                  
            </form>
            </div>
        </section>
    )
}

export default Contact
