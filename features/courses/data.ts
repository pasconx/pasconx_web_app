import { media } from "@/features/media/assets";

export type Course = {
  slug: string;
  title: string;
  category: "Cloud & DevOps" | "Full Stack" | "Data" | "Cybersecurity" | "AI / ML";
  headline: string;
  level: string;
  duration: string;
  price: string;
  status: "ENROLMENT OPEN" | "NEXT COHORT" | "COMING SOON";
  overview: string;
  technologies: string[];
  modules: string[];
  outcomes: string[];
  format: string[];
  image: string;
  brochureHref?: string;
};

export const courses: Course[] = [
  {
    slug: "devops",
    title: "DevOps",
    category: "Cloud & DevOps",
    headline: "Master CI/CD, Containerization, Kubernetes Orchestration & AWS Infrastructure",
    level: "Beginner to Advanced",
    duration: "16 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "NEXT COHORT",
    overview:
      "Master enterprise DevOps, infrastructure automation, container orchestration, and cloud architecture. Learn to automate CI/CD pipelines and manage production Kubernetes clusters on AWS.",
    technologies: ["Linux", "Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana"],
    modules: [
      "Linux Administration & Shell Scripting",
      "Git Workflows & GitHub Actions CI/CD",
      "Jenkins Pipeline as Code Automation",
      "Docker Containerization & Multi-stage Builds",
      "Kubernetes Cluster Orchestration & Helm",
      "Infrastructure as Code with Terraform & AWS"
    ],
    outcomes: [
      "Automate zero-downtime microservice deployment pipelines to Kubernetes",
      "Provision scalable AWS infrastructure using Terraform HCL",
      "Monitor cluster metrics and logs using Prometheus & Grafana dashboards"
    ],
    format: ["Live instructor-led sessions", "Hands-on cloud sandbox labs", "1-on-1 code reviews & mock interviews"],
    image: media.upcoming.devops,
  },
  {
    slug: "python-fullstack",
    title: "Python Full Stack",
    category: "Full Stack",
    headline: "Build Modern Web Applications with Python, Django, REST APIs & React",
    level: "Beginner to Intermediate",
    duration: "18 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "NEXT COHORT",
    overview:
      "A complete full-stack software development programme. Master Python programming, relational database modeling with PostgreSQL, backend REST API development in Django, and interactive React frontends.",
    technologies: ["Python", "Django", "REST APIs", "React", "JavaScript", "HTML5", "CSS3", "PostgreSQL", "Git", "Docker"],
    modules: [
      "Python Core & Object-Oriented Programming",
      "Database Architecture & SQL Queries in PostgreSQL",
      "Django Backend Development & ORM Models",
      "RESTful API Architecture & JWT Authentication",
      "Modern React Frontend & State Management",
      "Full Stack Deployment & Dockerization"
    ],
    outcomes: [
      "Engineer enterprise SaaS web platforms with authentication & payment gateways",
      "Design scalable REST APIs consuming relational databases",
      "Deploy full stack applications to production cloud instances"
    ],
    format: ["Live instructor-led sessions", "Git-based project code reviews", "Portfolio build & technical interview prep"],
    image: media.upcoming.pythonFullStack,
  },
  {
    slug: "java-fullstack",
    title: "Java Full Stack",
    category: "Full Stack",
    headline: "Enterprise Software Engineering with Java, Spring Boot Microservices & React",
    level: "Beginner to Advanced",
    duration: "20 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "NEXT COHORT",
    overview:
      "Engineer resilient, enterprise-scale software solutions using Core Java, Spring Boot microservices, Spring Security, SQL databases, and single-page React frontend interfaces.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs", "SQL", "PostgreSQL", "React", "Git"],
    modules: [
      "Java Core, Collections & Multithreading",
      "Spring Boot Framework & Dependency Injection",
      "Spring Data JPA & Relational SQL Queries",
      "Microservices Architecture & Spring Security",
      "React Frontend Integration with Axios",
      "Enterprise Testing & CI/CD Deployment"
    ],
    outcomes: [
      "Develop multi-tier enterprise microservices for banking and healthcare applications",
      "Implement role-based access control using Spring Security & JWT",
      "Optimize SQL database performance and complex join queries"
    ],
    format: ["Live instructor-led sessions", "Enterprise codebase practice", "Resume tailoring & mock interviews"],
    image: media.upcoming.javaFullStack,
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    category: "Data",
    headline: "Transform Raw Data into Business Intelligence with SQL, Python & Power BI",
    level: "Beginner Friendly",
    duration: "14 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "ENROLMENT OPEN",
    overview:
      "Extract, clean, analyze, and visualize enterprise datasets. Master statistical analysis, complex SQL queries, Python data wrangling with Pandas, and executive Power BI reporting dashboards.",
    technologies: ["Excel", "SQL", "Python", "Pandas", "Matplotlib", "Power BI", "DAX", "Statistics", "Data Visualization"],
    modules: [
      "Advanced Excel & Financial Analytics",
      "Relational Database Querying with SQL",
      "Python Data Science & Pandas DataFrames",
      "Data Cleaning & Exploratory Data Analysis",
      "Power BI Dashboard Building & DAX Measures",
      "Business Storytelling & Executive Presentations"
    ],
    outcomes: [
      "Query multi-table enterprise relational databases with complex window functions",
      "Build interactive executive Power BI dashboards with dynamic filtering",
      "Automate data cleaning scripts handling 100K+ transaction records"
    ],
    format: ["Live instructor-led sessions", "Real-world dataset case studies", "Portfolio presentation coaching"],
    image: media.upcoming.pythonFullStack,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cybersecurity",
    headline: "Master Enterprise Cyber Defense (SOC) & Red Team Security Testing (VAPT)",
    level: "Beginner to Job-Ready",
    duration: "16 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "ENROLMENT OPEN",
    overview:
      "A comprehensive cybersecurity programme covering Blue Team SOC monitoring and Red Team vulnerability testing. Master telemetry analysis in Splunk/Wazuh, Wireshark packet inspection, and Burp Suite web audits.",
    technologies: ["Networking", "Linux", "SOC", "SIEM", "Splunk", "Wazuh", "Wireshark", "Burp Suite", "Nmap", "VAPT"],
    modules: [
      "Networking Protocols & Linux System Hardening",
      "SIEM Telemetry Monitoring with Splunk & Wazuh",
      "Wireshark Packet Analysis & Traffic Inspection",
      "SOC Incident Triage & Threat Hunting",
      "Vulnerability Assessment & Burp Suite Audits",
      "Capstone Breach Investigation & Technical Reporting"
    ],
    outcomes: [
      "Monitor live network traffic and triage intrusion alerts in SIEM platforms",
      "Conduct security assessments on web applications and identify OWASP flaws",
      "Produce formal incident response reports and technical threat handoffs"
    ],
    format: ["Live instructor-led sessions", "Cloud cyber range labs", "Mock technical interview preparation"],
    image: media.courses.soc,
  },
  {
    slug: "aiml-engineer",
    title: "AI/ML Engineer",
    category: "AI / ML",
    headline: "Build Production AI Applications, Machine Learning Models & RAG Systems",
    level: "Intermediate to Advanced",
    duration: "18 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "COMING SOON",
    overview:
      "Engineer modern AI applications. Learn data preprocessing, train supervised & deep learning models, build Large Language Model (LLM) apps with Retrieval-Augmented Generation (RAG), and deploy MLOps pipelines.",
    technologies: ["Python", "Scikit-Learn", "PyTorch", "Generative AI", "LLMs", "RAG", "LangChain", "Vector DB", "FastAPI", "MLOps"],
    modules: [
      "Python Data Science Foundations & Vector Math",
      "Supervised & Unsupervised Machine Learning Models",
      "Neural Networks & PyTorch Deep Learning",
      "Generative AI & LLM API Integration",
      "Vector Databases & LangChain RAG Pipelines",
      "MLOps & FastAPI Service Deployment"
    ],
    outcomes: [
      "Construct custom RAG document search assistants using vector embeddings",
      "Train and evaluate predictive machine learning models with PyTorch & Scikit-Learn",
      "Deploy AI inference microservices to production cloud servers"
    ],
    format: ["Live instructor-led sessions", "Hands-on AI lab projects", "MLOps deployment mentorship"],
    image: media.courses.vapt,
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export const liveCourses: Course[] = [
  {
    slug: "vapt",
    title: "VAPT",
    category: "Cybersecurity",
    headline: "Vulnerability Assessment, Web Application Auditing & Red Team Security Testing",
    level: "Beginner to Advanced",
    duration: "16 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "ENROLMENT OPEN",
    overview:
      "Master offensive security, web application auditing, penetration testing with Burp Suite, OWASP Top 10 remediation, and Red Team operations.",
    technologies: ["Linux", "Burp Suite", "Nmap", "Wireshark", "Metasploit", "OWASP", "VAPT", "Penetration Testing"],
    modules: [
      "Linux Hardening & Network Reconnaissance",
      "Vulnerability Scanning & Nmap Audits",
      "Web Application Pentesting with Burp Suite",
      "OWASP Top 10 Exploitation & Remediation",
      "Red Team Breach Scenarios & Technical Reporting"
    ],
    outcomes: [
      "Conduct end-to-end vulnerability assessments on web applications and APIs",
      "Document security findings and produce executive remediation reports",
      "Master Burp Suite Pro, Nmap, and offensive penetration testing tools"
    ],
    format: ["Live instructor-led sessions", "Cloud cyber range labs", "Mock technical interview prep"],
    image: media.courses.vapt,
  },
  {
    slug: "soc-analyst",
    title: "SOC Analyst",
    category: "Cybersecurity",
    headline: "Enterprise Cyber Defense, SIEM Telemetry Monitoring & Incident Triage",
    level: "Beginner to Job-Ready",
    duration: "16 Weeks · Live Cohort",
    price: "Contact for fees",
    status: "ENROLMENT OPEN",
    overview:
      "Master Security Operations Center (SOC) defense, SIEM telemetry monitoring in Splunk/Wazuh, packet inspection in Wireshark, incident triage, and threat hunting.",
    technologies: ["Linux", "SOC", "SIEM", "Splunk", "Wazuh", "Wireshark", "Packet Inspection", "Incident Response"],
    modules: [
      "Enterprise Networking & Linux System Security",
      "SIEM Configuration & Telemetry Ingestion (Splunk/Wazuh)",
      "Wireshark Packet Analysis & Protocol Inspection",
      "SOC Incident Triage, Alert Analysis & Threat Hunting",
      "Capstone Incident Investigation & Technical Handoff"
    ],
    outcomes: [
      "Triage live intrusion alerts and investigate security incidents in Splunk/Wazuh SIEM",
      "Inspect packet captures with Wireshark to isolate malware & unauthorized traffic",
      "Produce technical breach investigation logs and SOC handoff reports"
    ],
    format: ["Live instructor-led sessions", "Live SIEM lab environments", "Career preparation & resume coaching"],
    image: media.courses.soc,
  },
];

