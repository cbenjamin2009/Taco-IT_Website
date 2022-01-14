import React from "react";

function Contact() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <section
      id="contact"
      className="max-w-screen-md min-h-screen h-auto mx-auto p-2 pt-10"
    >
      <div className="">
        <h2 className=" text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 capitalize overflow-hidden">
          Contact us <span className="text-indigo-600">today</span>
        </h2>
        <h4 className="my-2 px-2 text-center">
          Fill out the form below and we will reply within 1 business day, we
          look forward to meeting you and discussing your business needs.
        </h4>

        <form
          className="max-w-sm lg:max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden p-2 space-y-2"
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <input
            type="hidden"
            name="accessKey"
            value="61768859-935c-4f63-92f8-1f254a0346ad"
          />
          <input type="text" name="honeypot" style={{ display: "none" }} />
          <div className="">
            <label htmlFor="name" className="  text-lg  p-4 mb-2 -ml-4">
              Name:
            </label>
            <input
              className="block p-2 w-full text-lg outline border-2 focus-within:border-blue-500"
              type="text"
              name="name"
            />
          </div>
          <div className=" ">
            <label htmlFor="subject" className="  text-lg  p-4 mb-2 -ml-4">
              Subject:
            </label>
            <input
                className="block p-2 w-full text-lg outline border-2 focus-within:border-blue-500"
              type="text"
              name="subject"
            />
          </div>
          <div className=" ">
            <label htmlFor="email" className="  text-lg  p-4 mb-2 -ml-4">
              Email:
            </label>
            <input
                className="block p-2 w-full text-lg outline border-2 focus-within:border-blue-500"
              type="email"
              name="subject"
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="  text-lg  p-4 mb-2 -ml-4">
              Phone:
            </label>
            <input
                className="block p-2 w-full text-lg outline border-2 focus-within:border-blue-500"
              type="phone"
              name="subject"
            />
          </div>
          <div className=" ">
            <label htmlFor="message" className="  text-lg  p-4 mb-2 -ml-4">
              Message:
            </label>
            <textarea
              rows="10"
              className="block p-2 w-full h-32 text-lg outline border-2 focus-within:border-blue-500"
              type="message"
              name="subject"
            />
          </div>
          <div className="mx-auto bg-indigo-600 text-center w-24 rounded-lg h-14 items-center hover:bg-slate-800 hover:text-white">
            <button
              className="bg-transparent mt-3 text-white text-xl hover:bg-slate-800 hover:text-white"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </div>
          <input type="hidden" name="replyTo" value="chris@taco-it.com" />
          <input type="hidden" name="redirectTo" value="https://taco-it.com" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
