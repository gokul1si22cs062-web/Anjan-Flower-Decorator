"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative rounded-2xl px-5 py-4 max-w-xs shadow-xl"
            style={{
              background: "rgba(253,246,238,0.98)",
              border: "1.5px solid rgba(201,168,76,0.3)",
              boxShadow: "0 8px 32px rgba(201,168,76,0.2)",
            }}
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Dismiss"
            >
              <X size={12} style={{ color: "var(--brand-text-light)" }} />
            </button>
            <p
              className="text-sm font-semibold mb-1"
              style={{
                color: "var(--brand-text)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
              }}
            >
              Sree Anjan Flower Decorator
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: "var(--brand-text-light)",
                fontFamily: "var(--font-lato), Arial, sans-serif",
              }}
            >
              Hi! Ready to plan your dream event? Chat with us on WhatsApp!
            </p>
            <a
              href="https://wa.me/919945748505?text=Hello! I'm interested in floral decoration services from Sree Anjan."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs font-semibold py-2 rounded-xl transition-all hover:opacity-90"
              style={{
                background: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-lato)",
              }}
            >
              Start Chat
            </a>
            {/* Arrow */}
            <div
              className="absolute -bottom-2 right-6 w-4 h-4 rotate-45"
              style={{ background: "rgba(253,246,238,0.98)", border: "1.5px solid rgba(201,168,76,0.3)", borderTop: "none", borderLeft: "none" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919945748505?text=Hello! I'm interested in floral decoration services from Sree Anjan."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative"
        style={{
          background: "#25D366",
          boxShadow: "0 6px 24px rgba(37,211,102,0.5)",
        }}
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(37,211,102,0.4)" }}
        />

        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="white"
          className="relative z-10"
        >
          <path d="M16.004 3C9.375 3 3.996 8.373 3.996 15c0 2.11.56 4.09 1.535 5.797L3 29l8.438-2.508A12.94 12.94 0 0 0 16.004 27C22.633 27 28 21.627 28 15S22.633 3 16.004 3zm0 2c5.504 0 9.996 4.486 9.996 10S21.508 25 16.004 25c-1.725 0-3.348-.45-4.762-1.234l-.342-.197-5.01 1.488 1.52-4.887-.218-.358A9.941 9.941 0 0 1 6 15c0-5.514 4.492-10 10.004-10zm-3.03 4.688c-.257 0-.662.098-.996.463-.334.365-1.28 1.25-1.28 3.047s1.31 3.535 1.494 3.781c.183.246 2.575 3.93 6.238 5.35 3.664 1.42 3.664.946 4.324.887.66-.058 2.132-.872 2.433-1.716.301-.843.301-1.567.21-1.716-.09-.148-.332-.236-.693-.41-.36-.173-2.132-1.052-2.464-1.172-.333-.121-.575-.182-.817.183-.243.365-.938 1.172-1.149 1.416-.21.244-.42.275-.78.092-.36-.183-1.52-.56-2.894-1.785-1.07-.952-1.793-2.13-2.003-2.494-.211-.365-.023-.56.158-.742.163-.162.36-.422.54-.633.18-.21.24-.365.36-.608.12-.243.06-.455-.03-.637-.09-.183-.817-1.968-1.119-2.696-.29-.715-.583-.607-.817-.617-.209-.01-.45-.012-.693-.012z" />
        </svg>
      </motion.a>
    </div>
  );
}
