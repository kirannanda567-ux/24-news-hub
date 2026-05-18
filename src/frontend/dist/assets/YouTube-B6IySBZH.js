import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-DVID6ykA.js";
import { P as Play, y as youtubeChannel, U as Users } from "./youtube-D6yNwOIk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
function YouTubePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "youtube.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Play,
        {
          size: 32,
          className: "text-secondary ml-1",
          fill: "currentColor"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground mb-1", children: youtubeChannel.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-display font-semibold text-primary", children: [
            youtubeChannel.subscriberCount,
            " subscribers"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-2xl leading-relaxed", children: youtubeChannel.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: youtubeChannel.channelUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          "data-ocid": "youtube.subscribe_button",
          className: "flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold hover:opacity-90 transition-smooth whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, fill: "currentColor" }),
            " Subscribe on YouTube"
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-12 px-4 sm:px-6 lg:px-8",
        "data-ocid": "youtube.videos_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground uppercase tracking-widest mb-8", children: "Latest Videos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8", children: youtubeChannel.videos.map((video, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: video.videoUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": `youtube.video.item.${i + 1}`,
              className: "group block bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/40 transition-smooth hover:shadow-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-muted flex items-center justify-center relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: video.thumbnailUrl,
                      alt: video.title,
                      className: "w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-smooth"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center shadow-elevated group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Play,
                    {
                      size: 26,
                      className: "text-secondary-foreground ml-1",
                      fill: "currentColor"
                    }
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 right-3 bg-background/80 px-2 py-1 rounded text-xs font-display text-foreground", children: [
                    video.views,
                    " views"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground line-clamp-2 group-hover:text-secondary transition-smooth", children: video.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed", children: video.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: video.publishedAt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 11 }),
                      " Watch on YouTube"
                    ] })
                  ] })
                ] })
              ]
            },
            video.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-16 px-4 sm:px-6 lg:px-8",
        "data-ocid": "youtube.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Play,
            {
              size: 28,
              className: "text-secondary ml-1",
              fill: "currentColor"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-foreground mb-4", children: "Never Miss a Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-8 max-w-lg mx-auto", children: [
            "Join ",
            youtubeChannel.subscriberCount,
            " subscribers who trust Tamil News Hub for daily coverage of the stories that matter."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: youtubeChannel.channelUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "youtube.cta_subscribe_button",
              className: "inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold text-lg hover:opacity-90 transition-smooth shadow-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 20, fill: "currentColor" }),
                " Subscribe Now — It's Free"
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  YouTubePage as default
};
