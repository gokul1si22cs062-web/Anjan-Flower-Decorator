"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🌸",
    title: "Wedding Mandap",
    description:
      "Exquisite traditional and contemporary mandap designs adorned with fresh flowers, gold accents, and flowing drapes for your dream wedding ceremony.",
    color: "from-pink-50 to-rose-50",
    border: "#f9c8d8",
  },
  {
    icon: "✨",
    title: "Stage Decoration",
    description:
      "Breathtaking stage setups with floral arches, hanging installations, golden frames, and custom backdrops that create the perfect celebration backdrop.",
    color: "from-amber-50 to-yellow-50",
    border: "#e8c96a",
  },
  {
    icon: "🌺",
    title: "Reception Decor",
    description:
      "Elegant reception hall transformations featuring themed floral centerpieces, entrance arches, and full venue decoration tailored to your vision.",
    color: "from-rose-50 to-pink-50",
    border: "#f9c8d8",
  },
  {
    icon: "🎋",
    title: "Entrance Decoration",
    description:
      "Grand entrance archways, garland draping, banana leaf arrangements, and traditional torana designs to welcome guests in true festive style.",
    color: "from-green-50 to-emerald-50",
    border: "#a8d5a2",
  },
  {
    icon: "🏛️",
    title: "Housewarming & Pooja",
    description:
      "Sacred and serene decoration setups for griha pravesh, poojas, and religious ceremonies with traditional diyas, marigold garlands, and brass accessories.",
    color: "from-orange-50 to-amber-50",
    border: "#f4c47e",
  },
  {
    icon: "💐",
    title: "Floral Installations",
    description:
      "Artistic hanging floral installations, flower walls, chandelier floral pieces, and statement centerpieces for corporate events and special occasions.",
    color: "from-purple-50 to-pink-50",
    border: "#d4b0e0",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-2xl p-7 bg-gradient-to-br ${service.color} group cursor-default`}
      style={{
        border: `1.5px solid ${service.border}`,
        boxShadow: "0 4px 24px rgba(201,168,76,0.08)",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 12px 40px rgba(201,168,76,0.18)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 24px rgba(201,168,76,0.08)";
      }}
    >
      {/* Gold corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(135deg, transparent 50%, rgba(201,168,76,0.12) 50%)" }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 shadow-sm"
        style={{
          background: "rgba(253,246,238,0.9)",
          border: `1.5px solid ${service.border}`,
        }}
      >
        <span role="img" aria-label={service.title}>{service.icon}</span>
      </div>

      <h3
        className="text-xl font-bold mb-3"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: "var(--brand-text)",
        }}
      >
        {service.title}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-lato), Arial, sans-serif",
          color: "var(--brand-text-light)",
        }}
      >
        {service.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--brand-gold)" }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-24 px-4" style={{ background: "var(--brand-cream)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
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
            What We Create
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
            Our <span className="gold-shimmer">Signature Services</span>
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
            From sacred rituals to grand celebrations, we craft floral experiences
            that capture the essence of your most cherished moments.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(249,200,216,0.3), rgba(232,201,106,0.2))",
            border: "1.5px solid rgba(201,168,76,0.25)",
          }}
        >
          {[
            { value: "500+", label: "Events Decorated" },
            { value: "10+", label: "Years of Excellence" },
            { value: "1000+", label: "Happy Families" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-3xl sm:text-4xl font-bold gold-shimmer"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs tracking-wider uppercase mt-1"
                style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
