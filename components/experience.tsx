'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Calendar,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle,
  Circle,
  ArrowRight,
} from 'lucide-react'
import { EXPERIENCES } from '@/lib/data/experience'
import { staggerContainer, EASE_OUT } from '@/lib/animations'

export function Experience() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
  const [activeId, setActiveId] = useState(1)

  const active = EXPERIENCES.find((e) => e.id === activeId)!

  const containerVariants = staggerContainer
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 tech-grid-pattern opacity-50 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse, ${active.glowColor} 0%, transparent 65%)`,
          opacity: 0.25,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* ── Section Header ── */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-bold mb-6 backdrop-blur-sm"
              style={{
                background: 'rgba(245,158,11,0.08)',
                borderColor: 'rgba(245,158,11,0.25)',
                color: '#d97706',
              }}
            >
              <Sparkles className="w-4 h-4" />
              Professional Journey
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-4 tracking-tight">
              My{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Experience
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-6">
              Click on a role to explore the details of each chapter of my journey
            </p>
          </motion.div>

          {/* ── Main Interactive Layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">

            {/* ── LEFT: Role Selector ── */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {EXPERIENCES.map((exp, i) => {
                const Icon = exp.icon
                const isActive = exp.id === activeId
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.55 }}
                    className={`relative w-full text-left rounded-2xl border transition-all duration-400 group overflow-hidden ${
                      isActive
                        ? 'shadow-xl border-transparent'
                        : 'border-border/60 hover:border-amber-400/40 bg-white/50 hover:bg-amber-50/50'
                    }`}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBg"
                        className={`absolute inset-0 bg-gradient-to-br ${exp.accentBg}`}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                      />
                    )}
                    {/* Active left bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.gradient}`}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                      />
                    )}

                    <div className="relative p-5 flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md ${
                          isActive ? `bg-gradient-to-br ${exp.gradient}` : 'bg-amber-500/10 group-hover:bg-amber-500/20'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-amber-600'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-sm leading-tight ${isActive ? 'text-foreground' : 'text-foreground/80'}`}>
                          {exp.title}
                        </p>
                        <p className={`text-xs mt-0.5 truncate ${isActive ? 'text-amber-600' : 'text-muted-foreground'}`}>
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <Calendar className="w-3 h-3 text-muted-foreground/70" />
                          <span className="text-xs text-muted-foreground/70">{exp.period}</span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                          isActive ? 'text-amber-500 translate-x-0.5' : 'text-muted-foreground/40 group-hover:text-amber-400/60'
                        }`}
                      />
                    </div>
                  </motion.button>
                )
              })}

              {/* Timeline connector visual */}
              <div className="relative mt-2 ml-11 flex flex-col gap-0">
                {EXPERIENCES.map((exp, i) => (
                  <div key={exp.id} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                      exp.id === activeId
                        ? `bg-gradient-to-br ${exp.gradient} border-transparent shadow-md`
                        : 'border-border bg-white'
                    }`} />
                    {i < EXPERIENCES.length - 1 && (
                      <div className="absolute left-[42px] mt-6 w-0.5 h-6 bg-gradient-to-b from-amber-300/60 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Detail Panel ── */}
            <motion.div variants={fadeUp}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl border border-border/60 overflow-hidden bg-white/70 backdrop-blur-md shadow-xl"
                >
                  {/* Top gradient strip */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${active.gradient}`} />

                  {/* Glow orb (top-right) */}
                  <div
                    className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${active.glowColor} 0%, transparent 70%)`, opacity: 0.3 }}
                  />

                  <div className="p-7 sm:p-9">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center shadow-lg`}
                            style={{ boxShadow: `0 8px 32px ${active.glowColor}` }}
                          >
                            <active.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black text-foreground leading-tight">
                              {active.title}
                            </h3>
                            <p className="text-amber-600 font-bold text-sm mt-0.5">{active.company}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-1.5 rounded-full bg-gradient-to-r ${active.typeColor} shadow-sm`}
                        >
                          {active.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-white/80 border border-border px-3 py-1 rounded-full">
                          <Calendar className="w-3 h-3" />
                          {active.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 text-amber-500" />
                          {active.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-7 border-l-2 border-amber-400/40 pl-4">
                      {active.description}
                    </p>

                    {/* Two-col: achievements + skills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      {/* Achievements */}
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-3">
                          Key Achievements
                        </p>
                        <div className="flex flex-col gap-2.5">
                          {active.achievements.map((ach, i) => (
                            <motion.div
                              key={ach}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-2.5 group"
                            >
                              <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                              <span className="text-sm text-foreground/80 font-medium">{ach}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills used */}
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-3">
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {active.highlights.map((h, i) => (
                            <motion.span
                              key={h}
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.06, type: 'spring', stiffness: 300 }}
                              className={`text-xs px-3 py-1.5 rounded-full font-bold text-white bg-gradient-to-r ${active.gradient} opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200 shadow-sm cursor-default`}
                              style={{ boxShadow: `0 2px 12px ${active.glowColor}` }}
                            >
                              {h}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center justify-between pt-5 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Circle className="w-3 h-3 fill-green-500 text-green-500" />
                        <span className="font-medium">Open to new opportunities</span>
                      </div>
                      <a
                        href="#contact"
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${active.gradient} hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300`}
                        style={{ boxShadow: `0 4px 20px ${active.glowColor}` }}
                      >
                        Let's Talk
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ── Bottom: Progress indicators ── */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 mt-10"
          >
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`rounded-full transition-all duration-400 ${
                  exp.id === activeId
                    ? `w-10 h-3 bg-gradient-to-r ${exp.gradient} shadow-md`
                    : 'w-3 h-3 bg-border hover:bg-amber-300'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
