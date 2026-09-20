"use client";

import React from "react";
import Link from "next/link";
import { DigitalGlobe } from "../globe/digital-globe";
import { ArrowUpRight, ChevronRight, ShieldCheck, Terminal, Layers } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden tech-grid">
      {/* Ambient background glow & scanline */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-accent uppercase">
              LIVE IT & TECHNOLOGY COHORTS
            </span>
          </div>

          {/* Two-line Editorial Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-foreground">
            {BRAND.headlineLeading} <br />
            <span className="text-gradient-blue">{BRAND.headlineAccent}</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl font-normal leading-relaxed">
            {BRAND.description}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/programmes"
              className="px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-200 flex items-center gap-2 shadow-glow-md hover:scale-[1.02]"
            >
              <span>Explore Programmes</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/approach"
              className="px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full border border-border bg-surface/50 text-foreground hover:border-accent/40 hover:text-accent transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
            >
              <span>The Pascon X Method</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Micro Feature Badges */}
          <div className="pt-6 border-t border-border/60 grid grid-cols-3 gap-4 text-xs font-mono text-muted">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent" />
              <span>HANDS-ON LABS</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              <span>REAL PROJECTS</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>EXPERT TUTORS</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Digital Globe */}
        <div className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[600px] relative flex items-center justify-center">
          <DigitalGlobe />
        </div>
      </div>
    </section>
  );
}
