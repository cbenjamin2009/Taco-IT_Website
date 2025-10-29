import LogoImage from '~/Images/Website_Logo.png'
import { Link } from '@remix-run/react'

export default function Logo() {
    return (
       <div className='mx-2 px-4'>
       <Link to="/"><img className="mr-2 w-42 h-24 xl:w-50 xl:h-32" src={LogoImage} alt="Website Logo"/></Link>
       </div>
    )
}


