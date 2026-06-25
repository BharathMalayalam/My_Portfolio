'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, GraduationCap, Laptop } from 'lucide-react'

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Cloud Computing Intern',
      company: 'Tech Solutions Company',
      period: '2023 – 2024',
      description:
        'Worked on AWS infrastructure setup, learned networking concepts, DNS management, and cloud best practices. Assisted in deploying applications on EC2 instances and managing S3 storage.',
      highlights: ['AWS EC2 & S3', 'Networking & DNS', 'Cloud Architecture', 'Infrastructure Management'],
      icon: Briefcase,
    },
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects & Learning',
      period: '2022 – Present',
      description:
        'Continuously developing and deploying full-stack applications using modern tech stack. Building portfolio projects to strengthen web development and DevOps skills.',
      highlights: ['MERN Stack', 'DevOps', 'CI/CD', 'Docker & Kubernetes'],
      icon: Laptop,
    },
    {
      title: 'IT Student',
      company: 'University',
      period: '2021 – Present',
      description:
        'Pursuing degree in Information Technology with focus on software development and cloud computing. Active in learning and implementing latest technologies.',
      highlights: ['Data Structures', 'Web Development', 'Cloud Computing', 'Database Management'],
      icon: GraduationCap,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  }

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Journey through learning and professional growth
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical amber line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon
                return (
                  <motion.div key={exp.title} variants={itemVariants} className="relative flex gap-8">
                    {/* Pulsing dot */}
                    <div className="relative flex-shrink-0 w-12 h-12 z-10">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-50" />
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 group pb-2">
                      <div className="relative bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-400 overflow-hidden">
                        {/* Left accent strip */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />

                        <div className="p-6 pl-8">
                          {/* Header row */}
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                              <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-primary/8 px-3 py-1.5 rounded-full border border-primary/15">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                              {exp.period}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((h) => (
                              <span
                                key={h}
                                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors duration-200"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
