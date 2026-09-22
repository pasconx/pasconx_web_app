"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const percentRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let animationFrameId: number;
    let leaveTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    const duration = 1800; // 1.8s smooth loading progress
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, Math.max(0, elapsed / duration));

      // Realistic tech progress curve:
      // quick start -> accelerating mid phase -> smooth deceleration into 100%
      let currentProgress: number;
      if (t < 0.2) {
        currentProgress = (t / 0.2) * 22;
      } else if (t < 0.6) {
        currentProgress = 22 + ((t - 0.2) / 0.4) * 52;
      } else if (t < 0.9) {
        currentProgress = 74 + ((t - 0.6) / 0.3) * 20;
      } else {
        currentProgress = 94 + ((t - 0.9) / 0.1) * 6;
      }
      currentProgress = Math.min(100, Math.max(0, currentProgress));
      const roundedPercent = Math.min(100, Math.round(currentProgress));

      // Synchronous DOM update for instantaneous, stutter-free tracking
      if (percentRef.current) {
        percentRef.current.textContent = `${String(roundedPercent).padStart(3, "0")}%`;
      }
      if (barRef.current) {
        barRef.current.style.width = `${currentProgress}%`;
      }
      setProgress(roundedPercent);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Guarantee exact 100%
        if (percentRef.current) percentRef.current.textContent = "100%";
        if (barRef.current) barRef.current.style.width = "100%";
        setProgress(100);

        // Brief hold at 100% so user sees completion before fade
        leaveTimer = setTimeout(() => {
          setIsLeaving(true);

          removeTimer = setTimeout(() => {
            document.body.style.overflow = previousOverflow;
            setIsVisible(false);
            onCompleteRef.current?.();
          }, 450);
        }, 180);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(animationFrameId);
      if (leaveTimer) clearTimeout(leaveTimer);
      if (removeTimer) clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`site-preloader${isLeaving ? " is-leaving" : ""}`}
      role="status"
      aria-label={`Loading PasconX ${progress}%`}
    >
      <div className="site-preloader-grid" aria-hidden="true" />
      <div className="site-preloader-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="site-preloader-logo-wrap">
        <Image
          src="/assets/brand/pasconx-academy-dark.png"
          alt="PASCONX ACADEMY"
          width={180}
          height={123}
          priority
          unoptimized
          className="site-preloader-logo-img"
        />
      </div>
      <div className="site-preloader-progress">
        <strong ref={percentRef}>{String(progress).padStart(3, "0")}%</strong>
        <span>
          <i ref={barRef} style={{ width: `${progress}%` }} />
        </span>
      </div>
      <div className="site-preloader-status">Establishing secure learning environment</div>
      <div className="site-preloader-corners" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

