import { useCallback } from "react";
import { Link, useLocation } from "@remix-run/react";
import Logo from "./Logo";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Develop", href: "/develop" },
  { label: "Consult", href: "/consult" },
  { label: "Manage", href: "/manage" },
  { label: "Contact", href: "#contact" }
];

export default function Nav() {
  const location = useLocation();

  const handleAnchorClick = useCallback(
    (hash) => {
      if (typeof document === "undefined") {
        return;
      }

      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (typeof window !== "undefined") {
          const nextUrl =
            hash === "#"
              ? location.pathname
              : `${location.pathname.replace(/#.*$/, "")}${hash}`;
          window.history.replaceState(null, "", nextUrl);
        }
      }
    },
    [location.pathname]
  );

  return (
    <header className="flex flex-wrap items-center justify-between gap-6 py-6 text-sm md:py-8">
      <Logo />

      <nav className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-200 md:justify-end md:text-base">
        {primaryLinks.map(({ label, href }) =>
          href.startsWith("/") ? (
            <Link
              key={label}
              to={href}
              className="transition-colors duration-150 hover:text-orange-300"
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              className="transition-colors duration-150 hover:text-orange-300"
              onClick={(event) => {
                event.preventDefault();
                handleAnchorClick(href);
              }}
            >
              {label}
            </a>
          )
        )}
      </nav>

      <div className="flex w-full flex-col gap-3 text-sm font-semibold text-slate-900 md:w-auto md:flex-row md:items-center md:gap-4">
        <a
          href="tel:+12533002105"
          className="flex items-center justify-center rounded-full border border-orange-400 px-4 py-2 text-orange-300 transition-colors duration-150 hover:bg-orange-400/10"
        >
          253-300-2105
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-slate-900 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300 md:text-base"
          onClick={(event) => {
            event.preventDefault();
            handleAnchorClick("#contact");
          }}
        >
          Schedule a Consult
        </a>
      </div>
    </header>
  );
}
