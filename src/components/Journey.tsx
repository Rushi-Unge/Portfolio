'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react'

interface JourneyItem {
  category: 'Education' | 'Experience' | 'Milestone'
  year: string
  title: string
  description: string
}

const journeyItems: JourneyItem[] = [
  {
    category: "Education",
    year: "2025",
    title: "Bachelor of Computer Applications (BCA) – Deogiri College, Chhatrapati Sambhajinagar",
    description:
      "Graduated with distinction. Gained strong foundations in software development, data structures, and web technologies. Developed academic projects, including a Power BI Spotify Dashboard and full-stack MERN applications.",
  },
  {
    category: "Experience",
    year: "Oct 2024 – Jan 2025",
    title: "Software Development Intern – Prym Aerospace",
    description:
      "Contributed to the SHAKTI Project by developing backend RESTful APIs, integrating drone telemetry systems, and building real-time dashboards using WebSockets, Three.js, and MongoDB. Delivered performance-focused, scalable modules under production-level standards.",
  },
  {
    category: "Education",
    year: "2022",
    title: "Higher Secondary Certificate (HSC) – Deogiri College, Chhatrapati Sambhajinagar",
    description:
      "Completed HSC with 79%, focusing on Computer Science and Mathematics. Built a strong logical reasoning base and problem-solving mindset.",
  },
  {
    category: "Experience",
    year: "Jan 2023 – Jul 2023",
    title: "Campus Ambassador – IIT Bombay",
    description:
      "Led campus engagement activities and promoted national-level technical events. Gained early exposure to event coordination, branding, and student-tech outreach.",
  },
  {
    category: "Education",
    year: "2019",
    title: "Secondary School Certificate (SSC) – R.P English Medium School, Badnapur",
    description:
      "Achieved 84.40% in SSC with a strong academic record. Developed discipline, curiosity, and a strong foundation in mathematics and science.",
  },
];


const cardVariants = (index: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' },
  },
})

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-32 bg-gray-900 px-4 md:px-12 text-white">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          My Journey <span className="text-cyan-400">🚀</span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Growth • Experience • Achievements
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {journeyItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants(index)}
          >
            <div className="p-6 bg-white/5 backdrop-blur rounded-xl shadow-md border border-white/10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${
                      item.category === 'Education'
                        ? 'bg-green-500'
                        : item.category === 'Experience'
                        ? 'bg-blue-500'
                        : 'bg-purple-500'
                    }`}
                  >
                    {item.category === 'Education' ? (
                      <GraduationCap className="h-5 w-5" />
                    ) : item.category === 'Experience' ? (
                      <Briefcase className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.year}</p>
                  <span className="inline-block mt-2 text-xs font-medium uppercase tracking-wide bg-gray-700 text-white px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <p className="mt-3 text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Journey
