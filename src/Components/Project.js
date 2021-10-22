
function Project({id, link, image, alt, label}) {
    return (
        <div className="project__item">
                <div className="hover:scale-150">
                    <a href={link} id={id} className="portfolio__item">
                        <img src={image} alt={alt} height={200} width={200} className=""/> 
                        <label className="" htmlFor={id}>{label}</label>
                    </a>
                </div>
        </div>
    )
}

export default Project
