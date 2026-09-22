"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Programme } from "@/lib/programmes";
import { ArrowUpRight, Clock, Layers } from "lucide-react";

interface ThemeConfig {
  cardHoverBorder: string;
  cardHoverShadow: string;
  titleHoverColor: string;
  titleArrowColor: string;
  categoryBadge: string;
  getTagStyle: (tech: string) => string;
}

const THEMES: Record<string, ThemeConfig> = {
  devops: {
    // Primary: electric blue, Secondary: cyan
    cardHoverBorder: "hover:border-cyan-500/50",
    cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(6,182,212,0.16)]",
    titleHoverColor: "group-hover:text-cyan-300",
    titleArrowColor: "text-cyan-400",
    categoryBadge: "bg-cyan-500/[0.08] border-cyan-400/45 text-cyan-300",
    getTagStyle: (tech: string) => {
      const lower = tech.toLowerCase();
      if (
        lower.includes("aws") ||
        lower.includes("docker") ||
        lower.includes("kubernetes") ||
        lower.includes("terraform")
      ) {
        return "border-cyan-500/40 text-cyan-200 bg-cyan-950/25 hover:border-cyan-400/70 hover:bg-cyan-950/40";
      }
      return "border-blue-500/40 text-blue-200 bg-blue-950/25 hover:border-blue-400/70 hover:bg-blue-950/40";
    },
  },
  "python-fullstack": {
    // Primary: Python blue, Secondary: Python yellow
    cardHoverBorder: "hover:border-amber-400/50",
    cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(245,158,11,0.14)]",
    titleHoverColor: "group-hover:text-amber-300",
    titleArrowColor: "text-amber-400",
    categoryBadge: "bg-amber-400/[0.08] border-amber-400/45 text-amber-300",
    getTagStyle: (tech: string) => {
      const lower = tech.toLowerCase();
      if (lower.includes("python") || lower.includes("django")) {
        return "border-amber-400/45 text-amber-200 bg-amber-950/25 hover:border-amber-400/75 hover:bg-amber-950/40";
      }
      return "border-blue-500/40 text-blue-200 bg-blue-950/25 hover:border-blue-400/70 hover:bg-blue-950/40";
    },
  },
  "java-fullstack": {
    // Primary: Java red/orange, Secondary: warm orange
    cardHoverBorder: "hover:border-orange-500/50",
    cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(249,115,22,0.16)]",
    titleHoverColor: "group-hover:text-orange-300",
    titleArrowColor: "text-orange-400",
    categoryBadge: "bg-orange-500/[0.08] border-orange-400/45 text-orange-300",
    getTagStyle: (tech: string) => {
      const lower = tech.toLowerCase();
      if (
        lower.includes("java") ||
        lower.includes("spring") ||
        lower.includes("hibernate") ||
        lower.includes("oop")
      ) {
        return "border-orange-500/45 text-orange-200 bg-orange-950/25 hover:border-orange-400/75 hover:bg-orange-950/40";
      }
      return "border-amber-500/40 text-amber-200 bg-amber-950/25 hover:border-amber-400/70 hover:bg-amber-950/40";
    },
  },
  "data-analyst": {
    // Primary: emerald, Secondary: teal
    cardHoverBorder: "hover:border-emerald-500/50",
    cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(16,185,129,0.16)]",
    titleHoverColor: "group-hover:text-emerald-300",
    titleArrowColor: "text-emerald-400",
    categoryBadge: "bg-emerald-500/[0.08] border-emerald-400/45 text-emerald-300",
    getTagStyle: (tech: string) => {
      const lower = tech.toLowerCase();
      if (
        lower.includes("power bi") ||
        lower.includes("excel") ||
        lower.includes("statistics")
      ) {
        return "border-teal-500/40 text-teal-200 bg-teal-950/25 hover:border-teal-400/70 hover:bg-teal-950/40";
      }
      return "border-emerald-500/40 text-emerald-200 bg-emerald-950/25 hover:border-emerald-400/70 hover:bg-emerald-950/40";
    },
  },
  cybersecurity: {
    // Primary: indigo, Secondary: electric blue
    cardHoverBorder: "hover:border-indigo-500/50",
    cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(99,102,241,0.18)]",
    titleHoverColor: "group-hover:text-indigo-300",
    titleArrowColor: "text-indigo-400",
    categoryBadge: "bg-indigo-500/[0.08] border-indigo-400/45 text-indigo-300",
    getTagStyle: (tech: string) => {
      const lower = tech.toLowerCase();
      if (
        lower.includes("vapt") ||
        lower.includes("burp") ||
        lower.includes("nmap")
      ) {
        return "border-blue-500/40 text-blue-200 bg-blue-950/25 hover:border-blue-400/70 hover:bg-blue-950/40";
      }
      return "border-indigo-500/40 text-indigo-200 bg-indigo-950/25 hover:border-indigo-400/70 hover:bg-indigo-950/40";
    },
  },
  "aiml-engineer": {
    // Primary: purple, Secondary: violet/fuchsia
    cardHoverBorder: "hover:border-purple-500/50",
    cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.18)]",
    titleHoverColor: "group-hover:text-purple-300",
    titleArrowColor: "text-purple-400",
    categoryBadge: "bg-purple-500/[0.08] border-purple-400/45 text-purple-300",
    getTagStyle: (tech: string) => {
      const lower = tech.toLowerCase();
      if (
        lower.includes("generative") ||
        lower.includes("llm") ||
        lower.includes("rag") ||
        lower.includes("langchain")
      ) {
        return "border-fuchsia-500/40 text-fuchsia-200 bg-fuchsia-950/25 hover:border-fuchsia-400/70 hover:bg-fuchsia-950/40";
      }
      return "border-purple-500/40 text-purple-200 bg-purple-950/25 hover:border-purple-400/70 hover:bg-purple-950/40";
    },
  },
};

const defaultTheme: ThemeConfig = {
  cardHoverBorder: "hover:border-[#146cff]/50",
  cardHoverShadow: "hover:shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(20,108,255,0.16)]",
  titleHoverColor: "group-hover:text-[#72aeff]",
  titleArrowColor: "text-[#72aeff]",
  categoryBadge: "bg-[#146cff]/[0.08] border-[#146cff]/45 text-[#72aeff]",
  getTagStyle: () => "border-white/15 text-foreground/80 bg-surface",
};

export function ProgrammeCard({ programme }: { programme: Programme }) {
  // Map slugs to visual images
  const imageMap: Record<string, string> = {
    devops: "/assets/programmes/devops.png",
    "python-fullstack": "/assets/programmes/python.png",
    "java-fullstack": "/assets/programmes/java.png",
    "data-analyst": "/images/programmes/data-analyst.png",
    cybersecurity: "/assets/programmes/soc.png",
    "aiml-engineer": "/images/programmes/ai-ml.png",
  };

  const bgImage = imageMap[programme.slug] || "/assets/programmes/devops.png";
  const theme = THEMES[programme.slug] || defaultTheme;

  // Status badge styling with controlled subtle borders
  const statusBadgeStyle =
    programme.status === "ENROLMENT OPEN"
      ? "bg-emerald-500/[0.08] text-emerald-300 border border-emerald-400/45"
      : programme.status === "NEXT COHORT"
      ? "bg-blue-500/[0.08] text-blue-300 border border-blue-400/45"
      : "bg-purple-500/[0.08] text-purple-300 border border-purple-400/45";

  return (
    <div
      className={`group relative rounded-2xl border border-white/[0.12] bg-[#060a12] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${theme.cardHoverBorder} ${theme.cardHoverShadow}`}
    >
      {/* Top Banner Image with Enhanced Vibrancy */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#070b14]">
        <Image
          src={bgImage}
          alt={programme.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-all duration-500 filter saturate-[1.12] contrast-[1.08] brightness-[0.96] group-hover:saturate-[1.28] group-hover:contrast-[1.12] group-hover:brightness-[1.04] group-hover:scale-[1.03]"
        />
        {/* Subtle bottom gradient scrim so image details remain crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/45 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span
            className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full backdrop-blur-md font-semibold border ${theme.categoryBadge}`}
          >
            {programme.category}
          </span>
          <span
            className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full backdrop-blur-md font-bold ${statusBadgeStyle}`}
          >
            {programme.status}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 relative z-10 -mt-5">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 flex items-center justify-between">
            <span className={`${theme.titleHoverColor} transition-colors duration-200`}>
              {programme.title}
            </span>
            <ArrowUpRight
              className={`w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ${theme.titleArrowColor}`}
            />
          </h3>

          <p className="text-sm text-white/70 mt-2.5 line-clamp-3 leading-relaxed">
            {programme.shortDescription}
          </p>
        </div>

        {/* Core Tech Stack Chips */}
        <div className="space-y-2">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
            Core Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {programme.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-md border transition-all duration-200 ${theme.getTagStyle(
                  tech
                )}`}
              >
                {tech}
              </span>
            ))}
            {programme.technologies.length > 6 && (
              <span className="px-2 py-1 text-[11px] font-mono rounded-md bg-white/[0.04] border border-white/10 text-muted">
                +{programme.technologies.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Meta & View Programme Button */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-muted gap-2">
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="flex items-center gap-1 text-white/75">
              <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
              {programme.duration}
            </span>
            <span className="flex items-center gap-1 text-white/75">
              <Layers className="w-3.5 h-3.5 text-[#3b82f6]" />
              {programme.level}
            </span>
          </div>

          <Link
            href={`/programmes/${programme.slug}`}
            className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#060e1c] border border-[#146cff]/65 hover:bg-[#146cff] hover:border-[#146cff] hover:shadow-[0_0_18px_rgba(20,108,255,0.45)] transition-all duration-200 shrink-0"
          >
            <span>View Programme</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover/btn:text-white transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
