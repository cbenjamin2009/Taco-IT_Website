import Consult from "../Images/consult.jpg";
import Develop from "../Images/develop.jpg";
import Manage from "../Images/manage.jpg";
import Service from "./Service";

const servicesCopy = [
  {
    title: "Develop",
    description:
      "Custom websites, applications, and automations built to drive revenue and simplify operations.",
    image: Develop,
    href: "/develop"
  },
  {
    title: "Consult",
    description:
      "Strategic IT consulting to plan roadmaps, modernize infrastructure, and mentor in-house teams.",
    image: Consult,
    href: "/consult"
  },
  {
    title: "Manage",
    description:
      "Proactive managed services, security, and help desk support for stress-free day-to-day operations.",
    image: Manage,
    href: "/manage"
  }
];

function Services() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-500">
          Solutions
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Full-service support for growing teams
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
          You bring the business goals, we craft the technology plan. Explore our
          core service lines or reach out to mix and match a package that fits
          your organization.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicesCopy.map((service) => (
          <Service
            key={service.title}
            ServiceTitle={service.title}
            ServiceDescription={service.description}
            ServiceImage={service.image}
            LinkTo={service.href}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
