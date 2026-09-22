"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function Navbar() {
  const pathname = usePathname();
  const [navHidden, setNavHidden] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const lastScrollYRef = useRef(0);

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

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  const isHire = pathname === "/hire";

  return (
    <nav className={`nav${navHidden && !mobileNavOpen ? " nav-hidden" : ""}`}>
      <div className="nav-inner">
        <Link className="brand nav-brand-logo" href="/" aria-label="PASCONX ACADEMY home">
          <Image
            src="/assets/brand/pasconx-academy-navbar.png"
            alt="PASCONX ACADEMY"
            width={135}
            height={26}
            priority
            unoptimized
            className="nav-brand-img"
          />
        </Link>
        <div className="nav-right-container">
          <div className="nav-links">
            <Link href="/#method">Approach</Link>
            <Link href="/#live-programmes">Programmes</Link>
            <Link href="/#learning">Learning model</Link>
            <Link href="/#upcoming">Upcoming</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/hire" className={isHire ? "is-active" : ""}>
              Hire with us
            </Link>
          </div>
          <Link className="nav-cta-clean" href="/programmes">
            EXPLORE PROGRAMMES <Arrow />
          </Link>
        </div>
        <button
          className={`mobile-nav-toggle${mobileNavOpen ? " is-open" : ""}`}
          type="button"
          aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>
      {mobileNavOpen && (
        <button
          className="mobile-nav-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMobileNavOpen(false)}
        />
      )}
      <div className={`mobile-nav-panel${mobileNavOpen ? " is-open" : ""}`} id="mobile-navigation">
        <p className="mobile-nav-label">Navigate</p>
        <Link href="/#method" onClick={() => setMobileNavOpen(false)}>Approach</Link>
        <Link
          href="/#live-programmes"
          onClick={() => setMobileNavOpen(false)}
        >
          Programmes
        </Link>
        <Link href="/#learning" onClick={() => setMobileNavOpen(false)}>Learning model</Link>
        <Link href="/#upcoming" onClick={() => setMobileNavOpen(false)}>Upcoming</Link>
        <Link href="/#contact" onClick={() => setMobileNavOpen(false)}>Contact</Link>
        <Link
          href="/hire"
          className={isHire ? "is-active" : ""}
          onClick={() => setMobileNavOpen(false)}
        >
          Hire with us
        </Link>
        <Link
          className="mobile-nav-primary"
          href="/programmes"
          onClick={() => setMobileNavOpen(false)}
        >
          EXPLORE PROGRAMMES <Arrow />
        </Link>
      </div>
    </nav>
  );
}
