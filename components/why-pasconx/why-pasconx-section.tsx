"use client";

import React from "react";
import { Video, Terminal, FolderGit2, UserCheck, Cpu, Layers } from "lucide-react";

const PILLARS = [
  {
    icon: Video,
    title: "LIVE INSTRUCTOR-LED LEARNING",
    description: "Learn directly through structured live sessions with active practitioners. Ask questions in real time.",
  },
  {
    icon: Terminal,
    title: "HANDS-ON LABS",
    description: "Practice directly in isolated cloud environments, CLI terminals, and SIEM security dashboards.",
  },
  {
    icon: FolderGit2,
    title: "REAL-WORLD PROJECTS",
    description: "Build portfolio projects simulating real microservice deployments, REST APIs, and SOC incident triage.",
  },
  {
    icon: UserCheck,
    title: "CAREER PREPARATION",
    description: "Tailored technical interview preparation, resume refinement, and direct tutor feedback.",
  },
  {
    icon: Cpu,
    title: "PRACTICAL TECHNOLOGY SKILLS",
    description: "Focus strictly on actionable engineering workflows, tools, and industry standards.",
  },
  {
    icon: Layers,
    title: "MULTI-DOMAIN LEARNING",
    description: "Explore interconnected technologies across DevOps, Software Engineering, Data, Security, and AI.",
  },
];

export function WhyPasconXSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              THE ACADEMY DIFFERENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Why PASCON <span className="text-accent">X</span>?
          </h2>
          <p className="text-muted text-base md:text-lg">
            Built like an engineering platform — focused entirely on hands-on practical skills over passive video lectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-border bg-card p-8 space-y-4 hover:border-accent/40 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-mono tracking-wide text-foreground group-hover:text-accent transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
