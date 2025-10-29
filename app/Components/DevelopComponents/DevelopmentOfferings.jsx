import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";
import WebhookIcon from "@mui/icons-material/Webhook";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Offerings from "../Offerings";

const offerings = [
  {
    icon: WebIcon,
    title: "Website Development",
    info:
      "Launch a fast, accessible site tailored to your brand. We design and build modern Remix and Next.js experiences that convert visitors into leads."
  },
  {
    icon: LanguageIcon,
    title: "Website Hosting Support",
    info:
      "We evaluate providers, right-size your infrastructure, and manage deployments so your site stays available and high-performing."
  },
  {
    icon: WebhookIcon,
    title: "Domain & DNS Management",
    info:
      "Let us take care of renewals, certificates, DNS records, and integrations with third-party platforms."
  },
  {
    icon: DashboardCustomizeIcon,
    title: "Custom Features & Integrations",
    info:
      "Need booking, automation, or CRM hand-offs? We scope, build, and ship enhancements without forcing a full rebuild."
  }
];

function DevelopmentOfferings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {offerings.map(({ icon: Icon, title, info }) => (
        <div
          key={title}
          className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10"
        >
          <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/20 text-orange-300">
            <Icon fontSize="medium" />
          </span>
          <Offerings title={title} info={info} />
        </div>
      ))}
    </div>
  );
}

export default DevelopmentOfferings;
