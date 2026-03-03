"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-qVfpbEDC3P4YMzCHr1EOSOTTiMrRqC.jpeg",
    alt: "Elegant floral installation with cascading pink roses and butterflies",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-h2gZFpxTOEMvKKZlonumby1LgUylAG.jpeg",
    alt: "Stunning wedding mandap with gold and flower decorations",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-EACcxxZNX2dk5y5fywSy0KX3nBRiER.jpeg",
    alt: "Beautiful wedding stage with ivory sofa and floral arches",
  },
];

// Floating petal SVG
function Petal({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute pointer-events-none" style={style}>
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
        <ellipse
          cx="9"
          cy="11"
          rx="7"
          ry="10"
          fill="rgba(249,200,216,0.75)"
          transform="rotate(-20 9 11)"
        />
      </svg>
    </div>
  );
}

function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    left: `${(i * 8.5) % 100}%`,
    animationDuration: `${5 + (i % 4) * 1.5}s`,
    animationDelay: `${i * 0.6}s`,
    opacity: 0.6 + (i % 3) * 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((p, i) => (
        <Petal
          key={i}
          style={{
            left: p.left,
            top: "-30px",
            animation: `petal-fall ${p.animationDuration} ${p.animationDelay} linear infinite`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);

  // Auto-cycle background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background images */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}

        {/* Bright warm overlay - not dark */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(253,246,238,0.15) 0%, rgba(253,246,238,0.3) 40%, rgba(253,246,238,0.75) 100%)",
          }}
        />
      </motion.div>

      {/* Floating petals */}
      <FloatingPetals />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Logo badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div
            className="relative w-24 h-24 rounded-full border-4 overflow-hidden shadow-2xl"
            style={{ borderColor: "var(--brand-gold)" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-CEZTjy1G082dVTeMPaX6gvQY7mKKuZ.jpeg"
              alt="Sree Anjan Logo"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </motion.div>

        {/* Gold line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px mx-auto mb-6"
          style={{ background: "var(--brand-gold)" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          style={{
            color: "var(--brand-gold)",
            fontFamily: "var(--font-lato), Arial, sans-serif",
            textShadow: "0 1px 8px rgba(255,255,255,0.8)",
          }}
        >
          Premium Floral Artistry
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-balance"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--brand-text)",
            textShadow: "0 2px 20px rgba(253,246,238,0.9)",
          }}
        >
          Where Flowers{" "}
          <span className="gold-shimmer">Tell Stories</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "var(--brand-text-light)",
            fontFamily: "var(--font-lato), Arial, sans-serif",
            textShadow: "0 1px 12px rgba(253,246,238,0.9)",
          }}
        >
          Sree Anjan Flower Decorator transforms every celebration into an
          extraordinary floral experience — from grand wedding mandaps to
          intimate event stages.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => {
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "var(--brand-gold)",
              color: "#fff",
              fontFamily: "var(--font-lato), Arial, sans-serif",
              boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
            }}
          >
            View Our Work
          </button>
          <button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "var(--brand-gold)",
              color: "var(--brand-text)",
              background: "rgba(253,246,238,0.85)",
              fontFamily: "var(--font-lato), Arial, sans-serif",
            }}
          >
            Book a Consultation
          </button>
        </motion.div>

        {/* Image dots */}
        <div className="flex justify-center gap-2 mt-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === currentImage ? 24 : 8,
                height: 8,
                background: i === currentImage ? "var(--brand-gold)" : "rgba(201,168,76,0.35)",
              }}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-widest uppercase font-medium"
          style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
        >
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ color: "var(--brand-gold)" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
