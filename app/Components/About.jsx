import React from "react";

function About() {
  return (
    <>
      <section
        className="relative w-full h-auto min-h-screen mx-4 py-2 break-words sm:my-10"
        id="about"
      >
        <p className="text-center text-1xl md:text-2xl lg:text-4xl mb-2 overflow-hidden">
          <span className="text-indigo-600">About</span> Us
        </p>

        <div className="p-2 w-full">
          <p className="text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ">
            Founding:
          </p>
          <p className="text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10">
            Taco-IT was founded by Chris Benjamin to provide Technology services
            to local businesses in the Pacific Northwest. We exist to help give
            a technological edge to businesses who typically do not have their
            own internal IT department. Chris Benjamin attended Devry University
            where he earned his Bachelor of Computer Science while studying web
            application design and administration. He later went on to obtain
            his Masters in Computer Science focusing on IT Management to attain
            the skills necessary to drive businesses forward using technology.{" "}
          </p>
          <p className="text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10">
            Chris has worked for several local technology companies from a local
            school district, a pharmacy support company, and as a the IT Manager
            for a medium size medical practice. Technology is his passion and
            knowing that businesses rely on a strong technology backend to stay
            successful and competitive in today's market gave him the desire to
            spread his expertise to other local businsses.
          </p>

          <p className="text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ">
            Our Why:
          </p>
          <p className="text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10">
            To empower businesses to utilize technology as an asset. Let the
            power of technology in todays' digital world work for you so you can
            focus on your own innovations.
          </p>

          <p className="text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ">
            Our Mission:{" "}
          </p>
          <p className="text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10">
            Our mission is to help your company stand out on the internet so
            that your customers can find you and learn about your business. Let
            us handle the technical aspects and you handle your passion
          </p>

          <p className="text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ">
            Our What:
          </p>

          <p className="text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10">
            Our expertise is technology, your expertise is the foundation of
            your business. Let's work together to see what aspects of technology
            can be implemented that will help your business be efficient,
            accurate, and reliable. Sometime's its creating and managing your
            website, othertimes it may be implementing a new software solution
            to help your sales team track leads and drive more sales. Later it
            may be to setup a phone system so your customers can reach our staff
            directly. Whatever it is, lets taco bout it!
          </p>

          <p className="text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ">
            Our How:
          </p>
          <p className="text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10">
            With over 15 years of professional experience in the Pacific
            Northwest, in multiple industry verticles, we possess strong market
            knowledge of products and services that can be applied to empower
            your business. By employing the best minds in the industry whose
            focus is to help make your business successful we can ensure you get
            products that fit your business and evolve as you grow.{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
