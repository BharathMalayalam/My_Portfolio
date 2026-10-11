'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink, Layers } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/github-icon'
import { RollingTextButton } from '@/components/ui/rolling-text-button'
import { fadeUp } from '@/lib/animations'
import { PROJECTS, getFeaturedProject, getOtherProjects } from '@/lib/data/projects'
import { SITE } from '@/lib/data/site'
import type { Project, ProjectStatus } from '@/lib/types/portfolio'

function StatusBadge({
  status,
  className = '',
  variant = 'overlay',
}: {
  status: ProjectStatus
  className?: string
  variant?: 'overlay' | 'solid'
}) {
  const isLive = status === 'Live'
  const styles =
    variant === 'solid'
      ? isLive
        ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
        : 'bg-amber-50 border border-amber-200 text-amber-700'
      : isLive
        ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
        : 'bg-amber-500/20 border-amber-400/40 text-amber-300'

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border ${styles} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-pulse'}`}
      />
      {status}
    </span>
  )
}

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true })
  const featured = getFeaturedProject(PROJECTS)
  const rest = getOtherProjects(PROJECTS)

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            <FeaturedProjectCard project={featured} inView={inView} />

            {rest.length > 0 && (
              <div className="space-y-8 sm:space-y-12">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
                  <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    More Projects
                  </span>
                </div>
                {rest.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} inView={inView} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/8 to-primary/10" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8 border border-primary/15 rounded-3xl">
            <div>
              <h4 className="text-xl font-extrabold text-foreground mb-1">Want to see more?</h4>
              <p className="text-muted-foreground text-sm">
                All projects live on my GitHub — with full documentation and code.
              </p>
            </div>
            <RollingTextButton
              render={
                <a
                  href={`${SITE.github}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              leading={<GitHubIcon className="w-5 h-5" />}
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View GitHub Profile
            </RollingTextButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project, inView }: { project: Project; inView: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.15)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative"
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity duration-500 -z-10`}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-border hover:border-primary/30 shadow-md hover:shadow-2xl transition-all duration-400 bg-card">
        <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />

          <div className="absolute top-4 left-4 z-10">
            <StatusBadge status={project.status} />
          </div>

          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
              <Layers className="w-3 h-3" />
              {project.category}
            </span>
          </div>
        </div>

        <div className="relative p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
          <div
            className={`absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700`}
          />

          <div className="relative">
            <div
              className={`text-7xl font-black bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent opacity-10 select-none leading-none mb-4`}
            >
              {String(project.id).padStart(2, '0')}
            </div>

            <p
              className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}
            >
              {project.tagline}
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-bold rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <ProjectActions project={project} size="lg" />
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project
  index: number
  inView: boolean
}) {
  const isReversed = index % 2 === 1
  return (
    <motion.div
      variants={fadeUp(0.2 + index * 0.1)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 rounded-3xl blur-xl transition-opacity duration-500 -z-10`}
      />

      <div
        className={`relative flex flex-col lg:flex-row rounded-3xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-400 bg-card ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className="relative h-64 sm:h-80 lg:h-auto lg:flex-1 lg:min-h-[420px] overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className={`absolute inset-0 ${
              isReversed
                ? 'bg-gradient-to-l from-black/70 via-black/10 to-transparent hidden lg:block'
                : 'bg-gradient-to-r from-black/70 via-black/10 to-transparent hidden lg:block'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:hidden" />

          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <StatusBadge status={project.status} />
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-bold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
              <Layers className="w-2.5 h-2.5" /> {project.category}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <RollingTextButton
              render={
                <a href={project.github} target="_blank" rel="noopener noreferrer" />
              }
              nativeButton={false}
              leading={<GitHubIcon className="w-3.5 h-3.5" />}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold transition-all"
            >
              Code
            </RollingTextButton>
            {project.demo && (
              <RollingTextButton
                render={
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" />
                }
                nativeButton={false}
                leading={<ExternalLink className="w-3.5 h-3.5" />}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold shadow-lg transition-all hover:scale-105`}
              >
                Demo
              </RollingTextButton>
            )}
          </div>

          <div className="absolute bottom-4 right-5 z-10">
            <span
              className={`text-4xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent opacity-60 select-none`}
            >
              {String(project.id).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="relative lg:flex-1 p-8 lg:p-12 flex flex-col justify-center overflow-hidden">
          <div
            className={`absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700`}
          />

          <div className="relative">
            <p
              className={`text-xs font-black uppercase tracking-widest bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}
            >
              {project.tagline}
            </p>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-7 text-sm sm:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-bold rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <ProjectActions project={project} size="lg" />
        </div>
      </div>
    </motion.div>
  )
}

function ProjectActions({ project, size }: { project: Project; size: 'lg' | 'sm' }) {
  const isLarge = size === 'lg'
  return (
    <div className="relative flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary font-semibold">
          <Layers className="w-3 h-3" />
          {project.category}
        </span>
        <StatusBadge status={project.status} variant="solid" />
      </div>

      <div className="flex gap-3">
        <RollingTextButton
          render={
            <a href={project.github} target="_blank" rel="noopener noreferrer" />
          }
          nativeButton={false}
          leading={<GitHubIcon className="w-4 h-4" />}
          className={`inline-flex items-center gap-2 rounded-xl bg-foreground/8 border border-border text-foreground font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 ${
            isLarge ? 'px-5 py-2.5 text-sm' : 'px-3 py-1.5 text-xs'
          }`}
        >
          Code
        </RollingTextButton>
        {project.demo && (
          <RollingTextButton
            render={
              <a href={project.demo} target="_blank" rel="noopener noreferrer" />
            }
            nativeButton={false}
            leading={<ExternalLink className="w-4 h-4" />}
            className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ${
              isLarge ? 'px-5 py-2.5 text-sm' : 'px-3 py-1.5 text-xs'
            }`}
          >
            Live Demo
          </RollingTextButton>
        )}
      </div>
    </div>
  )
}
