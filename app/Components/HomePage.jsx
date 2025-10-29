import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import Services from "./Services";

function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)] lg:block" />

        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <Nav />
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24">
          <Home />
        </div>
      </div>

      <section id="services" className="bg-white text-slate-900">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Services />
        </div>
      </section>

      <section id="contact" className="bg-slate-950">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <Contact />
        </div>
      </section>

      <section id="about" className="bg-slate-900 text-slate-100">
        <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
          <About />
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

export default HomePage;
