'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Zap } from 'lucide-react'

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Building responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.js with focus on user experience.',
      number: '01',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description:
        'Creating robust server-side solutions with Node.js, Python, and databases like PostgreSQL, MongoDB. RESTful APIs and real-time applications.',
      number: '02',
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Solutions',
      description:
        'Managing infrastructure on AWS, setting up CI/CD pipelines with Jenkins and GitHub Actions, containerization with Docker and Kubernetes.',
      number: '03',
    },
    {
      icon: Zap,
      title: 'API Development',
      description:
        'Designing and implementing scalable APIs with proper authentication, error handling, and documentation for seamless integration.',
      number: '04',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to transform your ideas into reality
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Card */}
                  <div className="relative h-full bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-400 overflow-hidden">
                    {/* Decorative bg blob */}
                    <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                    {/* Number label */}
                    <span className="absolute top-6 right-7 text-5xl font-black text-primary/8 select-none group-hover:text-primary/12 transition-colors duration-300">
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div className="relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 group-hover:from-primary/25 group-hover:to-accent/20 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                      {service.description}
                    </p>

                    {/* Bottom accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-2xl" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
