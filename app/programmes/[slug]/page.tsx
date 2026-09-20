import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROGRAMMES } from "@/lib/programmes";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowUpRight, CheckCircle2, Clock, Layers, Monitor, Terminal, BookOpen, Code2, UserCheck } from "lucide-react";

export function generateStaticParams() {
  return PROGRAMMES.map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = PROGRAMMES.find((p) => p.slug === slug);
  if (!programme) return {};

  return {
    title: `${programme.title} Programme | PASCON X`,
    description: programme.shortDescription,
  };
}

export default async function ProgrammeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = PROGRAMMES.find((p) => p.slug === slug);

  if (!programme) {
    notFound();
  }

  const waUrl = WHATSAPP_LINK(programme.title);

  return (
    <div className="pt-28 pb-20 min-h-screen space-y-16">
      {/* Top Banner / Hero Header */}
      <section className="bg-surface/60 border-b border-border py-16 relative overflow-hidden tech-grid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-8 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-mono tracking-wider uppercase rounded-full bg-accent/10 border border-accent/30 text-accent font-bold">
              {programme.category}
            </span>
            <span
              className={`px-3.5 py-1 text-xs font-mono tracking-wider uppercase rounded-full font-bold ${
                programme.status === "ENROLMENT OPEN"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : programme.status === "NEXT COHORT"
                  ? "bg-accent/20 text-accent-light border border-accent/40"
                  : "bg-surface text-muted border border-border"
              }`}
            >
              {programme.status}
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight">
              {programme.title} <span className="text-gradient-blue">Programme</span>
            </h1>
            <p className="text-base sm:text-xl text-muted leading-relaxed font-normal">
              {programme.fullDescription}
            </p>
          </div>

          {/* Key Attributes Meta Grid */}
          <div className="pt-6 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-muted uppercase block text-[10px]">Duration</span>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>{programme.duration}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-muted uppercase block text-[10px]">Learning Format</span>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Monitor className="w-4 h-4 text-accent" />
                <span>{programme.format}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-muted uppercase block text-[10px]">Experience Level</span>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Layers className="w-4 h-4 text-accent" />
                <span>{programme.level}</span>
              </div>
            </div>

            <div className="flex items-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider rounded-full bg-accent text-white hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <span>Enrol / Inquire</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left 8 Cols: Syllabus & Projects */}
        <div className="lg:col-span-8 space-y-16">
          {/* Core Technologies */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Terminal className="w-5 h-5 text-accent" />
              <span>Technologies You'll Master</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {programme.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg border border-border bg-card text-xs font-mono font-bold text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Curriculum Modules */}
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">SYLLABUS BLUEPRINT</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Curriculum Modules</h2>
            </div>

            <div className="space-y-6">
              {programme.modules.map((mod) => (
                <div
                  key={mod.number}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4 hover:border-accent/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      MODULE {mod.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{mod.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{mod.description}</p>

                  <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {mod.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-xs font-mono text-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real-World Projects */}
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">PRACTICAL BUILD</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Real-World Capstone Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programme.projects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-border bg-card p-6 space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-accent/10 text-accent">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{project.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techUsed.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface text-accent font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right 4 Cols: Sticky Sidebar Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-8 space-y-8 shadow-glow-sm">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">CAREER TARGETS</span>
              <h3 className="text-xl font-bold text-foreground">Target Role Profiles</h3>
              <p className="text-xs text-muted">Positions this curriculum prepares you to interview for:</p>
            </div>

            <div className="space-y-3">
              {programme.careerRoles.map((role) => (
                <div key={role} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface text-xs font-mono text-foreground font-semibold">
                  <UserCheck className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{role}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border space-y-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider rounded-full bg-accent text-white hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <span>Ask Tutor on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="w-full py-3 px-6 text-xs font-bold uppercase tracking-wider rounded-full border border-border bg-surface text-foreground hover:border-accent transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Form Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
