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
        <div className="manageSection">
        
            <div className=" p-4 border-2">
            <MonitorHeartIcon fontSize="large" color="success"/>
            <Offerings title={'Monitoring'} info={'Proactive Server and Workstation Monitoring'}/>
            </div>
            <div className="   p-4">
            <CoronavirusIcon fontSize="large"  color="success"/>
            <Offerings title={'Managed Anti-Virus'} info={'Enterprise Class Anti-Virus Protection for all of your devices'}/>
            </div>
            <div className="   p-4">
            <StorageIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Backup'} info={'Managed local and cloud backup with quarterly testing reports'}/>
            </div>
            <div className="   p-4">
            <LocalPostOfficeIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Microsoft 365'} info={'Let us manage your Microsoft 365 Business Plan'}/>
            </div>
            <div className="  p-4">
                <KeyboardIcon fontSize="large"  color="success"/>
            <Offerings title={'Remote Support'} info={'Fast and Secure Remote support assistance allows for faster response times and less staff interruption'}/>
            </div>
            <div className="  p-4">
                <PersonPinIcon fontSize="large"  color="success"/>
            <Offerings title={'Onsite Support'} info={'When we cannot fix it remotely, we come to you and fix it on the spot'}/>
            </div>
            <div className="  p-4">
                <AlternateEmailIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Email and Spam Services'} info={'No one likes spam, let us help you reduce your spam and malicious emails'}/>
            </div>

        
        </div>
    )
}

export default ManagedOfferings
