'use client'

import { motion } from 'framer-motion'
import { Code2, Heart, Link2, Mail } from 'lucide-react'
import { FOOTER_NAV_ITEMS, SITE } from '@/lib/data/site'

const FOOTER_SOCIAL = [
  { icon: Code2, href: SITE.github, label: 'GitHub' },
  { icon: Link2, href: SITE.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${SITE.email}`, label: 'Email' },
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
              {SITE.initials}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building scalable solutions
              <br />
              and elegant code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-5 text-foreground uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {FOOTER_NAV_ITEMS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-5 text-foreground uppercase tracking-wider text-xs">Connect</h4>
            <div className="flex gap-3">
              {FOOTER_SOCIAL.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent flex items-center justify-center text-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 border border-primary/15 hover:border-transparent"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} {SITE.name}. Made with
            <Heart className="w-3.5 h-3.5 text-primary fill-primary inline" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
