"use client";

import React, { useState } from "react";
import { ArrowDown, Check, ChevronRight, Layers, Terminal, Sparkles } from "lucide-react";

const NODES = [
  {
    id: "foundation",
    step: "01",
    label: "FOUNDATION",
    title: "Domain Fundamentals & Tools",
    description: "Master OS commands, networking, version control, and core programming semantics before writing complex systems.",
    tech: ["Linux Terminal", "Git & GitHub", "Data Structures", "System Protocols"],
  },
  {
    id: "concept",
    step: "02",
    label: "CONCEPT",
    title: "Architecture & Framework Concepts",
    description: "Understand high-level system design, microservices, database normalization, or security telemetry analysis.",
    tech: ["System Architecture", "API Design Patterns", "Database Schemas", "Security Threat Models"],
  },
  {
    id: "lab",
    step: "03",
    label: "LAB",
    title: "Guided Hands-On Sandbox Labs",
    description: "Execute commands in isolated cloud labs, solve security alerts in Splunk, or configure Docker/K8s clusters.",
    tech: ["Virtual Cloud Instances", "Docker Containers", "SIEM Telemetry Logs", "Interactive Terminal"],
  },
  {
    id: "project",
    step: "04",
    label: "PROJECT",
    title: "Production-Grade Capstone Build",
    description: "Construct end-to-end full stack web applications, multi-cloud CI/CD automation, or security audit reports.",
    tech: ["Full Stack SaaS App", "Terraform Multi-Cloud", "Power BI Dashboards", "SOC Capstone Audit"],
  },
  {
    id: "review",
    step: "05",
    label: "REVIEW",
    title: "Code & Architecture Evaluation",
    description: "Receive 1-on-1 feedback from senior tutors on code readability, security compliance, performance, and formatting.",
    tech: ["Code Reviews", "Security Triage", "Performance Benchmarking", "1-on-1 Tutor Handoff"],
  },
  {
    id: "career",
    step: "06",
    label: "CAREER",
    title: "Interview Prep & Portfolio Handoff",
    description: "Tailor your technical resume, showcase a defensible portfolio of real lab work, and practice technical interview rounds.",
    tech: ["Technical Resume", "Defensible Portfolio", "Mock Interviews", "Hiring Pipelines"],
  },
];

export function LearningModelSection() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <section id="learning-model" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                PEDAGOGICAL ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              The Learning Model Flow.
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted max-w-md">
            An engineering pipeline designed to guide you step-by-step from zero background to professional competency.
          </p>
        </div>

        {/* Interactive Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Node Flow Navigator */}
          <div className="lg:col-span-6 space-y-3">
            {NODES.map((node, index) => {
              const isActive = activeNode === index;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isActive
                      ? "bg-accent/10 border-accent text-foreground shadow-glow-sm"
                      : "bg-surface border-border text-muted hover:text-foreground hover:border-accent/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                        isActive
                          ? "bg-accent text-white"
                          : "bg-background border border-border text-muted"
                      }`}
                    >
                      {node.step}
                    </span>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase block text-accent">
                        {node.label}
                      </span>
                      <span className="text-sm md:text-base font-bold text-foreground">
                        {node.title}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? "text-accent translate-x-1" : "text-muted"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Active Node Inspector Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-accent/40 bg-card p-8 space-y-6 shadow-glow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-accent pointer-events-none">
                <Layers className="w-32 h-32" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-accent uppercase font-bold px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  STAGE {NODES[activeNode].step} / 06
                </span>
                <span className="text-2xl font-black font-mono text-accent">
                  {NODES[activeNode].label}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-foreground">
                  {NODES[activeNode].title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {NODES[activeNode].description}
                </p>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Key Deliverables & Tools:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {NODES[activeNode].tech.map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded-lg bg-surface border border-border text-xs font-mono text-foreground/90 flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
