'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">About Me</h2>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          <motion.div variants={itemVariants} className="bg-card rounded-xl p-8 shadow-sm mb-8 border border-border/50">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I&apos;m a passionate IT student and full-stack developer with a strong interest in building scalable applications and managing cloud infrastructure. With hands-on experience in both frontend and backend development, I combine clean code practices with DevOps principles to deliver robust solutions.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              My journey in tech started with a curiosity about how things work behind the scenes. This led me to explore cloud computing, containerization, and CI/CD pipelines. I&apos;m particularly interested in AWS, Docker, and modern development workflows that streamline deployment processes.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Whether it&apos;s architecting a new microservice, optimizing database queries, or setting up automated testing pipelines, I thrive on solving complex problems and continuously learning new technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 tracking-tight">5+</div>
              <p className="text-muted-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-md cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 tracking-tight">3</div>
              <p className="text-muted-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">Years Learning</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-md cursor-pointer"
            >
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 tracking-tight">100%</div>
              <p className="text-muted-foreground font-semibold text-xs sm:text-sm uppercase tracking-wider">Dedication</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
