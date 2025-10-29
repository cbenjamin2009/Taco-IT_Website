import TypeWriter from "react-typewriter";

const highlights = [
  "Responsive websites designed for conversions",
  "Managed IT services tailored for SMB budgets",
  "Tacoma-based team with enterprise experience",
  "Flat-fee consulting when you need extra hands"
];

function Home() {
  return (
    <section className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12 pb-8 pt-6 text-slate-100 lg:gap-16 lg:pb-12 lg:pt-10">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-orange-200 backdrop-blur">
          <span className="text-white/70">Taco-IT</span>
          <span className="hidden text-white/50 sm:block">{"\u2022"}</span>
          <TypeWriter typing={0.8}>Your local IT & digital partner</TypeWriter>
        </span>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Develop. Consult. Manage.
          </h1>
          <p className="max-w-xl text-lg text-white/70 lg:text-xl">
            We plan, build, and support the technology that keeps Tacoma-area
            businesses moving. From high-converting websites to dependable
            managed IT, our team makes modern infrastructure feel effortless.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-semibold sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-slate-900 shadow-lg shadow-orange-500/40 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300"
          >
            Start a Project
          </a>
          <a
            href="tel:+13603625004"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200"
          >
            Call (360) 362-5004
          </a>
        </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur transition-colors duration-200 hover:border-orange-300/30 hover:bg-white/10 sm:text-base"
          >
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
