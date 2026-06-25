'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: 'Cloud Computing Intern',
      company: 'Tech Solutions Company',
      period: '2023 - 2024',
      description: 'Worked on AWS infrastructure setup, learned networking concepts, DNS management, and cloud best practices. Assisted in deploying applications on EC2 instances and managing S3 storage.',
      highlights: ['AWS EC2 & S3', 'Networking & DNS', 'Cloud Architecture', 'Infrastructure Management'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects & Learning',
      period: '2022 - Present',
      description: 'Continuously developing and deploying full-stack applications using modern tech stack. Building portfolio projects to strengthen web development and DevOps skills.',
      highlights: ['MERN Stack', 'DevOps', 'CI/CD', 'Docker & Kubernetes'],
    },
    {
      title: 'IT Student',
      company: 'University',
      period: '2021 - Present',
      description: 'Pursuing degree in Information Technology with focus on software development and cloud computing. Active in learning and implementing latest technologies.',
      highlights: ['Data Structures', 'Web Development', 'Cloud Computing', 'Database Management'],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4 text-foreground">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Journey through learning and professional growth
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={exp.title} variants={itemVariants}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {index !== experiences.length - 1 && (
                      <div className="w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card border border-border shadow-sm rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span key={highlight} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
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
