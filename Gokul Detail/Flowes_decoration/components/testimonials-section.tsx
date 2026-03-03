"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arun",
    event: "Wedding Ceremony, Tumkur",
    rating: 5,
    text: "Sree Anjan transformed our wedding into an absolute fairytale! The mandap decoration was beyond our imagination — every single flower was perfectly placed, the garlands were fresh and fragrant, and the overall ambience left our guests speechless. We couldn't have asked for a more beautiful day.",
    initials: "PA",
    color: "#f9c8d8",
  },
  {
    name: "Kavitha Sharma",
    event: "House Warming Ceremony",
    rating: 5,
    text: "The housewarming decoration was spectacular. Traditional yet modern — they perfectly balanced the sacred elements with contemporary aesthetics. The entrance with banana leaves and marigolds was gorgeous, and the pooja room setup was divine. Highly recommend Sree Anjan for any auspicious occasion!",
    initials: "KS",
    color: "#e8c96a",
  },
  {
    name: "Rajesh & Meena",
    event: "Reception Hall, Tumkur",
    rating: 5,
    text: "We had our reception decorated by Sree Anjan and it was the best decision we made. The floral arch at the entrance, the stage backdrop with fresh white flowers, and the table centerpieces — everything was immaculate. Their team was punctual, professional, and incredibly talented.",
    initials: "RM",
    color: "#a8d5a2",
  },
  {
    name: "Sunitha Gowda",
    event: "Cradle Ceremony",
    rating: 5,
    text: "I've seen many decorators but Sree Anjan stands apart. For my baby's cradle ceremony, they created the most adorable and delicate floral setup. Pastel pink roses, white jasmine, and golden accents — it was like a dream. Every photo turned out stunning because of the beautiful backdrop they created.",
    initials: "SG",
    color: "#d4b0e0",
  },
  {
    name: "Venkatesha Family",
    event: "Corporate Event Decoration",
    rating: 5,
    text: "We hired Sree Anjan for our company's annual event and were blown away by the professionalism and creativity. The floral installation at the entrance was a masterpiece and our guests couldn't stop taking photos. Their team executed everything flawlessly within the given timeframe.",
    initials: "VF",
    color: "#f4c47e",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#C9A84C" color="#C9A84C" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    const newIndex = (current - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setCurrent(newIndex);
  };

  const next = () => {
    const newIndex = (current + 1) % testimonials.length;
    setDirection(1);
    setCurrent(newIndex);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const variants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(249,200,216,0.15) 0%, rgba(253,246,238,1) 50%, rgba(232,201,106,0.12) 100%)",
      }}
    >
      {/* Decorative quote marks */}
      <div
        className="absolute top-16 left-8 opacity-5 pointer-events-none"
        style={{ color: "var(--brand-gold)" }}
      >
        <Quote size={120} />
      </div>
      <div
        className="absolute bottom-16 right-8 opacity-5 rotate-180 pointer-events-none"
        style={{ color: "var(--brand-gold)" }}
      >
        <Quote size={120} />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
          >
            Kind Words
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
            What Our <span className="gold-shimmer">Clients Say</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 mx-auto"
            style={{ background: "var(--brand-gold)" }}
          />
        </div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl relative min-h-[320px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full p-8 sm:p-12 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, rgba(253,246,238,0.95), rgba(253,246,238,0.99))`,
                  border: `2px solid ${testimonials[current].color}`,
                  boxShadow: `0 12px 50px ${testimonials[current].color}44`,
                }}
              >
                {/* Quote icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ background: testimonials[current].color }}
                >
                  <Quote size={20} style={{ color: "var(--brand-text)" }} />
                </div>

                {/* Stars */}
                <div className="mb-5">
                  <StarRating count={testimonials[current].rating} />
                </div>

                {/* Text */}
                <p
                  className="text-lg sm:text-xl leading-relaxed mb-8 text-balance"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "var(--brand-text)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{
                      background: testimonials[current].color,
                      color: "var(--brand-text)",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                    }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p
                      className="font-bold text-base"
                      style={{
                        color: "var(--brand-text)",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                      }}
                    >
                      {testimonials[current].name}
                    </p>
                    <p
                      className="text-xs tracking-wide"
                      style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                    >
                      {testimonials[current].event}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                border: "2px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                background: "transparent",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 28 : 10,
                    height: 10,
                    background: i === current ? "var(--brand-gold)" : "rgba(201,168,76,0.25)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                border: "2px solid var(--brand-gold)",
                color: "var(--brand-gold)",
                background: "transparent",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
