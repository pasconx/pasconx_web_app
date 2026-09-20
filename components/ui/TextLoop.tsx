"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type TextLoopItem = string | { text: string; href?: string };

interface TextLoopProps {
  items: TextLoopItem[];
  interval?: number;
}

export function TextLoop({ items, interval = 2800 }: TextLoopProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % items.length),
      interval
    );
    return () => window.clearInterval(timer);
  }, [items.length, interval]);

  const current = items[active];
  const text = typeof current === "string" ? current : current.text;
  const href = typeof current === "string" ? undefined : current.href;

  return (
    <span className="text-loop" aria-live="polite">
      <span key={`${active}-${text}`}>
        {href ? (
          <Link href={href} className="text-loop-link">
            {text} <span className="arrow" aria-hidden="true">↗</span>
          </Link>
        ) : (
          text
        )}
      </span>
    </span>
  );
}

