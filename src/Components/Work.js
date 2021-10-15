import React from 'react'
import { Link } from 'react-router-dom'
import Project01Thumb from '../Images/Project-01-small.png'
import Project02Thumb from '../Images/Project-02-small.png'
import Project03Thumb from '../Images/Project-03-small.png'
import Project04Thumb from '../Images/Project-04-small.png'
import Project05Thumb from '../Images/Project-05-small.png'
import Project06Thumb from '../Images/Project-06-small.png'

import Project from './Project'

function Work() {
    return (
        <>
        <div className="my-work" id="work">
            <h2 className="section__title section__title--mywork">My Work</h2>
            <p className="section__subtitle section__subtitle--mywork">A slection of some development projects I've created</p>
            <section className="project-container">
            <Project id={"1"} link={"project-01-liquidation-calc.html"} image={Project01Thumb} alt={"A thumbnail of the liquidation calcualtor project"} label={"A thumbnail of the liquidation calcualtor project"}/>
            <Project id={"2"} link={"project-02-rock-paper-scissors.html"} image={Project02Thumb} alt={"A thumbnail of the rock paper scissors project"} label={"Simple Intuitive Game"}/>
            <Project id={"3"} link={"/Demo/Sample-Restaurant-Site/index.html"} image={Project03Thumb} alt={"A taco food truck website"} label={"Sample Restaurant Site"}/>
            <Project id={"4"} link={"project-04-tic-tac-toe.html"} image={Project04Thumb} alt={"A thubmail of tic tac toe game"} label={"Taco Vs. Burrito"}/>
            <Project id={"5"} link={"/project-05-react-calc.html"} image={Project05Thumb} alt={"A calculator"} label={"Working Formula Based Calculator"}/>
            <Project id={"6"} link={"https://linkedin-clone-92304.web.app/"} image={Project06Thumb} alt={"A thumbnail of a linked in clone"} label={"LinkedIn Clone React Firebase"}/>
            </section>
        </div>
    </>
    )
}

export default Work
