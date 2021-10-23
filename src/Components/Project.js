
function Project({id, link, image, alt, label}) {
    return (
        <div className="project__item">
                <div className="hover:scale-150 flex flex-col items-center text-center">
                    <a href={link} id={id} className="portfolio__item">
                        <img src={image} alt={alt} height={250} width={250} className=""/> 
                        <label className="" htmlFor={id}>{label}</label>
                    </a>
                </div>
        </div>
    )
}

export default Project
