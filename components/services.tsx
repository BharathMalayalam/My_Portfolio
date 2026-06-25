'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code, Database, Cloud, Zap,
  CheckCircle2, ArrowRight,
  Layers, GitBranch, Terminal, Globe,
} from 'lucide-react'

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: 'easeOut' as const } },
  })

  /* ── Service definitions ── */
  const services = [
      {
      id: '01',
      icon:      Cloud,
      accentIcon: GitBranch,
      title:     'DevOps & Cloud',
      subtitle:  'Automated • Reliable • Scalable',
      description:
        'End-to-end infrastructure management — from CI/CD pipelines to Docker containers deployment — so your product ships faster.',
      features:  ['AWS (EC2, S3)', 'Docker ', 'Jenkins & GitHub Actions', 'Linux','Networking'],
      gradient:  'from-blue-500 to-cyan-400',
      glow:      'from-blue-400/25 to-cyan-500/15',
      textGlow:  'from-blue-500 to-cyan-400',
      span:      'lg:col-span-2',
      featured:  false,
    },
    {
      id: '02',
      icon:      Code,
      accentIcon: Globe,
      title:     'Web Development',
      subtitle:  'Modern • Responsive • Fast',
      description:
        'Crafting pixel-perfect, high-performance web apps using the latest frameworks. Every pixel is intentional, every interaction delightful.',
      features:  ['React & Next.js', 'Tailwind CSS', 'TypeScript', 'SEO Optimised', 'Responsive Design'],
      gradient:  'from-orange-500 via-primary to-amber-400',
      glow:      'from-primary/30 to-accent/20',
      textGlow:  'from-primary to-accent',
      span:      'lg:col-span-1',          // Featured — wide card
      featured:  true,
    },
    {
      id: '03',
      icon:      Database,
      accentIcon: Terminal,
      title:     'Backend Development',
      subtitle:  'Scalable • Secure • Robust',
      description:
        'Building bulletproof server-side systems with clean architecture, real-time capabilities, and optimised queries.',
      features:  ['Node.js & Express', 'Python (FastAPI)', 'PostgreSQL & MongoDB', 'Socket.io'],
      gradient:  'from-violet-500 to-purple-400',
      glow:      'from-violet-400/25 to-purple-500/15',
      textGlow:  'from-violet-500 to-purple-400',
      span:      'lg:col-span-1',
      featured:  false,
    },

    {
      id: '04',
      icon:      Zap,
      accentIcon: Layers,
      title:     'API Development',
      subtitle:  'RESTful • Documented • Secure',
      description:
        'Designing elegant, versioned APIs with proper auth, rate-limiting, and rich documentation so integrations are a pleasure.',
      features:  ['REST & GraphQL', 'OAuth 2.0 / JWT', 'OpenAPI / Swagger', 'Postman Testing', 'Error Handling'],
      gradient:  'from-emerald-500 to-teal-400',
      glow:      'from-emerald-400/25 to-teal-500/15',
      textGlow:  'from-emerald-500 to-teal-400',
      span:      'lg:col-span-2',          // Wide card
      featured:  false,
      horizontal: true,                   // Side-by-side layout
    },
  ]

  /* ── Process steps ── */
  const steps = [
    { num: '1', label: 'Discovery',   desc: 'Understand requirements & goals'   },
    { num: '2', label: 'Design',      desc: 'Architecture & wireframe planning'  },
    { num: '3', label: 'Build',       desc: 'Agile development with clean code'  },
    { num: '4', label: 'Deploy',      desc: 'CI/CD, testing & cloud delivery'    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/12 text-primary text-sm font-semibold border border-primary/25 mb-5">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-5">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, end-to-end solutions — from stunning frontends to
            resilient cloud infrastructure
          </p>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((svc, i) => {
            const Icon  = svc.icon
            const AIcon = svc.accentIcon

            return (
              <motion.div
                key={svc.id}
                variants={fadeUp(0.1 + i * 0.1)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6 }}
                className={`group relative ${svc.span} ${svc.horizontal ? 'md:col-span-2' : ''}`}
              >
                {/* Outer glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${svc.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Card */}
                <div className={`relative h-full bg-card border border-border rounded-3xl shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-400 overflow-hidden flex ${svc.horizontal ? 'flex-col md:flex-row gap-0' : 'flex-col'}`}>

                  {/* ── Decorative background ── */}
                  <div className={`absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br ${svc.gradient} opacity-[0.06] rounded-full blur-3xl group-hover:opacity-[0.12] transition-opacity duration-700`} />
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${svc.gradient} opacity-[0.04] rounded-full blur-2xl`} />

                  {/* ── Main content pane ── */}
                  <div className={`relative p-8 flex flex-col gap-5 ${svc.horizontal ? 'md:w-1/2' : 'flex-1'}`}>

                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${svc.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-5xl font-black bg-gradient-to-br ${svc.textGlow} bg-clip-text text-transparent opacity-15 select-none group-hover:opacity-25 transition-opacity duration-300`}>
                        {svc.id}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${svc.textGlow} bg-clip-text text-transparent mb-1`}>
                        {svc.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                        {svc.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {svc.description}
                    </p>
                    
                  </div>

                  {/* ── Feature chips pane ── */}
                  <div className={`relative border-t border-border/50 ${svc.horizontal ? 'md:border-t-0 md:border-l flex-1' : ''} p-6 bg-primary/[0.02] flex flex-col justify-center gap-3`}>
                    {svc.horizontal && (
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">What&apos;s included</p>
                    )}
                    <div className={`flex ${svc.horizontal ? 'flex-col gap-2.5' : 'flex-wrap gap-2'}`}>
                      {svc.features.map((f) => (
                        <div
                          key={f}
                          className={`flex items-center gap-2 ${svc.horizontal
                            ? 'text-sm text-foreground'
                            : 'text-xs px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary font-semibold hover:bg-primary/15 transition-colors'
                          }`}
                        >
                          {svc.horizontal && <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />}
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Process Strip ── */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Section divider label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3">
              How I Work
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30 z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp(0.55 + i * 0.08)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4 }}
                className="relative z-10 group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300">
                      {step.num}
                    </div>
                  </div>
                  {/* Label */}
                  <h4 className="font-bold text-foreground mb-1 text-sm">{step.label}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
