"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      // ĐÃ XÓA: bg-black
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.03] via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container-custom relative z-10"
      >
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.h1
              className="font-display text-[clamp(3rem,12vw,10rem)] leading-[0.9] font-light tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              I am
              <br />
              <span className="text-stroke">Developer</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
              Information Technology student specializing in full-stack web
              development. I build modern, responsive, and efficient
              applications with a focus on user experience and clean code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-center gap-8"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="relative">
                View Work
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}