'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Code, Cloud, Zap, Database, Wrench } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/data/site'

export function Hero() {
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
    hidden: { opacity: 0, scale: 0.88, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.9, ease: 'easeOut' as const, delay: 0.3 },
    },
  }

  const badges = [
    { icon: Code, label: 'React & Next.js', sub: 'Modern Frontend', pos: 'top-4 -left-12', delay: 0.8 },
    { icon: Cloud, label: 'DevOps & Cloud', sub: 'AWS · Docker · CI/CD', pos: 'bottom-20 -left-16', delay: 1.0 },
    { icon: Database, label: 'Backend', sub: 'Node.js · MongoDB', pos: 'top-5 -right-12', delay: 1.1 },
    { icon: Zap, label: 'Full Stack', sub: 'End-to-end solutions', pos: 'bottom-1 -right-0', delay: 1.2 },
    { icon: Wrench, label: 'Dev Tools', sub: 'Git · Linux · REST', pos: 'bottom-40 -right-30', delay: 1.5 },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      {/* ── Background elements ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft diagonal amber wash */}
        <div
          className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-bl from-primary/10 via-accent/5 to-transparent"
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />
        {/* Large glow orbs */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/6 rounded-full blur-3xl" />
        {/* Subtle dot-grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ── Main 2-col grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)]">

          {/* ── LEFT — Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center py-12 lg:py-0 order-2 lg:order-1"
          >
            {/* Welcome pill */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/12 text-primary font-semibold text-sm border border-primary/25">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Welcome — Open for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-5 text-foreground tracking-tight leading-[1.08]"
            >
              I&apos;m{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bharath
                </span>
                {/* Underline accent */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </span>
              <br />
              <span className="text-foreground/80">Malayalam</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/70"
            >
              Software Developer{' '}
              <span className="text-primary">|</span>{' '}
              DevOps Engineer
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl"
            >
              Motivated Information Technology student with hands-on experience in cloud computing and full-stack development. Skilled in building scalable applications using AWS (EC2, S3, IAM) and the MERN stack. Strong interest in DevOps, cloud engineering, and software development, with practical experience in real-world projects, problem-solving, and collaborative team environments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link href="#projects">
                <button className="group px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href={SITE.resumePath}
                download
                className="px-8 py-3.5 border-2 border-primary/50 text-primary font-bold rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Get Resume
              </a>
            </motion.div>

            {/* Status row */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_6px_2px_rgba(16,185,129,0.5)]" />
                Available for hire
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                Located in {SITE.location}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Profile photo ── */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center order-1 lg:order-2 py-12 lg:py-0"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">

              {/* Outer spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)/0.2), hsl(var(--primary)))',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Secondary decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Tertiary glow ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" />

              {/* Photo frame */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden border-4 border-white/80 shadow-2xl shadow-primary/20 bg-primary/5">
                <Image
                  src="/profile_photo.jpeg"
                  alt="Bharath Malayalam — Software Developer & DevOps Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating skill badges around the photo */}
              {badges.map(({ icon: Icon, label, sub, pos, delay }) => (
                <motion.div
                  key={label}
                  className={`absolute ${pos} z-20`}
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

              {/* Dot accent decorations */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-primary/60" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
