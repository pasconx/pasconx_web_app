"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { media } from "@/features/media/assets";

const liveProgrammes = [
  {
    id: "vapt",
    slug: "vapt",
    watermark: "VAPT",
    badge: "LIVE PROGRAMME",
    title: "VAPT — Vulnerability Assessment & Penetration Testing",
    tagline: "Learn. Identify. Exploit. Secure.",
    description:
      "Learn practical vulnerability assessment, web security testing, penetration-testing workflows, and security reporting.",
    pipeline: [
      { step: "01", label: "VULNERABILITY ASSESSMENT", icon: "🔍" },
      { step: "02", label: "PENETRATION TESTING", icon: "🎯" },
      { step: "03", label: "ANALYSIS & REPORTING", icon: "🛡️" },
      { step: "04", label: "SECURE SOLUTIONS", icon: "🔒" },
    ],
    phases: [
      "RECONNAISSANCE",
      "SCANNING",
      "EXPLOITATION",
      "POST EXPLOITATION",
      "REPORTING",
    ],
    image: media.courses.vapt,
  },
  {
    id: "soc",
    slug: "security-operations-center-soc",
    watermark: "SOC",
    badge: "LIVE PROGRAMME",
    title: "SOC Analyst",
    tagline: "Detect. Investigate. Contain. Protect.",
    description:
      "Build practical skills in security monitoring, alert investigation, incident triage, threat detection, and incident response.",
    pipeline: [
      { step: "01", label: "TELEMETRY INGESTION", icon: "📡" },
      { step: "02", label: "SIEM MONITORING", icon: "📊" },
      { step: "03", label: "INCIDENT TRIAGE", icon: "⚠️" },
      { step: "04", label: "THREAT CONTAINMENT", icon: "🛡️" },
    ],
    phases: [
      "LOG ANALYSIS",
      "TELEMETRY TRIAGE",
      "SIEM MONITORING",
      "PACKET INSPECTION",
      "INCIDENT REPORTING",
    ],
    image: media.courses.soc,
  },
];

const slideIntervalMs = 6000;

export function LiveProgrammeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % liveProgrammes.length);
    }, slideIntervalMs);
    return () => window.clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex((index + liveProgrammes.length) % liveProgrammes.length);
  };

  return (
    <div className="live-carousel-container" role="region" aria-label="Live Programmes Showcase">
      <div className="live-carousel-window">
        <div
          className="live-carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {liveProgrammes.map((prog, index) => (
            <div
              className={`live-banner-slide ${activeIndex === index ? "is-active" : ""}`}
              key={prog.id}
              aria-hidden={activeIndex !== index}
            >
              {/* Background Artwork Layer */}
              <div className="live-banner-media">
                <Image
                  src={prog.image}
                  alt=""
                  fill
                  sizes="100vw"
                  unoptimized
                  priority={index === 0}
                  className="live-banner-img"
                />
                <div className="live-banner-scrim" aria-hidden="true" />
              </div>

              {/* Watermark Typography */}
              <div className="live-banner-watermark" aria-hidden="true">
                <span>{prog.watermark}</span>
              </div>

              {/* Main Banner Content */}
              <div className="live-banner-content">
                {/* Header Row */}
                <div className="live-banner-top">
                  <span className="live-banner-badge">{prog.badge}</span>
                  <div className="live-banner-status">
                    <span className="live-green-radar sm-radar" aria-hidden="true">
                      <span className="live-green-dot sm-dot" />
                    </span>
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Body Column (Left) */}
                <div className="live-banner-left">
                  <h3 className="live-banner-title">{prog.title}</h3>
                  <div className="live-banner-tagline">{prog.tagline}</div>
                  <p className="live-banner-desc">{prog.description}</p>

                  {/* Pipeline Process Flow */}
                  <div className="live-banner-pipeline" aria-label="Program execution pipeline">
                    {prog.pipeline.map((item, pIdx) => (
                      <React.Fragment key={item.label}>
                        <div className="pipeline-step">
                          <span className="pipeline-icon">{item.icon}</span>
                          <span className="pipeline-label">{item.label}</span>
                        </div>
                        {pIdx < prog.pipeline.length - 1 && (
                          <span className="pipeline-arrow" aria-hidden="true">
                            →
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Phases Stack & CTA (Right) */}
                <div className="live-banner-right">
                  <div className="phases-stack" aria-label="Phase list">
                    {prog.phases.map((phase) => (
                      <div className="phase-row" key={phase}>
                        <span className="phase-bar" aria-hidden="true" />
                        <span>{phase}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/programmes/${prog.slug}`} className="live-banner-cta">
                    <span>VIEW PROGRAMME</span>
                    <i aria-hidden="true">↗</i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="live-carousel-controls">
        <div className="live-carousel-dots" role="tablist" aria-label="Select live programme">
          {liveProgrammes.map((prog, index) => (
            <button
              key={prog.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Show ${prog.title}`}
              className={activeIndex === index ? "is-active" : ""}
              onClick={() => goTo(index)}
            >
              <span />
            </button>
          ))}
        </div>

        <div className="live-carousel-arrows">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous live programme"
          >
            ←
          </button>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(liveProgrammes.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next live programme"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
