
function Project({id, link, image, alt, label}) {
    return (
        <div className="project__item">
                <div className="project-item">
                    <a href={link} id={id} className="portfolio__item">
                        <img src={image} alt={alt} className="portfolio__img"/> 
                        <label className="project-label" htmlFor={id}>{label}</label>
                    </a>
                </div>
        </div>
    )
}

export default Project
