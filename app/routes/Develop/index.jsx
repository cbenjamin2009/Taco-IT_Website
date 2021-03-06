
import Nav from '../../Components/Nav'
import Logo from '../../Components/Logo';
import DevelopmentOfferings from '../../Components/DevelopComponents/DevelopmentOfferings'
import Skills from '../../Components/DevelopComponents/Skills';

import managestyles from "../../styles/manage.css";


export const meta = () => {
    return {
      title: "Taco-IT Website Development",
      description:
        "Taco-IT Provides Website Design and Website Hosting services. If your website needs a new look, or maybe some small changes, let us help you provide an amazing website for your customers"
    };
  };

export let links = () => {
  return [
    { rel: "stylesheet", href: managestyles }
  ];
};

export default function Manage() {
 
    return (
        <div className="App w-screen overflow-hidden h-auto min-h-screen bg-indigo-500">
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">               
            <Logo />
            <Nav />
            </div>
        </div>
        <section className="w-full lg:w-10/12 mx-auto bg-indigo-400 mt-10 p-10">
            <h3 className="text-3xl text-black text-center pb-10">Development Services</h3>
            <p className="mx-10">We offer a wide variety of development services. We offer custom Website Development, Application Development, Mobile App Development, and Scripting/Automation services. You can't always buy a solution off the shelf, let us come up with a custom development solution for your business to give you the competitive edge in your market. We are always exploring new technologies to better suit our customers</p>
            <DevelopmentOfferings />
   

        <section id="technologies" className="text-center w-full">
                    <h2 className="text-center text-3xl text-white">Technologies We Work With</h2>
                    <hr />
                    <Skills />
            </section>
            </section> 
        </div>
    )

}