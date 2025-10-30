import DevelopmentOfferings from "../../Components/DevelopComponents/DevelopmentOfferings";
import Skills from "../../Components/DevelopComponents/Skills";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import HeroImageParallax from "../../Components/HeroImageParallax";

const developHighlights = [
  "Modern Remix, Next.js, and React builds tuned for performance and SEO.",
  "Tight integrations with CRMs, scheduling tools, and business-critical systems.",
  "Automations that connect marketing, sales, and operations in real time.",
  "Transparent roadmaps, sprint plans, and post-launch optimization support."
];

const developNarrative = [
  "Every project starts with your business goals. We collaborate on user journeys, messaging, and success metrics before writing a single line of code.",
  "From redesigns and replatforming to net-new products, we build resilient experiences that are easy for your team to manage and delightful for your customers to use.",
  "Need an iterative approach? We offer retainers and roadmaps that continuously improve your digital presence, optimize conversions, and unlock new revenue streams."
];

export const meta = () => {
  const description =
    "Taco-IT provides website design and hosting services. If your website needs a new look or custom development, let us help you provide an amazing experience for your customers.";

  return [
    { title: "Taco-IT Website Development" },
    { name: "description", content: description }
  ];
};

export default function Develop() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] lg:block" />

        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Nav />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 backdrop-blur">
              Development
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Websites and digital products built to grow with you
              </h1>
              <p className="max-w-3xl text-lg text-white/70 lg:text-xl">
                From brand new builds to redesigns and feature enhancements, we
                craft conversion-focused experiences backed by maintainable
                code, thoughtful UX, and measurable goals.
              </p>
            </div>

            <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2 sm:text-base">
              {developHighlights.map((item) => (
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
                Schedule a discovery call
              </a>
              <a
                href="/consult"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200"
              >
                Explore consulting services
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <header className="space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300">
              What we deliver
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Design, development, and optimization under one roof
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
              We design bespoke experiences, write production-ready code, and
              stay by your side after launch to ensure everything continues to
              perform.
            </p>
          </header>

          <div className="mt-12">
            <DevelopmentOfferings />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-6 px-6 text-base text-white/70 lg:px-8 lg:text-lg">
          {developNarrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto w-full max-w-6xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Technologies we work with
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            A toolkit anchored in modern JavaScript, cloud, and automation
            platforms to keep your stack current and maintainable.
          </p>
          <div className="mt-10">
            <Skills />
          </div>
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
