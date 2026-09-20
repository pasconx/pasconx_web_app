"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { media } from "@/features/media/assets";

const liveProgrammesData = [
  {
    id: "soc",
    slug: "cybersecurity",
    badge: "LIVE PROGRAMME",
    title: "Security Operations Center (SOC).",
    description:
      "Detect, analyze, investigate, and respond to security threats through real-world SOC monitoring and incident response practices.",
    features: [
      "Threat Monitoring",
      "Log Analysis",
      "Incident Investigation",
      "Response & Containment",
      "Security Reporting",
    ],
    image: media.courses.soc,
  },
  {
    id: "vapt",
    slug: "cybersecurity",
    badge: "LIVE PROGRAMME",
    title: "Vulnerability Assessment and Penetration Testing (VAPT).",
    description:
      "Learn to identify, assess, validate, and safely exploit security vulnerabilities through structured penetration testing practices.",
    features: [
      "Reconnaissance",
      "Scanning",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Analysis & Reporting",
    ],
    image: media.courses.vapt,
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

            <div className="live-card-body">
              <h3>{prog.title}</h3>
              <p>{prog.description}</p>
            </div>

            <div className="live-card-features" aria-label="Technical features">
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
                <span>View programme</span>
                <i aria-hidden="true">↗</i>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
