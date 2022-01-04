
import { Link } from 'remix'

function Service({ServiceTitle, ServiceDescription, ServiceImage, LinkTo = "/"}) {
    return (
              <div className="flex flex-col">
                  <Link to={LinkTo}>
                    <h2 className="text-3xl font-bold leading-loose text-center">{ServiceTitle}</h2>
                    <div className="flex-container group">
                      
                        <div className="mt-2 lg:mt-6 md:mx-10 lg:mx-0">
                           <img className="mx-auto rounded-lg h-65 w-65 group-hover:rounded-full group-hover:delay-100" src={ServiceImage} alt=""/>
                        </div>
                        <div className="mt-2 lg:mt-6 p-2 lg:p-10 text-center text-2xl group-hover:scale-125 group-hover:transition-transform group-hover:delay-100 group-hover:text-blue-700 group-hover:underline">
                            <p>{ServiceDescription}</p>
                        </div>
                        
                    </div>
                    </Link>
                </div> 


    )
}

export default Service
