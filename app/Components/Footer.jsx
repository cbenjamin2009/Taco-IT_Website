import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "@remix-run/react";

const quickLinks = [
  { label: "Develop", href: "/develop" },
  { label: "Consult", href: "/consult" },
  { label: "Manage", href: "/manage" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <div className="space-y-10 text-sm text-white/70">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Taco-IT</p>
          <p>
            Modern websites, managed IT, and on-demand consulting for Tacoma and
            South Puget Sound businesses. We keep your technology sharp so your
            team can focus on what matters most.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Reach Us</p>
          <a
            className="flex items-center gap-2 text-white/80 transition-colors duration-150 hover:text-orange-300"
            href="tel:+13603625004"
          >
            <PhoneInTalkIcon fontSize="small" />
            (360) 362-5004
          </a>
          <a
            className="block text-white/80 transition-colors duration-150 hover:text-orange-300"
            href="mailto:helpdesk@taco-it.com"
          >
            helpdesk@taco-it.com
          </a>
          <div className="flex items-center gap-3 pt-2">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-300"
              href="https://github.com/cbenjamin2009"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith("#") ? (
                  <a
                    href={href}
                    className="transition-colors duration-150 hover:text-orange-300"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={href}
                    className="transition-colors duration-150 hover:text-orange-300"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
        <p>Copyright {new Date().getFullYear()} Taco-IT. All rights reserved.</p>
        <p>
          Crafted by{" "}
          <a
            className="text-orange-300 transition-colors duration-150 hover:text-orange-200"
            href="https://chrisbenjamin.dev"
          >
            Chris Benjamin
          </a>
        </p>
      </div>
    </div>
  );
}

