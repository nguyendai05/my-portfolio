"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-black border-t border-white/10"
    >
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
              About Me
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] font-light tracking-tight">
              Passionate
              <br />
              <span className="text-stroke">Problem Solver</span>
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
              I am Dizan, an Information Technology student currently pursuing my
              degree. I am deeply passionate about software development, from
              front-end design to back-end logic. I thrive on learning new
              technologies and applying them to solve real-world problems.
            </p>

            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              My goal is to leverage my skills in modern frameworks like React,
              Next.js, and Node.js to build applications that are not only
              functional but also intuitive and engaging. I am a strong believer
              in collaborative development and continuous improvement.
            </p>

            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">3+</div>
                  <div className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Years Learning
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">10+</div>
                  <div className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Personal Projects
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