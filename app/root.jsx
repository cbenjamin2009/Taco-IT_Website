import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import tailwindstyles from "./tailwind.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: tailwindstyles }
  ];
};

export const meta = () => {
  const description =
    "Taco-IT - Website Design, Managed IT Services and Consulting Company serving Tacoma South Puget Sound area of Washington";
  const keywords =
    "Taco-IT, TacoIT, IT Services Tacoma, IT Services Puyallup, Website Design Tacoma, Website Creator Tacoma, Web design tacoma, web design puyallup, computer company tacoma, computer company puyallup, Web Design, Website Design, Website Consultation, Web Consultation, Cheap Website, Website Creator, Tacoma WA, Puyallup WA, Business Website, Wordpress, Managed Services Tacoma, MSP Tacoma, Managed Anti-Virus, Onsite Support, Managed Patches, Managed Spam, Managed Email, Remote Support, Managed Backup, Managed Office 365, Managed Microsoft 365, Managed Computer Services, Business Computer Services";

  return [
    { title: "Taco-IT" },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    {
      name: "twitter:image",
      content: "https://www.taco-it.com/build/_assets/Website_Logo-NUJUZPJQ.png"
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@_ChrisBenjamin" },
    { name: "twitter:site", content: "@_ChrisBenjamin" },
    { name: "twitter:title", content: "Taco-IT" },
    { name: "twitter:description", content: description }
  ];
};

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
