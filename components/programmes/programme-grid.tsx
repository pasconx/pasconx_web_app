"use client";

import React, { useState } from "react";
import { PROGRAMMES, Programme } from "@/lib/programmes";
import { ProgrammeCard } from "./programme-card";

const CATEGORIES = ["ALL", "Cloud & DevOps", "Full Stack", "Data", "Cybersecurity", "AI / ML"] as const;

export function ProgrammeGrid({ showFilters = true }: { showFilters?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredProgrammes = selectedCategory === "ALL"
    ? PROGRAMMES
    : PROGRAMMES.filter((p) => p.category === selectedCategory);

  return (
    <section id="programmes" className="pt-10 pb-20 md:pt-14 md:pb-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="academic-radio-indicator">
              <span className="academic-radio-ring" aria-hidden="true">
                <span className="academic-radio-dot" />
              </span>
              <span className="academic-radio-text">
                ACADEMIC DISCIPLINES
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-foreground leading-[1.12]">
              Build the <span className="text-gradient-blue">skills that</span> <br />
              move technology <br />
              forward.
            </h1>
          </div>

          <p className="text-sm md:text-base text-muted max-w-md leading-relaxed">
            Instructor-led technology training designed for real-world engineering practices, hands-on lab environments, and career advancement.
          </p>
        </div>

        {/* Category Filters */}
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
                  ? "hover:border-emerald-500/50 hover:text-emerald-300 hover:bg-emerald-950/20"
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

        {/* Programme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProgrammes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </div>
    </section>
  );
}
