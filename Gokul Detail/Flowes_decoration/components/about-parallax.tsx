"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--brand-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Parallax image stack */}
          <motion.div
            style={{ opacity }}
            className="relative h-[520px]"
          >
            {/* Main image */}
            <motion.div
              style={{ y }}
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(201,168,76,0.2)",
                border: "2px solid rgba(201,168,76,0.25)",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-BauIOswa34l4PRnsvIEp83J4ZD9mrt.jpeg"
                alt="Ganesh motif wedding stage decoration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Floating accent image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden z-10"
              style={{
                boxShadow: "0 12px 40px rgba(201,168,76,0.3)",
                border: "3px solid rgba(253,246,238,1)",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-ETZMFNdGJIDM0D7jLae07DQDHxd9bJ.jpeg"
                alt="Colorful flower arch"
                fill
                className="object-cover"
                sizes="192px"
              />
            </motion.div>

            {/* Gold badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-6 -left-4 px-5 py-3 rounded-2xl z-10"
              style={{
                background: "var(--brand-gold)",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(201,168,76,0.4)",
              }}
            >
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                10+
              </p>
              <p
                className="text-xs tracking-wider uppercase"
                style={{ fontFamily: "var(--font-lato)", opacity: 0.9 }}
              >
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div ref={contentRef}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-5 text-balance"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "var(--brand-text)",
              }}
            >
              Rooted in Tradition,{" "}
              <span className="gold-shimmer">Inspired by Beauty</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 mb-6"
              style={{ background: "var(--brand-gold)" }}
            />

            {[
              "Sree Anjan Flower Decorator was founded with a singular vision: to transform every celebration into a work of art through the timeless beauty of flowers. Based in Tumkur, Karnataka, we have spent over a decade perfecting the art of floral decoration.",
              "From opulent wedding mandaps adorned with thousands of fresh flowers to delicate cradle ceremony setups, each of our creations is handcrafted with meticulous attention to detail. We blend traditional Indian artistry with contemporary design sensibilities.",
              "Our passionate team works closely with each client to understand their unique vision, budget, and style — ensuring every decoration reflects their personality and creates memories that last a lifetime.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="text-sm leading-relaxed mb-4"
                style={{
                  color: "var(--brand-text-light)",
                  fontFamily: "var(--font-lato), Arial, sans-serif",
                }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "var(--brand-gold)",
                  color: "#fff",
                  fontFamily: "var(--font-lato)",
                  boxShadow: "0 6px 24px rgba(201,168,76,0.35)",
                }}
              >
                Start Planning
              </button>
              <button
                onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "var(--brand-gold)",
                  color: "var(--brand-text)",
                  background: "transparent",
                  fontFamily: "var(--font-lato)",
                }}
              >
                See Gallery
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
