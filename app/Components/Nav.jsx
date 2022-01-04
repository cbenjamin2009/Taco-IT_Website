import HomeIcon from "@mui/icons-material/Home"
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Nav() {
      
    return (
        <nav className="">
            <ul className="w-full flex lg:flex items-center lg:w-auto space-x-2 md:space-x-10 text-md md:text-2xl text-white mr-10 sm:mt-10">
                <li className="flex flex-col items-center"> 
                    <HomeIcon/>
                    <a href='/' id="nav-link-home" className="hover:bg-slate-500">Home</a>
                </li>
                <li className="flex flex-col items-center"> 
                    <ContactMailIcon/>
                    <a href='/#contact' id="nav-link-contact" className="hover:bg-slate-500" >Contact</a>
                </li>
                <li className="flex flex-col items-center">
                <InfoIcon />
                    <a href='/#about' id="nav-link-about"  className="hover:bg-slate-500" >About</a>
                </li>
                <li className="flex flex-col items-center">
                <DesignServicesIcon />
                    <a href='/develop' id="nav-link-services" className="hover:bg-slate-500" >Develop</a>
                </li>
                <li className="flex flex-col items-center">
                <GroupsIcon />
                    <a href='/consult' id="nav-link-services"  className="hover:bg-slate-500">Consult</a>
                </li>
                <li className="flex flex-col items-center">
                <ManageAccountsIcon />
                    <a href='/manage' id="nav-link-services" className="hover:bg-slate-500" >Manage</a>
                </li>

            </ul>

        </nav>
    
    )
}

export default Nav
