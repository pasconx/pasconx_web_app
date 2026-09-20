"use client";

import React from "react";

interface VisualProps {
  type: string;
}

export function ProgrammeTechVisual({ type }: VisualProps) {
  const normalized = type.toLowerCase();

  if (normalized.includes("devops")) {
    return (
      <div className="programme-tech-visual" aria-hidden="true">
        <div className="tech-visual-bg" />
        <div className="tech-visual-grid" />
        <svg className="tech-visual-lines" viewBox="0 0 400 200" fill="none">
          <line x1="100" y1="55" x2="200" y2="100" stroke="rgba(63,124,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="300" y1="55" x2="200" y2="100" stroke="rgba(63,124,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="100" y1="145" x2="200" y2="100" stroke="rgba(63,124,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="300" y1="145" x2="200" y2="100" stroke="rgba(63,124,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="200" cy="100" r="4" fill="#3f7cff" />
        </svg>

        <div className="tech-node node-tl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M22 12.5c0 4.5-4 7.5-9 7.5S4 17 4 12.5c0-.8.1-1.5.4-2.2C5.5 8.4 8 7 11 7c2 0 3.8.6 5 1.6M18 10a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M6 10h3v3H6zM10 10h3v3h-3zM14 10h3v3h-3zM10 6h3v3h-3z" />
          </svg>
          <span>DOCKER</span>
        </div>

        <div className="tech-node node-tr">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span>KUBERNETES</span>
        </div>

        <div className="tech-node node-bl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 00-2 2v1" />
            <path d="M6 6v9" />
          </svg>
          <span>GIT</span>
        </div>

        <div className="tech-node node-br">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6.5 17.5A4.5 4.5 0 016 8.5h.5A6 6 0 0117 7.5a4.5 4.5 0 011 9H6.5z" />
            <path d="M12 12v5M9 14l3-3 3 3" />
          </svg>
          <span>AWS</span>
        </div>

        <div className="tech-core-badge">
          <span>TERRAFORM</span>
        </div>
      </div>
    );
  }

  if (normalized.includes("java")) {
    return (
      <div className="programme-tech-visual" aria-hidden="true">
        <div className="tech-visual-bg" />
        <div className="tech-visual-grid" />
        <svg className="tech-visual-lines" viewBox="0 0 400 200" fill="none">
          <path d="M 100 55 Q 200 80 300 55" stroke="rgba(63,124,255,0.3)" strokeWidth="1.5" fill="none" />
          <path d="M 100 145 Q 200 120 300 145" stroke="rgba(63,124,255,0.3)" strokeWidth="1.5" fill="none" />
          <line x1="200" y1="40" x2="200" y2="160" stroke="rgba(63,124,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        <div className="tech-node node-tl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
            <path d="M6 1v3M10 1v3M14 1v3" />
          </svg>
          <span>JAVA</span>
        </div>

        <div className="tech-node node-tr">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>SPRING BOOT</span>
        </div>

        <div className="tech-node node-bl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
          <span>REACT</span>
        </div>

        <div className="tech-node node-br">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
          </svg>
          <span>SQL DB</span>
        </div>
      </div>
    );
  }

  if (normalized.includes("python")) {
    return (
      <div className="programme-tech-visual" aria-hidden="true">
        <div className="tech-visual-bg" />
        <div className="tech-visual-grid" />
        <svg className="tech-visual-lines" viewBox="0 0 400 200" fill="none">
          <line x1="100" y1="55" x2="300" y2="145" stroke="rgba(63,124,255,0.25)" strokeWidth="1.5" />
          <line x1="300" y1="55" x2="100" y2="145" stroke="rgba(63,124,255,0.25)" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="28" stroke="rgba(63,124,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="tech-node node-tl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2c-3.5 0-4 1.5-4 3.5V8h8V7.5C16 5.5 15.5 2 12 2zM12 22c3.5 0 4-1.5 4-3.5V16H8v.5C8 18.5 8.5 22 12 22z" />
            <path d="M4 12c0-3.5 1.5-4 3.5-4H10v8H7.5C5.5 16 2 15.5 2 12zM20 12c0 3.5-1.5 4-3.5 4H14V8h2.5c2 0 3.5.5 3.5 4z" />
            <circle cx="9" cy="5" r="0.8" fill="currentColor" />
            <circle cx="15" cy="19" r="0.8" fill="currentColor" />
          </svg>
          <span>PYTHON</span>
        </div>

        <div className="tech-node node-tr">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 8v8M12 8v8M16 8v4" />
          </svg>
          <span>DJANGO</span>
        </div>

        <div className="tech-node node-bl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
          <span>REACT</span>
        </div>

        <div className="tech-node node-br">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4z" />
            <path d="M3 11c0 2.21 4.03 4 9 4s9-1.79 9-4M3 15c0 2.21 4.03 4 9 4s9-1.79 9-4" />
          </svg>
          <span>POSTGRESQL</span>
        </div>
      </div>
    );
  }

  if (normalized.includes("data")) {
    return (
      <div className="programme-tech-visual" aria-hidden="true">
        <div className="tech-visual-bg" />
        <div className="tech-visual-grid" />
        <svg className="tech-visual-lines" viewBox="0 0 400 200" fill="none">
          <rect x="80" y="40" width="240" height="120" rx="6" stroke="rgba(63,124,255,0.22)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 100 130 Q 180 70 260 110 T 300 80" stroke="rgba(63,124,255,0.4)" strokeWidth="2" fill="none" />
        </svg>

        <div className="tech-node node-tl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2c-3.5 0-4 1.5-4 3.5V8h8V7.5C16 5.5 15.5 2 12 2zM12 22c3.5 0 4-1.5 4-3.5V16H8v.5C8 18.5 8.5 22 12 22z" />
            <path d="M4 12c0-3.5 1.5-4 3.5-4H10v8H7.5C5.5 16 2 15.5 2 12zM20 12c0 3.5-1.5 4-3.5 4H14V8h2.5c2 0 3.5.5 3.5 4z" />
          </svg>
          <span>PYTHON</span>
        </div>

        <div className="tech-node node-tr">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
          </svg>
          <span>SQL</span>
        </div>

        <div className="tech-node node-bl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="12" width="4" height="8" rx="1" />
            <rect x="10" y="8" width="4" height="12" rx="1" />
            <rect x="17" y="4" width="4" height="16" rx="1" />
          </svg>
          <span>POWER BI</span>
        </div>

        <div className="tech-node node-br">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
          </svg>
          <span>EXCEL</span>
        </div>
      </div>
    );
  }

  if (normalized.includes("cyber")) {
    return (
      <div className="programme-tech-visual" aria-hidden="true">
        <div className="tech-visual-bg" />
        <div className="tech-visual-grid" />
        <svg className="tech-visual-lines" viewBox="0 0 400 200" fill="none">
          <circle cx="200" cy="100" r="55" stroke="rgba(63,124,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M120 100 L280 100 M200 45 L200 155" stroke="rgba(63,124,255,0.2)" strokeWidth="1" />
        </svg>

        <div className="tech-node node-tl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          <span>LINUX</span>
        </div>

        <div className="tech-node node-tr">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="11" r="2" />
          </svg>
          <span>SIEM</span>
        </div>

        <div className="tech-node node-bl">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
          <span>SOC</span>
        </div>

        <div className="tech-node node-br">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" />
          </svg>
          <span>VAPT</span>
        </div>
      </div>
    );
  }

  // AI/ML Engineer
  return (
    <div className="programme-tech-visual" aria-hidden="true">
      <div className="tech-visual-bg" />
      <div className="tech-visual-grid" />
      <svg className="tech-visual-lines" viewBox="0 0 400 200" fill="none">
        <circle cx="100" cy="55" r="4" fill="#3f7cff" />
        <circle cx="300" cy="55" r="4" fill="#3f7cff" />
        <circle cx="100" cy="145" r="4" fill="#3f7cff" />
        <circle cx="300" cy="145" r="4" fill="#3f7cff" />
        <circle cx="200" cy="100" r="7" fill="#83a9ff" />
        <line x1="100" y1="55" x2="200" y2="100" stroke="rgba(63,124,255,0.35)" strokeWidth="1.5" />
        <line x1="300" y1="55" x2="200" y2="100" stroke="rgba(63,124,255,0.35)" strokeWidth="1.5" />
        <line x1="100" y1="145" x2="200" y2="100" stroke="rgba(63,124,255,0.35)" strokeWidth="1.5" />
        <line x1="300" y1="145" x2="200" y2="100" stroke="rgba(63,124,255,0.35)" strokeWidth="1.5" />
      </svg>

      <div className="tech-node node-tl">
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2c-3.5 0-4 1.5-4 3.5V8h8V7.5C16 5.5 15.5 2 12 2zM12 22c3.5 0 4-1.5 4-3.5V16H8v.5C8 18.5 8.5 22 12 22z" />
          <path d="M4 12c0-3.5 1.5-4 3.5-4H10v8H7.5C5.5 16 2 15.5 2 12zM20 12c0 3.5-1.5 4-3.5 4H14V8h2.5c2 0 3.5.5 3.5 4z" />
        </svg>
        <span>PYTHON</span>
      </div>

      <div className="tech-node node-tr">
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="2" />
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <line x1="7.4" y1="7.4" x2="10.6" y2="10.6" stroke="currentColor" strokeWidth="1.2" />
          <line x1="16.6" y1="7.4" x2="13.4" y2="10.6" stroke="currentColor" strokeWidth="1.2" />
          <line x1="7.4" y1="16.6" x2="10.6" y2="13.4" stroke="currentColor" strokeWidth="1.2" />
          <line x1="16.6" y1="16.6" x2="13.4" y2="13.4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span>MACHINE LEARNING</span>
      </div>

      <div className="tech-node node-bl">
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
        </svg>
        <span>PYTORCH</span>
      </div>

      <div className="tech-node node-br">
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
        <span>NEURAL NETWORKS</span>
      </div>
    </div>
  );
}
