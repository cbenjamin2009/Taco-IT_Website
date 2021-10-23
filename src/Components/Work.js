import React from 'react'
import Project01Thumb from '../Images/Project-01-small.png'
import Project02Thumb from '../Images/Project-02-small.png'
import Project03Thumb from '../Images/Project-03-small.png'
import Project04Thumb from '../Images/Project-04-small.png'
import Project05Thumb from '../Images/Project-05-small.png'
import Project06Thumb from '../Images/Project-06-small.png'
import Project07Thumb from '../Images/Project-07-small.png'
import Project08Thumb from '../Images/Project-08-small.png'
import Project09Thumb from '../Images/Project-09-small.png'
import Project10Thumb from '..//Images/Project-10-small.png'
import Project11Thumb from '..//Images/Project-11-small.png'
import Project from './Project'

function Work() {
    return (
        <>
        <div className="my-work" id="work">
            <h2 className="text-3xl font-bold leading-loose text-center"><span className="text-indigo-600">Our</span> Work</h2>
            <p className="text-2xl sm:text-2xl leading-normal font-extrabold tracking-tight text-gray-900 capitalize text-center">A selction of some development projects we created for customers or as a demo. <br/> Click on a project to view live</p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-6 space-y-6 mx-10 my-6 items-center">
            <Project id={"1"} link={"https://chapter13tacoma.org/liquidation-calculator/"} image={Project01Thumb} alt={"A thumbnail of the liquidation calcualtor project"} label={"Custom Liquidation Calculator"}/>
            
            <Project id={"7"} link={"https://cbenjamin2009.github.io/rhcbwedding/#"} image={Project07Thumb} alt={"A website for a local couple's wedding"} label={"A wedding website"}/>
            <Project id={"8"} link={"https://cbenjamin2009.github.io/Wildfire-Tracker/index.html"} image={Project08Thumb} alt={"A map showing live wildfire locations"} label={"A wild fire tracker using Nasa API"} />
            <Project id={"9"} link={"https://amazon-clone-virid.vercel.app/"} image={Project09Thumb} alt={"A clone of the Amazon website showign products"} label={"Amazon Website Clone"} />
            <Project id={"10"} link={"https://hulu2-react-next-tailwind.vercel.app/?genre=fetchComedyMovies"} image={Project10Thumb} alt={"A Hulu Clone Website showing streamable movies"} label={"Hulu Website Clone"} />
            <Project id={"6"} link={"https://linkedin-clone-92304.web.app/"} image={Project06Thumb} alt={"A thumbnail of a linked in clone"} label={"LinkedIn Clone React Firebase"}/>
            <Project id={"3"} link={"/Demo/Sample-Restaurant-Site/index.html"} image={Project03Thumb} alt={"A taco food truck website"} label={"Sample Restaurant Site"}/>
            {/* <Project id={"4"} link={"project-04-tic-tac-toe.html"} image={Project04Thumb} alt={"A thubmail of tic tac toe game"} label={"Taco Vs. Burrito"}/> */}
            <Project id={"5"} link={"/project-05-react-calc.html"} image={Project05Thumb} alt={"A calculator"} label={"Working Formula Based Calculator"}/>
            <Project id={"11"} link={"https://codepen.io/WillCodeForTacos/full/OJjWmOP"} image={Project11Thumb} alt={"A password generator program"} label={"Password Generator"}/>
           {/* <Project id={"2"} link={"https://codepen.io/WillCodeForTacos/full/vYgPRqM"} image={Project02Thumb} alt={"A thumbnail of the rock paper scissors project"} label={"Simple Intuitive Game"}/>  */}
           </section>
        </div>
    </>
    )
}

export default Work
