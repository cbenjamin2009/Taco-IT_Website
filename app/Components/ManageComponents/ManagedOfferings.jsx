const { default: Offerings } = require("./Offerings");

function ManagedOfferings() {
    return (
        <section className="ManagedOfferings">
            <h2>Managed IT Services</h2>

        <div className="columns-1 md: columns-2">
            <Offerings icon={''} title={''} info={''}/>
            <Offerings icon={''} title={''} info={''}/>
            <Offerings icon={''} title={''} info={''}/>
            <Offerings icon={''} title={''} info={''}/>

        </div>
        
        </section>
    )
}

export default ManagedOfferings
