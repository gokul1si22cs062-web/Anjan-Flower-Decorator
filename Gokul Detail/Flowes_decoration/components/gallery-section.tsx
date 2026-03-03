"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-qVfpbEDC3P4YMzCHr1EOSOTTiMrRqC.jpeg",
    alt: "Cascading pink roses and butterfly installation",
    category: "Installation",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-mH4MVAQMFETvtiRMEz4Wyb1xVn0nW8.jpeg",
    alt: "Grand wedding mandap with red rose canopy",
    category: "Mandap",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-EACcxxZNX2dk5y5fywSy0KX3nBRiER.jpeg",
    alt: "White and gold wedding stage with ivory sofa",
    category: "Stage Decor",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-5diQwgMWp1Q0pCIH9aCelp8Aft4KcX.jpeg",
    alt: "Peacock themed wedding stage by Anjan Decorators",
    category: "Stage Decor",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-ETZMFNdGJIDM0D7jLae07DQDHxd9bJ.jpeg",
    alt: "Floral arch entrance with colorful blooms",
    category: "Entrance",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-BauIOswa34l4PRnsvIEp83J4ZD9mrt.jpeg",
    alt: "Ganesh motif wedding stage with hanging flowers",
    category: "Mandap",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-h2gZFpxTOEMvKKZlonumby1LgUylAG.jpeg",
    alt: "Wedding stage with white and pink roses and golden rings",
    category: "Stage Decor",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-UIi2Xn1aPLGGNcTH8NOOTrErzBljLQ.jpeg",
    alt: "Sree Anjan store with floral garland entrance",
    category: "Entrance",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-yRiZviELsHIpeLbOENWmldmiTyIU2u.jpeg",
    alt: "Close-up entrance garland decoration",
    category: "Entrance",
    span: "col-span-1 row-span-1",
  },
];

const categories = ["All", "Mandap", "Stage Decor", "Entrance", "Installation"];

function GalleryItem({
  img,
  index,
  onOpen,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  onOpen: (img: (typeof galleryImages)[0]) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{
        aspectRatio: "4/3",
        boxShadow: "0 4px 20px rgba(201,168,76,0.1)",
      }}
      onClick={() => onOpen(img)}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-end pb-6 px-4"
        style={{ background: "linear-gradient(to top, rgba(61,43,31,0.75), rgba(249,200,216,0.2))" }}
      >
        <ZoomIn className="mb-2 text-white" size={24} />
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
          style={{
            background: "rgba(201,168,76,0.9)",
            color: "#fff",
            fontFamily: "var(--font-lato)",
          }}
        >
          {img.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<(typeof galleryImages)[0] | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4" style={{ background: "#fdf6ee" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
          >
            Our Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "var(--brand-text)",
            }}
          >
            Floral <span className="gold-shimmer">Masterpieces</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 mx-auto mb-6"
            style={{ background: "var(--brand-gold)" }}
          />

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  background: activeCategory === cat ? "var(--brand-gold)" : "rgba(201,168,76,0.1)",
                  color: activeCategory === cat ? "#fff" : "var(--brand-text-light)",
                  border: `1.5px solid ${activeCategory === cat ? "var(--brand-gold)" : "rgba(201,168,76,0.25)"}`,
                  fontFamily: "var(--font-lato)",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filtered.map((img, i) => (
              <GalleryItem
                key={img.src}
                img={img}
                index={i}
                onOpen={setLightboxImg}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(61,43,31,0.9)", backdropFilter: "blur(8px)" }}
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={lightboxImg.src}
                  alt={lightboxImg.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(61,43,31,0.9), transparent)" }}
              >
                <p
                  className="text-white text-lg font-medium"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {lightboxImg.alt}
                </p>
                <span
                  className="text-xs tracking-wider uppercase px-3 py-1 rounded-full mt-2 inline-block"
                  style={{ background: "var(--brand-gold)", color: "#fff", fontFamily: "var(--font-lato)" }}
                >
                  {lightboxImg.category}
                </span>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.9)", color: "var(--brand-text)" }}
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
