'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Cloud, Database } from 'lucide-react'

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: Code,
      gradient: 'from-primary to-accent',
      bg: 'from-primary/15 to-accent/10',
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
      gradient: 'from-orange-500 to-amber-400',
      bg: 'from-orange-500/15 to-amber-400/10',
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
      gradient: 'from-violet-500 to-purple-400',
      bg: 'from-violet-500/15 to-purple-400/10',
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
      gradient: 'from-emerald-500 to-teal-400',
      bg: 'from-emerald-500/15 to-teal-400/10',
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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
  }

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-emerald-50 border-emerald-200 text-emerald-700'
      case 'Intermediate':
        return 'bg-primary/8 border-primary/20 text-primary'
      case 'Beginner':
        return 'bg-amber-50 border-amber-200 text-amber-700'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-600'
    }
  }

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
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
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Card */}
                <div className="relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/35 transition-all duration-400 overflow-hidden h-full">
                  {/* Background accent */}
                  <div className={`absolute -top-14 -right-14 w-40 h-40 bg-gradient-to-br ${category.bg} rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />

                  {/* Icon + Title */}
                  <div className="relative mb-7 flex items-center gap-4">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                  </div>

                  {/* Skills Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2.5 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillTagVariants}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="group/tag"
                      >
                        <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-primary/25 bg-primary/5 hover:bg-primary hover:border-primary hover:text-white cursor-pointer transition-all duration-250 group-hover/tag:shadow-md">
                          <span className="text-sm font-semibold leading-none">{skill.name}</span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${getLevelStyle(skill.level)} group-hover/tag:bg-white/20 group-hover/tag:border-white/30 group-hover/tag:text-white transition-colors duration-250`}>
                            {skill.level[0]}
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

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: '80+', label: 'Projects & Assignments' },
            { value: '15+', label: 'Technologies Mastered' },
            { value: '∞', label: 'Continuous Learning' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={categoryCardVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/12 to-accent/12 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10" />
              <div className="relative bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-400 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
