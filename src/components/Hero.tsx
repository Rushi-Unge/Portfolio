'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-12  bg-gray-900 text-foreground"
    >
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-6xl z-10">
        {/* Left: Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{' '}
            <span className="text-cyan-400 drop-shadow-md">
              Rushikesh Unge
            </span>
          </h1>

          <p className="mt-4 text-base md:text-xl text-muted-foreground">
            <Typewriter
              words={[
                'Full Stack Developer',
                'Backend Engineer',
                'Freelancer',
                'Tech Explorer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
            Passionate about building scalable and efficient web apps using the MERN stack. I enjoy working with real-time data, animation, and performance-optimized experiences.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-br from-[#00f5d4] to-[#38bdf8] text-black font-semibold rounded-full shadow-md hover:shadow-cyan-400/40 transition"
          >
            Let’s Connect
          </motion.a>

          {/* Tech Stack Icons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            {['react', 'nodejs', 'ts', 'mongodb'].map((tech, index) => (
              <img
                key={index}
                src={`/icons/${tech}.png`}
                alt={tech}
                className="w-10 h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl">
            <img
              src="/rus.jpg"
              alt="Rushikesh Unge"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
