"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp message with form data
    const msg = `*New Booking Enquiry - Sree Anjan Flower Decorator*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A*Event Type:* ${form.event}%0A*Event Date:* ${form.date}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/919945748505?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: "var(--font-lato), Arial, sans-serif",
    background: "rgba(253,246,238,0.8)",
    border: "1.5px solid rgba(201,168,76,0.3)",
    borderRadius: "0.75rem",
    color: "var(--brand-text)",
    padding: "0.875rem 1.125rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "var(--brand-cream)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(249,200,216,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(232,201,106,0.3) 0%, transparent 50%)`,
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
          >
            Get In Touch
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
            Plan Your <span className="gold-shimmer">Dream Event</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 mx-auto mb-4"
            style={{ background: "var(--brand-gold)" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
          >
            Ready to create something beautiful? Fill out the form below or reach
            out directly — we&apos;re here to make your celebration unforgettable.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(249,200,216,0.25), rgba(253,246,238,0.95))",
                border: "1.5px solid rgba(249,200,216,0.6)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  color: "var(--brand-text)",
                }}
              >
                Sree Anjan Flower Decorator
              </h3>

              {[
                {
                  icon: <Phone size={18} />,
                  label: "Call / WhatsApp",
                  value: "+91 99457 48505",
                  href: "tel:+919945748505",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: "Tumkur, Karnataka, India",
                  href: "https://maps.google.com/?q=Tumkur,Karnataka",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "sreeanjan.flowers@gmail.com",
                  href: "mailto:sreeanjan.flowers@gmail.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-[1.02] block mb-3"
                  style={{
                    background: "rgba(253,246,238,0.7)",
                    border: "1.5px solid rgba(201,168,76,0.2)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--brand-gold)", color: "#fff" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-wider uppercase mb-1"
                      style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--brand-text)", fontFamily: "var(--font-lato)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919945748505?text=Hello! I'm interested in floral decoration services from Sree Anjan."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-lato)",
                boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="white">
                <path d="M16.004 3C9.375 3 3.996 8.373 3.996 15c0 2.11.56 4.09 1.535 5.797L3 29l8.438-2.508A12.94 12.94 0 0 0 16.004 27C22.633 27 28 21.627 28 15S22.633 3 16.004 3zm0 2c5.504 0 9.996 4.486 9.996 10S21.508 25 16.004 25c-1.725 0-3.348-.45-4.762-1.234l-.342-.197-5.01 1.488 1.52-4.887-.218-.358A9.941 9.941 0 0 1 6 15c0-5.514 4.492-10 10.004-10zm-3.03 4.688c-.257 0-.662.098-.996.463-.334.365-1.28 1.25-1.28 3.047s1.31 3.535 1.494 3.781c.183.246 2.575 3.93 6.238 5.35 3.664 1.42 3.664.946 4.324.887.66-.058 2.132-.872 2.433-1.716.301-.843.301-1.567.21-1.716-.09-.148-.332-.236-.693-.41-.36-.173-2.132-1.052-2.464-1.172-.333-.121-.575-.182-.817.183-.243.365-.938 1.172-1.149 1.416-.21.244-.42.275-.78.092-.36-.183-1.52-.56-2.894-1.785-1.07-.952-1.793-2.13-2.003-2.494-.211-.365-.023-.56.158-.742.163-.162.36-.422.54-.633.18-.21.24-.365.36-.608.12-.243.06-.455-.03-.637-.09-.183-.817-1.968-1.119-2.696-.29-.715-.583-.607-.817-.617-.209-.01-.45-.012-.693-.012z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl p-12 text-center"
                style={{
                  background: "rgba(253,246,238,0.95)",
                  border: "2px solid rgba(201,168,76,0.3)",
                }}
              >
                <CheckCircle
                  size={56}
                  className="mx-auto mb-4"
                  style={{ color: "var(--brand-gold)" }}
                />
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "var(--brand-text)",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                >
                  Your enquiry has been sent via WhatsApp. We&apos;ll get back to
                  you within 24 hours!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{
                  background: "rgba(253,246,238,0.9)",
                  border: "1.5px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 8px 40px rgba(201,168,76,0.1)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "var(--brand-text)",
                  }}
                >
                  Send an Enquiry
                </h3>
                <p
                  className="text-xs tracking-wide"
                  style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                >
                  Fill the form and we&apos;ll respond via WhatsApp
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-wider uppercase mb-2"
                      style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                    >
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Priya Sharma"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-wider uppercase mb-2"
                      style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold tracking-wider uppercase mb-2"
                    style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                  >
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-wider uppercase mb-2"
                      style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                    >
                      Event Type *
                    </label>
                    <select
                      name="event"
                      value={form.event}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Housewarming">Housewarming / Griha Pravesh</option>
                      <option value="Birthday">Birthday Party</option>
                      <option value="Cradle Ceremony">Cradle Ceremony</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Pooja">Pooja / Religious Ceremony</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-wider uppercase mb-2"
                      style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                    >
                      Event Date
                    </label>
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      type="date"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold tracking-wider uppercase mb-2"
                    style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                  >
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event, venue, expected guests, theme preferences..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--brand-gold)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: "var(--brand-gold)",
                    color: "#fff",
                    fontFamily: "var(--font-lato)",
                    boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
                  }}
                >
                  <Send size={16} />
                  Send via WhatsApp
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
