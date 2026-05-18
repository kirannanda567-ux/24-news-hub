import { c as createLucideIcon, j as jsxRuntimeExports, F as FaceLogo, L as Link } from "./index-DVID6ykA.js";
import { G as Globe, Z as Zap, A as ArrowRight } from "./zap-BA7-2Rac.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const values = [
  {
    icon: Globe,
    title: "Global Tamil Voice",
    description: "We serve Tamil communities across India, Sri Lanka, Malaysia, Singapore, the UK, and beyond — one community, one platform."
  },
  {
    icon: Zap,
    title: "Real-Time Reporting",
    description: "Breaking news delivered fast, backed by verified sources and rigorous fact-checking. Speed without sacrificing accuracy."
  },
  {
    icon: Heart,
    title: "Culture First",
    description: "We celebrate Tamil arts, language, history, and innovation alongside hard news — because identity matters as much as information."
  }
];
const team = [
  {
    name: "Arjun Krishnamurthy",
    role: "Editor-in-Chief",
    bio: "20 years covering South Asian politics and technology for leading publications."
  },
  {
    name: "Priya Balakrishnan",
    role: "Culture & Arts Editor",
    bio: "Scholar of classical Tamil literature and award-winning cultural journalist."
  },
  {
    name: "Ravi Natarajan",
    role: "Urban & Environment Reporter",
    bio: "Infrastructure and sustainability journalist embedded in Chennai for a decade."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaceLogo, { size: 64 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl sm:text-5xl text-foreground mb-5", children: [
        "About ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Tamil News Hub" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Founded in 2021, Tamil News Hub is the digital home for millions of Tamil speakers who want authoritative, balanced, and culturally aware journalism. We believe great reporting can celebrate heritage while driving progress." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16 px-4 sm:px-6 lg:px-8",
        "data-ocid": "about.values_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground uppercase tracking-widest text-center mb-10", children: "Our Values" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: values.map((v, i) => {
            const Icon = v.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `about.value.item.${i + 1}`,
                className: "bg-card border border-border rounded-xl p-6 space-y-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: v.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: v.description })
                ]
              },
              v.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-16 px-4 sm:px-6 lg:px-8",
        "data-ocid": "about.team_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground uppercase tracking-widest text-center mb-10", children: "Our Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: team.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `about.team.item.${i + 1}`,
              className: "bg-card border border-border rounded-xl p-6 text-center space-y-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-primary", children: member.name[0] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-display font-semibold uppercase tracking-wider mt-0.5", children: member.role })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: member.bio })
              ]
            },
            member.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background border-t border-border py-16 px-4 sm:px-6 lg:px-8",
        "data-ocid": "about.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-foreground mb-4", children: "Stay Connected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Follow us on social media or explore our latest coverage for daily updates on everything Tamil." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/news",
                "data-ocid": "about.read_news_button",
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-smooth",
                children: [
                  "Read the News ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/youtube",
                "data-ocid": "about.watch_youtube_button",
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium hover:border-primary/50 hover:text-primary transition-smooth",
                children: "Watch on YouTube"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  AboutPage as default
};
