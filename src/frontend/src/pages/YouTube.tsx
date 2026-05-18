import { youtubeChannel } from "@/data/youtube";
import { ExternalLink, Play, Users } from "lucide-react";

export default function YouTubePage() {
  return (
    <div data-ocid="youtube.page">
      {/* Channel header */}
      <div className="bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0 shadow-elevated">
              <Play
                size={32}
                className="text-secondary ml-1"
                fill="currentColor"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-3xl text-foreground mb-1">
                {youtubeChannel.name}
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-primary" />
                <span className="text-sm font-display font-semibold text-primary">
                  {youtubeChannel.subscriberCount} subscribers
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {youtubeChannel.description}
              </p>
            </div>
            <a
              href={youtubeChannel.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="youtube.subscribe_button"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold hover:opacity-90 transition-smooth whitespace-nowrap"
            >
              <Play size={16} fill="currentColor" /> Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Videos grid */}
      <section
        className="bg-background py-12 px-4 sm:px-6 lg:px-8"
        data-ocid="youtube.videos_section"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-xl text-foreground uppercase tracking-widest mb-8">
            Latest Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {youtubeChannel.videos.map((video, i) => (
              <a
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`youtube.video.item.${i + 1}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-secondary/40 transition-smooth hover:shadow-elevated"
              >
                <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center shadow-elevated group-hover:scale-110 transition-smooth">
                      <Play
                        size={26}
                        className="text-secondary-foreground ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-background/80 px-2 py-1 rounded text-xs font-display text-foreground">
                    {video.views} views
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-bold text-base text-foreground line-clamp-2 group-hover:text-secondary transition-smooth">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-muted-foreground">
                      {video.publishedAt}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-primary">
                      <ExternalLink size={11} /> Watch on YouTube
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="bg-muted/30 border-t border-border py-16 px-4 sm:px-6 lg:px-8"
        data-ocid="youtube.cta_section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mx-auto mb-5">
            <Play
              size={28}
              className="text-secondary ml-1"
              fill="currentColor"
            />
          </div>
          <h2 className="font-display font-bold text-3xl text-foreground mb-4">
            Never Miss a Story
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Join {youtubeChannel.subscriberCount} subscribers who trust Tamil
            News Hub for daily coverage of the stories that matter.
          </p>
          <a
            href={youtubeChannel.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="youtube.cta_subscribe_button"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold text-lg hover:opacity-90 transition-smooth shadow-elevated"
          >
            <Play size={20} fill="currentColor" /> Subscribe Now — It&apos;s
            Free
          </a>
        </div>
      </section>
    </div>
  );
}
