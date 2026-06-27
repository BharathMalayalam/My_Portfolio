'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Code, Cloud, Zap, Database, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/data/site'

const badges = [
  { icon: Code, label: 'React & Next.js', sub: 'Modern Frontend', pos: 'top-4 -left-12', delay: 0.8 },
  { icon: Cloud, label: 'DevOps & Cloud', sub: 'AWS · Docker · CI/CD', pos: 'bottom-20 -left-16', delay: 1.0 },
  { icon: Database, label: 'Backend', sub: 'Node.js · MongoDB', pos: 'top-5 -right-12', delay: 1.1 },
  { icon: Zap, label: 'Full Stack', sub: 'End-to-end solutions', pos: 'bottom-1 -right-0', delay: 1.2 },
  { icon: Wrench, label: 'Dev Tools', sub: 'Git · Linux · REST', pos: 'bottom-40 -right-30', delay: 1.5 },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const, delay: 0.2 },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-[4.5rem] pb-10 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-y-0 right-0 w-full sm:w-2/3 bg-gradient-to-bl from-primary/10 via-accent/5 to-transparent"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />
        <div className="absolute -top-32 -right-32 w-[min(520px,100vw)] h-[min(520px,100vw)] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-accent/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
          {/* Photo — first on mobile */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center order-1 lg:order-2"
          >
            <div className="relative w-[13.5rem] h-[13.5rem] sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)/0.2), hsl(var(--primary)))',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              <motion.div
                className="absolute -inset-2 sm:-inset-4 rounded-full border-2 border-dashed border-primary/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <div className="absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" />

              <div className="absolute inset-[5px] sm:inset-[6px] rounded-full overflow-hidden border-[3px] sm:border-4 border-white/80 shadow-2xl shadow-primary/20 bg-primary/5">
                <Image
                  src="/profile_photo.jpeg"
                  alt="Bharath Malayalam — Software Developer & DevOps Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 216px, (max-width: 1024px) 320px, 400px"
                />
              </div>

              {/* Orbital badges — desktop only */}
              {badges.map(({ icon: Icon, label, sub, pos, delay }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} z-20 hidden lg:block`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.5, ease: 'backOut' }}
                >
                  <motion.div
                    animate={{ y: [0, delay > 1 ? 10 : -12, 0] }}
                    transition={{
                      duration: 3.5 + delay,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                    whileHover={{ scale: 1.08, y: -4 }}
                  >
                    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg px-3.5 py-2.5 border border-primary/15 flex items-center gap-2.5 min-w-max">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground leading-none mb-0.5">{label}</p>
                        <p className="text-[10px] text-muted-foreground leading-none">{sub}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-lg shadow-primary/50 hidden sm:block" />
              <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent shadow-lg shadow-accent/50 hidden sm:block" />
            </div>

            {/* Mobile skill chips — horizontal scroll */}
            <div className="lg:hidden mt-5 w-full max-w-md px-1">
              <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {badges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="snap-start flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 border border-primary/15 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-foreground whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left items-center lg:items-start"
          >
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/12 text-primary font-semibold text-xs sm:text-sm border border-primary/25">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                <span className="leading-tight">Open for opportunities</span>
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 sm:mb-5 text-foreground tracking-tight"
            >
              I&apos;m{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bharath
                </span>
                <motion.div
                  className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </span>
              <br />
              <span className="text-foreground/80">Malayalam</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-foreground/70"
            >
              <span className="block sm:inline">Software Developer</span>
              <span className="hidden sm:inline text-primary mx-2">|</span>
              <span className="block sm:inline text-primary sm:text-foreground/70">DevOps Engineer</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-10 leading-relaxed max-w-xl"
            >
              IT student &amp; full-stack developer with hands-on experience in AWS, the MERN stack, and DevOps.
              Building scalable apps and cloud infrastructure through real-world projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 sm:gap-4"
            >
              <Link href="#projects" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/40 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href={SITE.resumePath}
                download
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-primary/50 text-primary font-bold rounded-xl hover:bg-primary/10 hover:border-primary active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-10 w-full flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 rounded-full shadow-[0_0_6px_2px_rgba(16,185,129,0.5)] flex-shrink-0" />
                Available for hire
              </div>
              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full flex-shrink-0" />
                <span className="max-w-[16rem] sm:max-w-none leading-snug">{SITE.location}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
