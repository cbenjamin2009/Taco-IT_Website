function Service({ServiceTitle, ServiceDescription, ServiceImage}) {
    return (
              <div class="service">
                    <h2>{ServiceTitle}</h2>
                    <div className="flex-container">
                        
                        <div className="image-container">
                            <img className="servicesImage" src={ServiceImage} alt=""/>
                        </div>
                        <div className="text-container">
                            <p>{ServiceDescription}</p>
                        </div>
                    </div>
                </div> 
    )
}

export default Service
