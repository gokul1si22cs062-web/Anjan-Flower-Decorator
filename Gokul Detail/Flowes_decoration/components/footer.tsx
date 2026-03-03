"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Showcase", href: "#showcase" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, rgba(61,43,31,0.97), rgba(61,43,31,1))",
        borderTop: "3px solid var(--brand-gold)",
      }}
    >
      {/* Gold top divider */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-gold), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden border-2 flex-shrink-0"
                style={{ borderColor: "var(--brand-gold)" }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-CEZTjy1G082dVTeMPaX6gvQY7mKKuZ.jpeg"
                  alt="Sree Anjan Logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "#fff",
                  }}
                >
                  Sree Anjan
                </h3>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--brand-gold)" }}
                >
                  Flower Decorator
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-lato), Arial, sans-serif",
              }}
            >
              Crafting breathtaking floral experiences for weddings, receptions,
              and all celebrations across Tumkur. Every flower, every petal,
              every arrangement — designed with love and artistry.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/anjanflowerdecorator_?igsh=MWliZDBhcDZzcndxaQ==", label: "Instagram" },
                { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16.004 3C9.375 3 3.996 8.373 3.996 15c0 2.11.56 4.09 1.535 5.797L3 29l8.438-2.508A12.94 12.94 0 0 0 16.004 27C22.633 27 28 21.627 28 15S22.633 3 16.004 3zm0 2c5.504 0 9.996 4.486 9.996 10S21.508 25 16.004 25c-1.725 0-3.348-.45-4.762-1.234l-.342-.197-5.01 1.488 1.52-4.887-.218-.358A9.941 9.941 0 0 1 6 15c0-5.514 4.492-10 10.004-10zm-3.03 4.688c-.257 0-.662.098-.996.463-.334.365-1.28 1.25-1.28 3.047s1.31 3.535 1.494 3.781c.183.246 2.575 3.93 6.238 5.35 3.664 1.42 3.664.946 4.324.887.66-.058 2.132-.872 2.433-1.716.301-.843.301-1.567.21-1.716-.09-.148-.332-.236-.693-.41-.36-.173-2.132-1.052-2.464-1.172-.333-.121-.575-.182-.817.183-.243.365-.938 1.172-1.149 1.416-.21.244-.42.275-.78.092-.36-.183-1.52-.56-2.894-1.785-1.07-.952-1.793-2.13-2.003-2.494-.211-.365-.023-.56.158-.742.163-.162.36-.422.54-.633.18-.21.24-.365.36-.608.12-.243.06-.455-.03-.637-.09-.183-.817-1.968-1.119-2.696-.29-.715-.583-.607-.817-.617-.209-.01-.45-.012-.693-.012z" />
                    </svg>
                  ),
                  href: "https://wa.me/919945748505",
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(201,168,76,0.2)",
                    color: "var(--brand-gold)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-6"
              style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-white text-left"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-lato), Arial, sans-serif",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-6"
              style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--brand-gold)" }} />
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-lato)" }}
                  >
                    +91 99457 48505
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-lato)" }}
                  >
                    Call or WhatsApp
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--brand-gold)" }} />
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-lato)" }}
                  >
                    Tumkur, Karnataka
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-lato)" }}
                  >
                    Serving all of Karnataka
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}
        >
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-lato)" }}
          >
            &copy; {new Date().getFullYear()} Sree Anjan Flower Decorator. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-lato)" }}
          >
            Crafted with love in Tumkur, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}
