'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  Code2, Cloud, GraduationCap, Rocket, Heart,
  MapPin, Coffee, Lightbulb, Server, Globe,
  ExternalLink, Terminal,
} from 'lucide-react'

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' },
    }),
  }

  const stats = [
    { value: '10+',   label: 'Projects\nCompleted',  icon: Rocket  },
    { value: '3+',   label: 'Years of\nLearning',   icon: GraduationCap },
    { value: '15+',  label: 'Technologies\nUsed',   icon: Code2   },
    { value: '100%', label: 'Passion &\nDedication', icon: Heart  },
  ]

  const interests = [
    { icon: Cloud,       title: 'Cloud & DevOps',      desc: 'Linux, AWS, Docker & CI/CD pipelines', color: 'from-blue-500 to-cyan-400'     },
    { icon: Code2,       title: 'Full-Stack Dev',       desc: 'React,Node.js,Express.js,MongoDB,SQL',        color: 'from-primary to-accent'        },
    { icon: Server,      title: 'Backend Systems',      desc: 'Databases, scalable APIs',   color: 'from-violet-500 to-purple-400' },
    { icon: Lightbulb,   title: 'Problem Solving',      desc: 'DSA, algorithms & system design thinking',  color: 'from-amber-500 to-orange-400'  },
    { icon: Globe,       title: 'Open Source',          desc: 'Contributing & collaborating globally',      color: 'from-emerald-500 to-teal-400'  },
    { icon: Coffee,      title: 'Continuous Learning',  desc: "Always exploring what's next in tech",       color: 'from-rose-500 to-pink-400'     },
  ]

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/12 text-primary text-sm font-semibold border border-primary/25 mb-4">
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* ── Top Grid: Photo + Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12 items-start">

          {/* Photo card — 2 cols */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/15 shadow-xl bg-card">
                {/* Photo */}
                <div className="relative h-80 sm:h-96 lg:h-[420px]">
                  <Image
                    src="/About_profile.jpg"
                    alt="Bharath Malayalam"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Name plate */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl leading-tight">Bharath Malayalam</h3>
                    <p className="text-white/75 text-sm mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Karur, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Availability badge */}
                <div className="px-6 py-3 bg-card flex items-center justify-between border-t border-border/50">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.5)] animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">Open to opportunities</span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-primary/8 px-3 py-1 rounded-full border border-primary/15">
                    Full-time / Intern
                  </span>
                </div>                {/* Coding profile links */}
                <div className="px-6 py-3 bg-card border-t border-border/50">
                  <div className="flex gap-2.5">
                    <a
                      href="https://leetcode.com/u/bharathmalayalam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200/70 hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
                    >
                      <Terminal className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" />
                      <span className="text-xs font-bold text-amber-700 group-hover:text-white transition-colors">LeetCode</span>
                      <ExternalLink className="w-3 h-3 text-amber-400 group-hover:text-white/70 transition-colors" />
                    </a>
                    <a
                      href="https://github.com/BharathMalayalam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200/70 hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/25 hover:-translate-y-0.5"
                    >
                      <Code2 className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                      <span className="text-xs font-bold text-gray-700 group-hover:text-white transition-colors">GitHub</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white/70 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + stats — 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Bio card */}
            <motion.div
              custom={2} variants={fadeUp} initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-sm overflow-hidden"
            >
              {/* Decorative blob */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />

              <div className="relative space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">
                  I&apos;m a passionate <span className="text-foreground font-semibold">IT student & full-stack developer</span> with
                  a strong drive for building scalable applications and managing cloud infrastructure.
                  I combine clean code practices with DevOps principles to deliver robust solutions.
                </p>
                <p className="text-base sm:text-lg">
                  My journey started with curiosity about what happens <em>behind the scenes</em>. That led
                  me to explore cloud computing, containerization, and CI/CD pipelines — especially
                  <span className="text-primary font-medium"> AWS, Docker,</span> and modern dev workflows.
                </p>
                <p className="text-base sm:text-lg">
                  Whether architecting microservices, optimising databases, or setting up automated
                  testing pipelines, I thrive on solving complex problems and <span className="text-foreground font-semibold">never stop learning</span>.
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -6, scale: 1.04 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />
                    <div className="relative bg-card rounded-xl p-5 border border-border text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                      <div className="mb-2 inline-flex p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                        {s.value}
                      </div>
                      <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mt-1 leading-tight whitespace-pre-line">
                        {s.label}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* ── Interests / Passions Grid ── */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Sub-header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-3">
              Interests & Passions
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interests.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  custom={5 + i * 0.5}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  <div className="relative flex items-start gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-350 overflow-hidden">
                    {/* Corner gradient blob */}
                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Icon */}
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="relative">
                      <h4 className="font-bold text-foreground mb-1 text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
