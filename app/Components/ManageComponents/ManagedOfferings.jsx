const { default: Offerings } = require("./Offerings");
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import StorageIcon from '@mui/icons-material/Storage';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function ManagedOfferings() {
    return (
        <section className="ManagedOfferings pt-6">
            <p className="text-center text-3xl text-white pt-6">Managed IT Services</p>

        <div className="columns-1 md:columns-2 w-1/2">
            <div className="flex">
            <MonitorHeartIcon />
            <Offerings title={'Monitoring'} info={'Proactive Server and Workstation Monitoring'}/>
            </div>
            <div className="flex">
            <CoronavirusIcon/>
            <Offerings title={'Managed Anti-Virus'} info={'Enterprise Class Anti-Virus Protection for all of your devices'}/>
            </div>
            <div className="flex">
            <StorageIcon />
            <Offerings title={'Managed Backup'} info={'Managed local and cloud backup with quarterly testing reports'}/>
            </div>
            <div className="flex">
            <LocalPostOfficeIcon />
            <Offerings title={'Managed Microsoft 365'} info={'Let us manage your Microsoft 365 Business Plan'}/>
            </div>
            <div className="flex">
                <KeyboardIcon/>
            <Offerings title={'Remote Support'} info={'Fast and Secure Remote support assistance allows for faster response times and less staff interruption'}/>
            </div>
            <div className="flex">
                <PersonPinIcon/>
            <Offerings title={'Onsite Support'} info={'When we cannot fix it remotely, we come to you and fix it on the spot'}/>
            </div>
            <div className="flex">
                <AlternateEmailIcon />
            <Offerings title={'Managed Email and Spam Services'} info={'No one likes spam, let us help you reduce your spam and malicious emails'}/>
            </div>

        </div>
        
        </section>
    )
}

export default ManagedOfferings
