import React from 'react'
import { Link } from 'react-router-dom'
import Project01Thumb from '../Images/Project-01-small.png'
import Project02Thumb from '../Images/Project-02-small.png'
import Project03Thumb from '../Images/Project-03-small.png'
import Project04Thumb from '../Images/Project-04-small.png'
import Project05Thumb from '../Images/Project-05-small.png'

function Work() {
    return (
        <>
        <div className="my-work" id="work">
            <h2 className="section__title section__title--mywork">My Work</h2>
            <p className="section__subtitle section__subtitle--mywork">A slection of some development projects I've created</p>

            <section className="project-container">

                <div className="project-item">
                    <Link To="project-01-liquidation-calc.html" id="project-01" className="portfolio__item">
                        <img src={Project01Thumb} alt="A thumbnail of the liquidation calcualtor project" className="portfolio__img"/> 
                        <label className="project-label" htmlFor="project-01">Custom Website Calculator</label>
                    </Link>
                </div>

                <div className="project-item">
                    <Link To="project-02-rock-paper-scissors.html" id="project-02" className="portfolio__item">
                        <img src={Project02Thumb} alt="A thumbnail of the rock paper scissors project" className="portfolio__img"/>
                        <label className="project-label" htmlFor="project-02">Simple Intuitive Game</label>
                    </Link>    
                </div>
               
                <div className="project-item">
                    <Link To="/Demo/Sample-Restaurant-Site/index.html" id="project-03" className="portfolio__item">
                        <img src={Project03Thumb} alt="" className="portfolio__img"/>
                        <label className="project-label" htmlFor="project-03">Sample Restaurant Site</label>
                    </Link>
                </div>
                
                <div className="project-item">
                        <Link To="project-04-tic-tac-toe.html" id="project-04" className="portfolio__item">
                            <img src={Project04Thumb} alt="A thubmail of tic tac toe game" className="portfolio__img"/>
                            <label className="project-label" htmlFor="project-04">Taco Vs. Burrito</label>
                         </Link>
                    </div>

                <div className="project-item">
                    <Link To="/project-05-react-calc.html" id="project-05" className="portfolio__item">
                        <img src={Project05Thumb} alt="A calculator" className="portfolio__img"/>
                        <label className="project-label" htmlFor="project-05">Working Formula Based Calculator</label>
                    </Link>
                </div>
                <div className="project-item">
                    <Link To="/project-06-wildfire-tracker.html" id="project-06" className="portfolio__item">
                        <img src={Project05Thumb} alt="A wildfire tracker map" className="portfolio__img"/>
                        <label className="project-label" htmlFor="project-06">Wildfire Tracker</label>
                    </Link>
                </div>
                <div className="project-item">
                    <Link To="/project-06-mars-weather.html" id="project-07" className="portfolio__item">
                        <img src={Project05Thumb} alt="A calculator" className="portfolio__img"/>
                        <label className="project-label" htmlFor="project-07">Wildfire Tracker</label>
                    </Link>
                </div>
                
            </section>
        </div>
    </>
    )
}

export default Work
