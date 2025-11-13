"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-md font-bold mb-6">
              Let's Create
              <br />
              <span className="text-accent">Something Amazing</span>
            </h2>

            <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your vision to life.
            </p>

            <a href="mailto:your@email.com" className="btn-primary text-lg">
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 border border-muted/20 transition-all 
                           duration-300 hover:border-accent"
                  aria-label={link.label}
                >
                  <Icon className="text-muted transition-colors group-hover:text-accent" size={24} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}