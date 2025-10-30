var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EHI4FOR7.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var loader = () => json({
  contactAccessKey: process.env.STATICFORMS_ACCESS_KEY ?? ""
}), links = () => [
  { rel: "stylesheet", href: tailwind_default }
], meta = () => {
  let description = "Taco-IT - Website Design, Managed IT Services and Consulting Company serving Tacoma South Puget Sound area of Washington";
  return [
    { title: "Taco-IT" },
    { name: "description", content: description },
    { name: "keywords", content: "Taco-IT, TacoIT, IT Services Tacoma, IT Services Puyallup, Website Design Tacoma, Website Creator Tacoma, Web design tacoma, web design puyallup, computer company tacoma, computer company puyallup, Web Design, Website Design, Website Consultation, Web Consultation, Cheap Website, Website Creator, Tacoma WA, Puyallup WA, Business Website, Wordpress, Managed Services Tacoma, MSP Tacoma, Managed Anti-Virus, Onsite Support, Managed Patches, Managed Spam, Managed Email, Remote Support, Managed Backup, Managed Office 365, Managed Microsoft 365, Managed Computer Services, Business Computer Services" },
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
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/sitemap[.]xml.jsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});
var loader2 = () => {
  let content = `
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
	<loc>https://www.taco-it.com/</loc>
	<lastmod>2022-01-08T00:15:16+01:00</lastmod>
	<priority>1.0</priority>
	</url>
	<url>
	<loc>https://www.taco-it.com/develop</loc>
	<lastmod>2022-01-08T00:15:16+01:00</lastmod>
	<priority>1.0</priority>
	</url>
	<url>
	<loc>https://www.taco-it.com/consult</loc>
	<lastmod>2022-01-08T00:15:16+01:00</lastmod>
	<priority>1.0</priority>
	</url>
	<url>
	<loc>https://www.taco-it.com/manage</loc>
	<lastmod>2022-01-08T00:15:16+01:00</lastmod>
	<priority>1.0</priority>
	</url>
	</urlset>
	`;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    }
  });
};

// app/routes/robots[.]txt.jsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader3
});
var loader3 = () => {
  let robotText = `
    User-agent: Googlebot
    Disallow: /nogooglebot/
    
    User-agent: *
    Allow: /
    
    Sitemap: http://www.taco-it.com/sitemap.xml
    `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// app/routes/Consult/index.jsx
var Consult_exports = {};
__export(Consult_exports, {
  default: () => Consult,
  meta: () => meta2
});

// app/Images/consulting.jpg
var consulting_default = "/build/_assets/consulting-FQC2WXJF.jpg";

// app/Components/Contact.jsx
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useRouteLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Contact() {
  let rootData = useRouteLoaderData("root"), accessKey = rootData && typeof rootData == "object" && "contactAccessKey" in rootData ? rootData.contactAccessKey : "";
  return /* @__PURE__ */ jsxDEV3("section", { className: "mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl bg-white/5 p-6 shadow-2xl shadow-indigo-900/30 ring-1 ring-white/10 backdrop-blur md:p-12", children: [
    /* @__PURE__ */ jsxDEV3("header", { className: "space-y-4 text-center", children: [
      /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-semibold uppercase tracking-[0.3em] text-orange-300", children: "Get in touch" }, void 0, !1, {
        fileName: "app/Components/Contact.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("h2", { className: "text-3xl font-semibold text-white sm:text-4xl", children: "Let's build the right solution for your team" }, void 0, !1, {
        fileName: "app/Components/Contact.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "text-base text-white/70 sm:text-lg", children: "Fill out the form and we'll respond within one business day, or reach out directly using the options below." }, void 0, !1, {
        fileName: "app/Components/Contact.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Contact.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "grid gap-4 text-sm text-white/80 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxDEV3(
        "a",
        {
          className: "flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-150 hover:border-orange-300 hover:bg-white/10",
          href: "tel:+12533002105",
          children: [
            /* @__PURE__ */ jsxDEV3(PhoneInTalkIcon, { fontSize: "small" }, void 0, !1, {
              fileName: "app/Components/Contact.jsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            "253-300-2105"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/Components/Contact.jsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        "a",
        {
          className: "flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-150 hover:border-orange-300 hover:bg-white/10",
          href: "mailto:inquiry@taco-it.com",
          children: [
            /* @__PURE__ */ jsxDEV3(ConfirmationNumberIcon, { fontSize: "small" }, void 0, !1, {
              fileName: "app/Components/Contact.jsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            "inquiry@taco-it.com"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/Components/Contact.jsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/Components/Contact.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(
      "form",
      {
        className: "grid gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-indigo-900/20 md:grid-cols-2 md:gap-6 md:p-10",
        action: "https://api.staticforms.xyz/submit",
        method: "post",
        children: [
          /* @__PURE__ */ jsxDEV3(
            "input",
            {
              type: "hidden",
              name: "accessKey",
              value: accessKey
            },
            void 0,
            !1,
            {
              fileName: "app/Components/Contact.jsx",
              lineNumber: 49,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3("input", { type: "text", name: "honeypot", className: "hidden" }, void 0, !1, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "md:col-span-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "label",
              {
                htmlFor: "name",
                className: "block text-sm font-semibold uppercase tracking-wide text-white/60",
                children: "Name"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 57,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                className: "mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60",
                type: "text",
                id: "name",
                name: "name",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 63,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "md:col-span-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "label",
              {
                htmlFor: "subject",
                className: "block text-sm font-semibold uppercase tracking-wide text-white/60",
                children: "Subject"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 73,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                className: "mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60",
                type: "text",
                id: "subject",
                name: "subject"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 79,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "md:col-span-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-semibold uppercase tracking-wide text-white/60",
                children: "Email"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 88,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                className: "mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60",
                type: "email",
                id: "email",
                name: "email",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 94,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "md:col-span-1", children: [
            /* @__PURE__ */ jsxDEV3(
              "label",
              {
                htmlFor: "phone",
                className: "block text-sm font-semibold uppercase tracking-wide text-white/60",
                children: "Phone"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 104,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              "input",
              {
                className: "mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60",
                type: "tel",
                id: "phone",
                name: "phone"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 110,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxDEV3(
              "label",
              {
                htmlFor: "message",
                className: "block text-sm font-semibold uppercase tracking-wide text-white/60",
                children: "Project Details"
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 119,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              "textarea",
              {
                rows: 6,
                id: "message",
                name: "message",
                className: "mt-2 block w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/40 outline-none transition focus:border-orange-300 focus:ring-2 focus:ring-orange-300/60",
                placeholder: "Tell us about your goals, timeline, and the problems you're solving."
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 125,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 118,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "md:col-span-2 flex justify-center", children: /* @__PURE__ */ jsxDEV3(
            "button",
            {
              className: "inline-flex w-full items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-base font-semibold text-slate-900 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300 md:w-auto",
              type: "submit",
              children: "Submit Request"
            },
            void 0,
            !1,
            {
              fileName: "app/Components/Contact.jsx",
              lineNumber: 135,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 134,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "replyTo", value: "chris@taco-it.com" }, void 0, !1, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("input", { type: "hidden", name: "redirectTo", value: "https://taco-it.com" }, void 0, !1, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 144,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/Components/Contact.jsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/Components/Contact.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var Contact_default = Contact;

// app/Components/Footer.jsx
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneInTalkIcon2 from "@mui/icons-material/PhoneInTalk";
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var quickLinks = [
  { label: "Develop", href: "/develop" },
  { label: "Consult", href: "/consult" },
  { label: "Manage", href: "/manage" },
  { label: "Contact", href: "#contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "space-y-10 text-sm text-white/70", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-lg font-semibold text-white", children: "Taco-IT" }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: "Modern websites, managed IT, and on-demand consulting for Tacoma and South Puget Sound businesses. We keep your technology sharp so your team can focus on what matters most." }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-lg font-semibold text-white", children: "Reach Us" }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "a",
          {
            className: "flex items-center gap-2 text-white/80 transition-colors duration-150 hover:text-orange-300",
            href: "tel:+12533002105",
            children: [
              /* @__PURE__ */ jsxDEV4(PhoneInTalkIcon2, { fontSize: "small" }, void 0, !1, {
                fileName: "app/Components/Footer.jsx",
                lineNumber: 31,
                columnNumber: 13
              }, this),
              "253-300-2105"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/Components/Footer.jsx",
            lineNumber: 27,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(
          "a",
          {
            className: "block text-white/80 transition-colors duration-150 hover:text-orange-300",
            href: "mailto:inquiry@taco-it.com",
            children: "inquiry@taco-it.com"
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Footer.jsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center gap-3 pt-2", children: /* @__PURE__ */ jsxDEV4(
          "a",
          {
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-300",
            href: "https://github.com/cbenjamin2009",
            "aria-label": "GitHub",
            children: /* @__PURE__ */ jsxDEV4(GitHubIcon, { fontSize: "small" }, void 0, !1, {
              fileName: "app/Components/Footer.jsx",
              lineNumber: 46,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Footer.jsx",
            lineNumber: 41,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxDEV4("p", { className: "text-lg font-semibold text-white", children: "Quick Links" }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("ul", { className: "space-y-2", children: quickLinks.map(({ label, href }) => /* @__PURE__ */ jsxDEV4("li", { children: href.startsWith("#") ? /* @__PURE__ */ jsxDEV4(
          "a",
          {
            href,
            className: "transition-colors duration-150 hover:text-orange-300",
            children: label
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Footer.jsx",
            lineNumber: 57,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ jsxDEV4(
          Link,
          {
            to: href,
            className: "transition-colors duration-150 hover:text-orange-300",
            children: label
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Footer.jsx",
            lineNumber: 64,
            columnNumber: 19
          },
          this
        ) }, label, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxDEV4("p", { children: [
        "Copyright ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Taco-IT. All rights reserved."
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: [
        "Crafted by",
        " ",
        /* @__PURE__ */ jsxDEV4(
          "a",
          {
            className: "text-orange-300 transition-colors duration-150 hover:text-orange-200",
            href: "https://chrisbenjamin.dev",
            children: "Chris Benjamin"
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Footer.jsx",
            lineNumber: 81,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Footer.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/Components/Nav.jsx
import { useCallback } from "react";
import { Link as Link3, useLocation } from "@remix-run/react";

// app/Components/Logo.jsx
import { Link as Link2 } from "@remix-run/react";

// app/Images/Website_Logo.png
var Website_Logo_default = "/build/_assets/Website_Logo-NUJUZPJQ.png";

// app/Components/Logo.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Logo() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV5(Link2, { to: "/", "aria-label": "Taco-IT home", children: /* @__PURE__ */ jsxDEV5(
    "img",
    {
      className: "h-12 w-auto transition-transform duration-200 hover:scale-105 md:h-16",
      src: Website_Logo_default,
      alt: "Taco-IT logo"
    },
    void 0,
    !1,
    {
      fileName: "app/Components/Logo.jsx",
      lineNumber: 8,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/Components/Logo.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/Components/Logo.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/Components/Nav.jsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Develop", href: "/develop" },
  { label: "Consult", href: "/consult" },
  { label: "Manage", href: "/manage" },
  { label: "Contact", href: "#contact" }
];
function Nav() {
  let location = useLocation(), handleAnchorClick = useCallback(
    (hash) => {
      if (typeof document > "u")
        return;
      let target = document.querySelector(hash);
      if (target && (target.scrollIntoView({ behavior: "smooth", block: "start" }), typeof window < "u")) {
        let nextUrl = hash === "#" ? location.pathname : `${location.pathname.replace(/#.*$/, "")}${hash}`;
        window.history.replaceState(null, "", nextUrl);
      }
    },
    [location.pathname]
  );
  return /* @__PURE__ */ jsxDEV6("header", { className: "flex flex-wrap items-center justify-between gap-6 py-6 text-sm md:py-8", children: [
    /* @__PURE__ */ jsxDEV6(Logo, {}, void 0, !1, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("nav", { className: "flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-200 md:justify-end md:text-base", children: primaryLinks.map(
      ({ label, href }) => href.startsWith("/") ? /* @__PURE__ */ jsxDEV6(
        Link3,
        {
          to: href,
          className: "transition-colors duration-150 hover:text-orange-300",
          children: label
        },
        label,
        !1,
        {
          fileName: "app/Components/Nav.jsx",
          lineNumber: 44,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ jsxDEV6(
        "a",
        {
          href,
          className: "transition-colors duration-150 hover:text-orange-300",
          onClick: (event) => {
            event.preventDefault(), handleAnchorClick(href);
          },
          children: label
        },
        label,
        !1,
        {
          fileName: "app/Components/Nav.jsx",
          lineNumber: 52,
          columnNumber: 13
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex w-full flex-col gap-3 text-sm font-semibold text-slate-900 md:w-auto md:flex-row md:items-center md:gap-4", children: [
      /* @__PURE__ */ jsxDEV6(
        "a",
        {
          href: "tel:+12533002105",
          className: "flex items-center justify-center rounded-full border border-orange-400 px-4 py-2 text-orange-300 transition-colors duration-150 hover:bg-orange-400/10",
          children: "253-300-2105"
        },
        void 0,
        !1,
        {
          fileName: "app/Components/Nav.jsx",
          lineNumber: 68,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        "a",
        {
          href: "#contact",
          className: "flex items-center justify-center rounded-full bg-orange-400 px-5 py-2 text-sm font-semibold text-slate-900 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300 md:text-base",
          onClick: (event) => {
            event.preventDefault(), handleAnchorClick("#contact");
          },
          children: "Schedule a Consult"
        },
        void 0,
        !1,
        {
          fileName: "app/Components/Nav.jsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Nav.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/Components/HeroImageParallax.jsx
import { useEffect, useRef } from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function HeroImageParallax({ children }) {
  let containerRef = useRef(null);
  return useEffect(() => {
    let container = containerRef.current;
    if (!container)
      return;
    let handleScroll = () => {
      let rect = container.getBoundingClientRect(), windowHeight = window.innerHeight || document.documentElement.clientHeight, distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2, normalized = Math.max(Math.min(distanceFromCenter / windowHeight, 1), -1), translateY = normalized * 30, rotate = normalized * 3;
      container.style.setProperty(
        "--parallax-translate",
        `${translateY}px`
      ), container.style.setProperty("--parallax-rotate", `${rotate}deg`);
    };
    return handleScroll(), window.addEventListener("scroll", handleScroll, { passive: !0 }), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ jsxDEV7(
    "div",
    {
      ref: containerRef,
      style: {
        transform: "translateY(var(--parallax-translate, 0px)) rotate(var(--parallax-rotate, 0deg))",
        transition: "transform 0.1s linear"
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/Components/HeroImageParallax.jsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}

// app/routes/Consult/index.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var consultHighlights = [
  "Project-based advisory for migrations, cloud adoption, and compliance initiatives.",
  "Fractional CTO/IT leadership to mentor internal teams and keep roadmaps on track.",
  "Process and workflow audits that surface automation opportunities and risk.",
  "Vendor evaluations, RFP support, and contract negotiation insight."
], consultPillars = [
  {
    title: "Strategic Planning",
    copy: "Translate your growth targets into an actionable technology roadmap, including budget forecasts and staffing considerations."
  },
  {
    title: "Operations & Process",
    copy: "Streamline onboarding, ticketing, and cross-team collaboration with the right blend of automation and policy."
  },
  {
    title: "Modern Infrastructure",
    copy: "Select, implement, and secure cloud platforms, network upgrades, and hybrid workplace solutions built for today."
  },
  {
    title: "Business Continuity",
    copy: "Design and test incident response, backup, and disaster recovery strategies so you can recover with confidence."
  }
], consultNarrative = [
  "As the Tacoma-Area Consulting Organization for Information Technology (Taco-IT), we serve as an extension of your team. Whether you need guidance on a single project or an ongoing partner, we help you choose the right hardware, software, and workflows for your budget.",
  "Our consultants bring 15+ years of experience across education, healthcare, and professional services. We specialize in process improvement, project recovery, and practical modernization approaches that align technical decisions with your business strategy.",
  "From answering tough technical questions to driving complex implementations, we keep your organization secure, efficient, and ready for the next milestone."
], meta2 = () => [
  { title: "Taco-IT - IT Consulting Services" },
  { name: "description", content: "Taco-IT Provides Professional IT Consulting Services, we are your technology partner and are here to help. We can help your existing IT department with software and hardware projects, we can answer technical questions, and we can provide project based consulting services to your business." }
];
function Consult() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "bg-slate-950 text-slate-100", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] lg:block" }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV8(Nav, {}, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24", children: /* @__PURE__ */ jsxDEV8("div", { className: "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV8("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 backdrop-blur", children: "Consulting" }, void 0, !1, {
            fileName: "app/routes/Consult/index.jsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV8("h1", { className: "text-4xl font-semibold leading-tight text-white sm:text-5xl", children: "Expert guidance that elevates your IT practice" }, void 0, !1, {
              fileName: "app/routes/Consult/index.jsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "max-w-xl text-lg text-white/70", children: "Pair your in-house talent with seasoned advisors who can plan, execute, and support mission-critical initiatives. We provide clarity, structure, and measurable outcomes." }, void 0, !1, {
              fileName: "app/routes/Consult/index.jsx",
              lineNumber: 74,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Consult/index.jsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("ul", { className: "grid gap-3 text-sm text-white/70 sm:text-base", children: consultHighlights.map((item) => /* @__PURE__ */ jsxDEV8(
            "li",
            {
              className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-colors duration-200 hover:border-orange-300/30 hover:bg-white/10",
              children: [
                /* @__PURE__ */ jsxDEV8("span", { className: "mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" }, void 0, !1, {
                  fileName: "app/routes/Consult/index.jsx",
                  lineNumber: 87,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV8("span", { children: item }, void 0, !1, {
                  fileName: "app/routes/Consult/index.jsx",
                  lineNumber: 88,
                  columnNumber: 21
                }, this)
              ]
            },
            item,
            !0,
            {
              fileName: "app/routes/Consult/index.jsx",
              lineNumber: 83,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/Consult/index.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-slate-900 shadow-lg shadow-orange-500/40 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300",
                children: "Request a consultation"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Consult/index.jsx",
                lineNumber: 94,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8(
              "a",
              {
                href: "tel:+12533002105",
                className: "inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200",
                children: "Call 253-300-2105"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Consult/index.jsx",
                lineNumber: 100,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/Consult/index.jsx",
            lineNumber: 93,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV8(HeroImageParallax, { children: /* @__PURE__ */ jsxDEV8("div", { className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-indigo-900/40 backdrop-blur", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/30 to-orange-400/10 blur-2xl" }, void 0, !1, {
            fileName: "app/routes/Consult/index.jsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV8(
            "img",
            {
              src: consulting_default,
              alt: "Taco-IT consulting session",
              className: "h-full w-full rounded-2xl object-cover"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/Consult/index.jsx",
              lineNumber: 113,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 111,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 110,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("section", { className: "bg-slate-900 py-20", children: /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV8("header", { className: "space-y-4 text-center", children: [
        /* @__PURE__ */ jsxDEV8("p", { className: "text-sm font-semibold uppercase tracking-[0.4em] text-orange-300", children: "Where we help" }, void 0, !1, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("h2", { className: "text-3xl font-semibold text-white sm:text-4xl", children: "Consulting designed for real-world teams" }, void 0, !1, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "mx-auto max-w-3xl text-base text-white/70 sm:text-lg", children: "Every engagement aims to deliver clarity, unlock efficiency, and leave your staff more confident than when we started." }, void 0, !1, {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: consultPillars.map(({ title, copy }) => /* @__PURE__ */ jsxDEV8(
        "article",
        {
          className: "rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-indigo-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsxDEV8("h3", { className: "text-xl font-semibold text-white", children: title }, void 0, !1, {
              fileName: "app/routes/Consult/index.jsx",
              lineNumber: 146,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8("p", { className: "mt-3 text-sm text-white/70 sm:text-base", children: copy }, void 0, !1, {
              fileName: "app/routes/Consult/index.jsx",
              lineNumber: 147,
              columnNumber: 17
            }, this)
          ]
        },
        title,
        !0,
        {
          fileName: "app/routes/Consult/index.jsx",
          lineNumber: 142,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 140,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("section", { className: "bg-slate-950 py-20", children: /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full max-w-4xl space-y-6 px-6 text-base text-white/70 lg:px-8 lg:text-lg", children: consultNarrative.map((paragraph) => /* @__PURE__ */ jsxDEV8("p", { children: paragraph }, paragraph, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 159,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("section", { id: "contact", className: "bg-slate-950 pb-24", children: /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV8(Contact_default, {}, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 166,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 165,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("footer", { className: "border-t border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsxDEV8("div", { className: "mx-auto w-full max-w-6xl px-6 py-12 lg:px-8", children: /* @__PURE__ */ jsxDEV8(Footer, {}, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 172,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 171,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 170,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Consult/index.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/Develop/index.jsx
var Develop_exports = {};
__export(Develop_exports, {
  default: () => Develop,
  meta: () => meta3
});

// app/Components/DevelopComponents/DevelopmentOfferings.jsx
import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";
import WebhookIcon from "@mui/icons-material/Webhook";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { useEffect as useEffect2, useRef as useRef2, useState } from "react";

// app/Components/Offerings.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Offerings({ title, info }) {
  return /* @__PURE__ */ jsxDEV9("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxDEV9("p", { className: "text-lg font-semibold text-white", children: title }, void 0, !1, {
      fileName: "app/Components/Offerings.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("p", { className: "text-sm leading-relaxed text-white/70", children: info }, void 0, !1, {
      fileName: "app/Components/Offerings.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Offerings.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Offerings_default = Offerings;

// app/Components/DevelopComponents/DevelopmentOfferings.jsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var offerings = [
  {
    icon: WebIcon,
    title: "Website Development",
    info: "Launch a fast, accessible site tailored to your brand. We design and build modern Remix and Next.js experiences that convert visitors into leads."
  },
  {
    icon: LanguageIcon,
    title: "Website Hosting Support",
    info: "We evaluate providers, right-size your infrastructure, and manage deployments so your site stays available and high-performing."
  },
  {
    icon: WebhookIcon,
    title: "Domain & DNS Management",
    info: "Let us take care of renewals, certificates, DNS records, and integrations with third-party platforms."
  },
  {
    icon: DashboardCustomizeIcon,
    title: "Custom Features & Integrations",
    info: "Need booking, automation, or CRM hand-offs? We scope, build, and ship enhancements without forcing a full rebuild."
  }
];
function DevelopmentOfferings() {
  let gridRef = useRef2(null), [visible, setVisible] = useState(!1);
  return useEffect2(() => {
    let grid = gridRef.current;
    if (!grid)
      return;
    if (typeof IntersectionObserver > "u") {
      setVisible(!0);
      return;
    }
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          entry2.isIntersecting && (setVisible(!0), observer.disconnect());
        });
      },
      { threshold: 0.35 }
    );
    return observer.observe(grid), () => observer.disconnect();
  }, []), /* @__PURE__ */ jsxDEV10(
    "div",
    {
      ref: gridRef,
      className: `grid gap-4 md:grid-cols-2 transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
      children: offerings.map(({ icon: Icon, title, info }) => /* @__PURE__ */ jsxDEV10(
        "div",
        {
          className: "flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsxDEV10("span", { className: "mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/20 text-orange-300", children: /* @__PURE__ */ jsxDEV10(Icon, { fontSize: "medium" }, void 0, !1, {
              fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
              lineNumber: 78,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV10(Offerings_default, { title, info }, void 0, !1, {
              fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          ]
        },
        title,
        !0,
        {
          fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
          lineNumber: 73,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
      lineNumber: 66,
      columnNumber: 5
    },
    this
  );
}
var DevelopmentOfferings_default = DevelopmentOfferings;

// app/Components/DevelopComponents/Skill.jsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Skill({ source, alt, title }) {
  return /* @__PURE__ */ jsxDEV11("img", { className: "w-20 h-20 xl:w-40 xl:h-40 mx-auto text-center", src: source, alt, title }, void 0, !1, {
    fileName: "app/Components/DevelopComponents/Skill.jsx",
    lineNumber: 3,
    columnNumber: 13
  }, this);
}
var Skill_default = Skill;

// app/Images/remix_glowing.svg
var remix_glowing_default = "/build/_assets/remix_glowing-UOLV5MBA.svg";

// app/Components/DevelopComponents/Skills.jsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Skills() {
  return /* @__PURE__ */ jsxDEV12("div", { className: "skills mt-6 w-full mx-auto justify-center text-center", children: /* @__PURE__ */ jsxDEV12("div", { className: "skillsGrid w-full grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-4 gap-6 mx-auto ", children: [
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "The logo icon for react", title: "React" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", alt: "The logo icon for HTML 5", title: "HTML 5" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "The logo icon for CSS3", title: "CSS 3" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: remix_glowing_default, alt: "The logo icon for Remix", title: "Remix" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", alt: "The logo icon for TailwindCSS", title: "Twilwind CSS" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", alt: "The logo icon for NextJS", title: "Next.JS" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 12,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "The logo icon for Bootstrap", title: "Bootstrap" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "The logo icon for Express", title: "Express" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", alt: "The logo icon for Firebase", title: "Firebase Auth and Data" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 15,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", alt: "The logo icon for GitHub", title: "GitHub" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg", alt: "The logo icon for Git", title: "Git" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg", alt: "The logo icon for Heroku", title: "Heroku" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "The logo icon for Javascript", title: "JavaScript" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg", alt: "The logo icon for jQuery", title: "jQuery" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg", alt: "The logo icon for Markdown", title: "Markdown" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", alt: "The logo icon for MongoDB", title: "Mongo DB" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "The logo icon for MySQL", title: "MySQL" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "The logo icon for NPM", title: "NPM" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", alt: "The logo icon for NodeJS", title: "Node JS" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", alt: "The logo icon for Python", title: "Python" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "The logo icon for Redux", title: "Redux" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", alt: "The logo icon for SocketIO", title: "Socket.IO" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV12(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg", alt: "The logo icon for Microsoft SQL Server", title: "Micrsooft SQL Server" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/DevelopComponents/Skills.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/Components/DevelopComponents/Skills.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var Skills_default = Skills;

// app/routes/Develop/index.jsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var developHighlights = [
  "Modern Remix, Next.js, and React builds tuned for performance and SEO.",
  "Tight integrations with CRMs, scheduling tools, and business-critical systems.",
  "Automations that connect marketing, sales, and operations in real time.",
  "Transparent roadmaps, sprint plans, and post-launch optimization support."
], developNarrative = [
  "Every project starts with your business goals. We collaborate on user journeys, messaging, and success metrics before writing a single line of code.",
  "From redesigns and replatforming to net-new products, we build resilient experiences that are easy for your team to manage and delightful for your customers to use.",
  "Need an iterative approach? We offer retainers and roadmaps that continuously improve your digital presence, optimize conversions, and unlock new revenue streams."
], meta3 = () => [
  { title: "Taco-IT Website Development" },
  { name: "description", content: "Taco-IT provides website design and hosting services. If your website needs a new look or custom development, let us help you provide an amazing experience for your customers." }
];
function Develop() {
  return /* @__PURE__ */ jsxDEV13("div", { className: "bg-slate-950 text-slate-100", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] lg:block" }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV13(Nav, {}, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24", children: /* @__PURE__ */ jsxDEV13("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV13("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 backdrop-blur", children: "Development" }, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV13("h1", { className: "text-4xl font-semibold leading-tight text-white sm:text-5xl", children: "Websites and digital products built to grow with you" }, void 0, !1, {
            fileName: "app/routes/Develop/index.jsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13("p", { className: "max-w-3xl text-lg text-white/70 lg:text-xl", children: "From brand new builds to redesigns and feature enhancements, we craft conversion-focused experiences backed by maintainable code, thoughtful UX, and measurable goals." }, void 0, !1, {
            fileName: "app/routes/Develop/index.jsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("ul", { className: "grid gap-3 text-sm text-white/70 sm:grid-cols-2 sm:text-base", children: developHighlights.map((item) => /* @__PURE__ */ jsxDEV13(
          "li",
          {
            className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-colors duration-200 hover:border-orange-300/30 hover:bg-white/10",
            children: [
              /* @__PURE__ */ jsxDEV13("span", { className: "mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" }, void 0, !1, {
                fileName: "app/routes/Develop/index.jsx",
                lineNumber: 64,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13("span", { children: item }, void 0, !1, {
                fileName: "app/routes/Develop/index.jsx",
                lineNumber: 65,
                columnNumber: 19
              }, this)
            ]
          },
          item,
          !0,
          {
            fileName: "app/routes/Develop/index.jsx",
            lineNumber: 60,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxDEV13(
            "a",
            {
              href: "#contact",
              className: "inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-slate-900 shadow-lg shadow-orange-500/40 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300",
              children: "Schedule a discovery call"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/Develop/index.jsx",
              lineNumber: 71,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            "a",
            {
              href: "/consult",
              className: "inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200",
              children: "Explore consulting services"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/Develop/index.jsx",
              lineNumber: 77,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("section", { className: "bg-slate-900 py-20", children: /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV13("header", { className: "space-y-4 text-center", children: [
        /* @__PURE__ */ jsxDEV13("p", { className: "text-sm font-semibold uppercase tracking-[0.4em] text-orange-300", children: "What we deliver" }, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("h2", { className: "text-3xl font-semibold text-white sm:text-4xl", children: "Design, development, and optimization under one roof" }, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("p", { className: "mx-auto max-w-3xl text-base text-white/70 sm:text-lg", children: "We design bespoke experiences, write production-ready code, and stay by your side after launch to ensure everything continues to perform." }, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mt-12", children: /* @__PURE__ */ jsxDEV13(DevelopmentOfferings_default, {}, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 105,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("section", { className: "bg-slate-950 py-20", children: /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-5xl space-y-6 px-6 text-base text-white/70 lg:px-8 lg:text-lg", children: developNarrative.map((paragraph) => /* @__PURE__ */ jsxDEV13("p", { children: paragraph }, paragraph, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 113,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("section", { className: "bg-slate-900 py-20", children: /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-6xl px-6 text-center lg:px-8", children: [
      /* @__PURE__ */ jsxDEV13("h2", { className: "text-3xl font-semibold text-white sm:text-4xl", children: "Technologies we work with" }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { className: "mt-4 text-base text-white/70 sm:text-lg", children: "A toolkit anchored in modern JavaScript, cloud, and automation platforms to keep your stack current and maintainable." }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV13(Skills_default, {}, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 128,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 119,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("section", { id: "contact", className: "bg-slate-950 pb-24", children: /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV13(Contact_default, {}, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 135,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 134,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("footer", { className: "border-t border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsxDEV13("div", { className: "mx-auto w-full max-w-6xl px-6 py-12 lg:px-8", children: /* @__PURE__ */ jsxDEV13(Footer, {}, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 141,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Develop/index.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/Manage/index.jsx
var Manage_exports = {};
__export(Manage_exports, {
  default: () => Manage,
  meta: () => meta4
});

// app/Components/ManageComponents/ManagedOfferings.jsx
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import StorageIcon from "@mui/icons-material/Storage";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { useEffect as useEffect3, useRef as useRef3, useState as useState2 } from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var managedServices = [
  {
    icon: MonitorHeartIcon,
    title: "Monitoring",
    info: "Proactive server and workstation monitoring with real-time alerting and remediation."
  },
  {
    icon: CoronavirusIcon,
    title: "Managed Anti-Virus",
    info: "Enterprise-grade threat protection deployed across every device and kept up to date."
  },
  {
    icon: StorageIcon,
    title: "Managed Backup",
    info: "Hybrid local and cloud backups with quarterly testing so your recovery plan actually works."
  },
  {
    icon: LocalPostOfficeIcon,
    title: "Managed Microsoft 365",
    info: "Administration for Exchange, SharePoint, Teams, OneDrive, licensing, and security policies."
  },
  {
    icon: KeyboardIcon,
    title: "Remote Support",
    info: "Fast, secure remote support to resolve most issues without disrupting your staff."
  },
  {
    icon: PersonPinIcon,
    title: "Onsite Support",
    info: "When hands-on assistance is required, we arrive prepared to get you back up quickly."
  },
  {
    icon: AlternateEmailIcon,
    title: "Managed Email & Spam",
    info: "Reduce phishing and spam while protecting inbox availability and archiving compliance."
  },
  {
    icon: EngineeringIcon,
    title: "Patching & Maintenance",
    info: "Weekly patching and health checks to keep systems secure, stable, and running at peak speed."
  }
];
function ManagedOfferings() {
  let gridRef = useRef3(null), [visible, setVisible] = useState2(!1);
  return useEffect3(() => {
    let grid = gridRef.current;
    if (!grid)
      return;
    if (typeof IntersectionObserver > "u") {
      setVisible(!0);
      return;
    }
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          entry2.isIntersecting && (setVisible(!0), observer.disconnect());
        });
      },
      { threshold: 0.3 }
    );
    return observer.observe(grid), () => observer.disconnect();
  }, []), /* @__PURE__ */ jsxDEV14(
    "div",
    {
      ref: gridRef,
      className: `grid gap-4 md:grid-cols-2 transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
      children: managedServices.map(({ icon: Icon, title, info }) => /* @__PURE__ */ jsxDEV14(
        "div",
        {
          className: "flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10",
          children: [
            /* @__PURE__ */ jsxDEV14("span", { className: "mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300", children: /* @__PURE__ */ jsxDEV14(Icon, { fontSize: "medium" }, void 0, !1, {
              fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
              lineNumber: 98,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
              lineNumber: 97,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV14(Offerings_default, { title, info }, void 0, !1, {
              fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
              lineNumber: 100,
              columnNumber: 11
            }, this)
          ]
        },
        title,
        !0,
        {
          fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 86,
      columnNumber: 5
    },
    this
  );
}
var ManagedOfferings_default = ManagedOfferings;

// app/Images/managing.png
var managing_default = "/build/_assets/managing-6EL4NYEB.png";

// app/routes/Manage/index.jsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var manageHighlights = [
  "Always-on monitoring, patching, and response to keep your environment healthy.",
  "Flat-rate pricing with clear SLAs, ticket workflows, and executive reporting.",
  "Security-first approach covering endpoints, email, identity, and backups.",
  "Friendly support engineers who know your business and your staff by name."
], managedNarrative = [
  "Managed IT services deliver the benefits of a fully functioning IT department at a fraction of the cost. We deploy agents across your systems to provide diagnostic monitoring, performance insights, and remote remediation capabilities.",
  "You choose the bundle that fits your organization - anti-virus, spam filtering, Microsoft 365, backups, and more. When remote resolution isn't enough, we show up onsite, prepared to get you back online quickly.",
  "Our team stays proactive, communicating recommendations before issues turn into outages and ensuring your technology evolves with your company."
], meta4 = () => [
  { title: "Taco-IT Managed IT Service Provider (MSP)" },
  { name: "description", content: "Taco-IT provides managed IT services to small and medium businesses throughout Tacoma and Pierce County. Managed backup, Microsoft 365, email security, anti-virus, onsite and remote support." }
];
function Manage() {
  return /* @__PURE__ */ jsxDEV15("div", { className: "bg-slate-950 text-slate-100", children: [
    /* @__PURE__ */ jsxDEV15("div", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV15("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] lg:block" }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV15(Nav, {}, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24", children: /* @__PURE__ */ jsxDEV15("div", { className: "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]", children: [
        /* @__PURE__ */ jsxDEV15("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV15("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-orange-200 backdrop-blur", children: "Managed Services" }, void 0, !1, {
            fileName: "app/routes/Manage/index.jsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV15("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV15("h1", { className: "text-4xl font-semibold leading-tight text-white sm:text-5xl", children: "Your complete IT department, on demand" }, void 0, !1, {
              fileName: "app/routes/Manage/index.jsx",
              lineNumber: 48,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV15("p", { className: "max-w-xl text-lg text-white/70 lg:text-xl", children: "We blend proactive maintenance with responsive support so your team can stay productive and secure without building an internal department." }, void 0, !1, {
              fileName: "app/routes/Manage/index.jsx",
              lineNumber: 51,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/Manage/index.jsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV15("ul", { className: "grid gap-3 text-sm text-white/70 sm:text-base", children: manageHighlights.map((item) => /* @__PURE__ */ jsxDEV15(
            "li",
            {
              className: "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-colors duration-200 hover:border-orange-300/30 hover:bg-white/10",
              children: [
                /* @__PURE__ */ jsxDEV15("span", { className: "mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" }, void 0, !1, {
                  fileName: "app/routes/Manage/index.jsx",
                  lineNumber: 64,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV15("span", { children: item }, void 0, !1, {
                  fileName: "app/routes/Manage/index.jsx",
                  lineNumber: 65,
                  columnNumber: 21
                }, this)
              ]
            },
            item,
            !0,
            {
              fileName: "app/routes/Manage/index.jsx",
              lineNumber: 60,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/routes/Manage/index.jsx",
            lineNumber: 58,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV15("div", { className: "flex flex-col gap-4 text-sm font-semibold sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxDEV15(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-slate-900 shadow-lg shadow-orange-500/40 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300",
                children: "Request a managed IT quote"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Manage/index.jsx",
                lineNumber: 71,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV15(
              "a",
              {
                href: "tel:+12533002105",
                className: "inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200",
                children: "Call 253-300-2105"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/Manage/index.jsx",
                lineNumber: 77,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/Manage/index.jsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/Manage/index.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV15("div", { className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-emerald-900/40 backdrop-blur", children: [
          /* @__PURE__ */ jsxDEV15("div", { className: "absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/20 to-orange-400/10 blur-2xl" }, void 0, !1, {
            fileName: "app/routes/Manage/index.jsx",
            lineNumber: 88,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV15(
            "img",
            {
              src: managing_default,
              alt: "Managed IT services dashboard",
              className: "h-full w-full rounded-2xl object-cover"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/Manage/index.jsx",
              lineNumber: 89,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/Manage/index.jsx",
          lineNumber: 87,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/Manage/index.jsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { className: "bg-slate-900 py-20", children: /* @__PURE__ */ jsxDEV15("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV15("header", { className: "space-y-4 text-center", children: [
        /* @__PURE__ */ jsxDEV15("p", { className: "text-sm font-semibold uppercase tracking-[0.4em] text-orange-300", children: "What's included" }, void 0, !1, {
          fileName: "app/routes/Manage/index.jsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV15("h2", { className: "text-3xl font-semibold text-white sm:text-4xl", children: "Comprehensive support with enterprise-grade tooling" }, void 0, !1, {
          fileName: "app/routes/Manage/index.jsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV15("p", { className: "mx-auto max-w-3xl text-base text-white/70 sm:text-lg", children: "Choose the services you need and we'll craft a tailored package. Every plan includes proactive monitoring, regular reviews, and a dedicated partner who understands your business." }, void 0, !1, {
          fileName: "app/routes/Manage/index.jsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV15("div", { className: "mt-12", children: /* @__PURE__ */ jsxDEV15(ManagedOfferings_default, {}, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { className: "bg-slate-950 py-20", children: /* @__PURE__ */ jsxDEV15("div", { className: "mx-auto w-full max-w-5xl space-y-6 px-6 text-base text-white/70 lg:px-8 lg:text-lg", children: managedNarrative.map((paragraph) => /* @__PURE__ */ jsxDEV15("p", { children: paragraph }, paragraph, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 125,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 123,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("section", { id: "contact", className: "bg-slate-950 pb-24", children: /* @__PURE__ */ jsxDEV15("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV15(Contact_default, {}, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 131,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("footer", { className: "border-t border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsxDEV15("div", { className: "mx-auto w-full max-w-6xl px-6 py-12 lg:px-8", children: /* @__PURE__ */ jsxDEV15(Footer, {}, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Manage/index.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta5
});

// app/Components/About.jsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var story = [
  {
    title: "Founding",
    body: "Taco-IT was founded by Chris Benjamin to give Pacific Northwest businesses a true technology partner: someone who understands both web development and the operational realities of growing companies."
  },
  {
    title: "Our Why",
    body: "We believe technology should be an asset, not another headache. When your tools are aligned with your goals, you earn back time to focus on your customers and your craft."
  },
  {
    title: "Our Mission",
    body: "Build remarkable digital experiences and dependable infrastructure so local organizations can stand out online, stay secure, and scale with confidence."
  },
  {
    title: "Our What",
    body: "From strategic consulting to managed IT, websites, and automation projects, we mix engineering expertise with practical business insight to implement solutions that grow with you."
  },
  {
    title: "Our How",
    body: "With more than 15 years supporting education, healthcare, and service industries, we stay hands-on with emerging tech and tailor every engagement around measurable outcomes."
  }
];
function About() {
  return /* @__PURE__ */ jsxDEV16("section", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxDEV16("header", { className: "space-y-4 text-center", children: [
      /* @__PURE__ */ jsxDEV16("p", { className: "text-sm font-semibold uppercase tracking-[0.4em] text-orange-300", children: "About Taco-IT" }, void 0, !1, {
        fileName: "app/Components/About.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("h2", { className: "text-3xl font-semibold text-white sm:text-4xl", children: "Tacoma roots, enterprise expertise" }, void 0, !1, {
        fileName: "app/Components/About.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "mx-auto max-w-3xl text-base text-white/70 sm:text-lg", children: "We partner with small and mid-sized teams to translate business goals into resilient, secure, and scalable technology. Consider us an extension of your in-house team, ready to strategize, build, and maintain." }, void 0, !1, {
        fileName: "app/Components/About.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/About.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "grid gap-6 md:grid-cols-2", children: story.map((item) => /* @__PURE__ */ jsxDEV16(
      "article",
      {
        className: "rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-indigo-900/10 transition duration-200 hover:border-orange-300/40 hover:bg-white/10",
        children: [
          /* @__PURE__ */ jsxDEV16("h3", { className: "text-xl font-semibold text-white", children: item.title }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV16("p", { className: "mt-3 text-base text-white/70", children: item.body }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ]
      },
      item.title,
      !0,
      {
        fileName: "app/Components/About.jsx",
        lineNumber: 50,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/Components/About.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/About.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var About_default = About;

// app/Components/Home.jsx
import { useEffect as useEffect5, useRef as useRef5, useState as useState3 } from "react";
import TypeWriter from "react-typewriter";

// app/Components/HeroCanvas.jsx
import { useEffect as useEffect4, useRef as useRef4 } from "react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var SPACING = 40, INFLUENCE_RADIUS = 160;
function HeroCanvas() {
  let canvasRef = useRef4(null), animationRef = useRef4(null), particlesRef = useRef4([]), pointerRef = useRef4({
    x: 0,
    y: 0,
    active: !1
  });
  return useEffect4(() => {
    let canvas = canvasRef.current;
    if (!canvas)
      return;
    let context = canvas.getContext("2d");
    if (!context)
      return;
    let particles = particlesRef.current, pointer = pointerRef.current, createParticles = () => {
      particles.length = 0;
      let { width, height } = canvas.getBoundingClientRect(), cols = Math.ceil(width / SPACING) + 2, rows = Math.ceil(height / SPACING) + 2;
      for (let y = 0; y <= rows; y++)
        for (let x = 0; x <= cols; x++) {
          let px = x * SPACING + (Math.random() * 12 - 6), py = y * SPACING + (Math.random() * 12 - 6);
          particles.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            vx: 0,
            vy: 0,
            size: Math.random() * 1.8 + 0.8,
            hue: 225 + Math.random() * 40
          });
        }
    }, resize = () => {
      let rect = canvas.getBoundingClientRect(), deviceRatio = window.devicePixelRatio || 1;
      canvas.width = rect.width * deviceRatio, canvas.height = rect.height * deviceRatio, context.setTransform(1, 0, 0, 1, 0, 0), context.scale(deviceRatio, deviceRatio), canvas.style.width = `${rect.width}px`, canvas.style.height = `${rect.height}px`, createParticles();
    }, render = () => {
      let rect = canvas.getBoundingClientRect();
      context.clearRect(0, 0, rect.width, rect.height), particles.forEach((particle) => {
        let dx = particle.originX - particle.x, dy = particle.originY - particle.y;
        if (particle.vx += dx * 0.015, particle.vy += dy * 0.015, pointer.active) {
          let diffX = particle.x - pointer.x, diffY = particle.y - pointer.y, dist = Math.hypot(diffX, diffY) || 1;
          if (dist < INFLUENCE_RADIUS) {
            let force = (1 - dist / INFLUENCE_RADIUS) * 8;
            particle.vx += diffX / dist * force, particle.vy += diffY / dist * force;
          }
        }
        particle.vx *= 0.9, particle.vy *= 0.9, particle.x += particle.vx, particle.y += particle.vy, context.beginPath(), context.fillStyle = `hsla(${particle.hue}, 80%, 75%, 0.55)`, context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2), context.fill();
      }), animationRef.current = requestAnimationFrame(render);
    }, updatePointer = (clientX, clientY) => {
      let rect = canvas.getBoundingClientRect(), x = clientX - rect.left, y = clientY - rect.top;
      x >= 0 && y >= 0 && x <= rect.width && y <= rect.height ? (pointer.x = x, pointer.y = y, pointer.active = !0) : pointer.active = !1;
    }, handlePointerMove = (event) => {
      updatePointer(event.clientX, event.clientY);
    }, handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        let touch = event.touches[0];
        updatePointer(touch.clientX, touch.clientY);
      }
    }, deactivatePointer = () => {
      pointer.active = !1;
    };
    return resize(), render(), window.addEventListener("resize", resize), window.addEventListener("pointermove", handlePointerMove, { passive: !0 }), window.addEventListener("touchmove", handleTouchMove, { passive: !0 }), window.addEventListener("pointerleave", deactivatePointer), window.addEventListener("touchend", deactivatePointer), () => {
      cancelAnimationFrame(animationRef.current ?? 0), window.removeEventListener("resize", resize), window.removeEventListener("pointermove", handlePointerMove), window.removeEventListener("touchmove", handleTouchMove), window.removeEventListener("pointerleave", deactivatePointer), window.removeEventListener("touchend", deactivatePointer);
    };
  }, []), /* @__PURE__ */ jsxDEV17(
    "canvas",
    {
      ref: canvasRef,
      className: "pointer-events-none absolute inset-0 h-full w-full",
      "aria-hidden": "true"
    },
    void 0,
    !1,
    {
      fileName: "app/Components/HeroCanvas.jsx",
      lineNumber: 154,
      columnNumber: 5
    },
    this
  );
}

// app/Components/Home.jsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var highlights = [
  "Responsive websites designed for conversions",
  "Managed IT services tailored for SMB budgets",
  "Tacoma-based team with enterprise experience",
  "Flat-fee consulting when you need extra hands"
];
function Home() {
  let highlightRefs = useRef5([]), [visibleHighlights, setVisibleHighlights] = useState3(
    highlights.map(() => !1)
  );
  return useEffect5(() => {
    if (typeof IntersectionObserver > "u") {
      setVisibleHighlights(highlights.map(() => !0));
      return;
    }
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            let index = Number(entry2.target.dataset.index);
            setVisibleHighlights((prev) => {
              if (prev[index])
                return prev;
              let next = [...prev];
              return next[index] = !0, next;
            }), observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    return highlightRefs.current.forEach((node) => {
      node && observer.observe(node);
    }), () => observer.disconnect();
  }, []), /* @__PURE__ */ jsxDEV18("section", { className: "relative mx-auto w-full max-w-6xl px-6 pb-16 pt-12 text-slate-100 sm:px-8 lg:pb-24 lg:pt-16 xl:px-0", children: /* @__PURE__ */ jsxDEV18("div", { className: "relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.04] px-8 py-12 shadow-[0_45px_120px_-40px_rgba(15,23,42,0.65)] backdrop-blur-md sm:px-12 sm:py-16 lg:px-16 lg:py-20", children: [
    /* @__PURE__ */ jsxDEV18("div", { className: "pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),transparent_60%)] blur-3xl" }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxDEV18(HeroCanvas, {}, void 0, !1, {
        fileName: "app/Components/Home.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-slate-900/30 to-slate-950/80" }, void 0, !1, {
        fileName: "app/Components/Home.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "relative z-10 space-y-8", children: [
      /* @__PURE__ */ jsxDEV18("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-semibold tracking-wide text-orange-200 backdrop-blur", children: [
        /* @__PURE__ */ jsxDEV18("span", { className: "text-white/70", children: "Taco-IT" }, void 0, !1, {
          fileName: "app/Components/Home.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("span", { className: "hidden text-white/50 sm:block", children: "\u2022" }, void 0, !1, {
          fileName: "app/Components/Home.jsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18(TypeWriter, { typing: 0.8, children: "Your local IT & digital partner" }, void 0, !1, {
          fileName: "app/Components/Home.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Home.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxDEV18("h1", { className: "text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl", children: "Develop. Consult. Manage." }, void 0, !1, {
          fileName: "app/Components/Home.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV18("p", { className: "max-w-xl text-lg text-white/70 lg:text-xl", children: "We plan, build, and support the technology that keeps Tacoma-area businesses moving. From high-converting websites to dependable managed IT, our team makes modern infrastructure feel effortless." }, void 0, !1, {
          fileName: "app/Components/Home.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Home.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col gap-4 text-base font-semibold sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxDEV18(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center justify-center rounded-full bg-orange-400 px-6 py-3 text-slate-900 shadow-lg shadow-orange-500/40 transition-transform duration-150 hover:scale-[1.02] hover:bg-orange-300",
            children: "Start a Project"
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Home.jsx",
            lineNumber: 77,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18(
          "a",
          {
            href: "tel:+12533002105",
            className: "inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white transition-colors duration-150 hover:border-orange-300 hover:text-orange-200",
            children: "Call 253-300-2105"
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Home.jsx",
            lineNumber: 83,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/Components/Home.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("ul", { className: "relative z-10 mt-10 grid gap-4 sm:grid-cols-2", children: highlights.map((item, index) => /* @__PURE__ */ jsxDEV18(
      "li",
      {
        "data-index": index,
        ref: (node) => {
          highlightRefs.current[index] = node;
        },
        className: `flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 backdrop-blur transition-all duration-500 ease-out sm:text-base ${visibleHighlights[index] ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"}`,
        style: { transitionDelay: `${index * 80}ms` },
        children: [
          /* @__PURE__ */ jsxDEV18("span", { className: "mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-300" }, void 0, !1, {
            fileName: "app/Components/Home.jsx",
            lineNumber: 107,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV18("span", { children: item }, void 0, !1, {
            fileName: "app/Components/Home.jsx",
            lineNumber: 108,
            columnNumber: 15
          }, this)
        ]
      },
      item,
      !0,
      {
        fileName: "app/Components/Home.jsx",
        lineNumber: 94,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "pointer-events-none absolute inset-0 rounded-[42px] shadow-[inset_0_0_45px_rgba(15,23,42,0.55)]" }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 113,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Home.jsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/Components/Home.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
var Home_default = Home;

// app/Images/consult.svg
var consult_default = "/build/_assets/consult-Y2IIUPFO.svg";

// app/Images/develop.svg
var develop_default = "/build/_assets/develop-7JJVAHBF.svg";

// app/Images/manage.svg
var manage_default = "/build/_assets/manage-N32UHFF3.svg";

// app/Components/Services.jsx
import { useEffect as useEffect6, useRef as useRef6, useState as useState4 } from "react";

// app/Components/Service.jsx
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function Service({
  ServiceTitle,
  ServiceDescription,
  ServiceImage,
  LinkTo = "/"
}) {
  return /* @__PURE__ */ jsxDEV19(
    Link4,
    {
      to: LinkTo,
      className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20",
      children: [
        /* @__PURE__ */ jsxDEV19("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxDEV19(
          "img",
          {
            className: "h-48 w-full object-cover transition duration-200 group-hover:scale-105",
            src: ServiceImage,
            alt: ""
          },
          void 0,
          !1,
          {
            fileName: "app/Components/Service.jsx",
            lineNumber: 15,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/Components/Service.jsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-1 flex-col gap-3 px-6 py-6 text-center", children: [
          /* @__PURE__ */ jsxDEV19("h3", { className: "text-2xl font-semibold text-slate-900", children: ServiceTitle }, void 0, !1, {
            fileName: "app/Components/Service.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19("p", { className: "text-base text-slate-600", children: ServiceDescription }, void 0, !1, {
            fileName: "app/Components/Service.jsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19("span", { className: "mt-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-orange-500 transition duration-150 group-hover:translate-x-1", children: [
            "Learn more",
            /* @__PURE__ */ jsxDEV19(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "h-4 w-4",
                children: /* @__PURE__ */ jsxDEV19(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Components/Service.jsx",
                    lineNumber: 34,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/Components/Service.jsx",
                lineNumber: 26,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/Components/Service.jsx",
            lineNumber: 24,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Components/Service.jsx",
          lineNumber: 21,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/Components/Service.jsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
var Service_default = Service;

// app/Components/Services.jsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var servicesCopy = [
  {
    title: "Develop",
    description: "Custom websites, applications, and automations built to drive revenue and simplify operations.",
    image: develop_default,
    href: "/develop"
  },
  {
    title: "Consult",
    description: "Strategic IT consulting to plan roadmaps, modernize infrastructure, and mentor in-house teams.",
    image: consult_default,
    href: "/consult"
  },
  {
    title: "Manage",
    description: "Proactive managed services, security, and help desk support for stress-free day-to-day operations.",
    image: manage_default,
    href: "/manage"
  }
];
function Services() {
  let gridRef = useRef6(null), [visible, setVisible] = useState4(!1);
  return useEffect6(() => {
    let grid = gridRef.current;
    if (!grid)
      return;
    if (typeof IntersectionObserver > "u") {
      setVisible(!0);
      return;
    }
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          entry2.isIntersecting && (setVisible(!0), observer.disconnect());
        });
      },
      { threshold: 0.3 }
    );
    return observer.observe(grid), () => observer.disconnect();
  }, []), /* @__PURE__ */ jsxDEV20("div", { className: "space-y-12", children: [
    /* @__PURE__ */ jsxDEV20("header", { className: "space-y-4 text-center", children: [
      /* @__PURE__ */ jsxDEV20("p", { className: "text-sm font-semibold uppercase tracking-[0.4em] text-indigo-500", children: "Solutions" }, void 0, !1, {
        fileName: "app/Components/Services.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("h2", { className: "text-3xl font-semibold text-slate-900 sm:text-4xl", children: "Full-service support for growing teams" }, void 0, !1, {
        fileName: "app/Components/Services.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV20("p", { className: "mx-auto max-w-3xl text-base text-slate-600 sm:text-lg", children: "You bring the business goals, we craft the technology plan. Explore our core service lines or reach out to mix and match a package that fits your organization." }, void 0, !1, {
        fileName: "app/Components/Services.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Services.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(
      "div",
      {
        ref: gridRef,
        className: `grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`,
        children: servicesCopy.map((service) => /* @__PURE__ */ jsxDEV20(
          Service_default,
          {
            ServiceTitle: service.title,
            ServiceDescription: service.description,
            ServiceImage: service.image,
            LinkTo: service.href
          },
          service.title,
          !1,
          {
            fileName: "app/Components/Services.jsx",
            lineNumber: 84,
            columnNumber: 11
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/Components/Services.jsx",
        lineNumber: 77,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/Components/Services.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
var Services_default = Services;

// app/Components/HomePage.jsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function HomePage() {
  return /* @__PURE__ */ jsxDEV21("div", { className: "bg-slate-950 text-slate-100", children: [
    /* @__PURE__ */ jsxDEV21("div", { className: "relative isolate overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV21("div", { className: "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-600/80 to-slate-900 blur-2xl lg:blur-3xl" }, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_55%)] lg:block" }, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto w-full max-w-6xl px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV21(Nav, {}, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24", children: /* @__PURE__ */ jsxDEV21(Home_default, {}, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { id: "services", className: "bg-white text-slate-900", children: /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxDEV21(Services_default, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { id: "contact", className: "bg-slate-950", children: /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxDEV21(Contact_default, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("section", { id: "about", className: "bg-slate-900 text-slate-100", children: /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto w-full max-w-6xl px-6 py-24 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxDEV21(About_default, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21("footer", { className: "border-t border-slate-800 bg-slate-950", children: /* @__PURE__ */ jsxDEV21("div", { className: "mx-auto w-full max-w-6xl px-6 py-12 lg:px-8", children: /* @__PURE__ */ jsxDEV21(Footer, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/HomePage.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var HomePage_default = HomePage;

// app/routes/_index.jsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Taco-IT Develop. Consult. Manage" },
  { name: "description", content: "Taco-IT is your one-stop shop for buisness IT. We offer consulting services, website design and maintenance, and managed IT services. Let's taco bout your IT needs today!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV22(HomePage_default, {}, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VDCPXNGX.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-TAQZM6BI.js", "/build/_shared/chunk-GNCLJJF5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AQQIDKOA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Consult": { id: "routes/Consult", parentId: "root", path: "Consult", index: void 0, caseSensitive: void 0, module: "/build/routes/Consult-43DAHA23.js", imports: ["/build/_shared/chunk-XPNNTZRG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Develop": { id: "routes/Develop", parentId: "root", path: "Develop", index: void 0, caseSensitive: void 0, module: "/build/routes/Develop-KQ7BBAFR.js", imports: ["/build/_shared/chunk-QJXBFIM2.js", "/build/_shared/chunk-XPNNTZRG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Manage": { id: "routes/Manage", parentId: "root", path: "Manage", index: void 0, caseSensitive: void 0, module: "/build/routes/Manage-LXCQNW6E.js", imports: ["/build/_shared/chunk-QJXBFIM2.js", "/build/_shared/chunk-XPNNTZRG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-X2XRZDUY.js", imports: ["/build/_shared/chunk-XPNNTZRG.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/robots[.]txt": { id: "routes/robots[.]txt", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/robots[.]txt-BTPJRET3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sitemap[.]xml": { id: "routes/sitemap[.]xml", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/sitemap[.]xml-XB75Y2NN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d8d39aa6", hmr: { runtime: "/build/_shared\\chunk-GNCLJJF5.js", timestamp: 1761801711808 }, url: "/build/manifest-D8D39AA6.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sitemap[.]xml": {
    id: "routes/sitemap[.]xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/robots[.]txt": {
    id: "routes/robots[.]txt",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/Consult": {
    id: "routes/Consult",
    parentId: "root",
    path: "Consult",
    index: void 0,
    caseSensitive: void 0,
    module: Consult_exports
  },
  "routes/Develop": {
    id: "routes/Develop",
    parentId: "root",
    path: "Develop",
    index: void 0,
    caseSensitive: void 0,
    module: Develop_exports
  },
  "routes/Manage": {
    id: "routes/Manage",
    parentId: "root",
    path: "Manage",
    index: void 0,
    caseSensitive: void 0,
    module: Manage_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
