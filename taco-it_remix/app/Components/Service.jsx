
import { Link } from 'remix'

function Service({ServiceTitle, ServiceDescription, ServiceImage, LinkTo = "/"}) {
    return (
              <div className="flex flex-col border-solid border-indigo-500 border-2">
                  <Link to={LinkTo}>
                    <h2 className="text-3xl font-bold leading-loose text-center">{ServiceTitle}</h2>
                    <div className="flex-container">
                      
                        <div className="mt-2 lg:mt-6 mx-24 md:mx-10 lg:mx-0">
                           <img className="mx-auto rounded-full" src={ServiceImage} alt=""/>
                        </div>
                        <div className="mt-2 lg:mt-6 p-2 lg:p-10 text-center">
                            <p>{ServiceDescription}</p>
                        </div>
                        
                    </div>
                    </Link>
                </div> 


    )
}

export default Service
