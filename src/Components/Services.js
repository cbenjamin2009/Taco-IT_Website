import React from 'react'
import Develop from "../Images/develop.jpg"
import Manage from "../Images/manage.jpg"
import Consult from "../Images/consult.jpg"

function Services() {
    return (
        <>
        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What We Do</h2>
            <div class="services__body">
                <div class="service">
                    <h2>Develop</h2>
                    <div className="flex-container">
                        <div className="text-container">
                            <p>We offer a wide variety of development services from websites, web applications, Crystal Reports, MS Office templates, Desktop Applications, Scripting, Automation. I am a full stack developer but also enjoy developing in new technologies. </p>
                        </div>
                        <div className="image-container">
                            <img className="servicesImage" src={Develop} alt=""/>
                        </div>
                    </div>
                </div> 
                <div class="service">
                    <h2>Consult</h2>
                    <div className="flex-container">
                        <div className="text-container">
                            <p>We provide a wide variety of consulting services for your business needs. I have provided hardware and software consulting, performed professional interviews to find the right IT person for your business, and helped existing IT staff realize potentials in new areas for improvement. I specialize in process improvement utilizing information technology to help your business reach it's goals. I am also a certified Disaster Recovery engineer specializing in backup and restoration helping your company reach your recovery time objective!</p>
                        </div>
                        <div className="image-container">
                            <img className="servicesImage" src={Manage} alt=""/>
                        </div>
                    </div>
                </div> 
                <div class="service">
                    <h2>Manage</h2>
                    <div className="flex-container">
                        <div className="text-container">
                            <p>As a certified project manager, I can help manage any IT / Development level project for your business. I can also assist with managing the systems (Network, Firewall, Switches, Servers, Virtual Machines, Clusters, Remote Desktop Session Servers, Workstations, etc.) in your small business as an outside IT professional without the overhead of a full time staffed IT Manager. I can also assist with replacement of hardware including consulting for custom bids.  </p>
                        </div>
                        <div className="image-container">
                            <img className="servicesImage" src={Consult} alt=""/>
                        </div>
                    </div>
                </div> 
            </div> 
        </section>
    </>
    )
}

export default Services
