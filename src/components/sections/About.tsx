"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "There's a better way",
      description:
        "With years in the industry, we believe that marrying best in class creative and production delivers better work, more smoothly, with more impact.",
    },
    {
      title: "Small Teams, Big Ideas",
      description:
        "Our global network includes top-tier talent. We build high-impact teams tailored to your project. No bloat. No busywork.",
    },
    {
      title: "Streamlined by Technology",
      description:
        "We leverage emerging technologies to connect with your audience in new and exciting ways. Innovation is at the core of what we do.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-black" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-display-md font-bold mb-6">
            we activate <span className="text-accent">nerves</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We create experiences that leave lasting impressions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="mb-6 h-1 w-16 bg-accent transition-all duration-300 group-hover:w-full" />
              <h3 className="font-display text-2xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}