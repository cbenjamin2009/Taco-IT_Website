
import Nav from '../../Components/Nav'
import Logo from '../../Components/Logo';
import ManagedOfferings from '../../Components/ManageComponents/ManagedOfferings'

export default function Manage() {
 
    return (
        <div className="App w-screen overflow-hidden h-screen bg-indigo-500">
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">               
            <Logo />
            <Nav />
            </div>
        </div>
        <section className="w-2/3 mx-auto bg-indigo-400 mt-10 p-10">
            <h3 className="text-3xl text-black text-center pb-10">Managed Services</h3>
            <p className="mx-10">We can manage any IT project for your business. From building relocations to implementation of new technology software and hardware. We also provide software for managing the systems (Network, Firewall, Switches, Servers, Virtual Machines, Clusters, Remote Desktop Session Servers, Workstations, etc.) in your business as an outside IT professional without the overhead of a full time staffed IT department.</p>
            <ManagedOfferings />
        </section>
        </div>
    )

}