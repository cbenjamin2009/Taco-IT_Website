
import Develop from "../Images/develop.jpg"
import Manage from "../Images/manage.jpg"
import Consult from "../Images/consult.jpg"
import Service from './Service'

function Services() {

    return (
        <>
        <section className="w-full" id="services">
            <h2 className="text-xl lg:text-3xl font-bold leading-loose text-center pt-10"> <span className="text-indigo-600">Our</span> Services</h2>
            <h3 className="text-center my-6">Click on a service to learn more</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 space-x-6 mx-2 lg:mx-10 my-2 lg:my-6">
                <Service 
                    ServiceTitle={"Develop"} 
                    ServiceDescription={"Website Development"} 
                    ServiceImage={Develop}
                    LinkTo={"/develop"}
                />
                <Service 
                    ServiceTitle={"Consult"} 
                    ServiceDescription={"Professional IT Consulting"} 
                    ServiceImage={Consult}
                    LinkTo={"/consult"}
                />
                <Service
                ServiceTitle={"Manage"}
                ServiceDescription={"Managed IT Services for Business"}
                ServiceImage={Manage}
                LinkTo={"/manage"}
                />
               
            </div> 
        </section>
    </>
    )
}

export default Services
