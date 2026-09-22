export interface ProgrammeDetail {
  slug: string;
  programmeName: string;
  category: string;
  heroHeadline: {
    line1: string;
    line2: string;
  };
  supportingText: string;
  image: string;
  duration: string;
  format: string;
  status: string;
  overview: {
    sectionLabel: string;
    headline: {
      line1: string;
      line2: string;
    };
    description: string;
  };
  curriculum: {
    sectionLabel: string;
    modules: { number: string; title: string }[];
  };
  practice: {
    sectionLabel: string;
    items: string[];
  };
  delivery: {
    sectionLabel: string;
    items: string[];
  };
  enquiryTitle: string;
}

export const programmeData: Record<string, ProgrammeDetail> = {
  vapt: {
    slug: "vapt",
    programmeName: "VAPT — Vulnerability Assessment & Penetration Testing",
    category: "CYBERSECURITY",
    heroHeadline: {
      line1: "Find the Weakness.",
      line2: "Prove the Risk.",
    },
    supportingText:
      "Build practical skills in vulnerability assessment and penetration testing. Learn how security professionals discover, validate, document, and communicate vulnerabilities across modern applications and infrastructure.",
    image: "/assets/programmes/vapt.png",
    duration: "16 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "ENROLMENT OPEN",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Learn the process.",
        line2: "Prove the weakness.",
      },
      description:
        "This programme focuses on practical security testing workflows: discovering vulnerabilities, validating security findings, assessing risk, and documenting remediation recommendations.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Cybersecurity fundamentals and attack surfaces" },
        { number: "02", title: "Vulnerability assessment methodology" },
        { number: "03", title: "Network scanning and reconnaissance" },
        { number: "04", title: "Web application security testing" },
        { number: "05", title: "OWASP Top 10" },
        { number: "06", title: "Burp Suite fundamentals" },
        { number: "07", title: "Nmap and network enumeration" },
        { number: "08", title: "Vulnerability validation and exploitation concepts" },
        { number: "09", title: "Security reporting and risk classification" },
        { number: "10", title: "Practical penetration-testing workflow" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Perform reconnaissance and asset discovery",
        "Identify vulnerabilities across applications and systems",
        "Analyse web application security weaknesses",
        "Work with tools such as Nmap and Burp Suite",
        "Validate security findings in controlled lab environments",
        "Document vulnerabilities and remediation recommendations",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Guided security labs",
        "Practical vulnerability assessment exercises",
        "Controlled penetration-testing scenarios",
        "Security reporting practice",
        "Technical interview preparation",
      ],
    },
    enquiryTitle: "VAPT — Vulnerability Assessment & Penetration Testing",
  },
  "security-operations-center-soc": {
    slug: "security-operations-center-soc",
    programmeName: "SOC Analyst",
    category: "CYBERSECURITY",
    heroHeadline: {
      line1: "Monitor Threats.",
      line2: "Defend in Real Time.",
    },
    supportingText:
      "Build practical Security Operations Center skills through hands-on monitoring, alert investigation, incident triage, threat detection, and security operations workflows.",
    image: "/assets/programmes/soc.png",
    duration: "16 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "ENROLMENT OPEN",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Detect the signal.",
        line2: "Investigate the threat.",
      },
      description:
        "Learn how security operations teams monitor telemetry, investigate alerts, analyse suspicious activity, and respond to security incidents using practical workflows and controlled lab environments.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Security Operations Center fundamentals" },
        { number: "02", title: "Security monitoring and telemetry" },
        { number: "03", title: "SIEM fundamentals" },
        { number: "04", title: "Log analysis and event correlation" },
        { number: "05", title: "Alert triage and investigation" },
        { number: "06", title: "Network traffic analysis" },
        { number: "07", title: "Endpoint telemetry and investigation" },
        { number: "08", title: "Threat detection and detection rules" },
        { number: "09", title: "Incident response fundamentals" },
        { number: "10", title: "Security reporting and documentation" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Monitor security alerts and telemetry",
        "Investigate suspicious login and endpoint activity",
        "Analyse network traffic",
        "Perform incident triage",
        "Correlate security events",
        "Create incident investigation reports",
        "Practise controlled incident-response scenarios",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Guided SOC labs",
        "SIEM-based investigation exercises",
        "Network and endpoint investigation",
        "Incident-response simulations",
        "Career grooming and technical mock interviews",
      ],
    },
    enquiryTitle: "SOC Analyst",
  },
  soc: {
    slug: "security-operations-center-soc",
    programmeName: "SOC Analyst",
    category: "CYBERSECURITY",
    heroHeadline: {
      line1: "Monitor Threats.",
      line2: "Defend in Real Time.",
    },
    supportingText:
      "Build practical Security Operations Center skills through hands-on monitoring, alert investigation, incident triage, threat detection, and security operations workflows.",
    image: "/assets/programmes/soc.png",
    duration: "16 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "ENROLMENT OPEN",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Detect the signal.",
        line2: "Investigate the threat.",
      },
      description:
        "Learn how security operations teams monitor telemetry, investigate alerts, analyse suspicious activity, and respond to security incidents using practical workflows and controlled lab environments.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Security Operations Center fundamentals" },
        { number: "02", title: "Security monitoring and telemetry" },
        { number: "03", title: "SIEM fundamentals" },
        { number: "04", title: "Log analysis and event correlation" },
        { number: "05", title: "Alert triage and investigation" },
        { number: "06", title: "Network traffic analysis" },
        { number: "07", title: "Endpoint telemetry and investigation" },
        { number: "08", title: "Threat detection and detection rules" },
        { number: "09", title: "Incident response fundamentals" },
        { number: "10", title: "Security reporting and documentation" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Monitor security alerts and telemetry",
        "Investigate suspicious login and endpoint activity",
        "Analyse network traffic",
        "Perform incident triage",
        "Correlate security events",
        "Create incident investigation reports",
        "Practise controlled incident-response scenarios",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Guided SOC labs",
        "SIEM-based investigation exercises",
        "Network and endpoint investigation",
        "Incident-response simulations",
        "Career grooming and technical mock interviews",
      ],
    },
    enquiryTitle: "SOC Analyst",
  },
  cybersecurity: {
    slug: "cybersecurity",
    programmeName: "Cybersecurity Engineering (SOC & VAPT)",
    category: "CYBERSECURITY",
    heroHeadline: {
      line1: "Detect Threats.",
      line2: "Secure Systems.",
    },
    supportingText:
      "A comprehensive cybersecurity programme covering Blue Team SOC monitoring and Red Team vulnerability testing. Master telemetry analysis in Splunk/Wazuh, Wireshark packet inspection, and Burp Suite web audits.",
    image: "/assets/programmes/soc.png",
    duration: "16 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "ENROLMENT OPEN",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Practical defense.",
        line2: "Methodical assessment.",
      },
      description:
        "Learn both defensive operations and ethical vulnerability discovery across modern networks, cloud assets, and web applications in guided lab environments.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Networking Protocols & Linux System Hardening" },
        { number: "02", title: "SIEM Telemetry Monitoring with Splunk & Wazuh" },
        { number: "03", title: "Wireshark Packet Analysis & Traffic Inspection" },
        { number: "04", title: "SOC Incident Triage & Threat Hunting" },
        { number: "05", title: "Vulnerability Assessment & Burp Suite Audits" },
        { number: "06", title: "Capstone Breach Investigation & Technical Reporting" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Monitor live network traffic and triage intrusion alerts in SIEM platforms",
        "Conduct security assessments on web applications and identify OWASP flaws",
        "Produce formal incident response reports and technical threat handoffs",
        "Inspect packet captures with Wireshark to isolate malware & unauthorized traffic",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Cloud cyber range labs",
        "Incident-response simulations",
        "Mock technical interview preparation",
      ],
    },
    enquiryTitle: "Cybersecurity Engineering (SOC & VAPT)",
  },
  devops: {
    slug: "devops",
    programmeName: "DevOps Master Course",
    category: "CLOUD & DEVOPS",
    heroHeadline: {
      line1: "Automate Everything.",
      line2: "Deploy with Confidence.",
    },
    supportingText:
      "Master enterprise DevOps, infrastructure automation, container orchestration, and cloud architecture. Learn to automate CI/CD pipelines and manage production Kubernetes clusters on AWS.",
    image: "/assets/programmes/devops.png",
    duration: "16 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "NEXT COHORT",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Bridge dev and ops.",
        line2: "Scale with precision.",
      },
      description:
        "Develop end-to-end automation pipelines, configure production infrastructure with Terraform, and orchestrate containers with Kubernetes.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Linux Administration & Shell Scripting" },
        { number: "02", title: "Git Workflows & GitHub Actions CI/CD" },
        { number: "03", title: "Jenkins Pipeline as Code Automation" },
        { number: "04", title: "Docker Containerization & Multi-stage Builds" },
        { number: "05", title: "Kubernetes Cluster Orchestration & Helm" },
        { number: "06", title: "Infrastructure as Code with Terraform & AWS" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Automate zero-downtime microservice deployment pipelines to Kubernetes",
        "Provision scalable AWS infrastructure using Terraform HCL",
        "Monitor cluster metrics and logs using Prometheus & Grafana dashboards",
        "Manage cloud security groups, IAM roles, and VPC peering",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Hands-on cloud sandbox labs",
        "Real-world CI/CD pipeline building",
        "1-on-1 code reviews & mock interviews",
      ],
    },
    enquiryTitle: "DevOps Master Course",
  },
  "python-fullstack": {
    slug: "python-fullstack",
    programmeName: "Python Full Stack",
    category: "FULL STACK",
    heroHeadline: {
      line1: "Engineer Full Stack.",
      line2: "Build Resilient Apps.",
    },
    supportingText:
      "A complete full-stack software development programme. Master Python programming, relational database modeling with PostgreSQL, backend REST API development in Django, and interactive React frontends.",
    image: "/assets/programmes/python.png",
    duration: "18 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "NEXT COHORT",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "From database to browser.",
        line2: "Build real applications.",
      },
      description:
        "Learn Python backend engineering, scalable database schemas, modern JavaScript, and component-based frontend design with React.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Python Core & Object-Oriented Programming" },
        { number: "02", title: "Database Architecture & SQL Queries in PostgreSQL" },
        { number: "03", title: "Django Backend Development & ORM Models" },
        { number: "04", title: "RESTful API Architecture & JWT Authentication" },
        { number: "05", title: "Modern React Frontend & State Management" },
        { number: "06", title: "Full Stack Deployment & Dockerization" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Engineer enterprise SaaS web platforms with authentication & payment gateways",
        "Design scalable REST APIs consuming relational databases",
        "Deploy full stack applications to production cloud instances",
        "Write unit and integration tests for backend services",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Git-based project code reviews",
        "Portfolio build & technical interview prep",
        "Architectural guidance from senior developers",
      ],
    },
    enquiryTitle: "Python Full Stack",
  },
  "java-fullstack": {
    slug: "java-fullstack",
    programmeName: "Java Full Stack",
    category: "FULL STACK",
    heroHeadline: {
      line1: "Architect Scalable Systems.",
      line2: "Enterprise Java & React.",
    },
    supportingText:
      "Engineer resilient, enterprise-scale software solutions using Core Java, Spring Boot microservices, Spring Security, SQL databases, and single-page React frontend interfaces.",
    image: "/assets/programmes/java.png",
    duration: "20 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "NEXT COHORT",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Robust architecture.",
        line2: "Enterprise standards.",
      },
      description:
        "Develop enterprise-ready applications with Java Spring Boot, microservices architecture, secure API integrations, and modern React interfaces.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Java Core, Collections & Multithreading" },
        { number: "02", title: "Spring Boot Framework & Dependency Injection" },
        { number: "03", title: "Spring Data JPA & Relational SQL Queries" },
        { number: "04", title: "Microservices Architecture & Spring Security" },
        { number: "05", title: "React Frontend Integration with Axios" },
        { number: "06", title: "Enterprise Testing & CI/CD Deployment" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Develop multi-tier enterprise microservices for banking and healthcare applications",
        "Implement role-based access control using Spring Security & JWT",
        "Optimize SQL database performance and complex join queries",
        "Containerize Java applications with Docker",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Enterprise codebase practice",
        "Resume tailoring & mock interviews",
        "System design and architectural reviews",
      ],
    },
    enquiryTitle: "Java Full Stack",
  },
  "data-analyst": {
    slug: "data-analyst",
    programmeName: "Data Analyst",
    category: "DATA",
    heroHeadline: {
      line1: "Uncover the Story.",
      line2: "Deliver the Insight.",
    },
    supportingText:
      "Transform raw data into meaningful business intelligence. Master statistical analysis, complex SQL queries, Python data wrangling with Pandas, and executive Power BI reporting dashboards.",
    image: "/images/programmes/data-analyst.png",
    duration: "14 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "ENROLMENT OPEN",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "From data wrangling.",
        line2: "To strategic decisions.",
      },
      description:
        "Extract, clean, model, and visualize real-world business datasets to solve actual operational challenges and present executive findings.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Advanced Excel & Financial Analytics" },
        { number: "02", title: "Relational Database Querying with SQL" },
        { number: "03", title: "Python Data Science & Pandas DataFrames" },
        { number: "04", title: "Data Cleaning & Exploratory Data Analysis" },
        { number: "05", title: "Power BI Dashboard Building & DAX Measures" },
        { number: "06", title: "Business Storytelling & Executive Presentations" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Query multi-table enterprise relational databases with complex window functions",
        "Build interactive executive Power BI dashboards with dynamic filtering",
        "Automate data cleaning scripts handling 100K+ transaction records",
        "Perform statistical hypothesis testing and cohort analysis",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Real-world dataset case studies",
        "Portfolio presentation coaching",
        "Business intelligence interview preparation",
      ],
    },
    enquiryTitle: "Data Analyst",
  },
  "aiml-engineer": {
    slug: "aiml-engineer",
    programmeName: "AI/ML Engineer",
    category: "AI / ML",
    heroHeadline: {
      line1: "Build Intelligence.",
      line2: "Deploy Real-World AI.",
    },
    supportingText:
      "Engineer modern AI applications. Learn data preprocessing, train machine learning models, build Large Language Model (LLM) apps with Retrieval-Augmented Generation (RAG), and deploy MLOps pipelines.",
    image: "/images/programmes/ai-ml.png",
    duration: "18 WEEKS · LIVE COHORT",
    format: "LIVE ONLINE / GUIDED LABS",
    status: "COMING SOON",
    overview: {
      sectionLabel: "PROGRAMME OVERVIEW",
      headline: {
        line1: "Theory into models.",
        line2: "Models into production.",
      },
      description:
        "Build practical AI and machine learning systems using Python, neural networks, LLM integrations, vector embeddings, and cloud deployment pipelines.",
    },
    curriculum: {
      sectionLabel: "CURRICULUM",
      modules: [
        { number: "01", title: "Python Data Science Foundations & Vector Math" },
        { number: "02", title: "Supervised & Unsupervised Machine Learning Models" },
        { number: "03", title: "Neural Networks & PyTorch Deep Learning" },
        { number: "04", title: "Generative AI & LLM API Integration" },
        { number: "05", title: "Vector Databases & LangChain RAG Pipelines" },
        { number: "06", title: "MLOps & FastAPI Service Deployment" },
      ],
    },
    practice: {
      sectionLabel: "YOU WILL PRACTISE",
      items: [
        "Construct custom RAG document search assistants using vector embeddings",
        "Train and evaluate predictive machine learning models with PyTorch & Scikit-Learn",
        "Deploy AI inference microservices to production cloud servers",
        "Fine-tune pre-trained models for domain-specific tasks",
      ],
    },
    delivery: {
      sectionLabel: "DELIVERY",
      items: [
        "Live instructor-led sessions",
        "Hands-on AI lab projects",
        "MLOps deployment mentorship",
        "Portfolio build & technical interview prep",
      ],
    },
    enquiryTitle: "AI/ML Engineer",
  },
};

export function getProgrammeDetail(slug: string): ProgrammeDetail | undefined {
  return programmeData[slug];
}

export function getAllProgrammeSlugs(): string[] {
  return Object.keys(programmeData);
}
