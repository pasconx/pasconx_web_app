"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROGRAMMES } from "@/lib/programmes";
import { ArrowUpRight, Clock, Monitor } from "lucide-react";

interface CohortCardTheme {
  cardGlowNormal: string;
  cardGlowHover: string;
  cardBorderHover: string;
  titleHoverColor: string;
  categoryBadge: string;
  statusBadge: (status: string) => string;
  dividerGradient: string;
  iconColor: string;
  statusTextColor: string;
  detailsHoverStyle: string;
}

const COHORT_THEMES: Record<string, CohortCardTheme> = {
  devops: {
    // Primary: Electric Blue, Secondary: Cyan
    cardGlowNormal:
      "radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.08) 0%, transparent 65%)",
    cardGlowHover:
      "radial-gradient(circle at 85% 15%, rgba(37, 99, 235, 0.16) 0%, transparent 70%)",
    cardBorderHover:
      "hover:border-cyan-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(6,182,212,0.18)]",
    titleHoverColor: "group-hover:text-cyan-300",
    categoryBadge: "bg-cyan-500/[0.08] border-cyan-400/45 text-cyan-300",
    statusBadge: () =>
      "bg-cyan-500/[0.09] text-cyan-300 border-cyan-400/45 shadow-[0_0_10px_rgba(6,182,212,0.12)]",
    dividerGradient:
      "bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent",
    iconColor: "text-cyan-400",
    statusTextColor: "text-cyan-400",
    detailsHoverStyle:
      "hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]",
  },
  "python-fullstack": {
    // Primary: Python Blue, Secondary: Python Yellow
    cardGlowNormal:
      "radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.07) 0%, transparent 65%)",
    cardGlowHover:
      "radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
    cardBorderHover:
      "hover:border-amber-400/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(245,158,11,0.16)]",
    titleHoverColor: "group-hover:text-amber-300",
    categoryBadge: "bg-amber-400/[0.08] border-amber-400/45 text-amber-300",
    statusBadge: () =>
      "bg-amber-400/[0.09] text-amber-300 border-amber-400/45 shadow-[0_0_10px_rgba(245,158,11,0.12)]",
    dividerGradient:
      "bg-gradient-to-r from-transparent via-amber-400/35 to-transparent",
    iconColor: "text-amber-400",
    statusTextColor: "text-amber-400",
    detailsHoverStyle:
      "hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]",
  },
  "java-fullstack": {
    // Primary: Java Red, Secondary: Orange
    cardGlowNormal:
      "radial-gradient(circle at 85% 15%, rgba(234, 88, 12, 0.08) 0%, transparent 65%)",
    cardGlowHover:
      "radial-gradient(circle at 85% 15%, rgba(239, 68, 68, 0.16) 0%, transparent 70%)",
    cardBorderHover:
      "hover:border-orange-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(234,88,12,0.18)]",
    titleHoverColor: "group-hover:text-orange-300",
    categoryBadge: "bg-orange-500/[0.08] border-orange-400/45 text-orange-300",
    statusBadge: () =>
      "bg-orange-500/[0.09] text-orange-300 border-orange-400/45 shadow-[0_0_10px_rgba(249,115,22,0.12)]",
    dividerGradient:
      "bg-gradient-to-r from-transparent via-orange-500/35 to-transparent",
    iconColor: "text-orange-400",
    statusTextColor: "text-orange-400",
    detailsHoverStyle:
      "hover:text-orange-300 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]",
  },
  "data-analyst": {
    // Primary: Teal / Cyan, Secondary: Green
    cardGlowNormal:
      "radial-gradient(circle at 85% 15%, rgba(20, 184, 166, 0.08) 0%, transparent 65%)",
    cardGlowHover:
      "radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.16) 0%, transparent 70%)",
    cardBorderHover:
      "hover:border-teal-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(20,184,166,0.18)]",
    titleHoverColor: "group-hover:text-teal-300",
    categoryBadge: "bg-teal-500/[0.08] border-teal-400/45 text-teal-300",
    statusBadge: (status) =>
      status === "ENROLMENT OPEN"
        ? "bg-emerald-500/[0.09] text-emerald-300 border-emerald-400/45 shadow-[0_0_10px_rgba(16,185,129,0.12)]"
        : "bg-teal-500/[0.09] text-teal-300 border-teal-400/45 shadow-[0_0_10px_rgba(20,184,166,0.12)]",
    dividerGradient:
      "bg-gradient-to-r from-transparent via-teal-500/35 to-transparent",
    iconColor: "text-teal-400",
    statusTextColor: "text-emerald-400",
    detailsHoverStyle:
      "hover:text-teal-300 hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]",
  },
  cybersecurity: {
    // Primary: Blue, Secondary: Purple
    cardGlowNormal:
      "radial-gradient(circle at 85% 15%, rgba(99, 102, 241, 0.09) 0%, transparent 65%)",
    cardGlowHover:
      "radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.17) 0%, transparent 70%)",
    cardBorderHover:
      "hover:border-indigo-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(99,102,241,0.2)]",
    titleHoverColor: "group-hover:text-indigo-300",
    categoryBadge: "bg-indigo-500/[0.08] border-indigo-400/45 text-indigo-300",
    statusBadge: (status) =>
      status === "ENROLMENT OPEN"
        ? "bg-emerald-500/[0.09] text-emerald-300 border-emerald-400/45 shadow-[0_0_10px_rgba(16,185,129,0.12)]"
        : "bg-indigo-500/[0.09] text-indigo-300 border-indigo-400/45 shadow-[0_0_10px_rgba(99,102,241,0.12)]",
    dividerGradient:
      "bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent",
    iconColor: "text-indigo-400",
    statusTextColor: "text-emerald-400",
    detailsHoverStyle:
      "hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]",
  },
  "aiml-engineer": {
    // Primary: Violet / Purple, Secondary: Cyan
    cardGlowNormal:
      "radial-gradient(circle at 85% 15%, rgba(168, 85, 247, 0.08) 0%, transparent 65%)",
    cardGlowHover:
      "radial-gradient(circle at 85% 15%, rgba(192, 132, 252, 0.16) 0%, transparent 70%)",
    cardBorderHover:
      "hover:border-purple-500/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.18)]",
    titleHoverColor: "group-hover:text-purple-300",
    categoryBadge: "bg-purple-500/[0.08] border-purple-400/45 text-purple-300",
    statusBadge: () =>
      "bg-amber-500/[0.09] text-amber-300 border-amber-400/45 shadow-[0_0_10px_rgba(245,158,11,0.12)]",
    dividerGradient:
      "bg-gradient-to-r from-transparent via-purple-500/35 to-transparent",
    iconColor: "text-purple-400",
    statusTextColor: "text-amber-400",
    detailsHoverStyle:
      "hover:text-purple-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]",
  },
};

const defaultTheme: CohortCardTheme = {
  cardGlowNormal:
    "radial-gradient(circle at 85% 15%, rgba(20, 108, 255, 0.08) 0%, transparent 65%)",
  cardGlowHover:
    "radial-gradient(circle at 85% 15%, rgba(20, 108, 255, 0.16) 0%, transparent 70%)",
  cardBorderHover:
    "hover:border-[#146cff]/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(20,108,255,0.18)]",
  titleHoverColor: "group-hover:text-[#72aeff]",
  categoryBadge: "bg-[#146cff]/[0.08] border-[#146cff]/45 text-[#72aeff]",
  statusBadge: () => "bg-surface text-muted border-border",
  dividerGradient: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
  iconColor: "text-accent",
  statusTextColor: "text-accent",
  detailsHoverStyle: "hover:text-accent",
};

const CATEGORIES = [
  "ALL",
  "Cloud & DevOps",
  "Full Stack",
  "Data",
  "Cybersecurity",
  "AI / ML",
] as const;

export function UpcomingCohorts({ showFilters = true }: { showFilters?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredProgrammes =
    selectedCategory === "ALL"
      ? PROGRAMMES
      : PROGRAMMES.filter((p) => p.category === selectedCategory);

  return (
    <section id="upcoming" className="py-24 relative bg-surface/50 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                ON THE HORIZON
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Upcoming <br />
              <span className="text-gradient-blue">programmes & cohorts.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted max-w-md">
            Review next cohort availability, learning format, and registration windows for all technology domains.
          </p>
        </div>

        {/* Filter Tabs */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-border/60">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const categoryHover =
                cat === "Cloud & DevOps"
                  ? "hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/20"
                  : cat === "Full Stack"
                  ? "hover:border-amber-400/50 hover:text-amber-300 hover:bg-amber-950/20"
                  : cat === "Data"
                  ? "hover:border-teal-500/50 hover:text-teal-300 hover:bg-teal-950/20"
                  : cat === "Cybersecurity"
                  ? "hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-indigo-950/20"
                  : cat === "AI / ML"
                  ? "hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-950/20"
                  : "hover:border-[#146cff]/50 hover:text-white hover:bg-[#146cff]/10";

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 border ${
                    isSelected
                      ? "bg-[#146cff] border-[#146cff] text-white font-bold shadow-[0_0_16px_rgba(20,108,255,0.4)]"
                      : `bg-[#060a12] border-white/[0.14] text-white/70 ${categoryHover}`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Cohort Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((prog) => {
            const theme = COHORT_THEMES[prog.slug] || defaultTheme;

            return (
              <div
                key={prog.slug}
                className={`group relative rounded-2xl border border-white/[0.12] bg-[#060a12] p-6 flex flex-col justify-between transition-all duration-300 space-y-6 overflow-hidden ${theme.cardBorderHover}`}
              >
                {/* Subtle Ambient Technology Glow Inside Card */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundImage: theme.cardGlowHover }}
                  aria-hidden="true"
                />

                <div className="space-y-4 relative z-10">
                  {/* Category and Status Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border font-bold ${theme.categoryBadge}`}
                    >
                      {prog.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full font-bold border ${theme.statusBadge(
                        prog.status
                      )}`}
                    >
                      {prog.status}
                    </span>
                  </div>

                  {/* Programme Title */}
                  <h3 className="text-xl font-extrabold text-white transition-colors duration-200">
                    <span className={`${theme.titleHoverColor} transition-colors duration-200`}>
                      {prog.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/75 leading-relaxed line-clamp-2">
                    {prog.shortDescription}
                  </p>
                </div>

                {/* Card Meta and Footer */}
                <div className="pt-4 space-y-4 relative z-10">
                  {/* Subtle Accent Divider */}
                  <div className={`h-[1px] w-full ${theme.dividerGradient}`} />

                  {/* Meta Information */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-white/75">
                    <div className="flex items-center gap-1.5">
                      <Clock className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Monitor className={`w-3.5 h-3.5 ${theme.iconColor}`} />
                      <span>{prog.format}</span>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${theme.statusTextColor}`}>
                      {prog.status === "ENROLMENT OPEN"
                        ? "Enrolling Now"
                        : prog.status === "NEXT COHORT"
                        ? "Next Cohort"
                        : "Coming Soon"}
                    </span>
                    <Link
                      href={`/programmes/${prog.slug}`}
                      className={`group/btn text-xs font-bold font-mono uppercase tracking-wider text-white/80 transition-all duration-200 flex items-center gap-1 ${theme.detailsHoverStyle}`}
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
