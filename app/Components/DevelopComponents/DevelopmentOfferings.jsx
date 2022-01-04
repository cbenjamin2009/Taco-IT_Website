import Offerings from '../Offerings'
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import WebhookIcon from '@mui/icons-material/Webhook';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

function ManagedOfferings() {
    return (
        <div className="manageSection">
        
            <div className="flex flex-row p-4 space-x-4 ">
            <WebIcon fontSize="large" color="info"/>
            <Offerings title={'Website Development'} info={'Want a fresh new website that is blazing fast, latest technology, and an asset to your customers? Let us work with you to create an entirely new website whether you have your own designer or want to start from scratch'}/>
            </div>
            <div className=" flex flex-row p-4 space-x-4">
            <LanguageIcon fontSize="large" color="info"/>
            <Offerings title={'Website Hosting Support'} info={'We can help you find the best website host for your business website, we work with a variety of vendors and will recommend the one best suited for your needs'}/>
            </div>
            <div className=" flex flex-row p-4 space-x-4">
            <WebhookIcon fontSize="large" color="info"/>
            <Offerings title={'Domain Management'} info={'We can help manage your domain including registration, certificates, and DNS records.'}/>
            </div>
            <div className=" flex flex-row p-4 space-x-4">
            <DashboardCustomizeIcon fontSize="large" color="info"/>
            <Offerings title={'Custom Web Feature'} info={'Want a custom feature on your website without having to build a new site? We can schedule a meeting to talk about your project and taco bout it!'}/>
            </div>
        
        </div>
    )
}

export default ManagedOfferings
