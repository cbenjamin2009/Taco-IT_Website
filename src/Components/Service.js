
function Service({ServiceTitle, ServiceDescription, ServiceImage}) {
    return (
              <div className="flex flex-col">
                    <h2 className="text-3xl font-bold leading-loose text-center">{ServiceTitle}</h2>
                    <div className="flex-container">
                        
                        <div className="mt-2 lg:mt-6 mx-24 md:mx-10 lg:mx-0">
                           <img className="mx-auto" src={ServiceImage} alt=""/>
                        </div>
                        <div className="mt-2 lg:mt-6 p-2 lg:p-10">
                            <p>{ServiceDescription}</p>
                        </div>
                        
                    </div>
                </div> 


    )
}

export default Service
