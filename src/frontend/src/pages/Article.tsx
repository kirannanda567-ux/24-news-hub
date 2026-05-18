import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { ArrowLeft, Calendar, Clock, Copy, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div
        className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4"
        data-ocid="article.not_found_state"
      >
        <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center text-4xl">
          📰
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-bold text-3xl text-foreground">
            Article Not Found
          </h1>
          <p className="text-muted-foreground max-w-sm">
            The article you&apos;re looking for doesn&apos;t exist or may have
            been removed.
          </p>
        </div>
        <Link
          to="/news"
          data-ocid="article.back_to_news_link"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-smooth shadow-elevated"
        >
          <ArrowLeft size={15} /> Back to All News
        </Link>
      </div>
    );
  }

  const relatedArticles = articles.filter((a) => a.id !== id).slice(0, 3);

  function handleShare() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          description: "Share this article with your network.",
          duration: 4000,
        });
      })
      .catch(() => {
        toast.error(
          "Could not copy link. Please copy it from the address bar.",
        );
      });
  }

  return (
    <div data-ocid="article.page">
      {/* Full-width hero image */}
      <div className="relative w-full aspect-[21/9] max-h-[520px] bg-muted overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        {/* Breadcrumb overlay */}
        <div className="absolute top-6 left-0 right-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav
              className="flex items-center gap-2 text-xs text-foreground/60"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-primary transition-smooth">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/news"
                data-ocid="article.breadcrumb_news_link"
                className="hover:text-primary transition-smooth"
              >
                News
              </Link>
              <span>/</span>
              <span className="text-foreground/40 truncate max-w-[200px]">
                {article.title}
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-4">
            <Link
              to="/news"
              data-ocid="article.back_link"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              <ArrowLeft size={14} /> Back
            </Link>
            <span className="text-border">|</span>
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-display uppercase tracking-wide text-xs">
              {article.category}
            </Badge>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary" />
                <span>{article.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                <span>{article.readTime} min read</span>
              </span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleShare}
              data-ocid="article.share_button"
              className="flex items-center gap-2 border-border hover:border-primary/50 hover:text-primary transition-smooth"
            >
              <Copy size={14} />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        data-ocid="article.content"
      >
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 italic border-l-2 border-primary pl-5">
          {article.excerpt}
        </p>
        <div className="space-y-6">
          {article.content.split("\n\n").map((paragraph, i) => (
            <p
              // biome-ignore lint/suspicious/noArrayIndexKey: static paragraph split
              key={i}
              className="text-base sm:text-lg text-foreground/80 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Share CTA strip */}
      <div className="border-t border-border bg-card/50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <span className="text-sm text-muted-foreground font-display">
            Found this article useful? Share it with your network.
          </span>
          <Button
            type="button"
            onClick={handleShare}
            data-ocid="article.share_cta_button"
            className="flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 transition-smooth"
          >
            <Copy size={14} /> Copy Link
          </Button>
        </div>
      </div>

      {/* Related articles */}
      <section
        className="bg-muted/30 border-t border-border py-14 px-4 sm:px-6 lg:px-8"
        data-ocid="article.related_section"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-xl text-foreground mb-8 uppercase tracking-widest">
            More Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((a, i) => (
              <Link
                key={a.id}
                to={`/news/${a.id}`}
                data-ocid={`article.related.item.${i + 1}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth hover:shadow-elevated"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <Badge className="text-xs bg-secondary/20 text-secondary border-secondary/30 font-display uppercase tracking-wide">
                    {a.category}
                  </Badge>
                  <h3 className="font-display font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {a.readTime} min
                    </span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
