"use client";

import React from "react";
import Link from "next/link";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12 relative z-10">
        {/* Top Footer Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-border/60">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center font-bold text-accent">
                <span className="text-sm tracking-tighter">PX</span>
              </div>
              <span className="font-extrabold tracking-widest text-xl text-foreground">
                PASCON<span className="text-accent">X</span>
              </span>
            </Link>
            <p className="text-xs font-mono text-muted tracking-wide">
              {BRAND.tagline}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/programmes"
              className="px-6 py-3 text-xs font-bold tracking-wider uppercase rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all flex items-center gap-2 shadow-glow-sm"
            >
              <span>Explore Programmes</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Middle Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Statement */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
              ACADEMY STATEMENT
            </p>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              PASCON X provides practical technology training across DevOps, Full Stack Development, Data Analytics, Cybersecurity, and AI/ML Engineering. Built for learners who demand hands-on lab experience.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
              NAVIGATION
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-mono text-muted hover:text-foreground transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">
              CONTACT & LOCATION
            </p>
            <div className="space-y-2 text-xs font-mono text-muted">
              <p>Email: {BRAND.email}</p>
              <p>Phone: {BRAND.phone}</p>
              <p>Format: {BRAND.location}</p>
              <div className="pt-2 flex items-center gap-2 text-foreground font-semibold">
                <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20" aria-label="India Flag">
                  <rect width="30" height="6.67" fill="#FF9933" />
                  <rect y="6.67" width="30" height="6.66" fill="#FFFFFF" />
                  <rect y="13.33" width="30" height="6.67" fill="#138808" />
                  <circle cx="15" cy="10" r="2.5" fill="none" stroke="#000080" strokeWidth="0.6" />
                </svg>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back-To-Top */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>© {new Date().getFullYear()} PASCON X. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <button onClick={scrollToTop} className="hover:text-accent transition-colors">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
