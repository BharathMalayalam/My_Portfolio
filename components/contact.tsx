'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCallback, useEffect, useState } from 'react'
import { Send, MapPin,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import { staggerContainer, EASE_OUT } from '@/lib/animations'
import { SITE, SOCIAL_LINKS } from '@/lib/data/site'
import { CONTACT_LIMITS, validateContactForm } from '@/lib/validation/contact'
import type { ContactFormData, ContactFormField } from '@/lib/types/portfolio'

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
}

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const INFO_BADGES = [
  { icon: MapPin, text: SITE.location },
  { icon: MessageSquare, text: 'Reply within 24h' },
] as const

const SUBJECT_OPTIONS = [
  { value: 'project', label: '🚀 New Project' },
  { value: 'freelance', label: '💼 Freelance Work' },
  { value: 'internship', label: '🎓 Internship / Job' },
  { value: 'collaboration', label: '🤝 Collaboration' },
  { value: 'other', label: '💬 Other' },
] as const

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [focused, setFocused] = useState<ContactFormField | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      const field = name as ContactFormField
      const maxLength = field === 'message' ? CONTACT_LIMITS.message.max : CONTACT_LIMITS.name.max

      setFormData((prev) => ({ ...prev, [field]: value.slice(0, maxLength) }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
      setSubmitError(null)
    },
    [],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    const validation = validateContactForm(formData)
    if (!validation.success || !validation.sanitized) {
      setErrors(validation.errors)
      return
    }

    setStatus('loading')
    setErrors({})

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: validation.sanitized.name,
          from_email: validation.sanitized.email,
          subject: validation.sanitized.subject,
          message: validation.sanitized.message,
          to_email: 'bharathmalayalam25@gmail.com',
        },
      )

      setFormData(INITIAL_FORM)
      setStatus('success')
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      setStatus('error')
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  const containerVariants = staggerContainer
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  }
  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  }
  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_OUT } },
  }

  const inputBase =
    'w-full px-4 py-3.5 rounded-xl bg-white/70 border text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 text-sm backdrop-blur-sm font-medium'

  const inputClass = (field: ContactFormField) =>
    `${inputBase} ${
      errors[field]
        ? 'border-destructive ring-4 ring-destructive/15'
        : focused === field
          ? 'border-amber-400 ring-4 ring-amber-500/15 shadow-sm shadow-amber-500/10'
          : 'border-border/60 hover:border-amber-300'
    }`

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-[#fffbf0] via-[#fdf6ec] to-[#fff8f0]"
    >
      <div className="absolute inset-0 tech-grid-pattern pointer-events-none opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-400/10 via-orange-300/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Available for Work
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div variants={fadeLeft} className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500" />
                <h3 className="text-xl font-bold text-foreground mb-2">Get In Touch</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                </p>

                <div className="flex flex-col gap-2.5">
                  {INFO_BADGES.map((badge) => {
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

              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon
                  const isExternal = link.href.startsWith('http')
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className={`group relative rounded-2xl p-4 border border-border/60 ${link.bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center mb-3 shadow-sm`}
                      >
                        <Icon className={`w-4 h-4 text-white ${link.isBrand ? 'fill-white' : ''}`} />
                      </div>
                      <p className="text-xs font-bold text-foreground">{link.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{link.value}</p>
                      <ArrowUpRight className="absolute top-3 right-3 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-foreground/60 transition-all duration-300" />
                    </a>
                  )
                })}
              </div>

              <div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/25">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Open to Opportunities</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Internships · Junior Developer Role</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="lg:col-span-3">
              <div className="glass-panel rounded-2xl overflow-hidden h-full relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500" />

                <div className="p-7 sm:p-8 relative">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
                      <p className="text-xs text-muted-foreground">I&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        id="name"
                        label="Full Name"
                        error={errors.name}
                        inputClass={inputClass('name')}
                      >
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          autoComplete="name"
                          maxLength={CONTACT_LIMITS.name.max}
                          placeholder="Name"
                          className={inputClass('name')}
                        />
                      </FormField>

                      <FormField
                        id="email"
                        label="Email Address"
                        error={errors.email}
                        inputClass={inputClass('email')}
                      >
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          autoComplete="email"
                          maxLength={CONTACT_LIMITS.email.max}
                          placeholder="e-mail"
                          className={inputClass('email')}
                        />
                      </FormField>
                    </div>

                    <FormField id="subject" label="Subject" error={errors.subject}>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused(null)}
                        required
                        className={`${inputClass('subject')} cursor-pointer`}
                      >
                        <option value="" disabled>
                          What can I help you with?
                        </option>
                        {SUBJECT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </FormField>

                    <FormField id="message" label="Message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                        maxLength={CONTACT_LIMITS.message.max}
                        placeholder="Tell me about your project, goals, or anything you'd like to discuss..."
                        className={`${inputClass('message')} resize-none leading-relaxed`}
                      />
                      <p className="text-right text-xs text-muted-foreground/60 mt-1">
                        {formData.message.length} / {CONTACT_LIMITS.message.max} characters
                      </p>
                    </FormField>

                    <AnimatePresence>
                      {status === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.97 }}
                          className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700"
                          role="status"
                        >
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" />
                          <div>
                            <p className="text-sm font-bold">Message sent successfully!</p>
                            <p className="text-xs opacity-80">I&apos;ll get back to you within 24 hours.</p>
                          </div>
                        </motion.div>
                      )}
                      {(status === 'error' || submitError) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
                          role="alert"
                        >
                          {submitError ?? 'Failed to send message. Please try again or email me directly.'}
                          <a href={`mailto:${SITE.email}`} className="block mt-1 underline font-medium">
                            {SITE.email}
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full relative overflow-hidden px-6 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                    <p className="text-center text-xs text-muted-foreground/60">
                      Your information is private and will never be shared.
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

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  inputClass?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-bold text-foreground uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
