
import Nav from '../../Components/Nav'
import Logo from '../../Components/Logo';
import ConsultingImage from '../../Images/consulting.jpg'
import Footer from '../../Components/Footer'

export const meta = () => {
    return {
      title: "Taco-IT - IT Consulting Services",
      description:
        "Taco-IT Provides Professional IT Consulting Services, we are your technology partner and are here to help. We can help your existing IT department with software and hardware projects, we can answer technical questions, and we can provide project based consulting services to your business. "
    };
  };

export default function Manage() {
 const consultData = "As the Tacoma-Area Consulting Organization for Information Technology (TACO-IT), we provide a wide variety of consulting services for your business. Let us be your technology experts so you can focus on what you do best, your business. We provide hardware and software consulting to find the right technology for you and your budget. We can assist existing IT staff realize potentials in new areas for improvement. We specialize in process improvement utilizing information technology to help your business reach it's objectives efficiently, accurately and securly. We have a certified Disaster Recovery engineer specializing in backup and restoration helping your company reach your recovery time objective and securing your company data! No matter the project, we can help your business!"
    return (
        <div className="App w-screen overflow-hidden h-auto min-h-screen bg-indigo-500">
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between">               
            <Logo />
            <Nav />
            </div>
        </div>
        <section className="w-full mx-auto bg-indigo-400 mt-10 p-10">
            <h3 className="text-3xl text-black text-center pb-10">Consulting Services</h3>
            <div className="">
            <img className="w-60 h-60 mx-auto my-8 rounded-lg" src={ConsultingImage} alt=""></img>
            </div>
            <br /><p className="mx-10 py-6">{consultData}</p>
        </section>
        <Footer />
        </div>
    )

}