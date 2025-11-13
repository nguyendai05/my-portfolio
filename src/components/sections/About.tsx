"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding bg-black border-t border-white/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 block">
              Experience at the Core
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] font-light tracking-tight">
              Shaping pioneering
              <br />
              <span className="text-stroke">interfaces</span>
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              For over twenty years, we've been at the forefront of digital
              experience design. We don't rely on best practices—each project
              begins from scratch to create systems that are genuinely bespoke.
            </p>

            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              We work with world-class motion artists and technologists who
              understand that a digital experience is only as good as it
              functions. Development is a critical collaborator in our process.
            </p>

            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">20+</div>
                  <div className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">100+</div>
                  <div className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Projects Delivered
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}