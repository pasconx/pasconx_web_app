"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useCallback, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { DirectionalTransition } from "@/components/ui/DirectionalTransition";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
import { TextLoop } from "@/components/ui/TextLoop";
import { Preloader } from "@/components/ui/Preloader";
import { ProgrammeCarousel } from "@/components/courses/ProgrammeCarousel";
import { LiveProgrammeCarousel } from "@/components/courses/LiveProgrammeCarousel";
import { ProgrammeTechVisual } from "@/components/courses/ProgrammeTechVisual";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { courses as featureCourses, liveCourses } from "@/features/courses/data";
import { media } from "@/features/media/assets";
import { faqs } from "@/features/faq/data";

const courses = featureCourses;
const subscribeToPreloaderPreference = () => () => { };
const getServerPreloaderPreference = () => false;
const getClientPreloaderPreference = () => window.sessionStorage.getItem("pascalx-skip-preloader") === "true";

const upcomingProgrammes = [
  { title: "DevOps Master Course", detail: "Master DevOps, CI/CD, cloud infrastructure, containers, automation, and real-world deployment workflows.", image: media.upcoming.devops },
  { title: "Java Full Stack", detail: "Java backend development, modern frontend technologies, scalable web applications, and practical full-stack projects.", image: media.upcoming.javaFullStack },
  { title: "Python Full Stack", detail: "Full-stack development, Django, modern JavaScript, REST APIs, and practical web application projects.", image: media.upcoming.pythonFullStack },
  { title: "Data Analyst", detail: "Transform raw data into business intelligence using SQL, Python, Pandas, Power BI, Statistics, and interactive dashboards.", image: media.upcoming.pythonFullStack },
  { title: "AI/ML Engineer", detail: "Build production machine learning models, neural networks, Generative AI applications, and RAG pipelines.", image: media.courses.vapt },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [navHidden, setNavHidden] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const skipPreloader = useSyncExternalStore(subscribeToPreloaderPreference, getClientPreloaderPreference, getServerPreloaderPreference);
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const pageReady = skipPreloader || preloaderComplete;
  const handlePreloaderComplete = useCallback(() => setPreloaderComplete(true), []);
  const heroRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const navigationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollYRef.current;
      if (!window.matchMedia("(max-width: 720px)").matches) {
        setNavHidden(false);
      } else if (current < 20) {
        setNavHidden(false);
      } else if (Math.abs(delta) > 6) {
        setNavHidden(delta > 0);
      }
      lastScrollYRef.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!skipPreloader) return;
    const target = window.sessionStorage.getItem("pascalx-scroll-target") ?? window.location.hash.slice(1);
    if (!target) return;
    const section = document.getElementById(target);
    if (!section) return;

    window.sessionStorage.removeItem("pascalx-scroll-target");
    const lenis = window.__pascalxLenis;
    if (lenis) {
      lenis.scrollTo(section, { offset: -80, immediate: true, force: true });
      lenis.start();
      return;
    }
    window.scrollTo({ top: Math.max(section.getBoundingClientRect().top + window.scrollY - 80, 0), behavior: "instant" });
  }, [skipPreloader]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.__pascalxLenis?.stop();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.__pascalxLenis?.start();
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const updateHero = () => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const travel = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      hero.style.setProperty("--hero-progress", progress.toFixed(4));
    };
    updateHero();
    window.addEventListener("scroll", updateHero, { passive: true });
    window.addEventListener("resize", updateHero);
    return () => {
      window.removeEventListener("scroll", updateHero);
      window.removeEventListener("resize", updateHero);
    };
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function smoothNavigate(event: MouseEvent<HTMLAnchorElement>, target: string) {
    event.preventDefault();
    if (navigationFrameRef.current !== null) {
      window.cancelAnimationFrame(navigationFrameRef.current);
      navigationFrameRef.current = null;
    }

    const shouldResumeScroll = mobileNavOpen;
    setMobileNavOpen(false);
    const scrollToSection = () => {
      navigationFrameRef.current = null;
      const section = document.getElementById(target.slice(1));
      if (!section) return;

      if (window.location.hash) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }
      const lenis = window.__pascalxLenis;
      if (lenis) {
        lenis.start();
        lenis.scrollTo(section, { offset: -80, duration: 0.85, lock: false });
        return;
      }
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (shouldResumeScroll) {
      navigationFrameRef.current = window.requestAnimationFrame(() => {
        navigationFrameRef.current = window.requestAnimationFrame(scrollToSection);
      });
      return;
    }
    scrollToSection();
  }

  const programsSection = (
    <section className="programs" id="programs" data-reveal>
      <div className="section-top" data-reveal-item><p className="eyebrow"><i /> Select your discipline</p></div>
      <h2 data-reveal-item className="programs-heading">
        <span className="live-green-radar" aria-hidden="true"><span className="live-green-dot" /></span>
        <ScrollRevealText words={["Live", "programmes"]} accentFrom={1} effect="sharpen" />
      </h2>
      <div data-reveal-item><LiveProgrammeCarousel /></div>
    </section>
  );

  return (
    <>
      {!skipPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <DirectionalTransition>
        <main id="main-content" tabIndex={-1} className={`min-h-screen page-transition${pageReady ? " is-ready" : ""}`}>
          <nav className={`nav${navHidden && !mobileNavOpen ? " nav-hidden" : ""}`}>
            <div className="nav-inner">
              <Link className="brand" href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#top")} aria-label="PasconX home">
                PASCON<span>X</span>
              </Link>
              <div className="nav-right-container">
                <div className="nav-links">
                  <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#method")}>Approach</Link>
                  <Link href="/programmes">Programmes</Link>
                  <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#learning")}>Learning model</Link>
                  <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#upcoming")}>Upcoming</Link>
                  <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#contact")}>Contact</Link>
                </div>
                <Link className="nav-cta-clean" href="/programmes">XPLORE PROGRAMMES <Arrow /></Link>
              </div>
              <button className={`mobile-nav-toggle${mobileNavOpen ? " is-open" : ""}`} type="button" aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileNavOpen} aria-controls="mobile-navigation" onClick={() => setMobileNavOpen((open) => !open)}>
                <span /><span /><span />
              </button>
            </div>
            {mobileNavOpen && <button className="mobile-nav-backdrop" type="button" aria-label="Close navigation menu" onClick={() => setMobileNavOpen(false)} />}
            <div className={`mobile-nav-panel${mobileNavOpen ? " is-open" : ""}`} id="mobile-navigation">
              <p className="mobile-nav-label">Navigate</p>
              <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#method")}>Approach</Link>
              <Link href="/programmes">Programmes</Link>
              <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#learning")}>Learning model</Link>
              <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#upcoming")}>Upcoming programmes</Link>
              <Link href="/" scroll={false} onClick={(event) => smoothNavigate(event, "#contact")}>Contact PasconX</Link>
              <Link className="mobile-nav-primary" href="/programmes">XPLORE PROGRAMMES <Arrow /></Link>
            </div>
          </nav>

          <section className="hero" id="top" ref={heroRef}>
            <div className="hero-sticky">
              <video className="hero-video" aria-hidden="true" autoPlay muted loop playsInline preload="metadata">
                <source src={media.videos.heroSignalGrid} type="video/mp4" />
              </video>
              <div className="scanlines" />
              <div className="hero-shade" />
              <div className="hero-copy">
                <p className="eyebrow"><i /> Industry-Focused Technology Education · Live Cohorts</p>
                <h1>
                  <span className="hero-title-leading">Build skills</span>
                  <em>
                    <TextLoop
                      items={[
                        "Think beyond tutorials",
                        "Turn knowledge into practice",
                        "Build what you learn",
                        "Create. Solve. Innovate",
                        "Prepare for what's next",
                        "Learn. Practice. Evolve",
                      ]}
                    />
                  </em>
                </h1>
                <p className="hero-description">Practical, instructor-led technology training built around hands-on learning, real-world projects, and career-ready technical skills.</p>
              </div>
              <div className="hero-bottom"><span className="scroll-mark">↓</span></div>
            </div>
          </section>

          <section className="manifesto" id="method" data-reveal>
            <p className="eyebrow dark"><i /> The PasconX method</p>
            <div className="manifesto-grid" data-reveal-item>
              <h2><ScrollRevealText words={["Technology", "is", "not", "a", "chapter.", "It", "is", "a", "way", "of", "building."]} breakAfter={[2, 7]} accentFrom={8} /></h2>
              <div className="manifesto-copy">
                <p>We turn curious learners into methodical IT experts through guided labs, live instruction, and hands-on engineering practice.</p>
                <Link href="/programmes" className="text-link">See the programmes <Arrow /></Link>
              </div>
            </div>
            <div className="signal-row" data-reveal-item><span>LIVE INSTRUCTION</span><span>HANDS-ON LABS</span><span>REAL-WORLD PROJECTS</span><span>CAREER PREPARATION</span></div>
          </section>

          <section className="video-break" aria-label="Students learning technology">
            <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata">
              <source src={media.videos.classroom} type="video/mp4" />
            </video>
            <div className="video-break-copy"><span>THE LAB IS OPEN</span><strong>Learn. Practice. Build. Grow.</strong></div>
          </section>

          {programsSection}

          <section className="training-bridge" data-reveal aria-labelledby="training-bridge-heading">
            <p className="eyebrow" data-reveal-item><i /> Beyond the lesson</p>
            <div className="training-bridge-grid" data-reveal-item>
              <h2 id="training-bridge-heading" className="training-bridge-heading">
                <span className="training-bridge-title-top">The PASCON<span className="pascon-x-accent">X</span></span>
                <em className="training-bridge-title-bottom">Learning Method.</em>
              </h2>
              <div className="training-bridge-copy">
                <p>Good engineering work is a sequence of calm decisions. Each programme gives you a repeatable way to analyze problems, validate solutions in sandbox environments, and deliver production-ready code.</p>
                <p className="training-bridge-note">You leave with more than notes: you leave with a defensible portfolio of real work.</p>
              </div>
            </div>
            <ol className="practice-path" data-reveal-item aria-label="The PasconX practice loop">
              <li><span className="practice-step">01 / RECOGNISE</span><h3>Build strong foundations.</h3><p>Break down systems, codebases, and architectures into core engineering concepts worth mastering.</p></li>
              <li><span className="practice-step">02 / TEST</span><h3>Apply in guided labs.</h3><p>Use hands-on cloud labs to test hypotheses, configure microservices, and document your workflows.</p></li>
              <li><span className="practice-step">03 / BUILD</span><h3>Construct real projects.</h3><p>Turn technical concepts into working applications, CI/CD pipelines, and executive dashboards.</p></li>
            </ol>
            <div className="training-bridge-status" data-reveal-item><span>THE PRACTICE LOOP</span><i aria-hidden="true" /><span>LEARN</span><span>PRACTICE</span><span>BUILD</span><span>GROW</span></div>
          </section>

          <section className="field-notes" id="learning" data-reveal>
            <div className="field-heading" data-reveal-item>
              <div><p className="eyebrow"><i /> Intelligence, applied</p><span className="field-caption">A LIVE LEARNING CONTROL ROOM</span></div>
              <div className="field-index">FIELD NOTE<br /><b>THREE WAYS TO TRAIN</b></div>
            </div>
            <div className="field-layout" data-reveal-item>
              <aside className="field-brief">
                <div className="brief-number">03</div>
                <p className="brief-kicker">WAYS OF WORKING</p>
                <p>Learn through the habits that make a calm engineer useful: observe closely, ask better questions, and leave clean code behind.</p>
                <div className="brief-rule"><span>COHORT SIGNAL</span><b>ON / 24—7</b></div>
                <div className="brief-rail" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              </aside>
              <div className="field-board">
                <article className="note-row live-card"><div className="note-row-index">01</div><div className="note-row-copy"><div className="note-top"><span>LIVE / ACTIVE</span><span>GUIDED LABS</span></div><h3>Live practice</h3><p>See how a tutor approaches a problem, then attempt it in a safe lab environment of your own.</p></div></article>
                <article className="note-row cohort-card"><div className="note-row-index">02</div><div className="note-row-copy"><div className="note-top"><span>DIRECT / ACCESS</span><span>SMALL COHORTS</span></div><h3>Small cohorts</h3><p>Ask questions. Share your screen. Get real-time guidance while the learning is happening.</p></div></article>
                <article className="note-row work-card"><div className="note-row-index">03</div><div className="note-row-copy"><div className="note-top"><span>BUILD / PROVE</span><span>PROOF OF PRACTICE</span></div><h3>Defensible work</h3><p>Build a portfolio of code, pipelines, and reports that show how you think under real engineering pressure.</p></div></article>
              </div>
            </div>
          </section>

          <section className="protocol" data-reveal>
            <p className="eyebrow"><i /> After your enquiry</p>
            <div className="protocol-grid" data-reveal-item>
              <h2><ScrollRevealText words={["Your", "next", "chapter", "starts", "here."]} breakAfter={[2]} accentFrom={3} effect="sharpen" /></h2>
              <p>Send your course enquiry on WhatsApp, and your tutor will follow up directly with availability, onboarding details, and your schedule. No portal maze. No automated handoff.</p>
            </div>
            <div className="steps" data-reveal-item>
              <div><b>01</b><h3>Choose a programme</h3><p>Review our 6 flagship technology programmes to find your track.</p></div>
              <div><b>02</b><h3>Send your enquiry</h3><p>Share your name, WhatsApp number, and email in the prefilled message.</p></div>
              <div><b>03</b><h3>Hear from your tutor</h3><p>Receive next steps, curriculum details, and cohort schedules directly on WhatsApp.</p></div>
            </div>
          </section>

          <section className="upcoming-programmes" id="upcoming" data-reveal aria-labelledby="upcoming-programmes-heading">
            <div className="upcoming-programmes-heading" data-reveal-item>
              <p className="eyebrow"><i /> On the horizon</p>
              <h2 id="upcoming-programmes-heading">Programmes<br /><em>launching soon.</em></h2>
            </div>
            <div className="upcoming-programmes-grid" data-reveal-item>
              {upcomingProgrammes.map((programme) => (
                <article className="upcoming-programme-card" key={programme.title}>
                  <div className="upcoming-programme-image"><ProgrammeTechVisual type={programme.title} /></div>
                  <div className="upcoming-programme-copy"><span>LAUNCHING NEXT MONTH</span><h3>{programme.title}</h3><p>{programme.detail}</p><b>Next cohort enrolling</b></div>
                </article>
              ))}
            </div>
          </section>

          <section className="faq-section" id="faq" data-reveal aria-labelledby="faq-heading">
            <div className="faq-heading">
              <p className="eyebrow"><i /> Common questions</p>
              <h2 id="faq-heading">Questions<br />before<br /><em>you begin.</em></h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div className={`faq-item${openFaq === index ? " is-open" : ""}`} key={question}>
                  <button type="button" suppressHydrationWarning aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><i aria-hidden="true">+</i>
                  </button>
                  <div className="faq-answer"><p>{answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <SiteFooter />
        </main>
      </DirectionalTransition>
    </>
  );
}
