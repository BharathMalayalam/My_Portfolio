'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, Code2, Layers, Tag } from 'lucide-react'

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true })
  const [activeFilter, setActiveFilter] = useState('All')

  const fadeUp = (delay = 0) => ({
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: 'easeOut' as const } },
  })

  /* ── Project data ── */
  const projects = [
    {
      id: 1,
      title:       'CodeDaily',
      tagline:     'Real-time · Full-stack · Scalable',
      description: 'CodeDaily is a Python-based problem-solving platform designed to help students learn Python and improve their problem-solving skills.Starting from scratch, the platform already has 30+ active users and is running successfully behind my college ecosystem. ',
      image:       '/Project 1.png',
      tech:        ['Typescript', 'Node.js', 'MongoDB', 'Express.js'],
      category:    'Typescript',
      github:      'https://github.com/BharathMalayalam/Coding-platform',
      demo:        'https://codedaily-kappa.vercel.app/',
      featured:    true,
      gradient:    'from-primary via-accent to-orange-300',
      status:      'Live',
    },
    {
      id: 2,
      title:       'AXIS',
      tagline:     'AWS · CI/CD pipelines · Docker ',
      description: 'Built a scalable Jira-inspired system using cloud computing (AWS) with real-time tasktracking and role-based workflows.',
      image:       '/Project 2.png',
      tech:        ['AWS', 'Docker', 'GitHub Actions'],
      category:    'DevOps',
      github:      'https://github.com/BharathMalayalam/AXIS',
      demo:        'https://axis-dev.duckdns.org/',
      featured:    false,
      gradient:    'from-violet-500 to-purple-400',
      status:      'Live',
    },
    {
      id: 3,
      title:       'Agri-Product Website',
      tagline:     'E-commerce Website',
      description: 'Developed a full-stackplatform connecting farmersdirectly with customersfor online sale oforganicproduce.',
      image:       '/Project 3.jpg',
      tech:        ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category:    'Full stack',
      github:      'https://github.com/BharathMalayalam/Agri-Product',
      featured:    false,
      gradient:    'from-blue-500 to-cyan-400',
      status:      'In Progress',
    },
  ]

  const filters = ['All', 'Typescript', 'DevOps', 'Full stack']
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)
  const featured = filtered.find((p) => p.featured) || filtered[0]
  const rest = filtered.filter((p) => p.id !== featured?.id)

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp(0)} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/12 text-primary text-sm font-semibold border border-primary/25 mb-5">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-5">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of real-world projects spanning full-stack apps, cloud infra, and DevOps pipelines
          </p>
        </motion.div>

        {/* ── Filter pills ── */}
        <motion.div
          variants={fadeUp(0.1)} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center gap-3 mb-14"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-250 ${
                activeFilter === f
                  ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg shadow-primary/30'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* ── Featured Card (large) ── */}
            {featured && (
              <motion.div
                variants={fadeUp(0.15)} initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="group relative"
              >
                {/* Outer glow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${featured.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity duration-500 -z-10`} />

                <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-border hover:border-primary/30 shadow-md hover:shadow-2xl transition-all duration-400 bg-card">

                  {/* Image pane */}
                  <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px] overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-black/60 lg:block hidden`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />

                    {/* Status badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border ${
                        featured.status === 'Live'
                          ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                          : 'bg-amber-500/20 border-amber-400/40 text-amber-300'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${featured.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                        {featured.status}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                        <Layers className="w-3 h-3" />
                        {featured.category}
                      </span>
                    </div>
                  </div>

                  {/* Content pane */}
                  <div className="relative p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Decorative blob */}
                    <div className={`absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-br ${featured.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700`} />

                    <div className="relative">
                      {/* Number */}
                      <div className={`text-7xl font-black bg-gradient-to-br ${featured.gradient} bg-clip-text text-transparent opacity-10 select-none leading-none mb-4`}>
                        {String(featured.id).padStart(2, '0')}
                      </div>

                      {/* Tagline */}
                      <p className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${featured.gradient} bg-clip-text text-transparent mb-2`}>
                        {featured.tagline}
                      </p>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {featured.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                        {featured.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {featured.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 text-xs font-bold rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="relative flex flex-wrap items-center justify-between gap-4">
                      {/* Category + status */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary font-semibold">
                          <Layers className="w-3 h-3" />{featured.category}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold ${
                          featured.status === 'Live'
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                            : 'bg-amber-50 border border-amber-200 text-amber-700'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                            featured.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'
                          }`} />
                          {featured.status}
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <a href={featured.github}
                          target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/8 border border-border text-foreground text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                          <Code2 className="w-4 h-4" /> Code
                        </a>
                        <a href={featured.demo}
                          target="_blank" rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${featured.gradient} text-white text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300`}>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Remaining Cards Grid ── */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((project, i) => (
                  <motion.div
                    key={project.id}
                    variants={fadeUp(0.2 + i * 0.1)} initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    whileHover={{ y: -6 }}
                    className="group relative"
                  >
                    {/* Outer glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 rounded-3xl blur-xl transition-opacity duration-500 -z-10`} />

                    <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col">

                      {/* Image */}
                      <div className="relative h-52 overflow-hidden flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2 z-10">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm border ${
                            project.status === 'Live'
                              ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                              : 'bg-amber-500/20 border-amber-400/40 text-amber-300'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                            {project.status}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                            <Layers className="w-2.5 h-2.5" /> {project.category}
                          </span>
                        </div>

                        {/* Hover action buttons */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <a href={project.github}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold transition-all">
                            <Code2 className="w-3.5 h-3.5" /> Code
                          </a>
                          <a href={project.demo}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold shadow-lg transition-all hover:scale-105`}>
                            <ExternalLink className="w-3.5 h-3.5" /> Demo
                          </a>
                        </div>

                        {/* Project number */}
                        <div className="absolute bottom-3 right-4 z-10">
                          <span className={`text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent opacity-60 select-none`}>
                            {String(project.id).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 flex flex-col flex-1 relative overflow-hidden">
                        {/* Decorative blob */}
                        <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-700`} />

                        {/* Tagline */}
                        <p className={`text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                          {project.tagline}
                        </p>

                        <h3 className="text-lg font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech chips */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tech.map((t) => (
                            <span key={t} className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-primary/8 border border-primary/15 text-primary">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Bottom row */}
                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              project.status === 'Live'
                                ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                                : 'bg-amber-50 border border-amber-200 text-amber-700'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                project.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'
                              }`} />
                              {project.status}
                            </span>
                          </div>
                          <a href={project.demo}
                            target="_blank" rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-xs font-bold shadow hover:shadow-md hover:scale-105 transition-all duration-250`}>
                            <ExternalLink className="w-3 h-3" /> View
                          </a>
                        </div>
                      </div>

                      {/* Bottom gradient strip */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA Strip ── */}
        <motion.div
          variants={fadeUp(0.5)} initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/8 to-primary/10" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 border border-primary/15 rounded-3xl">
            <div>
              <h4 className="text-xl font-extrabold text-foreground mb-1">Want to see more?</h4>
              <p className="text-muted-foreground text-sm">All projects live on my GitHub — with full documentation and code.</p>
            </div>
            <a
              href="https://github.com/BharathMalayalam?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Code2 className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
