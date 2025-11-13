"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Digital Design & Development",
      description:
        "We create experiences that anticipate what users want and need, paired with intuitive interfaces that support those actions. Working with technologists—equal parts developer and artist.",
      capabilities: [
        "Experience Design",
        "Interface Design",
        "Web Development",
        "Interactive Technology",
      ],
    },
    {
      number: "02",
      title: "Motion & Animation",
      description:
        "We collaborate with world-class motion artists who understand movement as one of the most powerful communication tools. Whether constructing entire worlds or animating static designs.",
      capabilities: [
        "Motion Design",
        "3D Animation",
        "Visual Effects",
        "Interactive Motion",
      ],
    },
    {
      number: "03",
      title: "Bespoke Experiences",
      description:
        "We don't rely on best practices. Each project begins from scratch to create systems that are genuinely bespoke. A digital experience is only as good as it functions.",
      capabilities: [
        "Custom Solutions",
        "Creative Technology",
        "Performance Optimization",
        "System Architecture",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-black border-t border-white/10">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-light tracking-tight max-w-4xl">
            Motion and animation
            <br />
            are <span className="text-stroke">central</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-white/10 pt-8"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-6xl md:text-7xl font-light text-white/10">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-10">
                <h3 className="font-display text-3xl md:text-5xl font-light tracking-tight mb-6">
                  {service.title}
                </h3>

                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8 max-w-3xl">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-3">
                  {service.capabilities.map((capability, i) => (
                    <span
                      key={i}
                      className="text-xs uppercase tracking-[0.15em] text-white/40 border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white/60 transition-colors duration-300"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}