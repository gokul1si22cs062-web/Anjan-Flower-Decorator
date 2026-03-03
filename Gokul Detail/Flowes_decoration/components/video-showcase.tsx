"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export default function VideoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoFile(url);
      setPlaying(false);
    }
  };

  return (
    <section
      id="showcase"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(249,200,216,0.2) 0%, rgba(253,246,238,1) 40%, rgba(232,201,106,0.15) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-gold), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-gold), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
          >
            Behind the Magic
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
            Watch Our <span className="gold-shimmer">Creations Come Alive</span>
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
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
          >
            Watch our team craft stunning floral setups that transform venues into
            magical spaces for your unforgettable celebrations.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden mx-auto max-w-4xl"
          style={{
            boxShadow: "0 24px 80px rgba(201,168,76,0.25)",
            border: "2px solid rgba(201,168,76,0.3)",
          }}
        >
          {videoFile ? (
            <>
              <video
                ref={videoRef}
                src={videoFile}
                className="w-full aspect-video object-cover"
                muted={muted}
                loop
                playsInline
                onEnded={() => setPlaying(false)}
              />

              {/* Controls overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(201,168,76,0.9)", color: "#fff" }}
                    aria-label={playing ? "Pause" : "Play"}
                  >
                    {playing ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(253,246,238,0.9)", color: "var(--brand-text)" }}
                    aria-label={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </div>

              {/* Always-visible bottom controls */}
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }}
              >
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.9)", color: "#fff" }}
                >
                  {playing ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </>
          ) : (
            /* Upload placeholder */
            <div
              className="relative w-full aspect-video flex flex-col items-center justify-center"
              style={{ background: "linear-gradient(135deg, #fde8f0, #fdf6ee, #fef9e7)" }}
            >
              {/* Showcase image background */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-5diQwgMWp1Q0pCIH9aCelp8Aft4KcX.jpeg"
                alt="Wedding stage decoration by Sree Anjan"
                fill
                className="object-cover opacity-30"
                sizes="(max-width: 896px) 100vw, 896px"
              />

              <div className="relative z-10 text-center px-6">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                  style={{ background: "var(--brand-gold)" }}
                >
                  <Play size={32} fill="white" color="white" />
                </motion.div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "var(--brand-text)" }}
                >
                  Upload Your Event Video
                </h3>
                <p
                  className="text-sm mb-6 max-w-sm mx-auto"
                  style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                >
                  Upload an MP4 video to showcase your event decoration here.
                  Supports MP4, MOV, and WebM formats.
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/mp4,video/mov,video/webm"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: "var(--brand-gold)",
                    color: "#fff",
                    fontFamily: "var(--font-lato)",
                    boxShadow: "0 6px 24px rgba(201,168,76,0.4)",
                  }}
                >
                  Upload Video
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Upload new video button when video is loaded */}
        {videoFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="video/mp4,video/mov,video/webm"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-sm underline underline-offset-4 font-medium"
              style={{ color: "var(--brand-gold)", fontFamily: "var(--font-lato)" }}
            >
              Upload a different video
            </button>
          </motion.div>
        )}

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            "Traditional Mandaps",
            "Contemporary Stages",
            "Floral Installations",
            "Grand Entrances",
            "Corporate Events",
          ].map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "var(--brand-gold-dark)",
                fontFamily: "var(--font-lato)",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Instagram CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, rgba(249,200,216,0.5) 0%, rgba(253,246,238,0.95) 50%, rgba(232,201,106,0.25) 100%)",
            border: "1.5px solid rgba(201,168,76,0.3)",
            boxShadow: "0 8px 40px rgba(201,168,76,0.12)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8">
            <div className="flex items-center gap-5">
              {/* Instagram gradient icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </div>
              <div>
                <p
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "var(--brand-text)" }}
                >
                  Watch Our Latest Reels on Instagram
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--brand-text-light)", fontFamily: "var(--font-lato)" }}
                >
                  Behind-the-scenes, event showcases & decoration reveals — follow{" "}
                  <span style={{ color: "var(--brand-gold)" }}>@anjanflowerdecorator_</span> for daily inspiration.
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/anjanflowerdecorator_?igsh=MWliZDBhcDZzcndxaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
                color: "#fff",
                fontFamily: "var(--font-lato)",
                boxShadow: "0 6px 20px rgba(238,42,123,0.3)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
