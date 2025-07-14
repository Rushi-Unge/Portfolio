"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-white/10 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest">
            RU<span className="text-accent">.</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            A portfolio by Rushikesh Unge showcasing modern full-stack development and design skills.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold mb-2">Navigation</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-base font-semibold mb-2">Get in Touch</h3>
          <div className="flex flex-wrap gap-5 text-xl">
            <a
              href="https://github.com/Rushi-Unge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/rushi-unge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38bdf8] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rushikeshunge.dev@gmail.com"
              className="hover:text-[#a855f7] transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/rushi_unge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919665924486"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-muted-foreground border-t border-white/10 py-4">
        © {new Date().getFullYear()} Rushikesh Unge. All rights reserved.
      </div>
    </footer>
  );
}
