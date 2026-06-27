'use client'

import { memo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
  INVERT_ON_LIGHT,
  MARQUEE_REPEAT_COUNT,
  SKILL_LOGO_URL,
  SKILL_STATS,
  SKILL_TRACKS,
} from '@/lib/data/skills'
import { useCounter } from '@/hooks/use-counter'

const MARQUEE_CLASS = ['marquee-left', 'marquee-right', 'marquee-left-slow'] as const

const MarqueeChip = memo(function MarqueeChip({
  name,
  color,
}: {
  name: string
  color: string
}) {
  const [hovered, setHovered] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const logoSrc = SKILL_LOGO_URL[name]
  const needsInvert = INVERT_ON_LIGHT.has(name) && !hovered

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3.5 flex-shrink-0 cursor-default select-none rounded-full px-6 py-3.5 backdrop-blur-md border transition-all duration-300 hover:scale-[1.08] hover:-translate-y-0.5"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${color}22, ${color}10)`
          : 'rgba(255,255,255,0.85)',
        borderColor: hovered ? `${color}55` : 'rgba(0,0,0,0.07)',
        boxShadow: hovered
          ? `0 8px 32px ${color}30, 0 2px 8px rgba(0,0,0,0.04)`
          : '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 p-1"
        style={{
          background: hovered ? 'white' : 'rgba(248,250,252,0.8)',
          boxShadow: hovered ? `0 4px 12px ${color}20` : 'none',
        }}
      >
        {logoSrc && !logoFailed ? (
          <Image
            src={logoSrc}
            alt=""
            width={28}
            height={28}
            className="object-contain"
            style={{ filter: needsInvert ? 'invert(0.85)' : 'none' }}
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="text-lg font-black" style={{ color }}>
            {name[0]}
          </span>
        )}
      </div>
      <span
        className="text-[15px] font-extrabold whitespace-nowrap tracking-tight transition-colors duration-200"
        style={{ color: hovered ? color : '#374151' }}
      >
        {name}
      </span>
    </div>
  )
})

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })

  const projectsCount = useCounter(SKILL_STATS[0].value, inView)
  const techCount = useCounter(SKILL_STATS[1].value, inView)
  const yearsCount = useCounter(SKILL_STATS[2].value, inView)
  const counters = [projectsCount, techCount, yearsCount]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-0 overflow-hidden w-full bg-gradient-to-b from-[#fdf6ec] via-[#fefcf7] to-[#fdf6ec]"
    >
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.75 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.75 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-6 bg-amber-500/10 text-amber-600 border border-amber-500/30"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Technical Expertise
            </motion.span>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-5 tracking-tight leading-none">
              Skills &amp;{' '}
              <span className="relative inline-block text-amber-500">
                Arsenal
                <motion.div
                  className="absolute -bottom-1.5 left-0 right-0 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-400"
                  style={{ originX: 0 }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.8, duration: 0.75, ease: 'easeOut' }}
                />
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              A curated stack built through real-world projects, continuous learning, and relentless curiosity.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {SKILL_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 320 }}
                className="rounded-2xl p-5 sm:p-7 text-center bg-white border border-amber-500/15 shadow-[0_4px_28px_rgba(245,158,11,0.06)]"
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-black mb-1 bg-gradient-to-br from-amber-500 to-orange-400 bg-clip-text text-transparent">
                  {counters[i]}
                  {stat.suffix}
                </div>
                <p className="text-xs font-semibold text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="w-full overflow-hidden mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.85, delay: 0.25 }}
        >
          <div className="flex items-center gap-4 justify-center mb-10 max-w-7xl mx-auto px-4">
            <div className="h-px flex-1 max-w-[150px] bg-gradient-to-r from-transparent to-amber-500/40" />
            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.22em]">
              All Technologies at a Glance
            </p>
            <div className="h-px flex-1 max-w-[150px] bg-gradient-to-l from-transparent to-amber-500/40" />
          </div>

          <div className="relative w-full py-6 space-y-6">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#fdf6ec] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#fdf6ec] to-transparent" />

            {SKILL_TRACKS.map((track, trackIndex) => {
              const items = Array.from({ length: MARQUEE_REPEAT_COUNT }, () => track).flat()
              return (
                <div key={trackIndex} className="overflow-hidden w-full select-none">
                  <div
                    className={`${MARQUEE_CLASS[trackIndex]} flex gap-5`}
                    style={{ width: 'max-content' }}
                  >
                    {items.map((item, i) => (
                      <MarqueeChip key={`${trackIndex}-${item.name}-${i}`} name={item.name} color={item.color} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
