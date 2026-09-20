import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-5 space-y-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/5 font-mono text-xs text-accent">
        <span>ERROR 404</span>
      </div>
      <h1 className="text-5xl sm:text-7xl font-black tracking-tight">
        Page Not Found.
      </h1>
      <p className="text-muted text-base max-w-md">
        The requested technology programme or resource is unavailable or may have moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-full bg-accent text-white hover:bg-accent/90 transition-all inline-flex items-center gap-2 shadow-glow-sm"
      >
        <span>Return to Pascon X Home</span>
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
