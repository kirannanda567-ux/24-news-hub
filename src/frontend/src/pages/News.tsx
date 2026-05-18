import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { articles } from "@/data/articles";
import { Clock, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ALL_CATEGORIES = "All";

function getCategories(list: typeof articles) {
  const cats = Array.from(new Set(list.map((a) => a.category)));
  return [ALL_CATEGORIES, ...cats];
}

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);

  const categories = getCategories(articles);

  const filtered = articles.filter((a) => {
    const matchCat =
      activeCategory === ALL_CATEGORIES || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div data-ocid="news.page">
      {/* Page header */}
      <div className="bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-3 leading-tight">
            All News &amp; Updates
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Breaking stories, in-depth analysis, and investigative journalism
            for the Tamil community worldwide.
          </p>
        </div>
      </div>

      {/* Search + category filter */}
      <div className="bg-card/80 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              data-ocid="news.search_input"
              className="pl-8 bg-background border-input text-sm h-9"
            />
          </div>

          {/* Category tabs */}
          <div
            className="flex items-center gap-2 flex-wrap"
            aria-label="Filter by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-ocid={`news.filter.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                className={[
                  "px-3 py-1.5 rounded-full text-xs font-display font-semibold uppercase tracking-wide border transition-smooth",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <section
        className="bg-background py-12 px-4 sm:px-6 lg:px-8"
        data-ocid="news.articles_section"
      >
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 gap-4 text-center"
              data-ocid="news.empty_state"
            >
              <span className="text-4xl">🔍</span>
              <h2 className="font-display font-bold text-xl text-foreground">
                No articles found
              </h2>
              <p className="text-muted-foreground text-sm max-w-xs">
                Try adjusting your search or selecting a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory(ALL_CATEGORIES);
                }}
                data-ocid="news.clear_filters_button"
                className="mt-2 text-sm text-primary hover:underline transition-smooth"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs text-muted-foreground mb-6 font-display uppercase tracking-widest">
                {filtered.length} {filtered.length === 1 ? "story" : "stories"}
                {activeCategory !== ALL_CATEGORIES
                  ? ` in ${activeCategory}`
                  : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((article, i) => (
                  <Link
                    key={article.id}
                    to={`/news/${article.id}`}
                    data-ocid={`news.item.${i + 1}`}
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth hover:shadow-elevated"
                  >
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 space-y-3">
                      <Badge
                        variant="secondary"
                        className="text-xs font-display uppercase tracking-wide bg-secondary/20 text-secondary border-secondary/30"
                      >
                        {article.category}
                      </Badge>
                      <h2 className="font-display font-bold text-base text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-smooth">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-muted-foreground">
                          By {article.author}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={11} /> {article.readTime} min read
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
