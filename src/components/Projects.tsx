'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const allProjects = [
  // Top 6 Highlighted Projects
  {
    title: 'Portfolio Website',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    description: 'Fully responsive portfolio site with smooth animations and modern design.',
    code: 'https://github.com/Rushi-Unge/Portfolio',
    live: '#',
   
  },

  {
    title:'Spotify Power BI Dashboard Insights',
    tech:['power BI','Python', 'Pandas'],
    description: 'Interactive Power BI dashboard visualizing Spotify data with Python analysis and Power BI.',
    code: 'https://github.com/Rushi-Unge/Spotify-Data-Analysis-',
    live: '#',
    pinned:true,
  },
  
   {
    title: 'Collab: SprogTechXperts Website',
    tech: ['HTML', 'CSS', 'JS'],
    description: 'Landing page designed for SprogTech company during internship.',
    code: 'https://github.com/sprogtechxperts/SprogTechXperts',
    live: 'https://sprog-tech-xperts.vercel.app',
    pinned: true,
  },
  {
    title: 'VideoTube Backend',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    description: 'Backend for a video streaming platform with upload & authentication.',
    code: 'https://github.com/Rushi-Unge/VideoTube-Only-Backend',
    live: '#',
    
  },
    {
    title: 'Productivity Hub',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    description: 'Unified workspace for notes, tasks, and journaling.',
    code: 'https://github.com/Rushi-Unge/ProductivityHub..',
    live: 'https://pro-hub-three.vercel.app/',
    pinned: true,
  },
    {
    title:'Weather App',
    tech: ['React', 'TailwindCSS', 'OpenWeather API'],
    description: 'Weather app fetching real-time data from OpenWeather API with a sleek UI.',
    code: '',
    live:'https://weather-app-1react.vercel.app/',
    pinned: true,
  },
  {
    title: 'Spring Boot CRUD',
    tech: ['Spring Boot', 'MySQL'],
    description: 'Basic CRUD app using Spring Boot with RESTful APIs and DB integration.',
    code: 'https://github.com/Rushi-Unge/Spring-Boot-CRUD-Operation',
    live: '#',
    pinned: true,
  },

  {
    title: 'Uber Clone App',
    tech: ['React', 'Express.js', 'MongoDB'],
    description: 'Ride-booking app with maps, real-time requests, and location tracking.',
    code: 'https://github.com/Rushi-Unge/Uber-Clone',
    live: '#',
    pinned: true,
  },
  {
    title: 'Python Churn Analysis',
    tech: ['Python', 'Jupyter', 'Pandas'],
    description: 'EDA on customer churn with visualizations and business insights.',
    code: 'https://github.com/Rushi-Unge/Python-Analysis',
    live: '#',
  },
  {
    title: 'Library Management System',
    tech: ['Java', 'OOP', 'File Handling'],
    description: 'Console-based Java project for managing book transactions.',
    code: 'https://github.com/Rushi-Unge/Library-Management-System-Console-Based-',
    live: '#',
  }, 
  {
    title: 'Milk Diary Khatabook',
    tech: ['Next.js', 'TailwindCSS'],
    description: 'Smart digital khatabook for dairy businesses to track milk records and billing.',
    code: 'https://github.com/Rushi-Unge/Milk-diary-khatabook',
    live: '#',
    
  },
  {
    title: 'Collab: AM SPORTS Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page for a sports brand - built during SprogTech internship.',
    code: 'https://github.com/sprogtechxperts/AM-SPORTS',
    live: '#',
  },
 

  {
    title: 'Backend Starter Template',
    tech: ['Node.js', 'Express.js'],
    description: 'Boilerplate backend setup with auth, routes, and env config.',
    code: 'https://github.com/Rushi-Unge/Backend',
    live: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  const visibleProjects = showAll
    ? allProjects
    : allProjects.filter((p) => p.pinned);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section relative z-10 text-white"
    >
      {/* Background Glow Blob */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[140px] opacity-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00f5d4] to-[#38bdf8] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="section-title gradient-text">Projects</h2>
        <p className="section-description text-muted">
          Real-world applications built using modern tech. Collaborations, dashboards, and backend systems.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 shadow-lg backdrop-blur-xl hover:shadow-cyan-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-muted text-sm mb-3">{project.description}</p>
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-[#00f5d4] to-[#38bdf8] text-black font-semibold shadow-md hover:shadow-cyan-500/30"
                >
                  Live
                </a>
              )}
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

      {/* Toggle Button */}
      {allProjects.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full text-sm font-semibold border border-cyan-500 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
}
