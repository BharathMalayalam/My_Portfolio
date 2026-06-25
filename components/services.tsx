'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Zap } from 'lucide-react'

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.js with focus on user experience.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side solutions with Node.js, Python, and databases like PostgreSQL, MongoDB. RESTful APIs and real-time applications.',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Solutions',
      description: 'Managing infrastructure on AWS, setting up CI/CD pipelines with Jenkins and GitHub Actions, containerization with Docker and Kubernetes.',
    },
    {
      icon: Zap,
      title: 'API Development',
      description: 'Designing and implementing scalable APIs with proper authentication, error handling, and documentation for seamless integration.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4 text-foreground">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to transform your ideas into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group p-8 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
