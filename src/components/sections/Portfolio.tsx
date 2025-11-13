"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Project Name",
      category: "Web Design",
      image: "/images/project-1.jpg",
    },
    // Add more projects
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        <h2 className="font-display text-display-md font-bold mb-12 text-center">
          Selected <span className="text-accent">Work</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 
                         group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity 
                            duration-300 group-hover:opacity-100 flex items-center 
                            justify-center flex-col gap-2 p-6 text-center">
                <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                <p className="text-accent text-sm uppercase tracking-wider">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}