"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code, Palette } from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Sparkles,
      title: "Experiential",
      description:
        "We build to inspire, but also build to code. Design is only as strong as its function.",
      items: [
        "Architecture & Fabrication",
        "Spatial Design",
        "Interactive Technology",
        "On-Site Production",
      ],
    },
    {
      icon: Code,
      title: "Digital",
      description:
        "Full-service digital experiences from concept to deployment. Built to perform flawlessly.",
      items: [
        "Web Development",
        "3D & Real-time Content",
        "Motion & Animation",
        "Interface Design",
      ],
    },
    {
      icon: Palette,
      title: "Brand",
      description:
        "Your look, your legacy. Brand identity that defines perception and creates memory.",
      items: [
        "Strategy & Campaign",
        "Brand Identity",
        "Content Production",
        "Creative Direction",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-black" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-display-md font-bold mb-6">
            we excite <span className="text-accent">neurons</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative border border-muted/20 p-8 transition-all duration-300 
                         hover:border-accent"
              >
                <div className="mb-6 inline-flex rounded-full bg-accent/10 p-4">
                  <Icon className="text-accent" size={32} />
                </div>

                <h3 className="font-display text-3xl font-bold mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>

                <p className="text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className="absolute inset-0 -z-10 bg-accent/5 opacity-0 transition-opacity 
                              duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}