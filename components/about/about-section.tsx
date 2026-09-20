"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ShieldCheck, Terminal, Users } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                ABOUT PASCON X
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.05]">
              Transforming Talent into <br />
              <span className="text-gradient-blue">IT Experts & Engineers.</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              PASCON X is a modern technology education platform focused on helping learners develop practical, real-world skills across essential IT domains: DevOps & Cloud, Full Stack Software Development, Data Analytics, Cybersecurity Operations, and Artificial Intelligence.
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              We replace passive lecture-watching with guided lab sessions, realistic codebases, and direct tutor handoffs. Our philosophy is simple: Learn the concepts, practice in sandbox labs, build real applications, and grow into a calm, confident technical professional.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                <span className="text-xs font-mono font-bold text-accent uppercase">01 / LIVE LEARNING</span>
                <p className="text-xs text-muted">Direct tutor-led interactive sessions with small cohort sizes.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                <span className="text-xs font-mono font-bold text-accent uppercase">02 / LAB DRIVEN</span>
                <p className="text-xs text-muted">Hands-on CLI, Cloud, SIEM, and coding environments.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-light transition-colors"
              >
                <span>Read Full Academy Vision</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column Badge Grid */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-surface p-8 space-y-8 relative overflow-hidden tech-grid">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
                  ACADEMY CORE VALUES
                </span>
                <h3 className="text-2xl font-black text-foreground">
                  Practical. Grounded. Career-Ready.
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">No Passive Video Swapping</h4>
                    <p className="text-xs text-muted mt-0.5">Every concept is accompanied by immediate execution in live terminal or editor environments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Honest Career Readiness</h4>
                    <p className="text-xs text-muted mt-0.5">We focus on building real technical capability and defensible project portfolios.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Direct Tutor Access</h4>
                    <p className="text-xs text-muted mt-0.5">Ask questions during live sessions and receive personalized code & lab review.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
