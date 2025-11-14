"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-black border-t border-white/10"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8 block">
            Get in Touch
          </span>

          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-light tracking-tight mb-12">
            Let's build
            <br />
            <span className="text-stroke">something</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Left Column - CTA */}
            <div>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind or just want to connect, feel
                free to reach out.
              </p>

              <a
                href="mailto:hello@dizan.dev"
                className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-light hover:text-white/80 transition-colors duration-300"
              >
                <span className="relative">
                  xunidizan@gmail.com
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-white/20 group-hover:bg-white transition-colors duration-300" />
                </span>
              </a>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-3">
                  Follow
                </div>
                <div className="space-y-2">
                  <a
                    href="https://github.com/Xuni-Dizan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light text-white/60 hover:text-white transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nguy%E1%BB%85n-xu%C3%A2n-%C4%91%E1%BA%A1i-a015b1351/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light text-white/60 hover:text-white transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/xuni518211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light text-white/60 hover:text-white transition-colors duration-300"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-3">
                  Location
                </div>
                <p className="text-lg font-light text-white/60">
                  Based in Vietnam
                  <br />
                  Open to remote work
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}