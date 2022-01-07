import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import tailwindstyles from "./tailwind.css";

export let links = () => {
  return [
    { rel: "stylesheet", href: tailwindstyles }
  ];
};

export function meta() {
  const description = "Taco-IT - Website Design, Managed IT Services and Consulting Company serving Tacoma South Puget Sound area of Washington";
  return { 
    description,
    keywords: "Taco-IT, TacoIT, IT Services Tacoma, IT Services Puyallup, Website Design Tacoma, Website Creator Tacoma, Web design tacoma, web design puyallup, computer company tacoma, computer company puyallup, Web Design, Website Design, Website Consultation, Web Consultation, Cheap Website, Website Creator, Tacoma WA, Puyallup WA, Business Website, Wordpress, Managed Services Tacoma, MSP Tacoma, Managed Anti-Virus, Onsite Support, Managed Patches, Managed Spam, Managed Email, Remote Support, Managed Backup, Managed Office 365, Managed Microsoft 365, Managed Computer Services, Business Computer Services",
    "twitter:image": "https://www.taco-it.com/build/_assets/Website_Logo-NUJUZPJQ.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@_ChrisBenjamin",
    "twitter:site": "@_ChrisBenjamin",
    "twitter:title": "Taco-IT",
    "twitter:description": description
    };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
