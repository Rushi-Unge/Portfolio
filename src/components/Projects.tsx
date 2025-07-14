"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "S.H.A.K.T.I Drone Dashboard",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    description:
      "Real-time drone telemetry with 3D simulation, map integration, and WebSocket streaming.",
    live: "https://shakti.rushikeshunge.dev",
    code: "https://github.com/rushikeshunge/shakti",
  },
  {
    title: "Freelance Home Services Platform",
    tech: ["Next.js", "MongoDB", "Stripe", "TailwindCSS"],
    description:
      "Full-stack platform to book and manage freelance home service providers like electricians, plumbers.",
    live: "#",
    code: "https://github.com/rushikeshunge/home-services",
  },
  {
    title: "Spotify Insights with Power BI",
    tech: ["Power BI", "DAX", "Spotify API"],
    description:
      "Artist trends, audio features, and personalized recommendation dashboard powered by Power BI.",
    live: "#",
    code: "https://github.com/rushikeshunge/spotify-bi",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section relative z-10 text-white"
    >
      {/* Glow Background Blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[140px] opacity-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00f5d4] to-[#38bdf8] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="section-title gradient-text">Projects</h2>
        <p className="section-description text-muted">
          A selection of my recent work, showcasing modern interfaces, real-time systems, and creative tooling.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-xl hover:shadow-cyan-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-muted text-sm mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-accent/10 text-accent text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#00f5d4] to-[#38bdf8] text-black font-semibold shadow-md hover:shadow-cyan-500/30"
              >
                Live
              </a>
              <a
                href={project.code}
                target="_blank"
                className="px-4 py-1 text-sm rounded-full border border-accent text-accent hover:bg-accent/10"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}