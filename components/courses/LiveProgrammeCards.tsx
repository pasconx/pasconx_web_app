"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { media } from "@/features/media/assets";

const liveProgrammesData = [
  {
    id: "vapt",
    slug: "vapt",
    badge: "LIVE PROGRAMME",
    title: "VAPT — Vulnerability Assessment & Penetration Testing",
    description:
      "Learn practical vulnerability assessment, web security testing, penetration-testing workflows, and security reporting.",
    features: [
      "Reconnaissance",
      "Scanning",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Analysis & Reporting",
    ],
    image: media.courses.vapt,
  },
  {
    id: "soc",
    slug: "security-operations-center-soc",
    badge: "LIVE PROGRAMME",
    title: "SOC Analyst",
    description:
      "Build practical skills in security monitoring, alert investigation, incident triage, threat detection, and incident response.",
    features: [
      "Threat Monitoring",
      "Log Analysis",
      "Incident Investigation",
      "Response & Containment",
      "Security Reporting",
    ],
    image: media.courses.soc,
  },
];

export function LiveProgrammeCards() {
  return (
    <div className="live-programmes-grid" role="region" aria-label="PasconX live programmes">
      {liveProgrammesData.map((prog) => (
        <article className="live-card" key={prog.id}>
          <Image
            className="live-card-bg-img"
            src={prog.image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="live-card-scrim" aria-hidden="true" />
          <div className="live-card-content">
            <div className="live-card-top">
              <span className="live-card-badge">{prog.badge}</span>
              <div className="live-card-status">
                <span className="live-green-radar sm-radar" aria-hidden="true">
                  <span className="live-green-dot sm-dot" />
                </span>
                <span>LIVE</span>
              </div>
            </div>

            <h3 className="live-card-title">{prog.title}</h3>
            <p className="live-card-desc">{prog.description}</p>

            <div className="live-card-features">
              {prog.features.map((feat) => (
                <span className="live-card-tag" key={feat}>
                  <svg className="live-card-tag-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                    <circle cx="8" cy="8" r="6" strokeWidth="1.2" strokeOpacity="0.6" />
                    <path d="M5.5 8L7 9.5L10.5 6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            <div className="live-card-bottom">
              <Link className="live-card-cta" href={`/programmes/${prog.slug}`}>
                <span>VIEW PROGRAMME</span>
                <i aria-hidden="true">↗</i>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
