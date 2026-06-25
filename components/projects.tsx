'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, Code } from 'lucide-react'

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Online Examination System',
      description:
        'A comprehensive platform for conducting online exams with real-time question display, timer management, and instant result evaluation.',
      image: '/project1.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
    },
    {
      title: 'E-commerce Website',
      description:
        'Full-featured online store with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.',
      image: '/project2.png',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'CI/CD Pipeline Project',
      description:
        'Automated deployment system with continuous integration, testing, and deployment stages for microservices architecture.',
      image: '/project3.png',
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
      github: '#',
      demo: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my recent work and expertise across different technologies
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-border shadow-md group-hover:shadow-2xl group-hover:border-primary/40 transition-all duration-400">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6 z-10">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/35 backdrop-blur-sm border border-white/30 text-white text-sm font-medium transition-all duration-200"
                          aria-label="GitHub repository"
                        >
                          <Code className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/70 hover:bg-primary/90 backdrop-blur-sm border border-primary/50 text-white text-sm font-medium transition-all duration-200"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  {/* Index number */}
                  <div className="text-6xl font-black text-primary/10 mb-2 leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-semibold text-sm transition-all duration-300 border border-primary/25 hover:border-primary hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Code className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-lg font-semibold text-sm transition-all duration-300 border border-accent/25 hover:border-accent hover:shadow-lg hover:shadow-accent/25"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
