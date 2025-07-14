"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = ["Home", "About", "Projects", "Journey", "Contact"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-white tracking-widest"
        >
          <a href="/#home">RU</a><span className="text-accent">.</span>
        </motion.h1>

        {/* Nav Items */}
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="hidden md:flex space-x-6 text-sm text-white font-medium"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all group-hover:w-full duration-300"></span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Book a Call Button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex"
        >
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-br from-[#00f5d4] to-[#38bdf8] text-black font-semibold shadow hover:shadow-cyan-400/40 transition hover:scale-105"
          >
            Book a Call
          </Link>
        </motion.div>
      </div>
    </header>
  );
}