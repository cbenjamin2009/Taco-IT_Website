import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function Contact() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl bg-white/5 p-6 shadow-2xl shadow-indigo-900/30 ring-1 ring-white/10 backdrop-blur md:p-12">
      <header className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
          Get in touch
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Let's build the right solution for your team
        </h2>
        <p className="text-base text-white/70 sm:text-lg">
          Fill out the form and we'll respond within one business day, or reach
          out directly using the options below.
        </p>
      </header>

      <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
        <a
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-150 hover:border-orange-300 hover:bg-white/10"
          href="tel:+12533002105"
        >
          <PhoneInTalkIcon fontSize="small" />
          253-300-2105
        </a>
        <a
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-150 hover:border-orange-300 hover:bg-white/10"
          href="mailto:helpdesk@taco-it.com"
        >
          <ConfirmationNumberIcon fontSize="small" />
          helpdesk@taco-it.com
        </a>
      </div>

      <form
        className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-indigo-900/20 md:grid-cols-2 md:gap-6 md:p-10"
        action="https://api.staticforms.xyz/submit"
        method="post"
      >
        <input
          type="hidden"
          name="accessKey"
          value="61768859-935c-4f63-92f8-1f254a0346ad"
        />
        <input type="text" name="honeypot" className="hidden" />

        <div className="md:col-span-1">
          <label
            htmlFor="name"
            className="block text-sm font-semibold uppercase tracking-wide text-white/60"
          >
            Name
          </label>
          <input
            className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="md:col-span-1">
          <label
            htmlFor="subject"
            className="block text-sm font-semibold uppercase tracking-wide text-white/60"
          >
            Subject
          </label>
          <input
            className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60"
            type="text"
            id="subject"
            name="subject"
          />
        </div>

        <div className="md:col-span-1">
          <label
            htmlFor="email"
            className="block text-sm font-semibold uppercase tracking-wide text-white/60"
          >
            Email
          </label>
          <input
            className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="md:col-span-1">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold uppercase tracking-wide text-white/60"
          >
            Phone
          </label>
          <input
            className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60"
            type="tel"
            id="phone"
            name="phone"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold uppercase tracking-wide text-white/60"
          >
            Project Details
          </label>
          <textarea
            rows={6}
            id="message"
            name="message"
            className="mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60"
            placeholder="Tell us about your goals, timeline, and the problems you're solving."
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-base font-semibold text-slate-900 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300 md:w-auto"
            type="submit"
          >
            Submit Request
          </button>
        </div>

        <input type="hidden" name="replyTo" value="chris@taco-it.com" />
        <input type="hidden" name="redirectTo" value="https://taco-it.com" />
      </form>
    </section>
  );
}

export default Contact;
