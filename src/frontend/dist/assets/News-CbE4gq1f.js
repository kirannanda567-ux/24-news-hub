import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DVID6ykA.js";
import { a as articles, B as Badge, C as Clock } from "./articles-0z5i4Fz4.js";
import { I as Input } from "./input-C6liU1DS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const ALL_CATEGORIES = "All";
function getCategories(list) {
  const cats = Array.from(new Set(list.map((a) => a.category)));
  return [ALL_CATEGORIES, ...cats];
}
function NewsPage() {
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState(ALL_CATEGORIES);
  const categories = getCategories(articles);
  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === ALL_CATEGORIES || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "news.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl sm:text-5xl text-foreground mb-3 leading-tight", children: "All News & Updates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl text-lg", children: "Breaking stories, in-depth analysis, and investigative journalism for the Tamil community worldwide." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/80 border-b border-border sticky top-0 z-10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Search,
          {
            size: 14,
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "search",
            placeholder: "Search articles…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            "data-ocid": "news.search_input",
            className: "pl-8 bg-background border-input text-sm h-9"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center gap-2 flex-wrap",
          "aria-label": "Filter by category",
          children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `news.filter.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
              className: [
                "px-3 py-1.5 rounded-full text-xs font-display font-semibold uppercase tracking-wide border transition-smooth",
                activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              ].join(" "),
              children: cat
            },
            cat
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-12 px-4 sm:px-6 lg:px-8",
        "data-ocid": "news.articles_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-24 gap-4 text-center",
            "data-ocid": "news.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🔍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "No articles found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "Try adjusting your search or selecting a different category." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setSearch("");
                    setActiveCategory(ALL_CATEGORIES);
                  },
                  "data-ocid": "news.clear_filters_button",
                  className: "mt-2 text-sm text-primary hover:underline transition-smooth",
                  children: "Clear filters"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-6 font-display uppercase tracking-widest", children: [
            filtered.length,
            " ",
            filtered.length === 1 ? "story" : "stories",
            activeCategory !== ALL_CATEGORIES ? ` in ${activeCategory}` : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/news/${article.id}`,
              "data-ocid": `news.item.${i + 1}`,
              className: "group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth hover:shadow-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: article.image,
                    alt: article.title,
                    className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "text-xs font-display uppercase tracking-wide bg-secondary/20 text-secondary border-secondary/30",
                      children: article.category
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth", children: article.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed", children: article.excerpt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      "By ",
                      article.author
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
                      " ",
                      article.readTime,
                      " min read"
                    ] })
                  ] })
                ] })
              ]
            },
            article.id
          )) })
        ] }) })
      }
    )
  ] });
}
export {
  NewsPage as default
};
