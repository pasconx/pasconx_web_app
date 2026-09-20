"use client";

import React from "react";
import Link from "next/link";
import { PROGRAMMES } from "@/lib/programmes";
import { ArrowUpRight, Calendar, Clock, Monitor } from "lucide-react";

export function UpcomingCohorts() {
  return (
    <section id="upcoming" className="py-24 relative bg-surface/50 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16">
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

        {/* Cohort Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMMES.map((prog) => (
            <div
              key={prog.slug}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 space-y-6 hover:shadow-glow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-surface border border-border text-accent font-bold">
                    {prog.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full font-bold ${
                      prog.status === "ENROLMENT OPEN"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : prog.status === "NEXT COHORT"
                        ? "bg-accent/20 text-accent-light border border-accent/40"
                        : "bg-surface text-muted border border-border"
                    }`}
                  >
                    {prog.status}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-foreground group-hover:text-accent transition-colors">
                  {prog.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {prog.shortDescription}
                </p>
              </div>

              {/* Meta information */}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-muted">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-accent" />
                    <span>{prog.format}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-accent">
                    {prog.status === "ENROLMENT OPEN"
                      ? "Enrolling Now"
                      : prog.status === "NEXT COHORT"
                      ? "Next Cohort"
                      : "Coming Soon"}
                  </span>
                  <Link
                    href={`/programmes/${prog.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
