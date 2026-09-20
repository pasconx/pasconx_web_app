"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-full border border-border backdrop-blur-xl ${
          scrolled
            ? "bg-surface/90 shadow-lg py-2.5 px-4 md:px-6"
            : "bg-surface/70 py-3 px-5 md:px-7"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <span className="text-sm tracking-tighter">PX</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest text-base md:text-lg text-foreground group-hover:text-accent transition-colors">
                PASCON<span className="text-accent">X</span>
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-wider transition-colors duration-200 uppercase relative py-1 ${
                    isActive ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />

            <Link
              href="/programmes"
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow-glow-sm"
            >
              <span>Explore Programmes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle & Theme Button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-2xl bg-surface/95 border border-border backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-mono tracking-widest text-muted uppercase">Navigate</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold tracking-wider uppercase py-2 border-b border-border/50 transition-colors ${
                      isActive ? "text-accent" : "text-foreground hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/programmes"
                className="w-full py-3 text-xs font-bold tracking-wider uppercase rounded-xl bg-accent text-white flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <span>Explore Programmes</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
