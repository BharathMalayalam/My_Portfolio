'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-bg-modern.png)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
      </div>

      {/* Diagonal accent overlay for depth */}
      <div className="absolute inset-0 z-0">
        {/* Right orange diagonal shape */}
        <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-br from-primary/15 to-accent/25 clip-path-polygon" style={{
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }} />
        {/* Soft orange glow on right */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Floating UI badges - left side */}
      <motion.div
        className="absolute left-10 top-40 z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-border/50">
          <div className="text-sm font-semibold text-foreground mb-1">React & Next.js</div>
          <div className="text-xs text-muted-foreground">Modern Frontend</div>
        </div>
      </motion.div>

      {/* Floating badge - bottom left */}
      <motion.div
        className="absolute left-8 bottom-32 z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-border/50">
          <div className="text-sm font-semibold text-foreground mb-1">DevOps & Cloud</div>
          <div className="text-xs text-muted-foreground">AWS, Docker, K8s</div>
        </div>
      </motion.div>

      {/* Floating badge - right side */}
      <motion.div
        className="absolute right-12 top-56 z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 border border-border/50">
          <div className="text-sm font-semibold text-foreground mb-1">Full Stack</div>
          <div className="text-xs text-muted-foreground">End-to-end solutions</div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto text-left z-20 relative md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/15 text-primary font-semibold text-sm border border-primary/30">
            Welcome aboard
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
        >
          Crafting Digital{' '}
          <span className="text-primary">Excellence</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl font-semibold mb-4 text-foreground"
        >
          Software Developer | DevOps Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          I build scalable applications and robust cloud solutions. Passionate about elegant code, optimized infrastructure, and solving complex problems with precision.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
        >
          <Link href="#projects">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
            <Download className="w-5 h-5" />
            Get Resume
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center gap-8 text-sm text-muted-foreground flex-wrap"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full" />
            Open for opportunities
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-accent rounded-full" />
            Based in Kerala
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
