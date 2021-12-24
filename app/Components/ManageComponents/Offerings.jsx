function Offerings({icon, title, info}) {
    return (
        <div className="flex flex-row p-2">
           <img src={icon} alt="Service Icon"/>
           <div className="content flex flex-column m-4">
           <h3>{title}</h3>
            <p>{info}</p>
           </div>
            
        </div>
    )
}

export default Offerings
