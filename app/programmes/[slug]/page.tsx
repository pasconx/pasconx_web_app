import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseBackLink } from "@/components/layout/CourseBackLink";
import { CourseEnquiry } from "@/components/courses/CourseEnquiry";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  getAllProgrammeSlugs,
  getProgrammeDetail,
} from "@/lib/programmeDetailData";

export function generateStaticParams() {
  return getAllProgrammeSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgrammeDetail(slug);
  if (!programme) return {};

  return {
    title: `${programme.programmeName} | PASCON X`,
    description: programme.supportingText,
  };
}

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgrammeDetail(slug);

  if (!programme) {
    notFound();
  }

  return (
    <div className="course-page-wrap">
      {/* 1. Hero Section */}
      <section className="course-hero">
        <div className="course-hero-media" aria-hidden="true">
          <Image
            src={programme.image}
            alt=""
            fill
            sizes="100vw"
            priority
            unoptimized
          />
        </div>
        <div className="course-hero-scrim" aria-hidden="true" />
        <nav className="course-nav">
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
          <CourseBackLink />
        </nav>
        <div className="course-hero-content">
          <p className="eyebrow">
            <i /> {programme.category}
          </p>
          <h1>
            {programme.heroHeadline.line1}
            <br />
            <em>{programme.heroHeadline.line2}</em>
          </h1>
          <p>{programme.supportingText}</p>
          <div className="course-hero-meta">
            <span className="meta-value">LIVE COHORT</span>
            <span aria-hidden="true" className="meta-dot">·</span>
            <span className="meta-label">FORMAT</span>
            <span className="meta-value">{programme.format}</span>
            <span className="meta-label">STATUS</span>
            <span className="meta-value">{programme.status}</span>
          </div>
        </div>
      </section>

      {/* 2. Detail Grid */}
      <div className="course-detail-grid">
        <div className="course-detail-content">
          {/* Programme Overview */}
          <div className="course-detail-intro">
            <p className="eyebrow">
              <i /> {programme.overview.sectionLabel}
            </p>
            <h2>
              {programme.overview.headline.line1}
              <br />
              <em>{programme.overview.headline.line2}</em>
            </h2>
            <p>{programme.overview.description}</p>
          </div>

          {/* Curriculum */}
          <div className="course-detail-block">
            <p className="eyebrow">
              <i /> {programme.curriculum.sectionLabel}
            </p>
            <ul className="course-module-list">
              {programme.curriculum.modules.map((mod) => (
                <li key={mod.number}>
                  <b>{mod.number}</b>
                  <span>{mod.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* You Will Practise & Delivery */}
          <div className="course-detail-columns">
            <div>
              <p className="eyebrow">
                <i /> {programme.practice.sectionLabel}
              </p>
              <ul>
                {programme.practice.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">
                <i /> {programme.delivery.sectionLabel}
              </p>
              <ul>
                {programme.delivery.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Enquiry Panel */}
        <CourseEnquiry
          programmeTitle={programme.enquiryTitle}
          course={{ title: programme.enquiryTitle } as any}
        />
      </div>

      <SiteFooter />
    </div>
  );
}
