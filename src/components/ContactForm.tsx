'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sending is temporarily disabled. Please try again later.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section z-10 relative overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="section-title gradient-text text-4xl font-bold text-white">
          Get in Touch
        </h2>
        <p className="section-description text-gray-400">
          Got a project, idea, or opportunity? Let’s build something incredible together!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 frosted p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-xl space-y-8 border border-white/10 bg-black/30"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-transparent text-white border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-300"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-transparent text-white border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-300"
            >
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-transparent text-white border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-transparent resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyan-300"
            >
              Your Message
            </label>
          </div>

          {/* Submit */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-md hover:shadow-cyan-500/30 transition"
            >
              Send Message
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/rushi-unge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rushi-Unge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/919665924486"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/rushi_unge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-white transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default ContactForm
