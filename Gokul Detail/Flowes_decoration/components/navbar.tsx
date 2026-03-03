"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(253,246,238,0.97)" : "transparent",
          boxShadow: scrolled ? "0 2px 30px rgba(201,168,76,0.15)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2"
            >
              {/* White pill behind logo so mix-blend-mode:multiply removes the black bg */}
              <div
                className="relative flex-shrink-0"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 8,
                  backgroundColor: "#ffffff",
                  padding: 2,
                  boxShadow: scrolled
                    ? "0 2px 12px rgba(201,168,76,0.25)"
                    : "0 2px 12px rgba(0,0,0,0.2)",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-ShWNHJQkmkiH1lGY9a99thkwNwNnig.jpeg"
                  alt="Sree Anjan Flower Decorator Logo"
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: "multiply" }}
                  sizes="72px"
                />
              </div>
              <div className="hidden sm:block">
                <p
                  className="text-lg font-bold leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: scrolled ? "var(--brand-text)" : "#fff",
                    textShadow: scrolled ? "none" : "0 1px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  Sree Anjan
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--brand-gold)" }}
                >
                  Flower Decorator
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-sm font-medium tracking-widest uppercase transition-all duration-300 group"
                  style={{
                    color: scrolled ? "var(--brand-text)" : "#fff",
                    fontFamily: "var(--font-lato), Arial, sans-serif",
                    textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "var(--brand-gold)" }}
                  />
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-6 py-2 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--brand-gold)",
                  color: "#fff",
                  fontFamily: "var(--font-lato), Arial, sans-serif",
                  boxShadow: "0 4px 15px rgba(201,168,76,0.35)",
                }}
              >
                Book Now
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? "var(--brand-text)" : "#fff" }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(253,246,238,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "2px solid var(--brand-gold)",
              boxShadow: "0 8px 32px rgba(201,168,76,0.15)",
            }}
          >
            <nav className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 text-base font-medium tracking-widest uppercase border-b"
                  style={{
                    color: "var(--brand-text)",
                    borderColor: "var(--brand-cream-dark)",
                    fontFamily: "var(--font-lato), Arial, sans-serif",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 py-3 text-sm font-semibold tracking-widest uppercase rounded-full"
                style={{
                  background: "var(--brand-gold)",
                  color: "#fff",
                  fontFamily: "var(--font-lato), Arial, sans-serif",
                }}
              >
                Book Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
