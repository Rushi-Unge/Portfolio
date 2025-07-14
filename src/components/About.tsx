"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGithub, FaDocker } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiRedux, SiVite, SiBootstrap, SiMongodb, SiMysql, SiExpress, SiC, SiCplusplus, SiGit } from "react-icons/si";

const techSections = [
  {
    title: "Frontend Development",
    items: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { icon: <FaNode />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { name: "REST APIs" },
      { name: "Websockets" },
      { name: "Authentication (JWT, OAuth)" },
    ],
  },
  {
    title: "Database Management",
    items: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { icon: <SiC />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
      // { icon: <SiJava />, name: "Core Java" },
    ],
  },
  {
    title: "Version Control & Deployment",
    items: [
      { icon: <SiGit />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ],
  },
  {
    title: "DevOps & Containerization",
    items: [
      { icon: <FaDocker />, name: "Docker" },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section text-white max-w-7xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold mb-4 gradient-text"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-muted text-center max-w-3xl mx-auto mb-16 text-base sm:text-lg"
      >
        I&rsquo;m <span className="text-white font-semibold">Rushikesh Unge</span>, a passionate Full Stack Developer who enjoys solving real-world problems through clean, scalable, and intelligent code. Whether it’s frontend magic, backend architecture, or system design — I bring creativity and precision to every project. I enjoy building immersive UIs, real-time dashboards, and modern APIs. Always learning. Always building.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techSections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="bg-[#111827] border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-400">{section.title}</h3>
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full text-white hover:bg-white/20 transition"
                >
                  {item.icon && <span className="text-lg">{item.icon}</span>}
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
