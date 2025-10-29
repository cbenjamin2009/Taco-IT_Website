import ManagedOfferings from "../../Components/ManageComponents/ManagedOfferings";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import ManagingImage from "../../Images/managing.png";

const manageHighlights = [
  "Always-on monitoring, patching, and response to keep your environment healthy.",
  "Flat-rate pricing with clear SLAs, ticket workflows, and executive reporting.",
  "Security-first approach covering endpoints, email, identity, and backups.",
  "Friendly support engineers who know your business and your staff by name."
];

const managedNarrative = [
  "Managed IT services deliver the benefits of a fully functioning IT department at a fraction of the cost. We deploy agents across your systems to provide diagnostic monitoring, performance insights, and remote remediation capabilities.",
  "You choose the bundle that fits your organization - anti-virus, spam filtering, Microsoft 365, backups, and more. When remote resolution isn't enough, we show up onsite, prepared to get you back online quickly.",
  "Our team stays proactive, communicating recommendations before issues turn into outages and ensuring your technology evolves with your company."
];

export const meta = () => {
  const description =
    "Taco-IT provides managed IT services to small and medium businesses throughout Tacoma and Pierce County. Managed backup, Microsoft 365, email security, anti-virus, onsite and remote support.";

  return [
    { title: "Taco-IT Managed IT Service Provider (MSP)" },
    { name: "description", content: description }
  ];
};

export default function Manage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] lg:block" />

        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Nav />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 backdrop-blur">
                Managed Services
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Your complete IT department, on demand
                </h1>
                <p className="max-w-xl text-lg text-white/70 lg:text-xl">
                  We blend proactive maintenance with responsive support so your
                  team can stay productive and secure without building an
                  internal department.
                </p>
              </div>

              <ul className="grid gap-3 text-sm text-white/70 sm:text-base">
                {manageHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-colors duration-200 hover:border-orange-300/30 hover:bg-white/10"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-slate-900 shadow-lg shadow-orange-500/40 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300"
                >
                  Request a managed IT quote
                </a>
                <a
                  href="tel:+13603625004"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200"
                >
                  Call (360) 362-5004
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-emerald-900/40 backdrop-blur">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/20 to-orange-400/10 blur-2xl" />
                <img
                  src={ManagingImage}
                  alt="Managed IT services dashboard"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <header className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300">
              What's included
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Comprehensive support with enterprise-grade tooling
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
              Choose the services you need and we'll craft a tailored package.
              Every plan includes proactive monitoring, regular reviews, and a
              dedicated partner who understands your business.
            </p>
          </header>

          <div className="mt-12">
            <ManagedOfferings />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-6 px-6 text-base text-white/70 lg:px-8 lg:text-lg">
          {managedNarrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 pb-24">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Contact />
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}





