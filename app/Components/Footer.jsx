
export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row mx-20 justify-between h-40 items-center">
            <div className="created-by">
                <h1 className="text-white items-center"><span className="text-indigo-600">Created by </span> <span className="text-black">|</span> Chris Benjamin</h1>
            </div>
            <div className="social-icons space-x-10 flex">
                <div className="github flex flex-col text-center items-center">
                    <a href="https://github.com/cbenjamin2009" > </a>
                    <span>GitHub</span>
                    </div>
                <div className="codepen flex flex-col text-center items-center">
                    <a href="https://codepen.io/WillCodeForTacos" > </a>
                    <span>CodePen</span>
                </div>
                <div className="codepen flex flex-col text-center items-center">
                    <a href="" ></a>
                    <span>UpWork</span>
                </div>
                
                
            </div>
            
        </div>
    )
}


