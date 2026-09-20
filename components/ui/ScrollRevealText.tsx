"use client";

import { CSSProperties, useEffect, useRef } from "react";

type Effect = "blur-up" | "glide" | "sharpen";

export function ScrollRevealText({ words, breakAfter = [], accentFrom = -1, effect = "blur-up" }: { words: string[]; breakAfter?: number[]; accentFrom?: number; effect?: Effect }) {
  const revealRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const target = revealRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { target.classList.add("is-visible"); observer.disconnect(); }
    }, { threshold: 0.25 });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  const normalWords = accentFrom >= 0 ? words.slice(0, accentFrom) : words;
  const accentWords = accentFrom >= 0 ? words.slice(accentFrom) : [];

  return (
    <span ref={revealRef} className={`scroll-reveal-text effect-${effect}`}>
      {normalWords.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span style={{ "--word-index": index } as CSSProperties}>{word}</span>
          {breakAfter.includes(index) ? <br /> : index < words.length - 1 ? " " : ""}
        </span>
      ))}
      {accentWords.length > 0 && (
        <span className="accent text-gradient-blue">
          {accentWords.map((word, i) => {
            const index = accentFrom + i;
            return (
              <span key={`${word}-${index}`}>
                <span style={{ "--word-index": index } as CSSProperties}>{word}</span>
                {breakAfter.includes(index) ? <br /> : index < words.length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      )}
    </span>
  );
}
