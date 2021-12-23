import { Link } from 'remix';

export default function Nav(){

      
    return (
        <nav className="sm:pt-10">
            <ul className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto space-x-10 lg:space-x-10 text-black mr-10 text-3xl">
                <li className="flex flex-col items-center p-2"> 
                    <Link to='/' id="nav-link-home" className="">Home</Link>
                </li>
                <li className="flex flex-col items-center p-2"> 
                    <Link to='#contact' id="nav-link-contact"  className="" >Contact</Link>
                </li>
                <li className="flex flex-col items-center p-2">
                    <Link to='#about' id="nav-link-about"  className="" >About</Link>
                </li>
                <li className="flex flex-col items-center p-2">
                    <Link to='#services' id="nav-link-services"  className="">Services</Link>
                </li>

            </ul>

        </nav>
    
    )
}

