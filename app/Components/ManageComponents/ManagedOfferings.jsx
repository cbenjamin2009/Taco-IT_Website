import Offerings from '../Offerings'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import StorageIcon from '@mui/icons-material/Storage';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EngineeringIcon from '@mui/icons-material/Engineering';


function ManagedOfferings() {
    return (
        <div className="manageSection">
        
            <div className="flex flex-row p-4 space-x-4 ">
            <MonitorHeartIcon fontSize="large" color="success"/>
            <Offerings title={'Monitoring'} info={'Proactive Server and Workstation Monitoring'}/>
            </div>
            <div className=" flex flex-row p-4 space-x-4">
            <CoronavirusIcon fontSize="large"  color="success"/>
            <Offerings title={'Managed Anti-Virus'} info={'Enterprise Class Anti-Virus Protection for all of your devices'}/>
            </div>
            <div className=" flex flex-row p-4 space-x-4">
            <StorageIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Backup'} info={'Backups are mission critical! We can manage your Local and Cloud backup and provide quarterly testing reports'}/>
            </div>
            <div className=" flex flex-row p-4 space-x-4">
            <LocalPostOfficeIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Microsoft 365'} info={'Let us manage your Microsoft 365 Business Plan including Exchange Email, SharePoint, OneDrive, Teams, and Office applications'}/>
            </div>
            <div className="flex flex-row p-4 space-x-4">
                <KeyboardIcon fontSize="large"  color="success"/>
            <Offerings title={'Remote Support'} info={'Fast and Secure Remote support assistance allows for faster response times and less staff interruption, most problems are solved through remote support'}/>
            </div>
            <div className="flex flex-row p-4 space-x-4">
                <PersonPinIcon fontSize="large"  color="success"/>
            <Offerings title={'Onsite Support'} info={'When we cannot fix it remotely, we come to you and fix it on the spot'}/>
            </div>
            <div className="flex flex-row p-4 space-x-4">
                <AlternateEmailIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Email and Spam Services'} info={'No one likes spam, let us help you reduce your spam and malicious emails'}/>
            </div>
            <div className="flex flex-row p-4 space-x-4">
                <EngineeringIcon  fontSize="large"  color="success"/>
            <Offerings title={'Managed Patching and Maintenance'} info={'Software Patches and Security Updates are critical, we handle those and perform weekly maintenance to keep your system running efficiently and secure'}/>
            </div>
        
        </div>
    )
}

export default ManagedOfferings
