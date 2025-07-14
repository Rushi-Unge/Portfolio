"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={aboutRef}
      className="section relative z-10 text-white overflow-hidden bg-gray-900"
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          About Rushikesh Unge
        </h1>
        <p className="text-muted text-lg">
          Building not just websites, but experiences that inspire.
        </p>
      </div>

      {/* Profile + Bio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mb-16"
      >
        <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 animate-float">
          <Image
            src="/icons/rushi.png"
            alt="Rushikesh Unge"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold text-accent">Hi, I&rsquo;m Rushikesh</h2>
          <p className="text-muted text-base mt-2 leading-relaxed">
            I’m a passionate <strong>Full Stack Developer</strong> with a deep love for backend architecture, real-time data apps, and clean, scalable design systems. I enjoy transforming ideas into fully functional, beautiful digital products.
            <br />
            My journey started with curiosity and evolved into a mission: to create impactful software that blends performance, creativity, and purpose.
          </p>
        </div>
      </motion.div>

      {/* Skills & Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h3 className="section-title text-center">Tech Stack & Specialties</h3>
        <p className="section-description">
          These are the technologies and tools I use to build intuitive and scalable applications.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          {["React", "Next.js", "Node.js", "MongoDB", "Socket.IO", "Three.js", "TailwindCSS", "GSAP", "TypeScript"].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 text-sm text-white shadow hover:scale-105 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Personal Interests */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h3 className="section-title text-center">What I Enjoy Beyond Code</h3>
        <p className="section-description">
          A few things that spark creativity and balance in my life.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted text-sm list-disc list-inside">
          <li>🎧 Exploring lo-fi & cinematic music while coding</li>
          <li>🎮 Gaming and competitive problem-solving</li>
          <li>📚 Reading tech blogs, startup stories, and design systems</li>
          <li>🧠 Building side projects that solve real-world problems</li>
          <li>✈️ Dreaming about solo travel and tech conferences</li>
        </ul>
      </motion.div>

      {/* Vision & Future */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h3 className="section-title text-center">My Vision</h3>
        <p className="text-center text-muted text-base">
          To design systems that empower people, scale with elegance, and push the boundary between technology and imagination. I aim to work with teams that believe in impact, open-source, and solving real challenges with modern tech.
        </p>
      </motion.div>

      {/* Code Snippet */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="bg-[#0e1526] border border-white/10 text-green-400 font-mono text-sm p-5 rounded-xl shadow-2xl mt-10 max-w-3xl mx-auto"
      >
        <pre>{`
const rushikeshUnge = {
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node.js", "MongoDB"],
  passion: "Building futuristic real-time interfaces",
  hobbies: ["Designing", "Gaming", "3D Web", "Music"],
  portfolio: "https://rushikeshunge.dev",
};
        `}</pre>
      </motion.div>

      {/* Resume Button */}
      <motion.div whileHover={{ scale: 1.08 }} className="text-center mt-12">
        <a href="/resume.pdf" download className="button-glow">
          📄 Download My Resume
        </a>
      </motion.div>
    </section>
  );
}
