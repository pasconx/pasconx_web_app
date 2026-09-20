"use client";

import React from "react";
import { BookOpen, Terminal, Code2, TrendingUp, CheckCircle2 } from "lucide-react";

const STAGES = [
  {
    number: "01",
    title: "LEARN",
    subtitle: "Build strong technical foundations",
    description:
      "Deep-dive into architectural principles, language fundamentals, and core concepts guided live by industry practitioners.",
    icon: BookOpen,
    highlights: ["Instructor-Led Live Sessions", "Architectural Blueprints", "Core Theory & Best Practices"],
  },
  {
    number: "02",
    title: "PRACTICE",
    subtitle: "Apply concepts through hands-on labs",
    description:
      "Test your understanding immediately in guided cloud labs, virtual terminal environments, and live debugging sessions.",
    icon: Terminal,
    highlights: ["Isolated Virtual Environments", "Guided CLI & SIEM Labs", "Real-time Mentor Troubleshooting"],
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Work on realistic projects",
    description:
      "Construct end-to-end production applications, microservice pipelines, data dashboards, or security audit logs.",
    icon: Code2,
    highlights: ["Production-Grade Codebase", "Git-based Workflows", "Peer & Tutor Code Reviews"],
  },
  {
    number: "04",
    title: "GROW",
    subtitle: "Prepare for real-world tech careers",
    description:
      "Refine your technical resume, practice mock engineering interviews, and build a defensible portfolio of real work.",
    icon: TrendingUp,
    highlights: ["Technical Interview Prep", "Defensible Work Portfolio", "Direct Tutor Mentorship"],
  },
];

export function MethodSection() {
  return (
    <section id="approach" className="py-24 relative bg-surface/50 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              LEARNING PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            The PASCON <span className="text-accent">X</span> Method
          </h2>

          <p className="text-muted text-base md:text-lg">
            A structured four-phase learning methodology designed to transform curious learners into calm, methodical IT experts.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between hover:border-accent/50 transition-all duration-300 hover:shadow-glow-sm"
              >
                <div className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-accent">
                      {stage.number}
                    </span>
                    <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono text-accent-light mt-1 font-semibold">
                      {stage.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-muted leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-6 border-t border-border/50 mt-6 space-y-2">
                  {stage.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
