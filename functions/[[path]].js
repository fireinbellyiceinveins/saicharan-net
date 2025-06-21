var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.js
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.cloudflare.tsx
var entry_server_cloudflare_exports = {};
__export(entry_server_cloudflare_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let body = await renderToReadableStream(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.cloudflare.tsx",
      lineNumber: 14,
      columnNumber: 5
    }, this),
    {
      // If you wish to abort the rendering process, you can pass a signal here.
      // Please refer to the templates for example son how to configure this.
      // signal: controller.signal,
      onError(error) {
        console.error(error), responseStatusCode = 500;
      }
    }
  );
  return isBotRequest(request.headers.get("user-agent")) && await body.allReady, responseHeaders.set("Content-Type", "text/html"), new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
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

// app/styles/app.css
var app_default = "/build/_assets/app-2SDHG33D.css";

// app/context/ThemeContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var ThemeContext = createContext(), THEME_KEY = "saicharan-net-theme";
function ThemeProvider({ children }) {
  let [theme, setTheme] = useState("light");
  useEffect(() => {
    let storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme)
      setTheme(storedTheme);
    else {
      let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []), useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), localStorage.setItem(THEME_KEY, theme);
  }, [theme]);
  let toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxDEV2(ThemeContext.Provider, { value: { theme, toggleTheme }, children }, void 0, !1, {
    fileName: "app/context/ThemeContext.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
var useTheme = () => useContext(ThemeContext);

// app/root.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function meta() {
  return [
    { title: "Saicharan - Personal Website" },
    { name: "description", content: "Personal website of Saicharan" },
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
}
function App() {
  return /* @__PURE__ */ jsxDEV3(ThemeProvider, { children: /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/projects._index.jsx
var projects_index_exports = {};
__export(projects_index_exports, {
  default: () => Projects,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

// app/utils/content.js
import matter from "gray-matter";
import { marked } from "marked";

// content/people.json
var people_default = [
  {
    name: "Person One",
    image: "/images/person-placeholder.png",
    link: "https://example.com"
  },
  {
    name: "Person Two",
    image: "/images/person-placeholder.png",
    link: "https://example.com"
  },
  {
    name: "Person Three",
    image: "/images/person-placeholder.png",
    link: "https://example.com"
  },
  {
    name: "Person Four",
    image: "/images/person-placeholder.png",
    link: "https://example.com"
  },
  {
    name: "Person Five",
    image: "/images/person-placeholder.png",
    link: "https://example.com"
  }
];

// app/utils/content.js
var writingsModules = import.meta.glob("../../content/writings/*.md", { as: "raw", eager: !0 }), projectsModules = import.meta.glob("../../content/projects/*.md", { as: "raw", eager: !0 }), allWritings = Object.entries(writingsModules).map(([path, rawContent]) => {
  let slug = path.split("/").pop().replace(".md", ""), { data, content } = matter(rawContent);
  return {
    slug,
    title: data.title || slug,
    date: data.date || (/* @__PURE__ */ new Date()).toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + "...",
    content,
    ...data
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date)), allProjects = Object.entries(projectsModules).map(([path, rawContent]) => {
  let slug = path.split("/").pop().replace(".md", ""), { data, content } = matter(rawContent);
  return {
    slug,
    title: data.title || slug,
    date: data.date || (/* @__PURE__ */ new Date()).toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + "...",
    content,
    image: data.image,
    link: data.link,
    ...data
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));
function getWritings() {
  return allWritings;
}
function getWriting(slug) {
  return allWritings.find((writing) => writing.slug === slug);
}
function getProjects() {
  return allProjects;
}
function getProject(slug) {
  return allProjects.find((project) => project.slug === slug);
}
function getPeople() {
  return people_default;
}
function renderMarkdown(content) {
  return marked(content);
}

// app/routes/projects._index.jsx
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader() {
  let projects = getProjects();
  return json({ projects });
}
function Projects() {
  let { projects } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4(Fragment, { children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "page-header", children: [
      /* @__PURE__ */ jsxDEV4("h1", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/projects._index.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: "A collection of projects I've worked on." }, void 0, !1, {
        fileName: "app/routes/projects._index.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects._index.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    projects.length === 0 ? /* @__PURE__ */ jsxDEV4("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV4("h3", { children: "No projects yet" }, void 0, !1, {
        fileName: "app/routes/projects._index.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: "I'm currently working on adding my projects. Please check back later." }, void 0, !1, {
        fileName: "app/routes/projects._index.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects._index.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV4("ul", { className: "writing-list", children: projects.map((project) => /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link, { to: `./${project.slug}`, className: "writing-list-item", children: [
      /* @__PURE__ */ jsxDEV4("span", { className: "writing-title", children: project.title }, void 0, !1, {
        fileName: "app/routes/projects._index.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4("span", { className: "writing-date", children: new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).replace(/\//g, ".") }, void 0, !1, {
        fileName: "app/routes/projects._index.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects._index.jsx",
      lineNumber: 28,
      columnNumber: 15
    }, this) }, project.slug, !1, {
      fileName: "app/routes/projects._index.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/projects._index.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects._index.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/projects.$slug.jsx
var projects_slug_exports = {};
__export(projects_slug_exports, {
  default: () => ProjectSlug,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Fragment as Fragment2, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function loader2({ params }) {
  invariant(params.slug, "Expected params.slug");
  let project = getProject(params.slug);
  if (!project)
    throw new Response("Not Found", { status: 404 });
  let html = renderMarkdown(project.content);
  return json2({ project, html });
}
function ProjectSlug() {
  let { project, html } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV5(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "post-header", children: [
      /* @__PURE__ */ jsxDEV5("h1", { className: "post-title", children: project.title }, void 0, !1, {
        fileName: "app/routes/projects.$slug.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { className: "post-date", children: new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }, void 0, !1, {
        fileName: "app/routes/projects.$slug.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects.$slug.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    project.image && /* @__PURE__ */ jsxDEV5("img", { src: project.image, alt: project.title, style: { maxWidth: "100%", borderRadius: "8px", marginBottom: "1rem" } }, void 0, !1, {
      fileName: "app/routes/projects.$slug.jsx",
      lineNumber: 31,
      columnNumber: 25
    }, this),
    project.link && /* @__PURE__ */ jsxDEV5("p", { children: /* @__PURE__ */ jsxDEV5("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", children: "View Project \u2192" }, void 0, !1, {
      fileName: "app/routes/projects.$slug.jsx",
      lineNumber: 32,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects.$slug.jsx",
      lineNumber: 32,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "markdown-content", dangerouslySetInnerHTML: { __html: html } }, void 0, !1, {
      fileName: "app/routes/projects.$slug.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects.$slug.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/writing._index.jsx
var writing_index_exports = {};
__export(writing_index_exports, {
  default: () => Writing,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3, Link as Link2 } from "@remix-run/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader3() {
  let writings = getWritings();
  return json3({ writings });
}
function Writing() {
  let { writings } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "page-header", children: [
      /* @__PURE__ */ jsxDEV6("h1", { children: "thoughts" }, void 0, !1, {
        fileName: "app/routes/writing._index.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: "Thoughts, ideas, and things I've learned along the way." }, void 0, !1, {
        fileName: "app/routes/writing._index.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/writing._index.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    writings.length === 0 ? /* @__PURE__ */ jsxDEV6("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV6("h3", { children: "No writings yet" }, void 0, !1, {
        fileName: "app/routes/writing._index.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: "I'm working on some thoughts. Check back soon!" }, void 0, !1, {
        fileName: "app/routes/writing._index.jsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/writing._index.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV6("ul", { className: "writing-list", children: writings.map((writing) => /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6(Link2, { to: `./${writing.slug}`, className: "writing-list-item", children: [
      /* @__PURE__ */ jsxDEV6("span", { className: "writing-title", children: writing.title }, void 0, !1, {
        fileName: "app/routes/writing._index.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV6("span", { className: "writing-date", children: new Date(writing.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).replace(/\//g, ".") }, void 0, !1, {
        fileName: "app/routes/writing._index.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/writing._index.jsx",
      lineNumber: 28,
      columnNumber: 15
    }, this) }, writing.slug, !1, {
      fileName: "app/routes/writing._index.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/writing._index.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/writing._index.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/writing.$slug.jsx
var writing_slug_exports = {};
__export(writing_slug_exports, {
  default: () => WritingSlug,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import invariant2 from "tiny-invariant";
import { Fragment as Fragment4, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader4({ params }) {
  invariant2(params.slug, "Expected params.slug");
  let writing = getWriting(params.slug);
  if (!writing)
    throw new Response("Not Found", { status: 404 });
  let html = renderMarkdown(writing.content);
  return json4({ writing, html });
}
function WritingSlug() {
  let { writing, html } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV7(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "post-header", children: [
      /* @__PURE__ */ jsxDEV7("h1", { className: "post-title", children: writing.title }, void 0, !1, {
        fileName: "app/routes/writing.$slug.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "post-date", children: new Date(writing.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }, void 0, !1, {
        fileName: "app/routes/writing.$slug.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/writing.$slug.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "markdown-content", dangerouslySetInnerHTML: { __html: html } }, void 0, !1, {
      fileName: "app/routes/writing.$slug.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/writing.$slug.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/projects.jsx
var projects_exports = {};
__export(projects_exports, {
  default: () => ProjectsLayout
});
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/Layout.jsx
import { useState as useState2 } from "react";
import "@remix-run/react";

// app/components/Sidebar.jsx
import { NavLink } from "@remix-run/react";

// app/components/ThemeToggle.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ThemeToggle() {
  let { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxDEV8("button", { onClick: toggleTheme, className: "theme-toggle-button", children: theme === "light" ? /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-sun", children: [
    /* @__PURE__ */ jsxDEV8("circle", { cx: "12", cy: "12", r: "5" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 219
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "12", y1: "1", x2: "12", y2: "3" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 258
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "12", y1: "21", x2: "12", y2: "23" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 301
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 346
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 399
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "1", y1: "12", x2: "3", y2: "12" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 456
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "21", y1: "12", x2: "23", y2: "12" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 499
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 544
    }, this),
    /* @__PURE__ */ jsxDEV8("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.jsx",
      lineNumber: 9,
      columnNumber: 599
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ThemeToggle.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) : /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-moon", children: /* @__PURE__ */ jsxDEV8("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, void 0, !1, {
    fileName: "app/components/ThemeToggle.jsx",
    lineNumber: 11,
    columnNumber: 220
  }, this) }, void 0, !1, {
    fileName: "app/components/ThemeToggle.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ThemeToggle.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/Sidebar.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Sidebar() {
  return /* @__PURE__ */ jsxDEV9("aside", { className: "sidebar", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "sidebar-logo", children: /* @__PURE__ */ jsxDEV9(NavLink, { to: "/about", children: "\u{1F366}" }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("nav", { children: /* @__PURE__ */ jsxDEV9("ul", { className: "nav-menu", children: [
      { path: "/about", label: "About" },
      { path: "/writing", label: "Thoughts" },
      { path: "/projects", label: "Projects" },
      { path: "/people", label: "People" },
      { path: "/work", label: "Work" }
    ].map((item) => /* @__PURE__ */ jsxDEV9("li", { children: /* @__PURE__ */ jsxDEV9(
      NavLink,
      {
        to: item.path,
        className: ({ isActive }) => isActive ? "active" : "",
        children: item.label
      },
      void 0,
      !1,
      {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 22,
        columnNumber: 15
      },
      this
    ) }, item.path, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "sidebar-footer", children: /* @__PURE__ */ jsxDEV9(ThemeToggle, {}, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/MobileNav.jsx
import { NavLink as NavLink2 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function MobileNav({ setMenuOpen }) {
  let navItems = [
    { path: "/about", label: "about" },
    { path: "/writing", label: "thoughts" },
    { path: "/projects", label: "projects" },
    { path: "/people", label: "people" },
    { path: "/work", label: "work" }
  ], handleLinkClick = () => {
    setMenuOpen(!1);
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "mobile-nav", children: [
    /* @__PURE__ */ jsxDEV10("div", { className: "mobile-nav-header", children: [
      /* @__PURE__ */ jsxDEV10(NavLink2, { to: "/about", onClick: handleLinkClick, className: "mobile-nav-logo", children: "\u{1F366}" }, void 0, !1, {
        fileName: "app/components/MobileNav.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("button", { className: "mobile-nav-close", onClick: () => setMenuOpen(!1), children: "\xD7" }, void 0, !1, {
        fileName: "app/components/MobileNav.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MobileNav.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("nav", { children: /* @__PURE__ */ jsxDEV10("ul", { className: "mobile-nav-menu", children: navItems.map((item) => /* @__PURE__ */ jsxDEV10("li", { children: /* @__PURE__ */ jsxDEV10(
      NavLink2,
      {
        to: item.path,
        onClick: handleLinkClick,
        className: ({ isActive }) => isActive ? "active" : "",
        children: item.label
      },
      void 0,
      !1,
      {
        fileName: "app/components/MobileNav.jsx",
        lineNumber: 28,
        columnNumber: 15
      },
      this
    ) }, item.path, !1, {
      fileName: "app/components/MobileNav.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/MobileNav.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/MobileNav.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MobileNav.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/Layout.jsx
import { Fragment as Fragment5, jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  let [isMenuOpen, setMenuOpen] = useState2(!1);
  return /* @__PURE__ */ jsxDEV11(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "mobile-header", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "sidebar-logo", children: /* @__PURE__ */ jsxDEV11("a", { href: "/about", children: "\u{1F366}" }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "mobile-header-controls", children: [
        /* @__PURE__ */ jsxDEV11(ThemeToggle, {}, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11("button", { className: "hamburger-button", onClick: () => setMenuOpen(!0), children: "\u2630" }, void 0, !1, {
          fileName: "app/components/Layout.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "app", children: [
      /* @__PURE__ */ jsxDEV11(Sidebar, {}, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("main", { className: "main-content", children }, void 0, !1, {
        fileName: "app/components/Layout.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    isMenuOpen && /* @__PURE__ */ jsxDEV11(MobileNav, { setMenuOpen }, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 31,
      columnNumber: 22
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/projects.jsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function ProjectsLayout() {
  return /* @__PURE__ */ jsxDEV12(Layout, { children: /* @__PURE__ */ jsxDEV12(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/projects.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/writing.jsx
var writing_exports = {};
__export(writing_exports, {
  default: () => WritingLayout
});
import { Outlet as Outlet3 } from "@remix-run/react";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function WritingLayout() {
  return /* @__PURE__ */ jsxDEV13(Layout, { children: /* @__PURE__ */ jsxDEV13(Outlet3, {}, void 0, !1, {
    fileName: "app/routes/writing.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/writing.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/people.jsx
var people_exports = {};
__export(people_exports, {
  default: () => People,
  loader: () => loader5
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
async function loader5() {
  let people = getPeople();
  return json5({ people });
}
function People() {
  let { people } = useLoaderData5();
  return /* @__PURE__ */ jsxDEV14(Layout, { children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "page-header", children: [
      /* @__PURE__ */ jsxDEV14("h1", { children: "People" }, void 0, !1, {
        fileName: "app/routes/people.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { children: "People that had an impact on me." }, void 0, !1, {
        fileName: "app/routes/people.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    people.length === 0 ? /* @__PURE__ */ jsxDEV14("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV14("h3", { children: "No one here yet..." }, void 0, !1, {
        fileName: "app/routes/people.jsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { children: "I'm still compiling my list of impactful people. Check back soon!" }, void 0, !1, {
        fileName: "app/routes/people.jsx",
        lineNumber: 24,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV14("div", { className: "people-grid", children: people.map((person) => /* @__PURE__ */ jsxDEV14("div", { className: "person-card", children: /* @__PURE__ */ jsxDEV14("a", { href: person.link, target: "_blank", rel: "noopener noreferrer", children: [
      /* @__PURE__ */ jsxDEV14("img", { src: person.image, alt: person.name, className: "person-image" }, void 0, !1, {
        fileName: "app/routes/people.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "person-name", children: person.name }, void 0, !1, {
        fileName: "app/routes/people.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/people.jsx",
      lineNumber: 30,
      columnNumber: 15
    }, this) }, person.name, !1, {
      fileName: "app/routes/people.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/people.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/people.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader6
});
import { redirect } from "@remix-run/node";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function loader6() {
  return redirect("/about");
}
function Index() {
  return /* @__PURE__ */ jsxDEV15(Layout, { children: [
    /* @__PURE__ */ jsxDEV15("div", { className: "page-header", children: [
      /* @__PURE__ */ jsxDEV15("h1", { children: "Welcome to my website" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { children: "Hi, I'm Saicharan. This is my personal space where I share my thoughts, projects, and the people who inspire me. Feel free to explore around." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV15("h3", { children: "Recent Writings" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { children: "Check out my latest thoughts and ideas in the writing section." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("a", { href: "/writing", children: "View all writings \u2192" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV15("h3", { children: "Projects" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { children: "Explore the projects I've been working on and my technical journey." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("a", { href: "/projects", children: "View all projects \u2192" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV15("h3", { children: "People" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { children: "Meet the people who have had a significant impact on my life and work." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("a", { href: "/people", children: "Meet the people \u2192" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV16(Layout, { children: /* @__PURE__ */ jsxDEV16("div", { className: "markdown-content", children: [
    /* @__PURE__ */ jsxDEV16("h1", { children: "Saicharan" }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("p", { children: "I'm a developer and designer. My interests span a broad spectrum of subjects, encompassing web development, creative coding, and human-computer interaction." }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("p", { children: "This website serves as my digital garden where I document my journey, thoughts, and experiences. I built it with Remix and \u2764\uFE0F." }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV16("p", { children: [
      "You can gain further insights into my background and interests through my",
      " ",
      /* @__PURE__ */ jsxDEV16("a", { href: "/writing", children: "thoughts" }, void 0, !1, {
        fileName: "app/routes/about.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      " and ",
      /* @__PURE__ */ jsxDEV16("a", { href: "/projects", children: "projects" }, void 0, !1, {
        fileName: "app/routes/about.jsx",
        lineNumber: 19,
        columnNumber: 47
      }, this),
      ", or find me on social media."
    ] }, void 0, !0, {
      fileName: "app/routes/about.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/work.jsx
var work_exports = {};
__export(work_exports, {
  default: () => Work
});
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function Work() {
  return /* @__PURE__ */ jsxDEV17(Layout, { children: [
    /* @__PURE__ */ jsxDEV17("div", { className: "page-header", children: [
      /* @__PURE__ */ jsxDEV17("h1", { children: "Work" }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { children: "Over the past years, I've been super lucky to work with some amazing people, on a variety of great projects, ranging from open-source libraries to large-scale applications." }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/work.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { className: "markdown-content", children: [
      /* @__PURE__ */ jsxDEV17("h2", { children: "Work Experience 1" }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { children: "Detailed description of your first work experience. Talk about the company, your role, the projects you worked on, technologies used, and your key contributions and learnings." }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("h2", { children: "Work Experience 2" }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("p", { children: "Detailed description of your second work experience. Talk about the company, your role, the projects you worked on, technologies used, and your key contributions and learnings." }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17("blockquote", { children: '"Choose a job you love, and you will never have to work a day in your life." - Confucius' }, void 0, !1, {
        fileName: "app/routes/work.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/work.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/work.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-TUUX6QHF.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-MXJXEHVU.js", "/build/_shared/chunk-VMIVZT7R.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AS5ZSQBE.js", imports: ["/build/_shared/chunk-ZA3GN473.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MQTXLU7Q.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-DS6NKWNR.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-VRCS3JBS.js", imports: ["/build/_shared/chunk-DS6NKWNR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/people": { id: "routes/people", parentId: "root", path: "people", index: void 0, caseSensitive: void 0, module: "/build/routes/people-6BMALMFI.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-DS6NKWNR.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-XX4WK3OC.js", imports: ["/build/_shared/chunk-DS6NKWNR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects.$slug": { id: "routes/projects.$slug", parentId: "routes/projects", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/projects.$slug-L25DKSEQ.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects._index": { id: "routes/projects._index", parentId: "routes/projects", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/projects._index-WADSI32C.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-6PC6F7YI.js", imports: ["/build/_shared/chunk-DS6NKWNR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/writing": { id: "routes/writing", parentId: "root", path: "writing", index: void 0, caseSensitive: void 0, module: "/build/routes/writing-3ADM4S47.js", imports: ["/build/_shared/chunk-DS6NKWNR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/writing.$slug": { id: "routes/writing.$slug", parentId: "routes/writing", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/writing.$slug-BC6RAMO6.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/writing._index": { id: "routes/writing._index", parentId: "routes/writing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/writing._index-5U6QDZD7.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "52215853", hmr: { runtime: "/build/_shared\\chunk-VMIVZT7R.js", timestamp: 1750510971952 }, url: "/build/manifest-52215853.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_cloudflare_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects._index": {
    id: "routes/projects._index",
    parentId: "routes/projects",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: projects_index_exports
  },
  "routes/projects.$slug": {
    id: "routes/projects.$slug",
    parentId: "routes/projects",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: projects_slug_exports
  },
  "routes/writing._index": {
    id: "routes/writing._index",
    parentId: "routes/writing",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: writing_index_exports
  },
  "routes/writing.$slug": {
    id: "routes/writing.$slug",
    parentId: "routes/writing",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: writing_slug_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/writing": {
    id: "routes/writing",
    parentId: "root",
    path: "writing",
    index: void 0,
    caseSensitive: void 0,
    module: writing_exports
  },
  "routes/people": {
    id: "routes/people",
    parentId: "root",
    path: "people",
    index: void 0,
    caseSensitive: void 0,
    module: people_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: work_exports
  }
};

// server.js
var handleRequest2 = createPagesFunctionHandler({
  build: server_build_exports,
  mode: "development",
  getLoadContext: (context) => context.env
});
function onRequest(context) {
  return handleRequest2(context);
}
export {
  onRequest
};
//# sourceMappingURL=[[path]].js.map
