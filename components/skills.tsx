'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Cloud, Database } from 'lucide-react'

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'C', level: 'Intermediate' },
      ],
    },
    {
      name: 'Web Technologies',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
      ],
    },
    {
      name: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 'Intermediate' },
        { name: 'Jenkins', level: 'Intermediate' },
        { name: 'GitHub Actions', level: 'Intermediate' },
        { name: 'AWS', level: 'Intermediate' },
        { name: 'EC2', level: 'Intermediate' },
        { name: 'S3', level: 'Intermediate' },
        { name: 'Lambda', level: 'Beginner' },
        { name: 'IAM', level: 'Beginner' },
        { name: 'Networking', level: 'Intermediate' },
      ],
    },
    {
      name: 'Databases & Tools',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'SQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Linux', level: 'Advanced' },
        { name: 'Git', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced' },
        { name: 'Langchain', level: 'Beginner' },
        { name: 'GitHub', level: 'Advanced' },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-50 border-green-200 text-green-700'
      case 'Intermediate':
        return 'bg-blue-50 border-blue-200 text-blue-700'
      case 'Beginner':
        return 'bg-amber-50 border-amber-200 text-amber-700'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700'
    }
  }

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.name}
                variants={categoryCardVariants}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Background gradient accent */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Header with Icon */}
                  <div className="relative mb-8 flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                  </div>

                  {/* Skills Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillTagVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group/tag"
                      >
                        <div className="relative px-4 py-2.5 rounded-full border-2 border-primary/30 bg-primary/5 hover:bg-primary hover:border-primary hover:text-white cursor-pointer transition-all duration-300 flex items-center gap-2">
                          <span className="text-sm font-semibold">{skill.name}</span>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {[
            { value: '80+', label: 'Projects & Assignments' },
            { value: '15+', label: 'Technologies Mastered' },
            { value: 'Continuous', label: 'Learner & Problem Solver' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={categoryCardVariants}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stat Card */}
              <div className="relative bg-white rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <p className="text-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
