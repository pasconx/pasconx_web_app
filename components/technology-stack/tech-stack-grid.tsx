"use client";

import React, { useState } from "react";
import { Cloud, Code, Database, Shield, Brain, Terminal } from "lucide-react";

const DOMAINS = [
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: Cloud,
    tools: [
      { name: "Linux", desc: "OS Core & Bash" },
      { name: "Git", desc: "Version Control" },
      { name: "GitHub", desc: "CI/CD Actions" },
      { name: "Jenkins", desc: "Pipeline Automation" },
      { name: "Docker", desc: "Containers" },
      { name: "Kubernetes", desc: "Orchestration" },
      { name: "Terraform", desc: "Infra as Code" },
      { name: "AWS", desc: "Cloud Infra" },
      { name: "Prometheus", desc: "Metrics Monitoring" },
      { name: "Grafana", desc: "Dashboards" },
    ],
  },
  {
    id: "python",
    name: "Python Full Stack",
    icon: Code,
    tools: [
      { name: "Python", desc: "Backend Core" },
      { name: "Django", desc: "Web Framework" },
      { name: "REST APIs", desc: "Endpoint Design" },
      { name: "React", desc: "Frontend UI" },
      { name: "PostgreSQL", desc: "Relational DB" },
      { name: "JavaScript", desc: "Web Logic" },
      { name: "HTML5/CSS3", desc: "Web UI" },
      { name: "Docker", desc: "Deployment" },
    ],
  },
  {
    id: "java",
    name: "Java Full Stack",
    icon: Terminal,
    tools: [
      { name: "Java", desc: "Core OOP" },
      { name: "Spring Boot", desc: "Microservices" },
      { name: "Spring Security", desc: "API Auth" },
      { name: "REST APIs", desc: "Enterprise Services" },
      { name: "SQL", desc: "Queries & Joins" },
      { name: "React", desc: "Frontend SPA" },
      { name: "Hibernate", desc: "ORM Data Layer" },
      { name: "Git", desc: "Source Control" },
    ],
  },
  {
    id: "data",
    name: "Data Analyst",
    icon: Database,
    tools: [
      { name: "Excel", desc: "Advanced Modeling" },
      { name: "SQL", desc: "Data Querying" },
      { name: "Python", desc: "Data Analysis" },
      { name: "Pandas", desc: "DataFrames" },
      { name: "Power BI", desc: "BI Dashboards" },
      { name: "Statistics", desc: "Hypothesis Testing" },
      { name: "Matplotlib", desc: "Data Viz" },
      { name: "DAX", desc: "BI Formulas" },
    ],
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: Shield,
    tools: [
      { name: "Linux", desc: "System Hardening" },
      { name: "Networking", desc: "TCP/IP Protocol" },
      { name: "Splunk", desc: "SIEM Telemetry" },
      { name: "Wazuh", desc: "SOC Detection" },
      { name: "Wireshark", desc: "Packet Inspection" },
      { name: "Burp Suite", desc: "Web VAPT" },
      { name: "Nmap", desc: "Network Scanning" },
      { name: "Cloud Security", desc: "AWS Hardening" },
    ],
  },
  {
    id: "aiml",
    name: "AI/ML Engineer",
    icon: Brain,
    tools: [
      { name: "Python", desc: "AI Core" },
      { name: "Scikit-Learn", desc: "Machine Learning" },
      { name: "PyTorch", desc: "Deep Learning" },
      { name: "Generative AI", desc: "LLM APIs" },
      { name: "RAG", desc: "Vector Retrieval" },
      { name: "LangChain", desc: "AI Orchestration" },
      { name: "FastAPI", desc: "Model Serving" },
      { name: "MLOps", desc: "Model Tracking" },
    ],
  },
];

export function TechStackGrid() {
  const [activeTab, setActiveTab] = useState(DOMAINS[0].id);

  const currentDomain = DOMAINS.find((d) => d.id === activeTab) || DOMAINS[0];

  return (
    <section className="py-24 relative bg-surface/50 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
              TOOLING MATRIX
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Technologies You'll Work With.
          </h2>
          <p className="text-muted text-base md:text-lg">
            Hands-on exposure to production tools used by modern engineering teams worldwide.
          </p>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {DOMAINS.map((domain) => {
            const Icon = domain.icon;
            const isActive = activeTab === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-accent text-white font-bold shadow-glow-sm"
                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{domain.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {currentDomain.tools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-all duration-200 space-y-1 group hover:shadow-glow-sm"
            >
              <h4 className="text-sm font-bold font-mono text-foreground group-hover:text-accent transition-colors">
                {tool.name}
              </h4>
              <p className="text-[11px] font-mono text-muted">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
