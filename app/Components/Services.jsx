import Consult from "../Images/consult.svg";
import Develop from "../Images/develop.svg";
import Manage from "../Images/manage.svg";
import { useEffect, useRef, useState } from "react";
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
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

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

      <div
        ref={gridRef}
        className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
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
