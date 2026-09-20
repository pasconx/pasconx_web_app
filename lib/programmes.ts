export interface SyllabusModule {
  number: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Programme {
  slug: string;
  title: string;
  category: "Cloud & DevOps" | "Full Stack" | "Data" | "Cybersecurity" | "AI / ML";
  shortDescription: string;
  fullDescription: string;
  level: string;
  duration: string;
  format: string;
  status: "ENROLMENT OPEN" | "NEXT COHORT" | "COMING SOON";
  technologies: string[];
  modules: SyllabusModule[];
  projects: {
    title: string;
    description: string;
    techUsed: string[];
  }[];
  careerRoles: string[];
  gradient: string;
}

export const PROGRAMMES: Programme[] = [
  {
    slug: "devops",
    title: "DevOps",
    category: "Cloud & DevOps",
    shortDescription:
      "Master CI/CD pipelines, Docker containerization, Kubernetes orchestration, AWS Cloud, and Terraform automation for production environments.",
    fullDescription:
      "The DevOps Engineering Programme equips you with industry-standard practices in infrastructure automation, continuous integration, continuous delivery, container orchestration, and cloud architecture. Learn to bridge development and operations seamlessly.",
    level: "Beginner to Advanced",
    duration: "16 Weeks",
    format: "Live Instructor-Led",
    status: "NEXT COHORT",
    technologies: [
      "Linux",
      "Git",
      "GitHub",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Prometheus",
      "Grafana",
      "CI/CD",
    ],
    modules: [
      {
        number: "01",
        title: "Linux & System Administration",
        description: "Core OS concepts, shell scripting, user management, networking, and system security fundamentals.",
        topics: ["Linux CLI & Bash Scripting", "Process & Service Management", "SSH & Networking Tools", "File System Architecture"],
      },
      {
        number: "02",
        title: "Version Control & Automation",
        description: "Git workflows, GitHub Actions, branching strategies, and CI automation.",
        topics: ["Advanced Git & Flow", "Jenkins Pipeline as Code", "GitHub Actions Automation", "Artifact Management"],
      },
      {
        number: "03",
        title: "Containers & Orchestration",
        description: "Dockerizing microservices and managing cluster deployment with Kubernetes.",
        topics: ["Docker Images & Multi-stage Builds", "Kubernetes Pods, Services & Ingress", "Helm Charts", "Cluster Monitoring"],
      },
      {
        number: "04",
        title: "Cloud & Infrastructure as Code",
        description: "Automating AWS Cloud resource provisioning using Terraform.",
        topics: ["AWS EC2, VPC, S3 & IAM", "Terraform HCL State Management", "Cloud Monitoring with Grafana", "Production Deployment"],
      },
    ],
    projects: [
      {
        title: "Automated Microservices CI/CD Pipeline",
        description: "Built a zero-downtime deployment pipeline for node/python microservices to Kubernetes via GitHub Actions.",
        techUsed: ["Docker", "Kubernetes", "GitHub Actions", "AWS EKS"],
      },
      {
        title: "Multi-Region Terraform Infrastructure",
        description: "Provisioned fault-tolerant AWS infrastructure with automated state locking and security compliance.",
        techUsed: ["Terraform", "AWS VPC", "S3", "IAM"],
      },
    ],
    careerRoles: [
      "DevOps Engineer",
      "Cloud Infrastructure Specialist",
      "Site Reliability Engineer (SRE)",
      "Build & Release Automation Engineer",
    ],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
  {
    slug: "python-fullstack",
    title: "Python Full Stack",
    category: "Full Stack",
    shortDescription:
      "Build modern, scalable web applications using Python, Django, REST APIs, PostgreSQL, and React frontend interfaces.",
    fullDescription:
      "A comprehensive software engineering track covering modern frontend development, robust backend systems with Python, relational database modeling, security, and cloud deployment.",
    level: "Beginner to Intermediate",
    duration: "18 Weeks",
    format: "Live Instructor-Led",
    status: "NEXT COHORT",
    technologies: [
      "Python",
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "Git",
      "Deployment",
    ],
    modules: [
      {
        number: "01",
        title: "Python Language & Algorithms",
        description: "Object-oriented programming, data structures, and asynchronous Python programming.",
        topics: ["OOP Principles", "Data Structures & Algorithms", "File Handling & Modules", "Decorators & Generators"],
      },
      {
        number: "02",
        title: "Modern Frontend Development",
        description: "Crafting interactive UI components with HTML, Tailwind CSS, JavaScript, and React.",
        topics: ["ES6+ JavaScript", "React Hooks & State", "Component Architecture", "Tailwind Styling"],
      },
      {
        number: "03",
        title: "Backend API Engineering",
        description: "Building production-grade REST APIs using Django and Django REST Framework.",
        topics: ["Django ORM & Models", "Authentication & JWT", "RESTful Endpoint Architecture", "Database Migrations"],
      },
      {
        number: "04",
        title: "Full Stack Integration & Cloud Deployment",
        description: "Connecting frontend and backend, automated testing, and deploying to cloud servers.",
        topics: ["CORS & API Security", "PostgreSQL Optimization", "Docker Container Deployment", "CI/CD Setup"],
      },
    ],
    projects: [
      {
        title: "Enterprise SaaS Management Portal",
        description: "End-to-end full stack web application featuring role-based access control, real-time metrics, and payment gateway integration.",
        techUsed: ["Python", "Django", "React", "PostgreSQL"],
      },
      {
        title: "Real-time E-Commerce API Engine",
        description: "High-performance REST API supporting cart checkout, inventory locking, and order notifications.",
        techUsed: ["Python", "REST APIs", "Docker", "Redis"],
      },
    ],
    careerRoles: [
      "Python Full Stack Developer",
      "Backend Engineer",
      "Full Stack Software Engineer",
      "Web Application Developer",
    ],
    gradient: "from-amber-500/20 via-blue-500/10 to-transparent",
  },
  {
    slug: "java-fullstack",
    title: "Java Full Stack",
    category: "Full Stack",
    shortDescription:
      "Engineer enterprise web applications using Core Java, Spring Boot microservices, REST APIs, SQL databases, and React.",
    fullDescription:
      "Java Full Stack Engineering focuses on building resilient, enterprise-scale software solutions. Master Java OOP, Spring Boot backend microservices, SQL performance, and React UI development.",
    level: "Beginner to Advanced",
    duration: "20 Weeks",
    format: "Live Instructor-Led",
    status: "NEXT COHORT",
    technologies: [
      "Java",
      "OOP",
      "Spring",
      "Spring Boot",
      "REST APIs",
      "Databases",
      "SQL",
      "React",
      "Git",
      "Deployment",
    ],
    modules: [
      {
        number: "01",
        title: "Java Core & Enterprise Fundamentals",
        description: "Strong foundation in Java syntax, OOP, collections framework, and multithreading.",
        topics: ["Core Java & Exception Handling", "Collections & Streams API", "Design Patterns", "Multithreading"],
      },
      {
        number: "02",
        title: "Spring Boot Microservices Architecture",
        description: "Building scalable backend services, Spring Security, and Spring Data JPA.",
        topics: ["Spring Boot Auto-configuration", "Spring Data JPA & Hibernate", "RESTful Microservices", "Spring Security"],
      },
      {
        number: "03",
        title: "Database Engineering & SQL",
        description: "Relational database schema design, complex SQL queries, and transaction management.",
        topics: ["SQL Queries & Joins", "Indexing & Optimization", "Transaction Isolation", "PostgreSQL / MySQL"],
      },
      {
        number: "04",
        title: "Frontend Engineering & Integration",
        description: "Building responsive single-page applications with React and connecting to Spring Boot backends.",
        topics: ["React State & Context", "Axios API Integration", "Build Tools & Vite", "Production Deployment"],
      },
    ],
    projects: [
      {
        title: "Banking Microservices Transaction Platform",
        description: "Enterprise Java backend system supporting multi-currency accounts, audit logs, and secure REST APIs.",
        techUsed: ["Java", "Spring Boot", "Spring Security", "MySQL", "React"],
      },
      {
        title: "Healthcare Patient Portal",
        description: "Full stack Java web application with HIPAA-compliant records management and doctor appointment scheduling.",
        techUsed: ["Java", "Spring Boot", "Hibernate", "React"],
      },
    ],
    careerRoles: [
      "Java Full Stack Developer",
      "Backend Microservices Engineer",
      "Enterprise Java Developer",
      "Software Systems Engineer",
    ],
    gradient: "from-orange-600/20 via-red-500/10 to-transparent",
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    category: "Data",
    shortDescription:
      "Transform raw data into actionable business intelligence using SQL, Python, Pandas, Power BI, Statistics, and interactive dashboards.",
    fullDescription:
      "Learn to extract, clean, analyze, and visualize complex datasets. This programme covers statistical analysis, SQL querying, Python data libraries, and executive Power BI reporting.",
    level: "Beginner Friendly",
    duration: "14 Weeks",
    format: "Live Instructor-Led",
    status: "ENROLMENT OPEN",
    technologies: [
      "Excel",
      "SQL",
      "Python",
      "Pandas",
      "Data Cleaning",
      "Data Visualization",
      "Power BI",
      "Statistics",
      "Dashboards",
      "Data Analysis",
    ],
    modules: [
      {
        number: "01",
        title: "Excel & Financial Analytics",
        description: "Advanced Excel functions, pivot tables, VLOOKUP/XLOOKUP, and business financial modeling.",
        topics: ["Advanced Formulas & Functions", "Pivot Tables & Charts", "Data Validation & Audit", "Business Modeling"],
      },
      {
        number: "02",
        title: "Relational Databases & SQL",
        description: "Writing complex SQL queries to extract, aggregate, and analyze enterprise datasets.",
        topics: ["SELECT, WHERE & GROUP BY", "Subqueries & CTEs", "Window Functions", "Data Aggregation"],
      },
      {
        number: "03",
        title: "Python for Data Analysis",
        description: "Using Python data science libraries to automate data cleaning and statistical exploration.",
        topics: ["Python Fundamentals", "NumPy & Pandas DataFrames", "Data Wrangling & Cleaning", "Matplotlib & Seaborn"],
      },
      {
        number: "04",
        title: "Business Intelligence & Power BI",
        description: "Creating interactive dashboards, DAX measures, and visual storytelling for executive decision-making.",
        topics: ["Data Modeling in Power BI", "DAX Formulas & Measures", "Interactive Visual Dashboards", "Storytelling with Data"],
      },
    ],
    projects: [
      {
        title: "Executive Retail Analytics Dashboard",
        description: "Interactive Power BI dashboard tracking revenue, customer churn, regional growth, and product category trends.",
        techUsed: ["Power BI", "SQL", "Excel", "DAX"],
      },
      {
        title: "Automated Customer Segmentation Pipeline",
        description: "Python script processing 100K+ transaction records to categorize customer cohorts and predict behavior.",
        techUsed: ["Python", "Pandas", "Matplotlib", "SQL"],
      },
    ],
    careerRoles: [
      "Data Analyst",
      "Business Intelligence Specialist",
      "Reporting & Analytics Engineer",
      "Data Operations Associate",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cybersecurity",
    shortDescription:
      "Train in practical cyber defense, Security Operations (SOC), incident response, network security, and vulnerability assessment (VAPT).",
    fullDescription:
      "A hands-on cybersecurity programme for aspiring Blue Team SOC analysts and Red Team security auditors. Master real-time telemetry inspection, malware containment, Wireshark packet analysis, and ethical security testing.",
    level: "Beginner to Intermediate",
    duration: "16 Weeks",
    format: "Live Instructor-Led",
    status: "ENROLMENT OPEN",
    technologies: [
      "Networking",
      "Linux",
      "Security Fundamentals",
      "SOC",
      "SIEM",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Assessment",
      "VAPT",
      "Cloud Security",
    ],
    modules: [
      {
        number: "01",
        title: "Networking & Security Architecture",
        description: "TCP/IP, OSI model, firewalls, ports, routing, and system hardening fundamentals.",
        topics: ["Network Protocol Analysis", "Wireshark Packet Inspection", "Firewall Rules & Subnetting", "Linux & Windows Security"],
      },
      {
        number: "02",
        title: "Security Operations Center (SOC) & SIEM",
        description: "Monitoring live telemetry, parsing logs with Splunk/Wazuh, and responding to security alerts.",
        topics: ["SIEM Platform Operation", "Log Ingestion & Rule Creation", "Threat Hunting & Triage", "MITRE ATT&CK Framework"],
      },
      {
        number: "03",
        title: "Incident Response & Forensic Basics",
        description: "Investigating active breaches, memory/disk evidence triage, and threat containment.",
        topics: ["Incident Containment Steps", "Log Correlation & Timeline Analysis", "Malware Behavior Analysis", "Root Cause Reporting"],
      },
      {
        number: "04",
        title: "Vulnerability Assessment & Penetration Testing",
        description: "Offensive security methodologies, web app security testing, and vulnerability remediation.",
        topics: ["Burp Suite Web Testing", "Nmap Network Scanning", "OWASP Top 10 Exploits", "Remediation Reporting"],
      },
    ],
    projects: [
      {
        title: "Enterprise SIEM & SOC Alert Investigation",
        description: "Analyzed simulated multi-stage ransomware attack telemetry in Splunk, isolated infected hosts, and authored a formal incident report.",
        techUsed: ["Splunk", "Wireshark", "Sysmon", "Linux"],
      },
      {
        title: "Web Application VAPT Audit",
        description: "Conducted security assessment on an e-commerce platform, identified SQL injection vulnerabilities, and recommended fixes.",
        techUsed: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit"],
      },
    ],
    careerRoles: [
      "SOC Analyst (L1/L2)",
      "Cyber Security Specialist",
      "VAPT Security Auditor",
      "Junior Incident Responder",
    ],
    gradient: "from-blue-600/25 via-indigo-600/15 to-transparent",
  },
  {
    slug: "aiml-engineer",
    title: "AI/ML Engineer",
    category: "AI / ML",
    shortDescription:
      "Engineer modern AI applications with Python, Machine Learning, Deep Learning, Generative AI, LLMs, RAG, and MLOps deployment.",
    fullDescription:
      "Explore the frontier of Artificial Intelligence. Learn to process data, train machine learning models, build Large Language Model (LLM) applications with Retrieval-Augmented Generation (RAG), and deploy AI pipelines to production.",
    level: "Intermediate to Advanced",
    duration: "18 Weeks",
    format: "Live Instructor-Led",
    status: "COMING SOON",
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Data Processing",
      "Model Development",
      "Model Evaluation",
      "Generative AI",
      "LLMs",
      "RAG",
      "AI APIs",
      "MLOps",
    ],
    modules: [
      {
        number: "01",
        title: "Python Data Science Foundations",
        description: "Mathematics for machine learning, NumPy matrices, data cleaning, and statistical distributions.",
        topics: ["Linear Algebra & Calculus Basics", "NumPy & Vectorized Computing", "Exploratory Data Analysis", "Feature Engineering"],
      },
      {
        number: "02",
        title: "Supervised & Unsupervised Machine Learning",
        description: "Building predictive models using Scikit-Learn: Regression, Classification, and Clustering.",
        topics: ["Linear/Logistic Regression", "Decision Trees & Random Forests", "Cross-validation & Hyperparameters", "Clustering (K-Means)"],
      },
      {
        number: "03",
        title: "Deep Learning & Neural Networks",
        description: "Constructing neural networks using PyTorch/TensorFlow for computer vision and NLP tasks.",
        topics: ["Neural Network Architecture", "PyTorch Basics & Training Loops", "Convolutional Neural Networks (CNN)", "Transformers & Attention"],
      },
      {
        number: "04",
        title: "Generative AI, LLMs & MLOps Deployment",
        description: "Building production RAG systems with LangChain/LlamaIndex, OpenAI/Ollama APIs, and model serving.",
        topics: ["LLM API Integration & Prompting", "Vector Databases & RAG Pipelines", "FastAPI AI Service Deployment", "MLOps & Model Tracking"],
      },
    ],
    projects: [
      {
        title: "Domain Knowledge RAG Assistant",
        description: "Built an intelligent document search and Q&A system leveraging custom vector embeddings and LLM APIs.",
        techUsed: ["Python", "LangChain", "Vector DB", "FastAPI", "OpenAI API"],
      },
      {
        title: "Predictive Maintenance ML Pipeline",
        description: "Automated machine learning pipeline predicting industrial hardware failure with 94% accuracy.",
        techUsed: ["Python", "Scikit-Learn", "Pandas", "MLflow"],
      },
    ],
    careerRoles: [
      "AI/ML Engineer",
      "Machine Learning Specialist",
      "Generative AI Developer",
      "Data Scientist / AI Developer",
    ],
    gradient: "from-purple-600/20 via-blue-500/10 to-transparent",
  },
];
