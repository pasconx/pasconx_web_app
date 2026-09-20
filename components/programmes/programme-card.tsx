"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Programme } from "@/lib/programmes";
import { ArrowUpRight, Clock, Layers, Sparkles } from "lucide-react";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  // Map slugs to visual images
  const imageMap: Record<string, string> = {
    devops: "/assets/programmes/devops.png",
    "python-fullstack": "/assets/programmes/python.png",
    "java-fullstack": "/assets/programmes/java.png",
    "data-analyst": "/assets/programmes/python.png",
    cybersecurity: "/assets/programmes/soc.png",
    "aiml-engineer": "/assets/programmes/vapt.png",
  };

  const bgImage = imageMap[programme.slug] || "/assets/programmes/devops.png";

  return (
    <div className="group relative rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-glow-md flex flex-col justify-between overflow-hidden">
      {/* Top Banner Image & Gradient Scrim */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface">
        <Image
          src={bgImage}
          alt={programme.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full bg-surface/80 border border-border backdrop-blur-md text-accent font-semibold">
            {programme.category}
          </span>
          <span
            className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full font-bold backdrop-blur-md ${
              programme.status === "ENROLMENT OPEN"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : programme.status === "NEXT COHORT"
                ? "bg-accent/20 text-accent-light border border-accent/40"
                : "bg-surface/80 text-muted border border-border"
            }`}
          >
            {programme.status}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 relative z-10 -mt-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
            <span>{programme.title}</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-accent" />
          </h3>

          <p className="text-sm text-muted mt-2.5 line-clamp-3 leading-relaxed">
            {programme.shortDescription}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted">Core Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {programme.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-surface border border-border/70 text-foreground/80"
              >
                {tech}
              </span>
            ))}
            {programme.technologies.length > 6 && (
              <span className="px-2 py-1 text-[11px] font-mono rounded-md bg-surface text-muted">
                +{programme.technologies.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Meta & Action */}
        <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {programme.duration}
            </span>
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-accent" />
              {programme.level}
            </span>
          </div>

          <Link
            href={`/programmes/${programme.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-light transition-colors flex items-center gap-1"
          >
            <span>View Programme</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
