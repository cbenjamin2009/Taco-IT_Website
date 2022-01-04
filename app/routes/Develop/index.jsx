
import Nav from '../../Components/Nav'
import Logo from '../../Components/Logo';
import DevelopmentOfferings from '../../Components/DevelopComponents/DevelopmentOfferings'

import managestyles from "../../styles/manage.css";


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
        <section className="w-2/3 mx-auto bg-indigo-400 mt-10 p-10">
            <h3 className="text-3xl text-black text-center pb-10">Development Services</h3>
            <p className="mx-10">We offer a wide variety of development services. We offer custom Website Development, Application Development, Mobile App Development, and Scripting/Automation services. You can't always buy a solution off the shelf, let us come up with a custom development solution for your business to give you the competitive edge in your market. We are always exploring new technologies to better suit our customers</p>
            <DevelopmentOfferings />
        </section>
        </div>
    )

}