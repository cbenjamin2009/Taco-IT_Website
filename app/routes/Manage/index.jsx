
import Nav from '../../Components/Nav'
import Logo from '../../Components/Logo';
import ManagedOfferings from '../../Components/ManageComponents/ManagedOfferings'
import Footer from '../../Components/Footer'
import ManagingImage from '../../Images/managing.png'
import managestyles from "../../styles/manage.css";

import { meta } from 'remix'


export function meta() {
    const description = "Managed IT Services Company serving Small and Medium sized businsses in Tacoma area of Washington";
    return { 
      description,
      keywords: "Managed Services Tacoma, MSP Tacoma, Managed Anti-Virus, Onsite Support, Managed Patches, Managed Spam, Managed Email, Remote Support, Managed Backup, Managed Office 365, Managed Microsoft 365, Managed Computer Services, Business Computer Services",
      "twitter:image": "https://www.taco-it.com/build/_assets/Website_Logo-NUJUZPJQ.png",
      "twitter:card": "summary_large_image",
      "twitter:creator": "@_ChrisBenjamin",
      "twitter:site": "@_ChrisBenjamin",
      "twitter:title": "Taco-IT",
      "twitter:description": description
      };
  }


export let links = () => {
  return [
    { rel: "stylesheet", href: managestyles }
  ];
};

export default function Manage() {

    const managedText = "Managed IT Services is the benefit of a fully functioning IT department, at a fraction of the cost. We install software on all of your systems and services that provides us with diagnostic monitoring of all assets, critical insight into system performance, and remote support capabilities to remediate problems. You can also bundle in a variety of solutions such as Spam Filtering, Anti-Virus, Backups, etc. We also remote in and come onsite when problems occur."
    return (
        <div className="w-screen overflow-hidden h-auto min-h-screen bg-indigo-500">
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">               
            <Logo />
            <Nav />
            </div>
        </div>
        <section className="w-full md:w-2/3 mx-auto bg-indigo-400 mt-10 p-10">
            <h3 className="text-3xl text-black text-center pb-10">Managed Services</h3>
            <img className="mx-auto my-8 rounded-lg" style={{maxWidth: "200px", maxHeight: "200px", objectFit: "cover"}} src={ManagingImage} alt=""></img>
            <br />
            <p className="mx-10 mb-4">{managedText}</p>   
            <div className="managedOfferingParent">
                <ManagedOfferings />
            </div>

        
        </section>
        <Footer />
        
        </div>
    )

}