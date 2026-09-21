"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Cloud,
  Code2,
  Layers,
  Database,
  ShieldCheck,
  Brain,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Mail,
  Phone,
  MessageSquare,
  Building2,
  UserCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const employerWhatsAppNumber = "9441276060";
const employerEmail = "connect@pasconx.com";

const whyHireReasons = [
  {
    num: "01",
    title: "Practical Skills",
    desc: "Learners build hands-on experience through labs, assignments, and real-world projects.",
  },
  {
    num: "02",
    title: "Industry-Relevant Technologies",
    desc: "Training covers modern technologies used across cloud, development, data, cybersecurity, and AI.",
  },
  {
    num: "03",
    title: "Multiple Technology Domains",
    desc: "Connect with talent across DevOps, Full Stack Development, Data Analytics, Cybersecurity, and AI/ML.",
  },
  {
    num: "04",
    title: "Project-Based Learning",
    desc: "Learners apply concepts by building practical projects that demonstrate their technical understanding.",
  },
  {
    num: "05",
    title: "Career-Ready Talent",
    desc: "Learners prepare for technical roles through structured learning, practical work, and interview preparation.",
  },
];

const talentAreas = [
  {
    num: "01",
    domain: "DevOps",
    tech: "Cloud • CI/CD • Containers • Kubernetes • Automation",
    Icon: Cloud,
  },
  {
    num: "02",
    domain: "Python Full Stack",
    tech: "Python • Django • APIs • React • Databases",
    Icon: Code2,
  },
  {
    num: "03",
    domain: "Java Full Stack",
    tech: "Java • Spring Boot • REST APIs • React • Databases",
    Icon: Layers,
  },
  {
    num: "04",
    domain: "Data Analyst",
    tech: "SQL • Python • Pandas • Power BI • Data Visualization",
    Icon: Database,
  },
  {
    num: "05",
    domain: "Cybersecurity",
    tech: "SOC • Security Monitoring • VAPT • Incident Response",
    Icon: ShieldCheck,
  },
  {
    num: "06",
    domain: "AI/ML Engineer",
    tech: "Python • Machine Learning • Generative AI • RAG • AI Applications",
    Icon: Brain,
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Share Your Requirement",
    desc: "Tell us about the role, skills, experience level, and hiring requirements.",
  },
  {
    step: "02",
    title: "Connect with Talent",
    desc: "We help connect your requirements with relevant PASCONX learners and candidates.",
  },
  {
    step: "03",
    title: "Interview",
    desc: "Shortlist and interact with candidates through your preferred interview process.",
  },
  {
    step: "04",
    title: "Build Your Team",
    desc: "Move forward with candidates who match your organization's requirements.",
  },
];

const techOptions = [
  "DevOps",
  "Python Full Stack",
  "Java Full Stack",
  "Data Analyst",
  "Cybersecurity",
  "AI/ML Engineer",
  "Other",
];

const experienceOptions = [
  "Fresher / Entry Level",
  "1–2 Years",
  "2–3 Years",
  "3+ Years",
  "Other",
];

interface FormDataState {
  companyName: string;
  recruiterName: string;
  workEmail: string;
  phoneNumber: string;
  hiringRole: string;
  techArea: string;
  openings: string;
  experience: string;
  requirements: string;
}

interface FormErrorsState {
  companyName?: string;
  recruiterName?: string;
  workEmail?: string;
  phoneNumber?: string;
  hiringRole?: string;
  techArea?: string;
  openings?: string;
  experience?: string;
}

export function HireWithUs() {
  const [formData, setFormData] = useState<FormDataState>({
    companyName: "",
    recruiterName: "",
    workEmail: "",
    phoneNumber: "",
    hiringRole: "",
    techArea: "DevOps",
    openings: "1",
    experience: "Fresher / Entry Level",
    requirements: "",
  });

  const [errors, setErrors] = useState<FormErrorsState>({});
  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrorsState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrorsState = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!formData.recruiterName.trim()) {
      newErrors.recruiterName = "Recruiter / HR name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required.";
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid work email address.";
    }

    const phoneDigits = formData.phoneNumber.replace(/\D/g, "");
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phoneNumber = "Please enter a valid phone number (7-15 digits).";
    }

    if (!formData.hiringRole.trim()) {
      newErrors.hiringRole = "Hiring role / position is required.";
    }

    if (!formData.techArea) {
      newErrors.techArea = "Please select a technology area.";
    }

    const openingsNum = parseInt(formData.openings, 10);
    if (!formData.openings || isNaN(openingsNum) || openingsNum < 1) {
      newErrors.openings = "Enter a valid number of openings (at least 1).";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select experience level.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      "*PASCONX | EMPLOYER HIRING ENQUIRY*",
      "",
      `*Company*: ${formData.companyName.trim()}`,
      `*Recruiter / HR*: ${formData.recruiterName.trim()}`,
      `*Work Email*: ${formData.workEmail.trim()}`,
      `*Phone*: ${formData.phoneNumber.trim()}`,
      "",
      `*Hiring Role*: ${formData.hiringRole.trim()}`,
      `*Technology Area*: ${formData.techArea}`,
      `*Number of Openings*: ${formData.openings}`,
      `*Experience Level*: ${formData.experience}`,
      "",
      formData.requirements.trim()
        ? `*Additional Requirements*:\n${formData.requirements.trim()}\n`
        : "",
      "Hello PASCONX Team,",
      "We would like to connect regarding candidate profiles and talent hiring partnerships for our open requirement.",
    ]
      .filter(Boolean)
      .join("\n");

    setGeneratedMessage(message);
    setSubmitted(true);

    // Open WhatsApp prefilled message
    window.open(
      `https://wa.me/91${employerWhatsAppNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      companyName: "",
      recruiterName: "",
      workEmail: "",
      phoneNumber: "",
      hiringRole: "",
      techArea: "DevOps",
      openings: "1",
      experience: "Fresher / Entry Level",
      requirements: "",
    });
    setErrors({});
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("employer-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = formElement.querySelector("input");
      firstInput?.focus();
    }
  };

  const mailtoUrl = `mailto:${employerEmail}?subject=${encodeURIComponent(
    `PASCONX Employer Hiring Enquiry - ${formData.companyName || "New Requirement"}`
  )}&body=${encodeURIComponent(generatedMessage)}`;

  const whatsAppUrl = `https://wa.me/91${employerWhatsAppNumber}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  return (
    <section
      className="hire-section"
      id="hire"
      data-reveal
      aria-labelledby="hire-heading"
    >
      {/* 1. Header Block */}
      <div className="hire-header" data-reveal-item>
        <p className="eyebrow">
          <i /> FOR EMPLOYERS
        </p>
        <h2 id="hire-heading" className="hire-heading">
          Hire with PASCONX.
          <br />
          <em className="hire-gradient-accent">Meet your next tech talent.</em>
        </h2>
        <p className="hire-intro">
          Looking for skilled, motivated technology talent? Partner with PASCONX
          to connect with learners trained in practical, industry-focused
          technologies and real-world projects.
        </p>
      </div>

      {/* 2. Why Hire PASCONX Talent */}
      <div className="hire-block" data-reveal-item>
        <div className="hire-subhead">
          <p className="eyebrow">
            <i /> WHY HIRE PASCONX TALENT
          </p>
          <h3 className="hire-subhead-title">Built for technical impact from day one.</h3>
        </div>
        <div className="why-hire-grid">
          {whyHireReasons.map((item) => (
            <article className="why-hire-card" key={item.num}>
              <div className="why-hire-num">{item.num}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* 3. Our Talent Areas */}
      <div className="hire-block" data-reveal-item>
        <div className="hire-subhead">
          <p className="eyebrow">
            <i /> TALENT AREAS
          </p>
          <h3 className="hire-subhead-title">Skilled candidates across 6 technology tracks.</h3>
        </div>
        <div className="talent-areas-grid">
          {talentAreas.map((area) => {
            const IconComponent = area.Icon;
            return (
              <article className="talent-area-card" key={area.num}>
                <div className="talent-card-header">
                  <span className="talent-card-num">{area.num}</span>
                  <div className="talent-card-icon" aria-hidden="true">
                    <IconComponent size={20} />
                  </div>
                </div>
                <h4>{area.domain}</h4>
                <p className="talent-card-tech">{area.tech}</p>
                <div className="talent-card-signal">
                  <span className="talent-dot" />
                  <span>Ready for recruitment</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 4. How to Hire with PASCONX */}
      <div className="hire-block" data-reveal-item>
        <div className="hire-subhead">
          <p className="eyebrow">
            <i /> HOW TO HIRE WITH PASCONX
          </p>
          <h3 className="hire-subhead-title">A direct, straightforward hiring process.</h3>
        </div>
        <div className="hiring-process-track">
          {hiringSteps.map((step, idx) => (
            <div className="hiring-step-item" key={step.step}>
              <div className="step-badge-row">
                <span className="step-num">{step.step}</span>
                {idx < hiringSteps.length - 1 && (
                  <span className="step-line" aria-hidden="true" />
                )}
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA Banner & Inquiry Form */}
      <div className="hire-action-grid" data-reveal-item>
        {/* Left Column: CTA + Partner Card */}
        <div className="hire-cta-column">
          <div className="hire-cta-card">
            <p className="eyebrow">
              <i /> DIRECT HIRING
            </p>
            <h3>Looking for your next technology hire?</h3>
            <p>
              Tell us what you&apos;re looking for and our team will help you
              connect with relevant PASCONX talent.
            </p>
            <div className="hire-cta-buttons">
              <button
                type="button"
                className="hire-primary-btn"
                onClick={scrollToForm}
              >
                HIRE WITH PASCONX <span className="arrow">↗</span>
              </button>
              <a
                href={`https://wa.me/91${employerWhatsAppNumber}?text=${encodeURIComponent(
                  "Hello PASCONX Team, I am looking to hire technology talent for my organization and would like to speak with your team."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hire-secondary-btn"
              >
                TALK TO OUR TEAM
              </a>
            </div>
          </div>

          {/* Compact Partnership Card */}
          <div className="hire-partner-card">
            <p className="eyebrow">
              <i /> RECRUITMENT PARTNERSHIP
            </p>
            <h4>Partner with PASCONX.</h4>
            <p>
              Looking to hire, conduct a recruitment drive, or explore a talent
              partnership? Talk to our team.
            </p>
            <div className="hire-contact-links">
              <a href={`mailto:${employerEmail}`} className="hire-contact-row">
                <Mail size={16} />
                <div>
                  <span>Email</span>
                  <strong>{employerEmail}</strong>
                </div>
                <ArrowUpRight size={14} className="hire-contact-arrow" />
              </a>
              <a href="tel:+919441276060" className="hire-contact-row">
                <Phone size={16} />
                <div>
                  <span>Direct Line</span>
                  <strong>+91 94412 76060</strong>
                </div>
                <ArrowUpRight size={14} className="hire-contact-arrow" />
              </a>
              <a
                href={`https://wa.me/91${employerWhatsAppNumber}?text=${encodeURIComponent(
                  "Hello PASCONX Team, I would like to explore an employer/recruitment partnership with PASCONX."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hire-contact-row"
              >
                <div className="whatsapp-badge">
                  <WhatsAppIcon />
                </div>
                <div>
                  <span>WhatsApp</span>
                  <strong>Chat with team</strong>
                </div>
                <ArrowUpRight size={14} className="hire-contact-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Employer Inquiry Form */}
        <div className="hire-form-column" id="employer-form">
          {submitted ? (
            <div className="hire-form-success" role="status">
              <div className="success-header">
                <div className="success-icon" aria-hidden="true">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <small>ENQUIRY PREPARED</small>
                  <strong>Hiring requirement submitted</strong>
                </div>
              </div>
              <p className="eyebrow">
                <i /> Next step
              </p>
              <h3>Ready to connect.</h3>
              <p>
                Your requirement for <strong>{formData.hiringRole}</strong> at{" "}
                <strong>{formData.companyName}</strong> has been formatted.
                WhatsApp was opened to dispatch your message immediately.
              </p>
              <div className="success-actions">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hire-whatsapp-submit"
                >
                  SEND VIA WHATSAPP <WhatsAppIcon />
                </a>
                <a href={mailtoUrl} className="hire-email-submit">
                  SEND VIA EMAIL <Mail size={16} />
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="hire-reset-btn"
                >
                  Submit another requirement
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="employer-enquiry-form" noValidate>
              <div className="form-head">
                <p className="eyebrow">
                  <i /> RECRUITER INQUIRY
                </p>
                <h3>Submit hiring requirement</h3>
                <p>
                  Share your role specifications and our talent partnership team
                  will connect with you.
                </p>
              </div>

              <div className="form-fields-grid">
                {/* Company Name */}
                <div className="form-group">
                  <label htmlFor="companyName">
                    Company Name <span className="req">*</span>
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    placeholder="e.g. Acme Technologies"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={errors.companyName ? "is-invalid" : ""}
                  />
                  {errors.companyName && (
                    <span className="field-error" role="alert">
                      {errors.companyName}
                    </span>
                  )}
                </div>

                {/* Recruiter / HR Name */}
                <div className="form-group">
                  <label htmlFor="recruiterName">
                    Recruiter / HR Name <span className="req">*</span>
                  </label>
                  <input
                    id="recruiterName"
                    name="recruiterName"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.recruiterName}
                    onChange={handleChange}
                    className={errors.recruiterName ? "is-invalid" : ""}
                  />
                  {errors.recruiterName && (
                    <span className="field-error" role="alert">
                      {errors.recruiterName}
                    </span>
                  )}
                </div>

                {/* Work Email */}
                <div className="form-group">
                  <label htmlFor="workEmail">
                    Work Email <span className="req">*</span>
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={errors.workEmail ? "is-invalid" : ""}
                  />
                  {errors.workEmail && (
                    <span className="field-error" role="alert">
                      {errors.workEmail}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={errors.phoneNumber ? "is-invalid" : ""}
                  />
                  {errors.phoneNumber && (
                    <span className="field-error" role="alert">
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>

                {/* Hiring Role */}
                <div className="form-group">
                  <label htmlFor="hiringRole">
                    Hiring Role <span className="req">*</span>
                  </label>
                  <input
                    id="hiringRole"
                    name="hiringRole"
                    type="text"
                    required
                    placeholder="e.g. Junior DevOps Engineer"
                    value={formData.hiringRole}
                    onChange={handleChange}
                    className={errors.hiringRole ? "is-invalid" : ""}
                  />
                  {errors.hiringRole && (
                    <span className="field-error" role="alert">
                      {errors.hiringRole}
                    </span>
                  )}
                </div>

                {/* Technology / Skill Area */}
                <div className="form-group">
                  <label htmlFor="techArea">
                    Technology / Skill Area <span className="req">*</span>
                  </label>
                  <select
                    id="techArea"
                    name="techArea"
                    required
                    value={formData.techArea}
                    onChange={handleChange}
                  >
                    {techOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.techArea && (
                    <span className="field-error" role="alert">
                      {errors.techArea}
                    </span>
                  )}
                </div>

                {/* Number of Openings */}
                <div className="form-group">
                  <label htmlFor="openings">
                    Number of Openings <span className="req">*</span>
                  </label>
                  <input
                    id="openings"
                    name="openings"
                    type="number"
                    min="1"
                    required
                    placeholder="1"
                    value={formData.openings}
                    onChange={handleChange}
                    className={errors.openings ? "is-invalid" : ""}
                  />
                  {errors.openings && (
                    <span className="field-error" role="alert">
                      {errors.openings}
                    </span>
                  )}
                </div>

                {/* Experience Level */}
                <div className="form-group">
                  <label htmlFor="experience">
                    Experience Level <span className="req">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    {experienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <span className="field-error" role="alert">
                      {errors.experience}
                    </span>
                  )}
                </div>

                {/* Additional Requirements */}
                <div className="form-group full-width">
                  <label htmlFor="requirements">
                    Additional Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={3}
                    placeholder="Share any preferred certifications, location, shift preferences, or tech stacks..."
                    value={formData.requirements}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="hire-submit-btn">
                SUBMIT HIRING REQUIREMENT <Send size={15} />
              </button>

              <p className="form-footer-note">
                Your hiring requirement will be reviewed by the PASCONX talent
                partnerships desk. No third-party sharing.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
