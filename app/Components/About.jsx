
const story = [
  {
    title: "Founding",
    body:
      "Taco-IT was founded by Chris Benjamin to give Pacific Northwest businesses a true technology partner: someone who understands both web development and the operational realities of growing companies."
  },
  {
    title: "Our Why",
    body:
      "We believe technology should be an asset, not another headache. When your tools are aligned with your goals, you earn back time to focus on your customers and your craft."
  },
  {
    title: "Our Mission",
    body:
      "Build remarkable digital experiences and dependable infrastructure so local organizations can stand out online, stay secure, and scale with confidence."
  },
  {
    title: "Our What",
    body:
      "From strategic consulting to managed IT, websites, and automation projects, we mix engineering expertise with practical business insight to implement solutions that grow with you."
  },
  {
    title: "Our How",
    body:
      "With more than 15 years supporting education, healthcare, and service industries, we stay hands-on with emerging tech and tailor every engagement around measurable outcomes."
  }
];

function About() {
  return (
    <section className="space-y-12">
      <header className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300">
          About Taco-IT
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Tacoma roots, enterprise expertise
        </h2>
        <p className="mx-auto max-w-3xl text-base text-white/70 sm:text-lg">
          We partner with small and mid-sized teams to translate business goals
          into resilient, secure, and scalable technology. Consider us an
          extension of your in-house team, ready to strategize, build, and
          maintain.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {story.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-indigo-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-base text-white/70">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
