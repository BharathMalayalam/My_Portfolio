'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Send, Code, Briefcase, MessageSquare } from 'lucide-react'

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bharath@example.com',
      href: 'mailto:bharath@example.com',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/10 group-hover:bg-primary/20',
      borderClass: 'border-primary/20 hover:border-primary/40',
    },
    {
      icon: Briefcase,
      label: 'LinkedIn',
      value: 'bharath-malayalam',
      href: 'https://linkedin.com',
      colorClass: 'text-accent',
      bgClass: 'bg-accent/10 group-hover:bg-accent/20',
      borderClass: 'border-accent/20 hover:border-accent/40',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: 'bharath-dev',
      href: 'https://github.com',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/10 group-hover:bg-primary/20',
      borderClass: 'border-primary/20 hover:border-primary/40',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss your project or collaborate on something amazing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Left — Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactLinks.map((link) => {
                    const IconComponent = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-4 p-4 rounded-xl bg-card border ${link.borderClass} shadow-sm hover:shadow-md transition-all duration-300`}
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${link.bgClass} transition-colors duration-300`}>
                          <IconComponent className={`w-5 h-5 ${link.colorClass}`} />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{link.label}</p>
                          <p className="font-semibold text-foreground">{link.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    I&apos;m always interested in hearing about new projects and opportunities. Feel
                    free to reach out through any of the channels above or use the contact form.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="relative bg-card rounded-2xl border border-border shadow-sm p-8 overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />

                <h3 className="text-2xl font-bold mb-6 text-foreground relative">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  {/* Name */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-250 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-250 text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-250 text-sm resize-none"
                    />
                  </div>

                  {/* Success message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-primary/10 border border-primary/25 text-primary text-sm font-medium flex items-center gap-2"
                    >
                      <span>✓</span>
                      Thank you! I&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
