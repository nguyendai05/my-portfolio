"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full-Stack Development",
      description:
        "A complete e-commerce site built with Next.js, Stripe for payments, and PostgreSQL.",
      year: "2024",
    },
    {
      title: "Social Media App",
      category: "Front-End & Back-End",
      description:
        "A social media dashboard featuring real-time updates with WebSocket and a React-based interface.",
      year: "2024",
    },
    {
      title: "Portfolio Website",
      category: "Front-End Development",
      description:
        "This very portfolio, built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
      year: "2023",
    },
    {
      title: "Task Management Tool",
      category: "Full-Stack Development",
      description:
        "A collaborative task manager with drag-and-drop functionality, built using React and Node.js.",
      year: "2023",
    },
  ];

  return (
    <section
      id="work"
      className="section-padding bg-black border-t border-white/10"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 block">
            My Projects
          </span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-light tracking-tight">
            Recent
            <br />
            <span className="text-stroke">Projects</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <a
        href="#"
        className="block border-t border-white/10 py-8 hover:bg-white/[0.02] transition-colors duration-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Index */}
          <div className="hidden md:block md:col-span-1">
            <span className="text-sm text-white/30 font-light">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <div className="md:col-span-5">
            <motion.h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">
              {project.title}
            </motion.h3>
          </div>

          {/* Category & Description */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">
              {project.category}
            </p>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Year & Arrow */}
          <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
            <span className="text-sm text-white/40 font-light">
              {project.year}
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
}