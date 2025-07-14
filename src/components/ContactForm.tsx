'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // ✅ Initialize EmailJS
  useEffect(() => {
    emailjs.init('nEpNUafsidpBZ8Y_k') // Replace with your PUBLIC KEY
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // ✅ Send Main Email
      const result = await emailjs.send(
        'service_19n4cja',        // Service ID
        'template_z76g218',       // Template ID
        formData,
        'nEpNUafsidpBZ8Y_k'       // Public Key
      )

      // ✅ Send Auto Reply
      await emailjs.send(
        'service_19n4cja',
        'template_fdyvl47',       // Auto-reply template ID
        {
          name: formData.name,
          email: formData.email,
        },
        'nEpNUafsidpBZ8Y_k'
      )

      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Oops! Something went wrong. Please try again.')
    }
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
        <h2 className="section-title gradient-text">Get in Touch</h2>
        <p className="section-description">
          Got a project, idea, or opportunity? Let’s build something incredible together!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 frosted p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-xl space-y-8 border border-white/10"
        >
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

          <div className="text-center mt-8">
            <button type="submit" className="button-glow text-base px-6 py-2">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default ContactForm
