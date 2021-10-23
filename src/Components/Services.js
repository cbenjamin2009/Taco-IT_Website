
import React from 'react'
import Develop from "../Images/develop.jpg"
import Manage from "../Images/manage.jpg"
import Consult from "../Images/consult.jpg"
import Service from './Service'

function Services() {

    return (
        <>
        <section class="w-full" id="services">
            <h2 class="text-xl lg:text-3xl font-bold leading-loose text-center">Our <span className="text-indigo-600">Services</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 space-x-6 mx-2 lg:mx-10 my-2 lg:my-6">
                <Service 
                    ServiceTitle={"Develop"} 
                    ServiceDescription={"We offer a wide variety of development services. We offer custom Website Development, Application Development, Mobile App Development, and Scripting/Automation services. You can't always buy a solution off the shelf, let us come up with a custom development solution for your business to give you the competitive edge in your market. We are always exploring new technologies to better suit our customers"} 
                    ServiceImage={Develop}
                />
                <Service 
                    ServiceTitle={"Consult"} 
                    ServiceDescription={"We provide a wide variety of consulting services for your business. Let us be your technology experts so you can focus on what you do best, your business. We provide hardware and software consulting to find the right technology for you and your budget. We can assist existing IT staff realize potentials in new areas for improvement. We specialize in process improvement utilizing information technology to help your business reach it's objects efficiently, accurately and securly. We have a certified Disaster Recovery engineer specializing in backup and restoration helping your company reach your recovery time objective and securing your company data!"} 
                    ServiceImage={Consult}
                />
                <Service
                ServiceTitle={"Manage"}
                ServiceDescription={"We can manage any IT project for your business. From building relactions to implementation of new technology software and hardware. We also provide software for managing the systems (Network, Firewall, Switches, Servers, Virtual Machines, Clusters, Remote Desktop Session Servers, Workstations, etc.) in your business as an outside IT professional without the overhead of a full time staffed IT department."}
                ServiceImage={Manage}
                />
               
            </div> 
        </section>
    </>
    )
}

export default Services
