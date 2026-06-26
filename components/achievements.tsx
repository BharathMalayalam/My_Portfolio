'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Award, Trophy, Star } from 'lucide-react'
import Image from 'next/image'

export function Achievements() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(0)

  const achievements = [
    {
      title: 'Gusto Expo 2nd Place',
      description: 'Got 2nd place in the Gusto Expo innovation challenge. Developed a full-stack platform connecting farmers directly with customers for online sale of organic produce.',
      image: '/a1.jpeg',
      year: '2026',
      icon: Trophy,
    },
    {
      title: 'Agentic AI Workshop',
      description: 'Acquired practical expertise in designing, training, and deploying large language models (LLMs), specifically fine-tuning open-source models for complex reasoning tasks.',
      image: '/a5.jpg',
      year: '2026',
      icon: Star,
    },
    {
      title: 'Smart College Hackathon',
      description: 'Participated in a 24-hour hackathon focused on Infostream, where I pitched a centralized notification platform designed to streamline communication across college systems.',
      image: '/a2.jpeg',
      year: '2026',
      icon: Trophy,
    },
    {
      title: 'Cloud Intern',
      description: 'Gained hands-on experience in cloud computing and full-stack development. Developed "Axis," a Jira-like application featuring task management, issue tracking, user roles, and workflow management. Enhanced skills in cloud technologies, project implementation, problem-solving, and team collaboration.',
      image: '/a4.jpeg',
      year: '2026',
      icon: Award,
    },
    {
      title: 'Global Startup',
      description: 'I participated in an Global startup and Explore the Global startup ideas and Gain Knowledge from the people across the world .',
      image: '/a3.jpeg',
      year: '2026',
      icon: Trophy,
    },
  ]

  const SLIDE_DURATION = 6000;

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % achievements.length)
    }, SLIDE_DURATION)

    return () => clearInterval(interval)
  }, [isAutoPlay, achievements.length])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + achievements.length) % achievements.length)
    setIsAutoPlay(false)
    // Resume autoplay after interaction
    setTimeout(() => setIsAutoPlay(true), SLIDE_DURATION)
  }

  // Background variants: simple cinematic crossfade
  const bgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  }

  // Content variants: subtle elegant slide
  const contentVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      filter: 'blur(8px)',
    }),
    animate: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15, delayChildren: 0.2 },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
      filter: 'blur(8px)',
      transition: { duration: 0.5, ease: 'easeInOut' },
    }),
  }

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="achievements" className="relative w-full py-20 lg:py-24 bg-background overflow-hidden">
      {/* Centered Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
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

      {/* Slider Container with Margins */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[80vh] min-h-[600px] max-h-[900px] rounded-3xl overflow-hidden shadow-2xl bg-black flex items-center group ring-1 ring-border/50">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0 z-0"
              variants={bgVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Subtle Ken Burns Effect */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: SLIDE_DURATION / 1000 + 4, ease: "linear" }}
                className="w-full h-full relative"
              >
                <Image
                  src={achievements[currentSlide].image}
                  alt={achievements[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </motion.div>
              {/* Cinematic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            </motion.div>
          </AnimatePresence>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 h-full flex items-center pt-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-3xl"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                  <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium tracking-wider text-sm shadow-xl">
                    {achievements[currentSlide].year}
                  </span>
                  {(() => {
                    const Icon = achievements[currentSlide].icon;
                    return <Icon className="w-6 h-6 text-white/80" />;
                  })()}
                </motion.div>
                
                <motion.h3 
                  variants={itemVariants} 
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter"
                >
                  {achievements[currentSlide].title}
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants} 
                  className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light"
                >
                  {achievements[currentSlide].description}
                </motion.p>
                
                {/* Decoration */}
                <motion.div variants={itemVariants} className="mt-10 sm:mt-12 flex gap-2 items-center">
                  <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                      className="w-full h-full bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Modern Navigation Controls */}
          <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-12 lg:right-20 z-30 flex items-end sm:items-center flex-col sm:flex-row gap-6 sm:gap-12">
            {/* Progress Indicators */}
            <div className="flex gap-4 items-center">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1)
                    setCurrentSlide(index)
                    setIsAutoPlay(false)
                    setTimeout(() => setIsAutoPlay(true), SLIDE_DURATION)
                  }}
                  className="relative py-4 group flex items-center justify-center"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={`h-[2px] transition-all duration-700 ${
                    index === currentSlide ? 'w-12 sm:w-16 bg-white/20' : 'w-6 sm:w-8 bg-white/20 group-hover:bg-white/50'
                  }`} />
                  
                  {/* Active Progress Line */}
                  {index === currentSlide && isAutoPlay && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                      className="absolute left-0 h-[2px] bg-white z-10"
                    />
                  )}
                </button>
              ))}
              
              <div className="ml-2 sm:ml-4 text-white/50 font-medium tracking-widest text-xs sm:text-sm">
                <span className="text-white">0{currentSlide + 1}</span> / 0{achievements.length}
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => paginate(-1)}
                className="p-3 sm:p-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label="Previous achievement"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-3 sm:p-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300 group"
                aria-label="Next achievement"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}