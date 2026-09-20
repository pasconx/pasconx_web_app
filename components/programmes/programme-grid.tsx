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
    <section id="programmes" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                ACADEMIC DISCIPLINES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Build skills for the <br />
              <span className="text-gradient-blue">technology careers of tomorrow.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-muted max-w-md">
            Instructor-led technology training designed for real-world engineering practices, hands-on lab environments, and career advancement.
          </p>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-border/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-accent text-white font-bold shadow-glow-sm"
                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/40"
                }`}
              >
                {cat}
              </button>
            ))}
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
