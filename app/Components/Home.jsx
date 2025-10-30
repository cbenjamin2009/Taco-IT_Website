import { useEffect, useRef, useState } from "react";
import TypeWriter from "react-typewriter";
import HeroCanvas from "./HeroCanvas";

const highlights = [
  "Responsive websites designed for conversions",
  "Managed IT services tailored for SMB budgets",
  "Tacoma-based team with enterprise experience",
  "Flat-fee consulting when you need extra hands"
];

function Home() {
  const highlightRefs = useRef([]);
  const [visibleHighlights, setVisibleHighlights] = useState(
    highlights.map(() => false)
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisibleHighlights(highlights.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleHighlights((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    highlightRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-12 text-slate-100 sm:px-8 lg:pb-24 lg:pt-16 xl:px-0">
      <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.04] px-8 py-12 shadow-[0_45px_120px_-40px_rgba(15,23,42,0.65)] backdrop-blur-md sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0">
          <HeroCanvas />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-slate-900/30 to-slate-950/80" />
        </div>

        <div className="relative z-10 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-orange-200 backdrop-blur">
            <span className="text-white/70">Taco-IT</span>
            <span className="hidden text-white/50 sm:block">{"\u2022"}</span>
            <TypeWriter typing={0.8}>Your local IT &amp; digital partner</TypeWriter>
          </span>

          <div className="space-y-5">
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
              href="tel:+12533002105"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200"
            >
              Call 253-300-2105
            </a>
          </div>
        </div>

        <ul className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <li
              key={item}
              data-index={index}
              ref={(node) => {
                highlightRefs.current[index] = node;
              }}
              className={`flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur transition-all duration-500 ease-out sm:text-base ${
                visibleHighlights[index]
                  ? "translate-y-0 opacity-100 blur-0"
                  : "translate-y-6 opacity-0 blur-sm"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pointer-events-none absolute inset-0 rounded-[42px] shadow-[inset_0_0_45px_rgba(15,23,42,0.55)]" />
      </div>
    </section>
  );
}

export default Home;
