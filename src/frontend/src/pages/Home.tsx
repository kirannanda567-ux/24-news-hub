import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { articles } from "@/data/articles";
import { youtubeChannel } from "@/data/youtube";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Clock,
  Globe,
  Play,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Article Card ────────────────────────────────────────────────────────────
function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  return (
    <Link
      to={`/news/${article.id}`}
      data-ocid={`news.item.${index}`}
      className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth hover:shadow-elevated"
    >
      <div className="aspect-video bg-muted overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <Badge
          variant="secondary"
          className="w-fit text-xs font-display uppercase tracking-wider bg-secondary/15 text-secondary border-secondary/30"
        >
          {article.category}
        </Badge>
        <h3 className="font-display font-bold text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="text-xs text-muted-foreground">{article.date}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={11} />
            {article.readTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── YouTube Video Card ──────────────────────────────────────────────────────
function VideoCard({
  video,
  index,
}: {
  video: (typeof youtubeChannel.videos)[0];
  index: number;
}) {
  return (
    <a
      href={video.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={`youtube.item.${index}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/50 transition-smooth hover:shadow-elevated"
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-elevated group-hover:scale-110 transition-smooth">
            <Play
              size={22}
              className="text-secondary-foreground ml-1"
              fill="currentColor"
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded px-2 py-0.5">
          <span className="text-xs font-display text-foreground">
            {video.views} views
          </span>
        </div>
      </div>
      <div className="p-4 space-y-1.5">
        <h4 className="font-display font-semibold text-sm text-foreground line-clamp-2 group-hover:text-secondary transition-smooth leading-snug">
          {video.title}
        </h4>
        <span className="text-xs text-muted-foreground">
          {video.publishedAt}
        </span>
      </div>
    </a>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const gridArticles = articles.slice(0, 6);
  const featuredVideos = youtubeChannel.videos.slice(0, 3);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <div data-ocid="home.page">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-end pb-20 overflow-hidden"
        data-ocid="home.hero_section"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/hero-editorial.dim_1600x700.jpg"
            alt="Tamil News Hub editorial hero"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
        </div>

        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-display uppercase tracking-[0.2em] text-primary">
                Tamil News Hub
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.04] mb-6">
              Stay <span className="text-primary">Informed</span>,
              <br />
              Stay <span className="text-secondary">Ahead</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Your premier source for Tamil news, culture, and in-depth analysis
              — covering everything that matters to the Tamil community
              worldwide.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/news"
                data-ocid="home.read_latest_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-smooth shadow-elevated text-sm"
              >
                Read Latest News <ArrowRight size={16} />
              </Link>
              <a
                href={youtubeChannel.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="home.youtube_hero_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary/15 border border-secondary/40 text-secondary font-display font-semibold hover:bg-secondary/25 transition-smooth text-sm"
              >
                <Play size={15} fill="currentColor" /> Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── News Feed ────────────────────────────────────────────────────── */}
      <section
        className="bg-background py-20 px-4 sm:px-6 lg:px-8"
        data-ocid="home.news_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-display uppercase tracking-[0.2em] text-primary mb-2">
                Breaking &amp; Latest
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Latest News &amp; Updates
              </h2>
            </div>
            <Link
              to="/news"
              data-ocid="home.view_all_news_link"
              className="hidden sm:flex items-center gap-2 text-sm font-display text-primary hover:underline transition-smooth"
            >
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridArticles.map((article, i) => (
              <ArticleCard key={article.id} article={article} index={i + 1} />
            ))}
          </div>
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              to="/news"
              data-ocid="home.view_all_news_mobile_link"
              className="flex items-center gap-2 text-sm font-display text-primary hover:underline transition-smooth"
            >
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── YouTube Channel ──────────────────────────────────────────────── */}
      <section
        className="bg-muted/30 py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
        data-ocid="home.youtube_section"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-display uppercase tracking-[0.2em] text-secondary mb-2">
                Video Content
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Follow Us on YouTube
              </h2>
            </div>
            <a
              href={youtubeChannel.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.youtube_subscribe_button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold text-sm hover:opacity-90 transition-smooth shadow-elevated"
            >
              <Play size={14} fill="currentColor" /> Subscribe Now
            </a>
          </div>

          {/* Channel info card */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="/assets/generated/youtube-channel-avatar-transparent.dim_200x200.png"
              alt="Tamil News Hub channel avatar"
              className="w-20 h-20 rounded-full border-2 border-secondary/40 object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {youtubeChannel.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                {youtubeChannel.description}
              </p>
              <div className="flex items-center gap-2">
                <Users size={14} className="text-secondary" />
                <span className="text-sm font-display font-semibold text-secondary">
                  {youtubeChannel.subscriberCount} Subscribers
                </span>
              </div>
            </div>
            <a
              href={youtubeChannel.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="home.youtube_channel_link"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold text-sm hover:opacity-90 transition-smooth shadow-elevated flex-shrink-0"
            >
              <Bell size={14} /> Subscribe Now
            </a>
          </div>

          {/* Video previews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section
        className="bg-background py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
        data-ocid="home.about_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-display uppercase tracking-[0.2em] text-primary mb-3">
                Our Mission
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
                Journalism That Serves the Tamil Community
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tamil News Hub was founded with one purpose: to deliver
                accurate, in-depth, and culturally resonant journalism to Tamil
                speakers everywhere — from Chennai to Toronto, from Singapore to
                London.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We cover technology, culture, politics, environment, and
                entertainment through a Tamil lens — amplifying voices that
                mainstream media often overlooks. Our editorial team brings
                decades of combined experience in digital journalism,
                documentary filmmaking, and investigative reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-5">
              {[
                {
                  icon: Zap,
                  title: "Breaking News",
                  desc: "Real-time updates on Tamil Nadu and the global Tamil diaspora — as events unfold.",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "Covering Tamil communities in 47 countries with local context and global perspective.",
                  color: "text-secondary",
                  bg: "bg-secondary/10",
                },
                {
                  icon: BookOpen,
                  title: "Deep Analysis",
                  desc: "Long-form journalism and documentary content that goes beyond the headline.",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-xl p-5 space-y-3"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center`}
                  >
                    <feature.icon size={20} className={feature.color} />
                  </div>
                  <h4 className="font-display font-bold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────────────── */}
      <section
        className="bg-muted/40 py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
        data-ocid="home.newsletter_section"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <Bell size={24} className="text-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl text-foreground mb-3">
            Stay Informed: Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Get the best Tamil news, culture stories, and exclusive video
            content delivered to your inbox every morning.
          </p>

          {subscribed ? (
            <div
              data-ocid="home.newsletter_success_state"
              className="flex flex-col items-center gap-3 py-6 px-8 bg-primary/10 border border-primary/30 rounded-xl"
            >
              <span className="text-2xl">🎉</span>
              <p className="font-display font-bold text-foreground">
                You&apos;re subscribed!
              </p>
              <p className="text-sm text-muted-foreground">
                Welcome to Tamil News Hub. Your first newsletter is on its way.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
              data-ocid="home.newsletter_form"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-ocid="home.newsletter_input"
                className="flex-1 bg-background border-border focus:border-primary h-12 font-body text-base"
              />
              <Button
                type="submit"
                data-ocid="home.newsletter_submit_button"
                className="bg-primary text-primary-foreground font-display font-semibold px-8 h-12 hover:opacity-90 transition-smooth flex-shrink-0"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            No spam. Unsubscribe anytime. Read by 45,000+ Tamil readers
            worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
