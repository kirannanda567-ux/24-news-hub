import { FaceLogo } from "@/components/FaceLogo";
import { ArrowRight, Globe, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Globe,
    title: "Global Tamil Voice",
    description:
      "We serve Tamil communities across India, Sri Lanka, Malaysia, Singapore, the UK, and beyond — one community, one platform.",
  },
  {
    icon: Zap,
    title: "Real-Time Reporting",
    description:
      "Breaking news delivered fast, backed by verified sources and rigorous fact-checking. Speed without sacrificing accuracy.",
  },
  {
    icon: Heart,
    title: "Culture First",
    description:
      "We celebrate Tamil arts, language, history, and innovation alongside hard news — because identity matters as much as information.",
  },
];

const team = [
  {
    name: "Arjun Krishnamurthy",
    role: "Editor-in-Chief",
    bio: "20 years covering South Asian politics and technology for leading publications.",
  },
  {
    name: "Priya Balakrishnan",
    role: "Culture & Arts Editor",
    bio: "Scholar of classical Tamil literature and award-winning cultural journalist.",
  },
  {
    name: "Ravi Natarajan",
    role: "Urban & Environment Reporter",
    bio: "Infrastructure and sustainability journalist embedded in Chennai for a decade.",
  },
];

export default function AboutPage() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <div className="bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <FaceLogo size={64} />
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-5">
            About <span className="text-primary">Tamil News Hub</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Founded in 2021, Tamil News Hub is the digital home for millions of
            Tamil speakers who want authoritative, balanced, and culturally
            aware journalism. We believe great reporting can celebrate heritage
            while driving progress.
          </p>
        </div>
      </div>

      {/* Values */}
      <section
        className="bg-background py-16 px-4 sm:px-6 lg:px-8"
        data-ocid="about.values_section"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-foreground uppercase tracking-widest text-center mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  data-ocid={`about.value.item.${i + 1}`}
                  className="bg-card border border-border rounded-xl p-6 space-y-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="bg-muted/30 border-t border-border py-16 px-4 sm:px-6 lg:px-8"
        data-ocid="about.team_section"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-foreground uppercase tracking-widest text-center mb-10">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-ocid={`about.team.item.${i + 1}`}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                  <span className="font-display font-bold text-xl text-primary">
                    {member.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-display font-semibold uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-background border-t border-border py-16 px-4 sm:px-6 lg:px-8"
        data-ocid="about.cta_section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-8">
            Follow us on social media or explore our latest coverage for daily
            updates on everything Tamil.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/news"
              data-ocid="about.read_news_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-smooth"
            >
              Read the News <ArrowRight size={16} />
            </Link>
            <Link
              to="/youtube"
              data-ocid="about.watch_youtube_button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium hover:border-primary/50 hover:text-primary transition-smooth"
            >
              Watch on YouTube
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
