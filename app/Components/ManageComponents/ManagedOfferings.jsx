import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import StorageIcon from "@mui/icons-material/Storage";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Offerings from "../Offerings";

const managedServices = [
  {
    icon: MonitorHeartIcon,
    title: "Monitoring",
    info: "Proactive server and workstation monitoring with real-time alerting and remediation."
  },
  {
    icon: CoronavirusIcon,
    title: "Managed Anti-Virus",
    info: "Enterprise-grade threat protection deployed across every device and kept up to date."
  },
  {
    icon: StorageIcon,
    title: "Managed Backup",
    info: "Hybrid local and cloud backups with quarterly testing so your recovery plan actually works."
  },
  {
    icon: LocalPostOfficeIcon,
    title: "Managed Microsoft 365",
    info: "Administration for Exchange, SharePoint, Teams, OneDrive, licensing, and security policies."
  },
  {
    icon: KeyboardIcon,
    title: "Remote Support",
    info: "Fast, secure remote support to resolve most issues without disrupting your staff."
  },
  {
    icon: PersonPinIcon,
    title: "Onsite Support",
    info: "When hands-on assistance is required, we arrive prepared to get you back up quickly."
  },
  {
    icon: AlternateEmailIcon,
    title: "Managed Email & Spam",
    info: "Reduce phishing and spam while protecting inbox availability and archiving compliance."
  },
  {
    icon: EngineeringIcon,
    title: "Patching & Maintenance",
    info: "Weekly patching and health checks to keep systems secure, stable, and running at peak speed."
  }
];

function ManagedOfferings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {managedServices.map(({ icon: Icon, title, info }) => (
        <div
          key={title}
          className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10"
        >
          <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            <Icon fontSize="medium" />
          </span>
          <Offerings title={title} info={info} />
        </div>
      ))}
    </div>
  );
}

export default ManagedOfferings;
