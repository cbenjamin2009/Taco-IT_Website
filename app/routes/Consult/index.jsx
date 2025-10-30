import ConsultingImage from "../../Images/consulting.jpg";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";

const consultHighlights = [
  "Project-based advisory for migrations, cloud adoption, and compliance initiatives.",
  "Fractional CTO/IT leadership to mentor internal teams and keep roadmaps on track.",
  "Process and workflow audits that surface automation opportunities and risk.",
  "Vendor evaluations, RFP support, and contract negotiation insight."
];

const consultPillars = [
  {
    title: "Strategic Planning",
    copy:
      "Translate your growth targets into an actionable technology roadmap, including budget forecasts and staffing considerations."
  },
  {
    title: "Operations & Process",
    copy:
      "Streamline onboarding, ticketing, and cross-team collaboration with the right blend of automation and policy."
  },
  {
    title: "Modern Infrastructure",
    copy:
      "Select, implement, and secure cloud platforms, network upgrades, and hybrid workplace solutions built for today."
  },
  {
    title: "Business Continuity",
    copy:
      "Design and test incident response, backup, and disaster recovery strategies so you can recover with confidence."
  }
];

const consultNarrative = [
  "As the Tacoma-Area Consulting Organization for Information Technology (Taco-IT), we serve as an extension of your team. Whether you need guidance on a single project or an ongoing partner, we help you choose the right hardware, software, and workflows for your budget.",
  "Our consultants bring 15+ years of experience across education, healthcare, and professional services. We specialize in process improvement, project recovery, and practical modernization approaches that align technical decisions with your business strategy.",
  "From answering tough technical questions to driving complex implementations, we keep your organization secure, efficient, and ready for the next milestone."
];

export const meta = () => {
  const description =
    "Taco-IT Provides Professional IT Consulting Services, we are your technology partner and are here to help. We can help your existing IT department with software and hardware projects, we can answer technical questions, and we can provide project based consulting services to your business.";

  return [
    { title: "Taco-IT - IT Consulting Services" },
    { name: "description", content: description }
  ];
};

export default function Consult() {
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
                Consulting
              </span>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Expert guidance that elevates your IT practice
                </h1>
                <p className="max-w-xl text-lg text-white/70">
                  Pair your in-house talent with seasoned advisors who can plan,
                  execute, and support mission-critical initiatives. We provide
                  clarity, structure, and measurable outcomes.
                </p>
              </div>

              <ul className="grid gap-3 text-sm text-white/70 sm:text-base">
                {consultHighlights.map((item) => (
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
                  Request a consultation
                </a>
                <a
                  href="tel:+12533002105"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200"
                >
                  Call 253-300-2105
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-indigo-900/40 backdrop-blur">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/30 to-orange-400/10 blur-2xl" />
                <img
                  src={ConsultingImage}
                  alt="Taco-IT consulting session"
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
              Where we help
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Consulting designed for real-world teams
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
              Every engagement aims to deliver clarity, unlock efficiency, and
              leave your staff more confident than when we started.
            </p>
          </header>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {consultPillars.map(({ title, copy }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-indigo-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/70 sm:text-base">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto w-full max-w-4xl space-y-6 px-6 text-base text-white/70 lg:px-8 lg:text-lg">
          {consultNarrative.map((paragraph) => (
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
