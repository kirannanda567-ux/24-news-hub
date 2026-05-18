import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link, a as ue } from "./index-DVID6ykA.js";
import { a as articles, B as Badge, C as Clock } from "./articles-0z5i4Fz4.js";
import { B as Button } from "./button-uQgKLJnJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  if (!article) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4",
        "data-ocid": "article.not_found_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center text-4xl", children: "📰" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground", children: "Article Not Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "The article you're looking for doesn't exist or may have been removed." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/news",
              "data-ocid": "article.back_to_news_link",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-smooth shadow-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 15 }),
                " Back to All News"
              ]
            }
          )
        ]
      }
    );
  }
  const relatedArticles = articles.filter((a) => a.id !== id).slice(0, 3);
  function handleShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      ue.success("Link copied to clipboard!", {
        description: "Share this article with your network.",
        duration: 4e3
      });
    }).catch(() => {
      ue.error(
        "Could not copy link. Please copy it from the address bar."
      );
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "article.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[21/9] max-h-[520px] bg-muted overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: article.image,
          alt: article.title,
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-0 right-0 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "flex items-center gap-2 text-xs text-foreground/60",
          "aria-label": "Breadcrumb",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-smooth", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/news",
                "data-ocid": "article.breadcrumb_news_link",
                className: "hover:text-primary transition-smooth",
                children: "News"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/40 truncate max-w-[200px]", children: article.title })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/news",
            "data-ocid": "article.back_link",
            className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
              " Back"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-secondary/20 text-secondary border-secondary/30 font-display uppercase tracking-wide text-xs", children: article.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-5", children: article.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.author })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              article.readTime,
              " min read"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: handleShare,
            "data-ocid": "article.share_button",
            className: "flex items-center gap-2 border-border hover:border-primary/50 hover:text-primary transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 }),
              "Share"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        "data-ocid": "article.content",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 italic border-l-2 border-primary pl-5", children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: article.content.split("\n\n").map((paragraph, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base sm:text-lg text-foreground/80 leading-relaxed",
              children: paragraph
            },
            i
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-card/50 py-6 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-display", children: "Found this article useful? Share it with your network." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          onClick: handleShare,
          "data-ocid": "article.share_cta_button",
          className: "flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 }),
            " Copy Link"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-14 px-4 sm:px-6 lg:px-8",
        "data-ocid": "article.related_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-8 uppercase tracking-widest", children: "More Stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: relatedArticles.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/news/${a.id}`,
              "data-ocid": `article.related.item.${i + 1}`,
              className: "group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth hover:shadow-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: a.image,
                    alt: a.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-secondary/20 text-secondary border-secondary/30 font-display uppercase tracking-wide", children: a.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-smooth", children: a.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                      " ",
                      a.readTime,
                      " min"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.date })
                  ] })
                ] })
              ]
            },
            a.id
          )) })
        ] })
      }
    )
  ] });
}
export {
  ArticlePage as default
};
