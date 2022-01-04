// This component will be sent props for the image Source and the alt. I may later style this component 
function Skill({source, alt, title}) {
    return  <img className="w-20 h-20 xl:w-40 xl:h-40 mx-auto text-center" src={source} alt={alt} title={title}/>
}

export default Skill
