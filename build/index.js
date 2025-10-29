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
import { PassThrough } from "stream";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let userAgent = request.headers.get("user-agent");
  return userAgent && isbot(userAgent) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-G7NZARIN.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
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
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/sitemap[.]xml.jsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader
});
var loader = () => {
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
  loader: () => loader2
});
var loader2 = () => {
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
  default: () => Manage,
  meta: () => meta2
});

// app/Components/Nav.jsx
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GroupsIcon from "@mui/icons-material/Groups";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Nav() {
  return /* @__PURE__ */ jsxDEV3("nav", { className: "", children: /* @__PURE__ */ jsxDEV3("ul", { className: "w-full flex lg:flex items-center lg:w-auto space-x-2 md:space-x-10 text-md md:text-2xl text-white mr-10 sm:mt-10", children: [
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(HomeIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "/", id: "nav-link-home", className: "hover:bg-slate-500", children: "Home" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(ContactMailIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 19,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "/#contact", id: "nav-link-contact", className: "hover:bg-slate-500", children: "Contact" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 20,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(InfoIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "/#about", id: "nav-link-about", className: "hover:bg-slate-500", children: "About" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 24,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(DesignServicesIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 27,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "/develop", id: "nav-link-services", className: "hover:bg-slate-500", children: "Develop" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 28,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(GroupsIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "/consult", id: "nav-link-services", className: "hover:bg-slate-500", children: "Consult" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 32,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(ManageAccountsIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "/manage", id: "nav-link-services", className: "hover:bg-slate-500", children: "Manage" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("li", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxDEV3(SupportAgentIcon, {}, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV3("a", { href: "http://portal.taco-it.com", id: "nav-link-services", className: "hover:bg-slate-500", children: "Portal" }, void 0, !1, {
        fileName: "app/Components/Nav.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Nav.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Nav.jsx",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/Components/Nav.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
var Nav_default = Nav;

// app/Images/Website_Logo.png
var Website_Logo_default = "/build/_assets/Website_Logo-NUJUZPJQ.png";

// app/Components/Logo.jsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Logo() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "mx-2 px-4", children: /* @__PURE__ */ jsxDEV4(Link, { to: "/", children: /* @__PURE__ */ jsxDEV4("img", { className: "mr-2 w-42 h-24 xl:w-50 xl:h-32", src: Website_Logo_default, alt: "Website Logo" }, void 0, !1, {
    fileName: "app/Components/Logo.jsx",
    lineNumber: 7,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/Components/Logo.jsx",
    lineNumber: 7,
    columnNumber: 8
  }, this) }, void 0, !1, {
    fileName: "app/Components/Logo.jsx",
    lineNumber: 6,
    columnNumber: 8
  }, this);
}

// app/Images/consulting.jpg
var consulting_default = "/build/_assets/consulting-FQC2WXJF.jpg";

// app/Components/Footer.jsx
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex lg:flex-row mx-20 lg:mx-10 justify-between h-20 items-center", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "created-by", children: /* @__PURE__ */ jsxDEV5("h1", { className: "text-white items-center", children: [
      /* @__PURE__ */ jsxDEV5("span", { className: "text-indigo-600", children: "Created by " }, void 0, !1, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 7,
        columnNumber: 57
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV5("span", { className: "text-black", children: "|" }, void 0, !1, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 7,
        columnNumber: 110
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV5("a", { href: "https://chrisbenjamin.dev", children: "Chris Benjamin" }, void 0, !1, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 7,
        columnNumber: 148
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "phone", children: /* @__PURE__ */ jsxDEV5("a", { className: "text-blue-400 items-center text-xl", href: "tel:+13603625004", children: [
      /* @__PURE__ */ jsxDEV5(PhoneInTalkIcon, {}, void 0, !1, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 11,
        columnNumber: 91
      }, this),
      " Click to Call!"
    ] }, void 0, !0, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "social-icons space-x-10 sm:space-x-2 flex", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "github flex flex-col text-center items-center cursor-pointer", children: /* @__PURE__ */ jsxDEV5("a", { href: "https://github.com/cbenjamin2009", children: [
        "  ",
        /* @__PURE__ */ jsxDEV5(GitHubIcon, {}, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 15,
          columnNumber: 67
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "codepen flex flex-col text-center items-center cursor-pointer", children: [
        /* @__PURE__ */ jsxDEV5("a", { href: "https://codepen.io/WillCodeForTacos", children: " " }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 19,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV5("span", { children: "CodePen" }, void 0, !1, {
          fileName: "app/Components/Footer.jsx",
          lineNumber: 20,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/Footer.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Footer.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Footer.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/Consult/index.jsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Taco-IT - IT Consulting Services" },
  { name: "description", content: "Taco-IT Provides Professional IT Consulting Services, we are your technology partner and are here to help. We can help your existing IT department with software and hardware projects, we can answer technical questions, and we can provide project based consulting services to your business. " }
];
function Manage() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "App w-screen overflow-hidden h-auto min-h-screen bg-indigo-500", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV6(Logo, {}, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6(Nav_default, {}, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 24,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("section", { className: "w-full mx-auto bg-indigo-400 mt-10 p-10", children: [
      /* @__PURE__ */ jsxDEV6("h3", { className: "text-3xl text-black text-center pb-10", children: "Consulting Services" }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "", children: /* @__PURE__ */ jsxDEV6("img", { className: "w-60 h-60 mx-auto my-8 rounded-lg", src: consulting_default, alt: "" }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { className: "mx-10 py-6", children: "As the Tacoma-Area Consulting Organization for Information Technology (TACO-IT), we provide a wide variety of consulting services for your business. Let us be your technology experts so you can focus on what you do best, your business. We provide hardware and software consulting to find the right technology for you and your budget. We can assist existing IT staff realize potentials in new areas for improvement. We specialize in process improvement utilizing information technology to help your business reach it's objectives efficiently, accurately and securly. We have a certified Disaster Recovery engineer specializing in backup and restoration helping your company reach your recovery time objective and securing your company data! No matter the project, we can help your business!" }, void 0, !1, {
        fileName: "app/routes/Consult/index.jsx",
        lineNumber: 32,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Footer, {}, void 0, !1, {
      fileName: "app/routes/Consult/index.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Consult/index.jsx",
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

// app/routes/Develop/index.jsx
var Develop_exports = {};
__export(Develop_exports, {
  default: () => Manage2,
  links: () => links2,
  meta: () => meta3
});

// app/Components/Offerings.jsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Offerings({ title, info }) {
  return /* @__PURE__ */ jsxDEV7("div", { className: "", children: [
    /* @__PURE__ */ jsxDEV7("p", { className: "text-xl", children: title }, void 0, !1, {
      fileName: "app/Components/Offerings.jsx",
      lineNumber: 6,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { children: info }, void 0, !1, {
      fileName: "app/Components/Offerings.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Offerings.jsx",
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
var Offerings_default = Offerings;

// app/Components/DevelopComponents/DevelopmentOfferings.jsx
import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";
import WebhookIcon from "@mui/icons-material/Webhook";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ManagedOfferings() {
  return /* @__PURE__ */ jsxDEV8("section", { className: "manageSection", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-row p-4 space-x-4 ", children: [
      /* @__PURE__ */ jsxDEV8(WebIcon, { fontSize: "large", color: "info" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8(Offerings_default, { title: "Website Development", info: "Want a fresh new website that is blazing fast, latest technology, and an asset to your customers? Let us work with you to create an entirely new website whether you have your own designer or want to start from scratch" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: " flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV8(LanguageIcon, { fontSize: "large", color: "info" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8(Offerings_default, { title: "Website Hosting Support", info: "We can help you find the best website host for your business website, we work with a variety of vendors and will recommend the one best suited for your needs" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: " flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV8(WebhookIcon, { fontSize: "large", color: "info" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8(Offerings_default, { title: "Domain Management", info: "We can help manage your domain including registration, certificates, and DNS records." }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: " flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV8(DashboardCustomizeIcon, { fontSize: "large", color: "info" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8(Offerings_default, { title: "Custom Web Feature", info: "Want a custom feature on your website without having to build a new site? We can schedule a meeting to talk about your project and taco bout it!" }, void 0, !1, {
        fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/DevelopComponents/DevelopmentOfferings.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
var DevelopmentOfferings_default = ManagedOfferings;

// app/Components/DevelopComponents/Skill.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Skill({ source, alt, title }) {
  return /* @__PURE__ */ jsxDEV9("img", { className: "w-20 h-20 xl:w-40 xl:h-40 mx-auto text-center", src: source, alt, title }, void 0, !1, {
    fileName: "app/Components/DevelopComponents/Skill.jsx",
    lineNumber: 3,
    columnNumber: 13
  }, this);
}
var Skill_default = Skill;

// app/Images/remix_glowing.svg
var remix_glowing_default = "/build/_assets/remix_glowing-UOLV5MBA.svg";

// app/Components/DevelopComponents/Skills.jsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Skills() {
  return /* @__PURE__ */ jsxDEV10("div", { className: "skills mt-6 w-full mx-auto justify-center text-center", children: /* @__PURE__ */ jsxDEV10("div", { className: "skillsGrid w-full grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-4 gap-6 mx-auto ", children: [
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "The logo icon for react", title: "React" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", alt: "The logo icon for HTML 5", title: "HTML 5" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "The logo icon for CSS3", title: "CSS 3" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: remix_glowing_default, alt: "The logo icon for Remix", title: "Remix" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", alt: "The logo icon for TailwindCSS", title: "Twilwind CSS" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", alt: "The logo icon for NextJS", title: "Next.JS" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 12,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "The logo icon for Bootstrap", title: "Bootstrap" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "The logo icon for Express", title: "Express" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", alt: "The logo icon for Firebase", title: "Firebase Auth and Data" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 15,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", alt: "The logo icon for GitHub", title: "GitHub" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg", alt: "The logo icon for Git", title: "Git" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 17,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg", alt: "The logo icon for Heroku", title: "Heroku" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 18,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "The logo icon for Javascript", title: "JavaScript" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg", alt: "The logo icon for jQuery", title: "jQuery" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg", alt: "The logo icon for Markdown", title: "Markdown" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 21,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg", alt: "The logo icon for MongoDB", title: "Mongo DB" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "The logo icon for MySQL", title: "MySQL" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", alt: "The logo icon for NPM", title: "NPM" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", alt: "The logo icon for NodeJS", title: "Node JS" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", alt: "The logo icon for Python", title: "Python" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "The logo icon for Redux", title: "Redux" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", alt: "The logo icon for SocketIO", title: "Socket.IO" }, void 0, !1, {
      fileName: "app/Components/DevelopComponents/Skills.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV10(Skill_default, { source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg", alt: "The logo icon for Microsoft SQL Server", title: "Micrsooft SQL Server" }, void 0, !1, {
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

// app/styles/manage.css
var manage_default = "/build/_assets/manage-YNXANQOB.css";

// app/routes/Develop/index.jsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "Taco-IT Website Development" },
  { name: "description", content: "Taco-IT Provides Website Design and Website Hosting services. If your website needs a new look, or maybe some small changes, let us help you provide an amazing website for your customers" }
], links2 = () => [
  { rel: "stylesheet", href: manage_default }
];
function Manage2() {
  return /* @__PURE__ */ jsxDEV11("div", { className: "App w-screen overflow-hidden h-auto min-h-screen bg-indigo-500", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV11(Logo, {}, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11(Nav_default, {}, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("section", { className: "w-full lg:w-10/12 mx-auto bg-indigo-400 mt-10 p-10", children: [
      /* @__PURE__ */ jsxDEV11("h3", { className: "text-3xl text-black text-center pb-10", children: "Development Services" }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { className: "mx-10", children: "We offer a wide variety of development services. We offer custom Website Development, Application Development, Mobile App Development, and Scripting/Automation services. You can't always buy a solution off the shelf, let us come up with a custom development solution for your business to give you the competitive edge in your market. We are always exploring new technologies to better suit our customers" }, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11(DevelopmentOfferings_default, {}, void 0, !1, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("section", { id: "technologies", className: "text-center w-full", children: [
        /* @__PURE__ */ jsxDEV11("h2", { className: "text-center text-3xl text-white", children: "Technologies We Work With" }, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV11("hr", {}, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV11(Skills_default, {}, void 0, !1, {
          fileName: "app/routes/Develop/index.jsx",
          lineNumber: 45,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/Develop/index.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Develop/index.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Develop/index.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/Manage/index.jsx
var Manage_exports = {};
__export(Manage_exports, {
  default: () => Manage3,
  links: () => links3,
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
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ManagedOfferings2() {
  return /* @__PURE__ */ jsxDEV12("div", { className: "manageSection", children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-row p-4 space-x-4 ", children: [
      /* @__PURE__ */ jsxDEV12(MonitorHeartIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Monitoring", info: "Proactive Server and Workstation Monitoring" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: " flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(CoronavirusIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Managed Anti-Virus", info: "Enterprise Class Anti-Virus Protection for all of your devices" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: " flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(StorageIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Managed Backup", info: "Backups are mission critical! We can manage your Local and Cloud backup and provide quarterly testing reports" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: " flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(LocalPostOfficeIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Managed Microsoft 365", info: "Let us manage your Microsoft 365 Business Plan including Exchange Email, SharePoint, OneDrive, Teams, and Office applications" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(KeyboardIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Remote Support", info: "Fast and Secure Remote support assistance allows for faster response times and less staff interruption, most problems are solved through remote support" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(PersonPinIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Onsite Support", info: "When we cannot fix it remotely, we come to you and fix it on the spot" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(AlternateEmailIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Managed Email and Spam Services", info: "No one likes spam, let us help you reduce your spam and malicious emails" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-row p-4 space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(EngineeringIcon, { fontSize: "large", color: "success" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV12(Offerings_default, { title: "Managed Patching and Maintenance", info: "Software Patches and Security Updates are critical, we handle those and perform weekly maintenance to keep your system running efficiently and secure" }, void 0, !1, {
        fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/ManageComponents/ManagedOfferings.jsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}
var ManagedOfferings_default = ManagedOfferings2;

// app/Images/managing.png
var managing_default = "/build/_assets/managing-6EL4NYEB.png";

// app/routes/Manage/index.jsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Taco-IT Managed IT Service Provider (MSP)" },
  { name: "description", content: "Taco-IT Provides Professional Managed IT Services to Small to Medium Sized businesses in the Tacoma and Pierce County Area. Managed Backup, Managed Office 365, Managed Email Services, Managed Anti-Viruus, Onsite and Remote Support!" }
], links3 = () => [
  { rel: "stylesheet", href: manage_default }
];
function Manage3() {
  return /* @__PURE__ */ jsxDEV13("div", { className: "w-screen overflow-hidden h-auto min-h-screen bg-indigo-500", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "w-full", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV13(Logo, {}, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13(Nav_default, {}, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV13("section", { className: "w-full md:w-2/3 mx-auto bg-indigo-400 mt-10 p-10", children: [
      /* @__PURE__ */ jsxDEV13("h3", { className: "text-3xl text-black text-center pb-10", children: "Managed Services" }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("img", { className: "mx-auto my-8 rounded-lg", style: { maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }, src: managing_default, alt: "" }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("br", {}, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { className: "mx-10 mb-4", children: "Managed IT Services is the benefit of a fully functioning IT department, at a fraction of the cost. We install software on all of your systems and services that provides us with diagnostic monitoring of all assets, critical insight into system performance, and remote support capabilities to remediate problems. You can also bundle in a variety of solutions such as Spam Filtering, Anti-Virus, Backups, etc. We also remote in and come onsite when problems occur." }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "managedOfferingParent", children: /* @__PURE__ */ jsxDEV13(ManagedOfferings_default, {}, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 44,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/Manage/index.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV13(Footer, {}, void 0, !1, {
      fileName: "app/routes/Manage/index.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Manage/index.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links4,
  meta: () => meta5
});

// app/Components/Contact.jsx
import PhoneInTalkIcon2 from "@mui/icons-material/PhoneInTalk";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Contact() {
  function handleClick(e) {
    e.preventDefault();
  }
  return /* @__PURE__ */ jsxDEV14(
    "section",
    {
      id: "contact",
      className: "relative max-w-screen-md min-h-screen h-auto mx-auto p-2 pt-10 pb-4",
      children: /* @__PURE__ */ jsxDEV14("div", { className: "", children: [
        /* @__PURE__ */ jsxDEV14("h2", { className: " text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 capitalize overflow-hidden", children: [
          "Contact us ",
          /* @__PURE__ */ jsxDEV14("span", { className: "text-indigo-600", children: "today" }, void 0, !1, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 16,
            columnNumber: 22
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Components/Contact.jsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV14("div", { className: "phone text-center mt-2", children: [
          /* @__PURE__ */ jsxDEV14("a", { className: "text-blue-400 items-center text-xl", href: "tel:+13603625004", children: [
            /* @__PURE__ */ jsxDEV14(PhoneInTalkIcon2, {}, void 0, !1, {
              fileName: "app/Components/Contact.jsx",
              lineNumber: 19,
              columnNumber: 91
            }, this),
            " Click to Call!"
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 19,
            columnNumber: 17
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV14("br", {}, void 0, !1, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 19,
            columnNumber: 130
          }, this),
          "Existing Customer? ",
          /* @__PURE__ */ jsxDEV14("a", { className: "text-blue-400 items-center text-xl", href: "mailto:helpdesk@taco-it.com", children: [
            /* @__PURE__ */ jsxDEV14(ConfirmationNumberIcon, {}, void 0, !1, {
              fileName: "app/Components/Contact.jsx",
              lineNumber: 20,
              columnNumber: 121
            }, this),
            " Click Here to Create a Ticket"
          ] }, void 0, !0, {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 20,
            columnNumber: 36
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Components/Contact.jsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV14("h4", { className: "my-2 px-2 text-center", children: "Or  Fill out the form below and we will reply within 1 business day, we look forward to meeting you and discussing your business needs." }, void 0, !1, {
          fileName: "app/Components/Contact.jsx",
          lineNumber: 22,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV14(
          "form",
          {
            className: "max-w-sm lg:max-w-lg mx-auto rounded-lg shadow-xl overflow-hidden p-2 space-y-2",
            action: "https://api.staticforms.xyz/submit",
            method: "post",
            children: [
              /* @__PURE__ */ jsxDEV14(
                "input",
                {
                  type: "hidden",
                  name: "accessKey",
                  value: "61768859-935c-4f63-92f8-1f254a0346ad"
                },
                void 0,
                !1,
                {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 32,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ jsxDEV14("input", { type: "text", name: "honeypot", style: { display: "none" } }, void 0, !1, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 37,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("div", { className: "", children: [
                /* @__PURE__ */ jsxDEV14("label", { htmlFor: "name", className: "  text-lg  p-4 mb-2 -ml-4", children: "Name:" }, void 0, !1, {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 39,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV14(
                  "input",
                  {
                    className: "block p-2 w-full text-lg outline border-2 focus-within:border-blue-500",
                    type: "text",
                    name: "name"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Components/Contact.jsx",
                    lineNumber: 42,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 38,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("div", { className: " ", children: [
                /* @__PURE__ */ jsxDEV14("label", { htmlFor: "subject", className: "  text-lg  p-4 mb-2 -ml-4", children: "Subject:" }, void 0, !1, {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV14(
                  "input",
                  {
                    className: "block p-2 w-full text-lg outline border-2 focus-within:border-blue-500",
                    type: "text",
                    name: "subject"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Components/Contact.jsx",
                    lineNumber: 52,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 48,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("div", { className: " ", children: [
                /* @__PURE__ */ jsxDEV14("label", { htmlFor: "email", className: "  text-lg  p-4 mb-2 -ml-4", children: "Email:" }, void 0, !1, {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV14(
                  "input",
                  {
                    className: "block p-2 w-full text-lg outline border-2 focus-within:border-blue-500",
                    type: "email",
                    name: "subject"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Components/Contact.jsx",
                    lineNumber: 62,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 58,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("div", { className: "", children: [
                /* @__PURE__ */ jsxDEV14("label", { htmlFor: "phone", className: "  text-lg  p-4 mb-2 -ml-4", children: "Phone:" }, void 0, !1, {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 69,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV14(
                  "input",
                  {
                    className: "block p-2 w-full text-lg outline border-2 focus-within:border-blue-500",
                    type: "phone",
                    name: "subject"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Components/Contact.jsx",
                    lineNumber: 72,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 68,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("div", { className: " ", children: [
                /* @__PURE__ */ jsxDEV14("label", { htmlFor: "message", className: "  text-lg  p-4 mb-2 -ml-4", children: "Message:" }, void 0, !1, {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 79,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV14(
                  "textarea",
                  {
                    rows: "10",
                    className: "block p-2 w-full h-32 text-lg outline border-2 focus-within:border-blue-500",
                    type: "message",
                    name: "subject"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/Components/Contact.jsx",
                    lineNumber: 82,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 78,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("div", { className: "mx-auto bg-indigo-600 text-center w-24 rounded-lg h-14 items-center hover:bg-slate-800 hover:text-white", children: /* @__PURE__ */ jsxDEV14(
                "button",
                {
                  className: "bg-transparent mt-3 text-white text-xl hover:bg-slate-800 hover:text-white",
                  type: "submit",
                  value: "Submit",
                  children: "Submit"
                },
                void 0,
                !1,
                {
                  fileName: "app/Components/Contact.jsx",
                  lineNumber: 90,
                  columnNumber: 13
                },
                this
              ) }, void 0, !1, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 89,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("input", { type: "hidden", name: "replyTo", value: "chris@taco-it.com" }, void 0, !1, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 98,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV14("input", { type: "hidden", name: "redirectTo", value: "https://taco-it.com" }, void 0, !1, {
                fileName: "app/Components/Contact.jsx",
                lineNumber: 99,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/Components/Contact.jsx",
            lineNumber: 27,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/Components/Contact.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/Components/Contact.jsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}
var Contact_default = Contact;

// app/Components/About.jsx
import "react";
import { Fragment, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV15(Fragment, { children: /* @__PURE__ */ jsxDEV15(
    "section",
    {
      className: "relative w-full h-auto min-h-screen mx-4 py-2 break-words sm:my-10",
      id: "about",
      children: [
        /* @__PURE__ */ jsxDEV15("p", { className: "text-center text-1xl md:text-2xl lg:text-4xl mb-2 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV15("span", { className: "text-indigo-600", children: "About" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          " Us"
        ] }, void 0, !0, {
          fileName: "app/Components/About.jsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV15("div", { className: "p-2 w-full", children: [
          /* @__PURE__ */ jsxDEV15("p", { className: "text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ", children: "Founding:" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10", children: [
            "Taco-IT was founded by Chris Benjamin to provide Technology services to local businesses in the Pacific Northwest. We exist to help give a technological edge to businesses who typically do not have their own internal IT department. Chris Benjamin attended Devry University where he earned his Bachelor of Computer Science while studying web application design and administration. He later went on to obtain his Masters in Computer Science focusing on IT Management to attain the skills necessary to drive businesses forward using technology.",
            " "
          ] }, void 0, !0, {
            fileName: "app/Components/About.jsx",
            lineNumber: 18,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10", children: "Chris has worked for several local technology companies from a local school district, a pharmacy support company, and as a the IT Manager for a medium size medical practice. Technology is his passion and knowing that businesses rely on a strong technology backend to stay successful and competitive in today's market gave him the desire to spread his expertise to other local businsses." }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ", children: "Our Why:" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 37,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10", children: "To empower businesses to utilize technology as an asset. Let the power of technology in todays' digital world work for you so you can focus on your own innovations." }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ", children: [
            "Our Mission:",
            " "
          ] }, void 0, !0, {
            fileName: "app/Components/About.jsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10", children: "Our mission is to help your company stand out on the internet so that your customers can find you and learn about your business. Let us handle the technical aspects and you handle your passion" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ", children: "Our What:" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 55,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10", children: "Our expertise is technology, your expertise is the foundation of your business. Let's work together to see what aspects of technology can be implemented that will help your business be efficient, accurate, and reliable. Sometime's its creating and managing your website, othertimes it may be implementing a new software solution to help your sales team track leads and drive more sales. Later it may be to setup a phone system so your customers can reach our staff directly. Whatever it is, lets taco bout it!" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-md md:text-1xl font-bold leading-tight lg:leading-loose mb-2 mt-2 ", children: "Our How:" }, void 0, !1, {
            fileName: "app/Components/About.jsx",
            lineNumber: 70,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV15("p", { className: "text-xs md:text-md ml-4 2xl:text-lg leading-5  mx-10 px-10", children: [
            "With over 15 years of professional experience in the Pacific Northwest, in multiple industry verticles, we possess strong market knowledge of products and services that can be applied to empower your business. By employing the best minds in the industry whose focus is to help make your business successful we can ensure you get products that fit your business and evolve as you grow.",
            " "
          ] }, void 0, !0, {
            fileName: "app/Components/About.jsx",
            lineNumber: 73,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/Components/About.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/Components/About.jsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/Components/About.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var About_default = About;

// app/Images/develop.jpg
var develop_default = "/build/_assets/develop-SUH24JWL.jpg";

// app/Images/manage.jpg
var manage_default2 = "/build/_assets/manage-XUUH36F3.jpg";

// app/Images/consult.jpg
var consult_default = "/build/_assets/consult-WQMW35EW.jpg";

// app/Components/Service.jsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function Service({ ServiceTitle, ServiceDescription, ServiceImage, LinkTo = "/" }) {
  return /* @__PURE__ */ jsxDEV16("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxDEV16(Link2, { to: LinkTo, children: [
    /* @__PURE__ */ jsxDEV16("h2", { className: "text-3xl font-bold leading-loose text-center", children: ServiceTitle }, void 0, !1, {
      fileName: "app/Components/Service.jsx",
      lineNumber: 8,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "flex-container group", children: [
      /* @__PURE__ */ jsxDEV16("div", { className: "mt-2 lg:mt-6 md:mx-10 lg:mx-0", children: /* @__PURE__ */ jsxDEV16("img", { className: "mx-auto rounded-lg h-65 w-65 group-hover:rounded-full group-hover:delay-100", src: ServiceImage, alt: "" }, void 0, !1, {
        fileName: "app/Components/Service.jsx",
        lineNumber: 12,
        columnNumber: 28
      }, this) }, void 0, !1, {
        fileName: "app/Components/Service.jsx",
        lineNumber: 11,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "mt-2 lg:mt-6 p-2 lg:p-10 text-center text-2xl group-hover:scale-125 group-hover:transition-transform group-hover:delay-100 group-hover:text-blue-700 group-hover:underline", children: /* @__PURE__ */ jsxDEV16("p", { children: ServiceDescription }, void 0, !1, {
        fileName: "app/Components/Service.jsx",
        lineNumber: 15,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/Components/Service.jsx",
        lineNumber: 14,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/Service.jsx",
      lineNumber: 9,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Service.jsx",
    lineNumber: 7,
    columnNumber: 19
  }, this) }, void 0, !1, {
    fileName: "app/Components/Service.jsx",
    lineNumber: 6,
    columnNumber: 15
  }, this);
}
var Service_default = Service;

// app/Components/Services.jsx
import { Fragment as Fragment2, jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function Services() {
  return /* @__PURE__ */ jsxDEV17(Fragment2, { children: /* @__PURE__ */ jsxDEV17("section", { className: "w-full", id: "services", children: [
    /* @__PURE__ */ jsxDEV17("h2", { className: "text-xl lg:text-3xl font-bold leading-loose text-center pt-10", children: [
      " ",
      /* @__PURE__ */ jsxDEV17("span", { className: "text-indigo-600", children: "Our" }, void 0, !1, {
        fileName: "app/Components/Services.jsx",
        lineNumber: 12,
        columnNumber: 92
      }, this),
      " Services"
    ] }, void 0, !0, {
      fileName: "app/Components/Services.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("h3", { className: "text-center my-6", children: "Click on a service to learn more" }, void 0, !1, {
      fileName: "app/Components/Services.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "grid grid-cols-1 md:grid-cols-3 space-x-6 mx-2 lg:mx-10 my-2 lg:my-6", children: [
      /* @__PURE__ */ jsxDEV17(
        Service_default,
        {
          ServiceTitle: "Develop",
          ServiceDescription: "Website Development",
          ServiceImage: develop_default,
          LinkTo: "/develop"
        },
        void 0,
        !1,
        {
          fileName: "app/Components/Services.jsx",
          lineNumber: 15,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV17(
        Service_default,
        {
          ServiceTitle: "Consult",
          ServiceDescription: "Professional IT Consulting",
          ServiceImage: consult_default,
          LinkTo: "/consult"
        },
        void 0,
        !1,
        {
          fileName: "app/Components/Services.jsx",
          lineNumber: 21,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV17(
        Service_default,
        {
          ServiceTitle: "Manage",
          ServiceDescription: "Managed IT Services for Business",
          ServiceImage: manage_default2,
          LinkTo: "/manage"
        },
        void 0,
        !1,
        {
          fileName: "app/Components/Services.jsx",
          lineNumber: 27,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/Components/Services.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Services.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/Components/Services.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
var Services_default = Services;

// app/Components/Home.jsx
import TypeWriter from "react-typewriter";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function Home() {
  return /* @__PURE__ */ jsxDEV18("div", { className: "container m-auto px-6 py-40", children: /* @__PURE__ */ jsxDEV18("div", { className: "flex flex-col items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8 space-y-8", children: [
    /* @__PURE__ */ jsxDEV18("div", { className: "w-10/12 text-2xl md:w-9/12 md:text-3xl text-center items-center overflow-hidden", children: /* @__PURE__ */ jsxDEV18(TypeWriter, { typing: 0.75, children: "Let's Taco Bout Your IT Needs Today!" }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 11,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "display cursor-pointer", children: /* @__PURE__ */ jsxDEV18("a", { className: "text-xl md:text-2xl flex flex-col items-center text-center border-2 border-solid border-grey-600 rounded-lg p-4 hover:bg-slate-200", href: "#contact", children: "Contact Us Today" }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/Components/Home.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/Home.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/Components/Home.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var Home_default = Home;

// app/Components/HomePage.jsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function HomePage() {
  return /* @__PURE__ */ jsxDEV19("div", { className: "App w-screen overflow-hidden ", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "home-container h-screen w-full", children: [
      /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV19(Logo, {}, void 0, !1, {
          fileName: "app/Components/HomePage.jsx",
          lineNumber: 15,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV19(Nav_default, {}, void 0, !1, {
          fileName: "app/Components/HomePage.jsx",
          lineNumber: 16,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV19(Home_default, {}, void 0, !1, {
        fileName: "app/Components/HomePage.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "services-container bg-gray-200  min-h-screen h-auto w-screen m-0 p-0 overflow-hidden", children: /* @__PURE__ */ jsxDEV19(Services_default, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 21,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "contact-container min-h-screen h-auto", children: /* @__PURE__ */ jsxDEV19(Contact_default, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 24,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "about-container bg-gray-700 text-white  min-h-screen h-auto", children: /* @__PURE__ */ jsxDEV19(About_default, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "footer-container h-40 bg-gray-200", children: /* @__PURE__ */ jsxDEV19(Footer, {}, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 30,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/Components/HomePage.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/HomePage.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}
var HomePage_default = HomePage;

// app/Components/WallPaper.jsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function WallPaper() {
  return /* @__PURE__ */ jsxDEV20("div", { className: "area", children: /* @__PURE__ */ jsxDEV20("ul", { className: "circles", children: [
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV20("li", {}, void 0, !1, {
      fileName: "app/Components/WallPaper.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Components/WallPaper.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/Components/WallPaper.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var WallPaper_default = WallPaper;

// app/styles/WallPaper.css
var WallPaper_default2 = "/build/_assets/WallPaper-H3VIIBRO.css";

// app/routes/index.jsx
import { Fragment as Fragment3, jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "Taco-IT Develop. Consult. Manage" },
  { name: "description", content: "Taco-IT is your one-stop shop for buisness IT. We offer consulting services, website design and maintenance, and managed IT services. Let's taco bout your IT needs today!" }
], links4 = () => [
  {
    rel: "stylesheet",
    href: WallPaper_default2
  }
];
function Index() {
  return /* @__PURE__ */ jsxDEV21(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV21(WallPaper_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV21(HomePage_default, {}, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 29,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VDCPXNGX.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-TAQZM6BI.js", "/build/_shared/chunk-GNCLJJF5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SBMHMOIZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Consult": { id: "routes/Consult", parentId: "root", path: "Consult", index: void 0, caseSensitive: void 0, module: "/build/routes/Consult-DO32KJCW.js", imports: ["/build/_shared/chunk-Y6QMX4C4.js", "/build/_shared/chunk-6VSSU7PJ.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Develop": { id: "routes/Develop", parentId: "root", path: "Develop", index: void 0, caseSensitive: void 0, module: "/build/routes/Develop-5YPPDN6G.js", imports: ["/build/_shared/chunk-XLCFM6EW.js", "/build/_shared/chunk-6VSSU7PJ.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Manage": { id: "routes/Manage", parentId: "root", path: "Manage", index: void 0, caseSensitive: void 0, module: "/build/routes/Manage-OHF44IMM.js", imports: ["/build/_shared/chunk-XLCFM6EW.js", "/build/_shared/chunk-Y6QMX4C4.js", "/build/_shared/chunk-6VSSU7PJ.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-Y5DCIICM.js", imports: ["/build/_shared/chunk-Y6QMX4C4.js", "/build/_shared/chunk-6VSSU7PJ.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/robots[.]txt": { id: "routes/robots[.]txt", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/robots[.]txt-BTPJRET3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sitemap[.]xml": { id: "routes/sitemap[.]xml", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/sitemap[.]xml-XB75Y2NN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "2412254f", hmr: { runtime: "/build/_shared\\chunk-GNCLJJF5.js", timestamp: 1761712004793 }, url: "/build/manifest-2412254F.js" };

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
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
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
