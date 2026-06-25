'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, Code } from 'lucide-react'

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'Online Examination System',
      description: 'A comprehensive platform for conducting online exams with real-time question display, timer management, and instant result evaluation.',
      image: '/project1.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
    },
    {
      title: 'E-commerce Website',
      description: 'Full-featured online store with product catalog, shopping cart, secure checkout, and admin dashboard for inventory management.',
      image: '/project2.png',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'CI/CD Pipeline Project',
      description: 'Automated deployment system with continuous integration, testing, and deployment stages for microservices architecture.',
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
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4 text-foreground">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my recent work and expertise across different technologies
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Alternate layout for odd/even */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-80 rounded-xl overflow-hidden border border-border shadow-sm group-hover:shadow-md group-hover:border-primary/50 transition-all duration-300">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <Code className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.demo}
                          className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{project.title}</h3>
                  <p className="text-lg text-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-semibold transition-all duration-300"
                    >
                      <Code className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg font-semibold transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
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
