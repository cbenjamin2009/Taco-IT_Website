import { Link } from "@remix-run/react";

function Service({
  ServiceTitle,
  ServiceDescription,
  ServiceImage,
  LinkTo = "/"
}) {
  return (
    <Link
      to={LinkTo}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20"
    >
      <div className="overflow-hidden">
        <img
          className="h-48 w-full object-cover transition duration-200 group-hover:scale-105"
          src={ServiceImage}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 py-6 text-center">
        <h3 className="text-2xl font-semibold text-slate-900">{ServiceTitle}</h3>
        <p className="text-base text-slate-600">{ServiceDescription}</p>
        <span className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-orange-500 transition duration-150 group-hover:translate-x-1">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default Service;
