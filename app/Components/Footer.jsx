import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
export default function Footer() {
    return (
        <div className="flex lg:flex-row mx-20 lg:mx-10 justify-between h-20 items-center">
            <div className="created-by">
                <h1 className="text-white items-center"><span className="text-indigo-600">Created by </span> <span className="text-black">|</span> <a href="https://chrisbenjamin.dev">Chris Benjamin</a> </h1>
            </div>

            <div className="phone">
                <a className="text-blue-400 items-center text-xl" href="tel:+13603625004"><PhoneInTalkIcon /> Click to Call!</a>
            </div>
            <div className="social-icons space-x-10 sm:space-x-2 flex">
                <div className="github flex flex-col text-center items-center cursor-pointer">
                    <a href="https://github.com/cbenjamin2009" >  <GitHubIcon /></a>
                   
                    </div>
                <div className="codepen flex flex-col text-center items-center cursor-pointer">
                    <a href="https://codepen.io/WillCodeForTacos" > </a>
                    <span>CodePen</span>
                </div>
                
                
            </div>
            
        </div>
    )
}


