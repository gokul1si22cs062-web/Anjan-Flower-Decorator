"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Reach out via phone, WhatsApp, or our contact form to share your event details, date, and initial ideas with our team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "from-pink-50 to-rose-50",
    borderColor: "#f9c8d8",
    accentColor: "#e8889e",
  },
  {
    number: "02",
    title: "Discussion & Planning",
    description:
      "We meet — in person or virtually — to understand your vision, theme, budget, and venue specifications in complete detail.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "from-amber-50 to-yellow-50",
    borderColor: "#e8c96a",
    accentColor: "#c9a84c",
  },
  {
    number: "03",
    title: "Design Confirmation",
    description:
      "Our creative team presents a mood board and detailed decoration plan. We refine every detail until you are completely satisfied.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "from-rose-50 to-pink-50",
    borderColor: "#f9c8d8",
    accentColor: "#e8889e",
  },
  {
    number: "04",
    title: "Decoration Setup",
    description:
      "Our skilled artisans arrive well ahead of time to set up every flower, drape, and accent piece with precision and care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "from-orange-50 to-amber-50",
    borderColor: "#f4c47e",
    accentColor: "#d4953a",
  },
  {
    number: "05",
    title: "Event Execution",
    description:
      "On the day of your event, we provide on-site support to ensure every decorative element looks absolutely perfect throughout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-7 h-7">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "from-green-50 to-emerald-50",
    borderColor: "#a8d5a2",
    accentColor: "#5a9e50",
  },
];

export default function ProcessSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="process"
      className="py-24 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #fff8f4 0%, #fdf6ee 50%, #fff0f5 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{
              color: "var(--brand-gold)",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            Simple & Seamless
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-balance"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "var(--brand-text)",
            }}
          >
            How It <span className="gold-shimmer">Works</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={titleInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 mx-auto mb-6"
            style={{ background: "var(--brand-gold)" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "var(--brand-text-light)",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            From your first call to the final petal in place — our five-step process
            ensures a flawless, stress-free experience for every celebration.
          </motion.p>
        </div>

        {/* Desktop: horizontal connector + staggered cards */}
        <div className="hidden md:block">
          {/* Connector line */}
          <div className="relative mb-10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={titleInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-[10%] right-[10%] h-px origin-left"
              style={{
                background: "linear-gradient(90deg, transparent, var(--brand-gold), var(--brand-gold), transparent)",
              }}
            />
            {/* Step dots on the line */}
            <div className="flex justify-between px-[8%]">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={titleInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.15, type: "spring", stiffness: 200 }}
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md"
                  style={{
                    background: "var(--brand-cream)",
                    border: `2px solid var(--brand-gold)`,
                    color: "var(--brand-gold-dark)",
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1rem",
                  }}
                >
                  {i + 1}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cards — alternate up/down */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} isInView={titleInView} alternating />
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={titleInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
            className="absolute left-[28px] top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(180deg, transparent, var(--brand-gold), var(--brand-gold), transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <MobileStepCard key={step.number} step={step} index={i} isInView={titleInView} />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-20 text-center rounded-2xl px-8 py-12"
          style={{
            background: "linear-gradient(135deg, rgba(249,200,216,0.35), rgba(232,201,106,0.25))",
            border: "1.5px solid rgba(201,168,76,0.3)",
          }}
        >
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
          >
            Ready to Begin?
          </p>
          <h3
            className="text-3xl sm:text-4xl font-bold mb-4 text-balance"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "var(--brand-text)",
            }}
          >
            Let&apos;s Create Something Extraordinary
          </h3>
          <p
            className="text-sm max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
          >
            Contact us today and take the first step towards a celebration that your
            guests will talk about for years.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: "var(--brand-gold)",
              color: "#fff",
              fontFamily: "var(--font-lato)",
              boxShadow: "0 4px 18px rgba(201,168,76,0.35)",
            }}
          >
            Start Your Journey
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* Desktop step card with alternating up/down layout */
function StepCard({
  step,
  index,
  isInView,
  alternating,
}: {
  step: (typeof steps)[0];
  index: number;
  isInView: boolean;
  alternating?: boolean;
}) {
  const isDown = alternating && index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: isDown ? -40 : 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.7 + index * 0.13, ease: "easeOut" }}
      whileHover={{ y: isDown ? 4 : -6, scale: 1.03 }}
      className={`relative rounded-2xl p-5 group cursor-default ${isDown ? "mt-16" : ""}`}
      style={{
        background: `linear-gradient(145deg, ${step.color.replace("from-", "").replace("to-", "")})`,
        backgroundImage: `linear-gradient(145deg, var(--tw-gradient-stops))`,
        border: `1.5px solid ${step.borderColor}`,
        boxShadow: "0 4px 20px rgba(201,168,76,0.08)",
      }}
    >
      {/* Step number watermark */}
      <span
        className="absolute top-3 right-4 text-5xl font-black opacity-[0.06] select-none"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: step.accentColor,
        }}
      >
        {step.number}
      </span>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm"
        style={{
          background: "rgba(253,246,238,0.95)",
          border: `1.5px solid ${step.borderColor}`,
          color: step.accentColor,
        }}
      >
        {step.icon}
      </div>

      <h3
        className="text-base font-bold mb-2 leading-snug"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: "var(--brand-text)",
          fontSize: "1.1rem",
        }}
      >
        {step.title}
      </h3>

      <p
        className="text-xs leading-relaxed"
        style={{
          fontFamily: "var(--font-lato), Arial, sans-serif",
          color: "var(--brand-text-light)",
        }}
      >
        {step.description}
      </p>

      {/* Bottom gold accent on hover */}
      <div
        className="absolute bottom-0 left-5 right-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--brand-gold)" }}
      />
    </motion.div>
  );
}

/* Mobile timeline card */
function MobileStepCard({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.5 + index * 0.12, ease: "easeOut" }}
      className="flex gap-5"
    >
      {/* Circle on the timeline */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.6 + index * 0.12, type: "spring", stiffness: 220 }}
          className="w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-md z-10"
          style={{
            background: "var(--brand-cream)",
            border: `2.5px solid ${step.borderColor}`,
            color: step.accentColor,
            boxShadow: `0 0 0 4px rgba(201,168,76,0.12)`,
          }}
        >
          {step.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div
        className="flex-1 rounded-2xl p-5 mb-1"
        style={{
          border: `1.5px solid ${step.borderColor}`,
          background: "rgba(253,246,238,0.7)",
          boxShadow: "0 2px 16px rgba(201,168,76,0.07)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{
              background: `${step.borderColor}66`,
              color: step.accentColor,
              fontFamily: "var(--font-lato)",
            }}
          >
            Step {step.number}
          </span>
        </div>
        <h3
          className="text-lg font-bold mb-2"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--brand-text)",
          }}
        >
          {step.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-lato), Arial, sans-serif",
            color: "var(--brand-text-light)",
          }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
