'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { SERVICES, SERVICE_PROCESS_STEPS } from '@/lib/data/services'

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/12 text-primary text-sm font-semibold border border-primary/25 mb-5">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-5">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, end-to-end solutions — from stunning frontends to resilient cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.id}
                variants={fadeUp(0.1 + i * 0.1)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6 }}
                className={`group relative ${svc.span} ${svc.horizontal ? 'md:col-span-2' : ''}`}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${svc.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                <div
                  className={`relative h-full bg-card border border-border rounded-3xl shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-400 overflow-hidden flex ${
                    svc.horizontal ? 'flex-col md:flex-row gap-0' : 'flex-col'
                  }`}
                >
                  <div
                    className={`absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br ${svc.gradient} opacity-[0.06] rounded-full blur-3xl group-hover:opacity-[0.12] transition-opacity duration-700`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${svc.gradient} opacity-[0.04] rounded-full blur-2xl`}
                  />

                  <div className={`relative p-8 flex flex-col gap-5 ${svc.horizontal ? 'md:w-1/2' : 'flex-1'}`}>
                    <div className="flex items-start justify-between">
                      <div
                        className={`p-3.5 rounded-2xl bg-gradient-to-br ${svc.gradient} text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-5xl font-black bg-gradient-to-br ${svc.textGlow} bg-clip-text text-transparent opacity-15 select-none group-hover:opacity-25 transition-opacity duration-300`}
                      >
                        {svc.id}
                      </span>
                    </div>

                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${svc.textGlow} bg-clip-text text-transparent mb-1`}
                      >
                        {svc.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">{svc.description}</p>
                  </div>

                  <div
                    className={`relative border-t border-border/50 ${
                      svc.horizontal ? 'md:border-t-0 md:border-l flex-1' : ''
                    } p-6 bg-primary/[0.02] flex flex-col justify-center gap-3`}
                  >
                    {svc.horizontal && (
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        What&apos;s included
                      </p>
                    )}
                    <div className={`flex ${svc.horizontal ? 'flex-col gap-2.5' : 'flex-wrap gap-2'}`}>
                      {svc.features.map((feature) => (
                        <div
                          key={feature}
                          className={`flex items-center gap-2 ${
                            svc.horizontal
                              ? 'text-sm text-foreground'
                              : 'text-xs px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary font-semibold hover:bg-primary/15 transition-colors'
                          }`}
                        >
                          {svc.horizontal && (
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          )}
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-3">
              How I Work
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/30 via-accent/50 to-primary/30 z-0" />

            {SERVICE_PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp(0.55 + i * 0.08)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4 }}
                className="relative z-10 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-300">
                      {step.num}
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground mb-1 text-sm">{step.label}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
