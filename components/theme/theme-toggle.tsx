"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark/light theme"
        className={`p-2 rounded-full border border-white/20 bg-white/5 text-white/70 ${className}`}
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className={`p-2 rounded-full border border-border bg-surface text-foreground hover:text-accent hover:border-accent/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-accent" />
      )}
    </button>
  );
}
