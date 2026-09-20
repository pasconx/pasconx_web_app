"use client";

import React, { useState } from "react";
import { BRAND, WHATSAPP_LINK } from "@/lib/constants";
import { Send, MessageSquare, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { PROGRAMMES } from "@/lib/programmes";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: PROGRAMMES[0].title,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const waUrl = WHATSAPP_LINK(formData.programme);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative bg-surface/50 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                ADMISSIONS & GUIDANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Contact PASCON <span className="text-accent">X</span>.
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted max-w-md">
            Speak directly with our tutors regarding curriculum details, schedule options, and upcoming cohort enrolment.
          </p>
        </div>

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8 space-y-8">
              <h3 className="text-xl font-extrabold text-foreground">Direct Enquiry Channels</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">Phone / Mobile</span>
                    <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {BRAND.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">Email Address</span>
                    <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {BRAND.email}
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-200 group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase block font-bold">Fastest Response</span>
                      <span className="text-sm font-bold">WhatsApp Tutor Support</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Connect ↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-glow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">Enquiry Received</h3>
                  <p className="text-sm text-muted max-w-md mx-auto">
                    Thank you for reaching out. A tutor from Pascon X will contact you directly on WhatsApp or Email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-mono tracking-wider uppercase rounded-full border border-border bg-surface text-foreground hover:border-accent"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-foreground">Send Programme Enquiry</h3>
                    <p className="text-xs text-muted">Fill in your details below to receive schedule, syllabus, and cohort enrolment info.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted uppercase tracking-wider">Select Programme *</label>
                      <select
                        value={formData.programme}
                        onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground focus:outline-none focus:border-accent text-sm"
                      >
                        {PROGRAMMES.map((prog) => (
                          <option key={prog.slug} value={prog.title} className="bg-card text-foreground">
                            {prog.title} ({prog.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted uppercase tracking-wider">Your Message / Questions</label>
                    <textarea
                      rows={4}
                      placeholder="Ask about upcoming cohort dates, prerequisites, learning format..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent text-sm resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold tracking-wider uppercase rounded-full bg-accent text-white hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
                    >
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold tracking-wider uppercase rounded-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Us Directly</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
