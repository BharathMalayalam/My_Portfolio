'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Award } from 'lucide-react'
import Image from 'next/image'

export function Achievements() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(0)

  const achievements = [
    {
      title: 'Gusto Expo 2nd Place',
      description: 'Got 2nd place in the Gusto Expo innovation challenge. Developed a full-stackplatform connecting farmers directly with customers for online sale of organic produce.',
      image: '/HackXpo.jpeg',
      year: '2026',
      icon: Award,
    },
    {
      title: 'Agentic AI Workshop',
      description: 'Acquired practical expertise in designing, training, and deploying large language models (LLMs), specifically fine-tuning open-source models for complex reasoning tasks.',
      image: '/achievement2.png',
      year: '2026',
      icon: Award,
    },
    {
      title: 'Smart College Hackathon',
      description: 'Participated in a 24-hour hackathon focused on Infostream, where I pitched a centralized notification platform designed to streamline communication across college systems. ',
      image: '/achievement3.png',
      year: '2026',
      icon: Award,
    },
    {
      title: 'Cloud Intern',
      description: 'Gained hands-on experience in cloud computing and full-stack development. Developed“Axis,” a Jira-like application featuring task management, issue tracking, user roles, andworkflow management. Enhanced skills in cloud technologies, project implementation,problem-solving, and team collaboration',
      image: '/achievement4.png',
      year: '2026',
      icon: Award,
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % achievements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, achievements.length])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + achievements.length) % achievements.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 1000)
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section id="achievements" className="relative w-full py-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Achievements & Milestones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Key accomplishments in my development journey
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Background Image Slider */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragElastic={1}
            dragConstraints={{ left: 0, right: 0 }}
            dragTransition={{
              power: 0.2,
              modifyTarget: (v) => {
                if (!Number.isFinite(v)) return 0
                const swipe = swipePower(v, 2)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
                return 0
              },
            }}
            className="absolute inset-0"
          >
            <Image
              src={achievements[currentSlide].image}
              alt={achievements[currentSlide].title}
              fill
              className="object-cover"
              priority
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-start p-6 sm:p-8 lg:p-12 z-10"
          >
            {/* Glassmorphism Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-lg shadow-2xl hover:bg-white/15 transition-all duration-300"
            >
              {/* Year Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  {achievements[currentSlide].year}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance leading-tight"
              >
                {achievements[currentSlide].title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/90 text-sm sm:text-base leading-relaxed"
              >
                {achievements[currentSlide].description}
              </motion.p>

              {/* Icon Accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex gap-2"
              >
                <Award className="w-5 h-5 text-primary" />
                <Award className="w-5 h-5 text-primary/60" />
                <Award className="w-5 h-5 text-primary/30" />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300"
          aria-label="Previous achievement"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-all duration-300"
          aria-label="Next achievement"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {achievements.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
                setIsAutoPlay(false)
                setTimeout(() => setIsAutoPlay(true), 1000)
              }}
              className={`rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-primary w-8 h-3'
                  : 'bg-white/40 w-3 h-3 hover:bg-white/60'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to achievement ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <p className="text-muted-foreground text-sm font-medium">
          <span className="text-primary font-bold">{currentSlide + 1}</span> /{' '}
          {achievements.length}
        </p>
      </motion.div>
    </section>
  )
}
