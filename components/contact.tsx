'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  Mail,
  Send,
  Code2,
  Link2,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Phone,
} from 'lucide-react'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  /* ── Data ── */
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bharathmalayalam25@gmail.com',
      sub: 'Drop a message anytime',
      href: 'mailto:bharathmalayalam25@gmail.com',
      gradient: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-500/10 hover:bg-amber-500/20',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'BharathMalayalam',
      sub: 'Check my open source work',
      href: 'https://github.com/BharathMalayalam',
      gradient: 'from-gray-600 to-gray-800',
      bg: 'bg-gray-500/10 hover:bg-gray-500/20',
    },
    {
      icon: Link2,
      label: 'LinkedIn',
      value: 'bharath-malayalam',
      sub: 'Connect professionally',
      href: 'https://www.linkedin.com/in/bharath-malayalam',
      gradient: 'from-blue-600 to-blue-700',
      bg: 'bg-blue-500/10 hover:bg-blue-500/20',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91 6379616027',
      sub: 'Quick chat & calls',
      href: 'https://wa.me/6379616027',
      gradient: 'from-green-500 to-emerald-600',
      bg: 'bg-green-500/10 hover:bg-green-500/20',
    },
  ]

  const infoBadges = [
    { icon: MapPin, text: 'Karur, Tamil Nadu, India ' },
    { icon: MessageSquare, text: 'Reply within 24h' },
  ]

  /* ── Animations ── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }
  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }
  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  const inputBase =
    'w-full px-4 py-3.5 rounded-xl bg-white/70 border text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 text-sm backdrop-blur-sm font-medium'

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fffbf0 0%, #fdf6ec 50%, #fff8f0 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 tech-grid-pattern pointer-events-none opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-400/10 via-orange-300/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── Header ── */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Available for Work
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Let's{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
            </p>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* ── LEFT PANEL — spans 2 of 5 ── */}
            <motion.div variants={fadeLeft} className="lg:col-span-2 flex flex-col gap-6">

              {/* Info Card */}
              <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-amber-500/15 to-orange-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-xl font-bold text-foreground mb-2">Get In Touch</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                {/* Info badges */}
                <div className="flex flex-col gap-2.5">
                  {infoBadges.map((badge) => {
                    const Icon = badge.icon
                    return (
                      <div
                        key={badge.text}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-amber-500/6 border border-amber-500/12"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-amber-600" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{badge.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`group relative rounded-2xl p-4 border border-border/60 ${link.bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-5`} />
                      </div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center mb-3 shadow-sm`}>
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <p className="text-xs font-bold text-foreground">{link.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{link.value}</p>
                      <ArrowUpRight className="absolute top-3 right-3 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  )
                })}
              </div>

              {/* Availability card */}
              <div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Open to Opportunities</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Internships · Junior Developer Role</p>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT PANEL — Contact Form — spans 3 of 5 ── */}
            <motion.div variants={fadeRight} className="lg:col-span-3">
              <div className="glass-panel rounded-2xl overflow-hidden h-full relative">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500" />

                {/* Decorative orb */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-amber-400/15 to-orange-300/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="p-7 sm:p-8 relative">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                      <p className="text-xs text-muted-foreground">I'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1 — Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs font-bold text-foreground uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="John Doe"
                          className={`${inputBase} ${
                            focused === 'name'
                              ? 'border-amber-400 ring-4 ring-amber-500/15 shadow-sm shadow-amber-500/10'
                              : 'border-border/60 hover:border-amber-300'
                          }`}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold text-foreground uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="john@example.com"
                          className={`${inputBase} ${
                            focused === 'email'
                              ? 'border-amber-400 ring-4 ring-amber-500/15 shadow-sm shadow-amber-500/10'
                              : 'border-border/60 hover:border-amber-300'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Row 2 — Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-bold text-foreground uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} cursor-pointer ${
                          focused === 'subject'
                            ? 'border-amber-400 ring-4 ring-amber-500/15 shadow-sm shadow-amber-500/10'
                            : 'border-border/60 hover:border-amber-300'
                        }`}
                      >
                        <option value="" disabled>
                          What can I help you with?
                        </option>
                        <option value="project">🚀 New Project</option>
                        <option value="freelance">💼 Freelance Work</option>
                        <option value="internship">🎓 Internship / Job</option>
                        <option value="collaboration">🤝 Collaboration</option>
                        <option value="other">💬 Other</option>
                      </select>
                    </div>

                    {/* Row 3 — Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold text-foreground uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, or anything you'd like to discuss..."
                        className={`${inputBase} resize-none leading-relaxed ${
                          focused === 'message'
                            ? 'border-amber-400 ring-4 ring-amber-500/15 shadow-sm shadow-amber-500/10'
                            : 'border-border/60 hover:border-amber-300'
                        }`}
                      />
                      <p className="text-right text-xs text-muted-foreground/60">
                        {formData.message.length} / 1000 characters
                      </p>
                    </div>

                    {/* Success message */}
                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.97 }}
                          transition={{ duration: 0.4 }}
                          className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700"
                        >
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                          <div>
                            <p className="text-sm font-bold">Message sent successfully!</p>
                            <p className="text-xs opacity-80">I'll get back to you within 24 hours. 🎉</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full relative overflow-hidden px-6 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-xl transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 group"
                    >
                      <span className="relative z-10 flex items-center gap-2.5">
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        Send Message
                        <Sparkles className="w-4 h-4 opacity-75" />
                      </span>
                      {/* Shimmer overlay */}
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </button>

                    <p className="text-center text-xs text-muted-foreground/60">
                      🔒 Your information is private and will never be shared.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
