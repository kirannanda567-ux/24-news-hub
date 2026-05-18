import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DVID6ykA.js";
import { a as articles, B as Badge, C as Clock } from "./articles-0z5i4Fz4.js";
import { B as Button } from "./button-uQgKLJnJ.js";
import { I as Input } from "./input-C6liU1DS.js";
import { y as youtubeChannel, P as Play, U as Users } from "./youtube-D6yNwOIk.js";
import { A as ArrowRight, Z as Zap, G as Globe } from "./zap-BA7-2Rac.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode);
function ArticleCard({
  article,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: `/news/${article.id}`,
      "data-ocid": `news.item.${index}`,
      className: "group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth hover:shadow-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: article.image,
            alt: article.title,
            className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "w-fit text-xs font-display uppercase tracking-wider bg-secondary/15 text-secondary border-secondary/30",
              children: article.category
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth", children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1", children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: article.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              article.readTime,
              " min read"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function VideoCard({
  video,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: video.videoUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      "data-ocid": `youtube.item.${index}`,
      className: "group block bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/50 transition-smooth hover:shadow-elevated",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-muted relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: video.thumbnailUrl,
              alt: video.title,
              className: "w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-smooth group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Play,
            {
              size: 22,
              className: "text-secondary-foreground ml-1",
              fill: "currentColor"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded px-2 py-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-display text-foreground", children: [
            video.views,
            " views"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm text-foreground line-clamp-2 group-hover:text-secondary transition-smooth leading-snug", children: video.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: video.publishedAt })
        ] })
      ]
    }
  );
}
function HomePage() {
  const [email, setEmail] = reactExports.useState("");
  const [subscribed, setSubscribed] = reactExports.useState(false);
  const gridArticles = articles.slice(0, 6);
  const featuredVideos = youtubeChannel.videos.slice(0, 3);
  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[92vh] flex items-end pb-20 overflow-hidden",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-editorial.dim_1600x700.jpg",
                alt: "Tamil News Hub editorial hero",
                className: "w-full h-full object-cover opacity-35"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display uppercase tracking-[0.2em] text-primary", children: "Tamil News Hub" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.04] mb-6", children: [
              "Stay ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Informed" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Stay ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "Ahead" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg", children: "Your premier source for Tamil news, culture, and in-depth analysis — covering everything that matters to the Tamil community worldwide." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/news",
                  "data-ocid": "home.read_latest_button",
                  className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-smooth shadow-elevated text-sm",
                  children: [
                    "Read Latest News ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: youtubeChannel.channelUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-ocid": "home.youtube_hero_button",
                  className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary/15 border border-secondary/40 text-secondary font-display font-semibold hover:bg-secondary/25 transition-smooth text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 15, fill: "currentColor" }),
                    " Subscribe on YouTube"
                  ]
                }
              )
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 px-4 sm:px-6 lg:px-8",
        "data-ocid": "home.news_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display uppercase tracking-[0.2em] text-primary mb-2", children: "Breaking & Latest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Latest News & Updates" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/news",
                "data-ocid": "home.view_all_news_link",
                className: "hidden sm:flex items-center gap-2 text-sm font-display text-primary hover:underline transition-smooth",
                children: [
                  "View all articles ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: gridArticles.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article, index: i + 1 }, article.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/news",
              "data-ocid": "home.view_all_news_mobile_link",
              className: "flex items-center gap-2 text-sm font-display text-primary hover:underline transition-smooth",
              children: [
                "View all articles ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-20 px-4 sm:px-6 lg:px-8 border-t border-border",
        "data-ocid": "home.youtube_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display uppercase tracking-[0.2em] text-secondary mb-2", children: "Video Content" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: "Follow Us on YouTube" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: youtubeChannel.channelUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "home.youtube_subscribe_button",
                className: "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold text-sm hover:opacity-90 transition-smooth shadow-elevated",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 14, fill: "currentColor" }),
                  " Subscribe Now"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/youtube-channel-avatar-transparent.dim_200x200.png",
                alt: "Tamil News Hub channel avatar",
                className: "w-20 h-20 rounded-full border-2 border-secondary/40 object-cover flex-shrink-0"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-1", children: youtubeChannel.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3", children: youtubeChannel.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "text-secondary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-display font-semibold text-secondary", children: [
                  youtubeChannel.subscriberCount,
                  " Subscribers"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: youtubeChannel.channelUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "home.youtube_channel_link",
                className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold text-sm hover:opacity-90 transition-smooth shadow-elevated flex-shrink-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 14 }),
                  " Subscribe Now"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredVideos.map((video, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { video, index: i + 1 }, video.id)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20 px-4 sm:px-6 lg:px-8 border-t border-border",
        "data-ocid": "home.about_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display uppercase tracking-[0.2em] text-primary mb-3", children: "Our Mission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground mb-6", children: "Journalism That Serves the Tamil Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Tamil News Hub was founded with one purpose: to deliver accurate, in-depth, and culturally resonant journalism to Tamil speakers everywhere — from Chennai to Toronto, from Singapore to London." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We cover technology, culture, politics, environment, and entertainment through a Tamil lens — amplifying voices that mainstream media often overlooks. Our editorial team brings decades of combined experience in digital journalism, documentary filmmaking, and investigative reporting." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-5", children: [
            {
              icon: Zap,
              title: "Breaking News",
              desc: "Real-time updates on Tamil Nadu and the global Tamil diaspora — as events unfold.",
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "Covering Tamil communities in 47 countries with local context and global perspective.",
              color: "text-secondary",
              bg: "bg-secondary/10"
            },
            {
              icon: BookOpen,
              title: "Deep Analysis",
              desc: "Long-form journalism and documentary content that goes beyond the headline.",
              color: "text-primary",
              bg: "bg-primary/10"
            }
          ].map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-5 space-y-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { size: 20, className: feature.color })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.desc })
              ]
            },
            feature.title
          )) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-20 px-4 sm:px-6 lg:px-8 border-t border-border",
        "data-ocid": "home.newsletter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 24, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-foreground mb-3", children: "Stay Informed: Subscribe to Our Newsletter" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: "Get the best Tamil news, culture stories, and exclusive video content delivered to your inbox every morning." }),
          subscribed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "home.newsletter_success_state",
              className: "flex flex-col items-center gap-3 py-6 px-8 bg-primary/10 border border-primary/30 rounded-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🎉" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: "You're subscribed!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Welcome to Tamil News Hub. Your first newsletter is on its way." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubscribe,
              className: "flex flex-col sm:flex-row gap-3",
              "data-ocid": "home.newsletter_form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "email",
                    placeholder: "Your email address",
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    required: true,
                    "data-ocid": "home.newsletter_input",
                    className: "flex-1 bg-background border-border focus:border-primary h-12 font-body text-base"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    "data-ocid": "home.newsletter_submit_button",
                    className: "bg-primary text-primary-foreground font-display font-semibold px-8 h-12 hover:opacity-90 transition-smooth flex-shrink-0",
                    children: "Subscribe"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "No spam. Unsubscribe anytime. Read by 45,000+ Tamil readers worldwide." })
        ] })
      }
    )
  ] });
}
export {
  HomePage as default
};
