'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

// ── Real CDN logos via devicons / simple-icons ─────────────────────────────
const LOGO_URL: Record<string, string> = {
  Java:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  Python:          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript:      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  C:               'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  React:           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Node.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  HTML:            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  Docker:          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  Jenkins:         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  AWS:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Git:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub:          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  SQL:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB:         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Linux:           'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'GitHub Actions':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'REST APIs':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  Langchain:       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  EC2:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  S3:              'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Lambda:          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  IAM:             'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Networking:      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
}

// ── Skill Data ─────────────────────────────────────────────────────────────
const tabs = [
  {
    id: 'languages', label: 'Languages', color: '#F59E0B', glow: 'rgba(245,158,11,0.22)',
    skills: [
      { name: 'Java', level: 90, badge: 'Advanced' },
      { name: 'Python', level: 88, badge: 'Advanced' },
      { name: 'JavaScript', level: 92, badge: 'Advanced' },
      { name: 'C', level: 70, badge: 'Intermediate' },
    ],
  },
  {
    id: 'web', label: 'Web Tech', color: '#3B82F6', glow: 'rgba(59,130,246,0.22)',
    skills: [
      { name: 'React', level: 90, badge: 'Advanced' },
      { name: 'Next.js', level: 88, badge: 'Advanced' },
      { name: 'Node.js', level: 85, badge: 'Advanced' },
      { name: 'Express.js', level: 85, badge: 'Advanced' },
      { name: 'HTML', level: 95, badge: 'Advanced' },
      { name: 'CSS', level: 90, badge: 'Advanced' },
    ],
  },
  {
    id: 'devops', label: 'DevOps & Cloud', color: '#8B5CF6', glow: 'rgba(139,92,246,0.22)',
    skills: [
      { name: 'Docker', level: 72, badge: 'Intermediate' },
      { name: 'Jenkins', level: 68, badge: 'Intermediate' },
      { name: 'GitHub Actions', level: 70, badge: 'Intermediate' },
      { name: 'AWS', level: 70, badge: 'Intermediate' },
      { name: 'EC2', level: 70, badge: 'Intermediate' },
      { name: 'S3', level: 70, badge: 'Intermediate' },
      { name: 'Lambda', level: 55, badge: 'Beginner' },
      { name: 'IAM', level: 58, badge: 'Beginner' },
      { name: 'Networking', level: 72, badge: 'Intermediate' },
    ],
  },
  {
    id: 'tools', label: 'Tools & Data', color: '#10B981', glow: 'rgba(16,185,129,0.22)',
    skills: [
      { name: 'SQL', level: 88, badge: 'Advanced' },
      { name: 'MongoDB', level: 74, badge: 'Intermediate' },
      { name: 'Linux', level: 85, badge: 'Advanced' },
      { name: 'Git', level: 90, badge: 'Advanced' },
      { name: 'GitHub', level: 92, badge: 'Advanced' },
      { name: 'REST APIs', level: 90, badge: 'Advanced' },
      { name: 'Langchain', level: 52, badge: 'Beginner' },
    ],
  },
]

const badgeConfig: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  Advanced:     { bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)',  text: '#059669', dot: '#10B981' },
  Intermediate: { bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)',  text: '#D97706', dot: '#F59E0B' },
  Beginner:     { bg: 'rgba(139,92,246,0.1)',  border: 'rgba(139,92,246,0.25)',  text: '#7C3AED', dot: '#8B5CF6' },
}

// ── Big Marquee Chip ────────────────────────────────────────────────────────
function MarqueeChip({ name, color }: { name: string; color: string }) {
  const [hovered, setHovered] = useState(false)
  const logoSrc = LOGO_URL[name]

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3.5 flex-shrink-0 cursor-default select-none"
      style={{
        padding: '14px 26px',
        borderRadius: '999px',
        background: hovered
          ? `linear-gradient(135deg, ${color}22, ${color}10)`
          : 'rgba(255,255,255,0.85)',
        border: `1.5px solid ${hovered ? color + '55' : 'rgba(0,0,0,0.07)'}`,
        boxShadow: hovered
          ? `0 8px 32px ${color}30, 0 2px 8px rgba(0,0,0,0.04)`
          : '0 2px 12px rgba(0,0,0,0.04)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered ? 'scale(1.08) translateY(-3px)' : 'scale(1)',
      }}
    >
      {/* Logo */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: hovered ? 'white' : 'rgba(248,250,252,0.8)',
          boxShadow: hovered ? `0 4px 12px ${color}20` : 'none',
          transition: 'all 0.25s ease',
          padding: '5px',
        }}
      >
        <img
          src={logoSrc}
          alt={name}
          width={28}
          height={28}
          style={{
            width: 28, height: 28,
            objectFit: 'contain',
            filter: (name === 'Next.js' || name === 'GitHub' || name === 'Express.js') && !hovered
              ? 'invert(0.85)' : 'none',
            transition: 'filter 0.25s ease',
          }}
          onError={(e) => {
            // Fallback to letter if image fails
            const t = e.currentTarget as HTMLImageElement
            t.style.display = 'none'
            const parent = t.parentElement!
            parent.innerHTML = `<span style="font-size:18px;font-weight:900;color:${color}">${name[0]}</span>`
          }}
        />
      </div>
      {/* Name */}
      <span
        style={{
          fontSize: '15px',
          fontWeight: 800,
          color: hovered ? color : '#374151',
          letterSpacing: '-0.01em',
          transition: 'color 0.22s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
    </motion.div>
  )
}

// ── Counter hook ───────────────────────────────────────────────────────────
function useCounter(target: number, active: boolean) {
  const [n, setN] = React.useState(0)
  React.useEffect(() => {
    if (!active) return
    let start: number
    const go = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1400, 1)
      setN(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(go)
    }
    requestAnimationFrame(go)
  }, [active, target])
  return n
}

// ── Main ───────────────────────────────────────────────────────────────────
export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.06 })

  const stats = [
    { value: 80,  suffix: '+', label: 'Projects',            icon: '🚀' },
    { value: 26,  suffix: '+', label: 'Technologies',        icon: '⚡' },
    { value: 3,   suffix: '+', label: 'Years Learning',      icon: '📅' },
  ]
  const c0 = useCounter(stats[0].value, inView)
  const c1 = useCounter(stats[1].value, inView)
  const c2 = useCounter(stats[2].value, inView)
  const counters = [c0, c1, c2]

  // Distributed list of all 26 skills across 3 tracks
  const track1 = [
    { name: 'Java', color: '#F59E0B' },
    { name: 'Python', color: '#F59E0B' },
    { name: 'JavaScript', color: '#F59E0B' },
    { name: 'C', color: '#F59E0B' },
    { name: 'SQL', color: '#10B981' },
    { name: 'MongoDB', color: '#10B981' },
    { name: 'Linux', color: '#10B981' },
    { name: 'Langchain', color: '#10B981' },
  ]

  const track2 = [
    { name: 'React', color: '#3B82F6' },
    { name: 'Next.js', color: '#3B82F6' },
    { name: 'Node.js', color: '#3B82F6' },
    { name: 'Express.js', color: '#3B82F6' },
    { name: 'HTML', color: '#3B82F6' },
    { name: 'CSS', color: '#3B82F6' },
    { name: 'REST APIs', color: '#10B981' },
  ]

  const track3 = [
    { name: 'Docker', color: '#8B5CF6' },
    { name: 'Jenkins', color: '#8B5CF6' },
    { name: 'GitHub Actions', color: '#8B5CF6' },
    { name: 'AWS', color: '#8B5CF6' },
    { name: 'EC2', color: '#8B5CF6' },
    { name: 'S3', color: '#8B5CF6' },
    { name: 'Lambda', color: '#8B5CF6' },
    { name: 'IAM', color: '#8B5CF6' },
    { name: 'Networking', color: '#8B5CF6' },
    { name: 'Git', color: '#10B981' },
    { name: 'GitHub', color: '#10B981' },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-0 overflow-hidden w-full"
      style={{ background: 'linear-gradient(180deg, #fdf6ec 0%, #fefcf7 60%, #fdf6ec 100%)' }}
    >
      {/* Ambient background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.055) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
        />
        <motion.div
          className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-60 -right-60 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.09, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="relative z-10 w-full">

        {/* ── Section Header (contained) ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.75 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: 'rgba(245,158,11,0.1)',
                color: '#D97706',
                border: '1.5px solid rgba(245,158,11,0.3)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Technical Expertise
            </motion.span>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-5 tracking-tight leading-none">
              Skills &amp;{' '}
              <span className="relative inline-block" style={{ color: '#F59E0B' }}>
                Arsenal
                <motion.div
                  className="absolute -bottom-1.5 left-0 right-0 h-1.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg,#F59E0B,#FB923C)', originX: 0 }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.75, ease: 'easeOut' }}
                />
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A curated stack built through real-world projects, continuous learning, and relentless curiosity.
            </p>
          </motion.div>

          {/* ── Stats Cards (contained) ── */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 320 }}
                className="rounded-2xl p-5 sm:p-7 text-center"
                style={{
                  background: 'white',
                  border: '1.5px solid rgba(245,158,11,0.14)',
                  boxShadow: '0 4px 28px rgba(245,158,11,0.06)',
                }}
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg,#F59E0B,#FB923C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {counters[i]}{stat.suffix}
                </div>
                <p className="text-xs font-semibold text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Centerpiece: All Technologies at a Glance (Full-Width Edge-to-Edge) ── */}
        <motion.div
          className="w-full overflow-hidden mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.25 }}
        >
          {/* Section label (contained) */}
          <div className="flex items-center gap-4 justify-center mb-10 max-w-7xl mx-auto px-4">
            <div className="h-px flex-1 max-w-[150px]" style={{ background: 'linear-gradient(90deg,transparent,rgba(245,158,11,0.4))' }} />
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.22em] flex items-center gap-2.5">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                className="text-amber-400 text-sm"
              >✦</motion.span>
              All Technologies at a Glance
              <motion.span
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
                className="text-amber-400 text-sm"
              >✦</motion.span>
            </p>
            <div className="h-px flex-1 max-w-[150px]" style={{ background: 'linear-gradient(90deg,rgba(245,158,11,0.4),transparent)' }} />
          </div>

          {/* Marquee tracks with transparent fading gradient masks at the viewport edges */}
          <div className="relative w-full py-6 space-y-6">
            <div
              className="absolute inset-y-0 left-0 w-16 sm:w-40 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #fdf6ec 0%, rgba(253,246,236,0) 100%)' }}
            />
            <div
              className="absolute inset-y-0 right-0 w-16 sm:w-40 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(270deg, #fdf6ec 0%, rgba(253,246,236,0) 100%)' }}
            />

            {/* ROW 1 — scrolls left */}
            <div className="overflow-hidden w-full select-none">
              <div className="marquee-left flex gap-5" style={{ width: 'max-content' }}>
                {[...track1, ...track1, ...track1, ...track1].map((item, i) => (
                  <MarqueeChip key={`t1-${i}`} name={item.name} color={item.color} />
                ))}
              </div>
            </div>

            {/* ROW 2 — scrolls right */}
            <div className="overflow-hidden w-full select-none">
              <div className="marquee-right flex gap-5" style={{ width: 'max-content' }}>
                {[...track2, ...track2, ...track2, ...track2].map((item, i) => (
                  <MarqueeChip key={`t2-${i}`} name={item.name} color={item.color} />
                ))}
              </div>
            </div>

            {/* ROW 3 — scrolls left (different speed) */}
            <div className="overflow-hidden w-full select-none">
              <div className="marquee-left-slow flex gap-5" style={{ width: 'max-content' }}>
                {[...track3, ...track3, ...track3, ...track3].map((item, i) => (
                  <MarqueeChip key={`t3-${i}`} name={item.name} color={item.color} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes mqLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mqRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: mqLeft  34s linear infinite; }
        .marquee-right { animation: mqRight 30s linear infinite; }
        .marquee-left-slow { animation: mqLeft 38s linear infinite; }
        .marquee-left:hover,
        .marquee-right:hover,
        .marquee-left-slow:hover { animation-play-state: paused; }
      `}</style>
    </section>
  )
} 