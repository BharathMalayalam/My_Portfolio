'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { NAV_ITEMS, SITE } from '@/lib/data/site'
import { RollingTextButton } from '@/components/ui/rolling-text-button'
import { scrollToTop, useThrottledScroll } from '@/hooks/use-throttled-scroll'

/* ─── animation presets ────────────────────────────────────────────── */
const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.25 } },
}

const panelVariants = {
  hidden:  { opacity: 0, scale: 0.96, y: -12 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 280, damping: 26, delayChildren: 0.12, staggerChildren: 0.07 },
  },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 28 } },
}

/* ─── gradient pairs per nav index ─────────────────────────────────── */
const gradients = [
  'from-amber-400  to-orange-400',
  'from-orange-400 to-rose-400',
  'from-rose-400   to-fuchsia-400',
  'from-fuchsia-400 to-violet-400',
  'from-violet-400 to-blue-400',
  'from-blue-400   to-cyan-400',
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { showScrollTop, scrollProgress } = useThrottledScroll()
  const pathname = usePathname()

  const close = () => setIsMobileMenuOpen(false)
  const toggle = () => setIsMobileMenuOpen((o) => !o)

  return (
    <>
      {/* ══════════════════════════════════════════
          TOP FLOATING PILL  (shared desktop + mobile)
      ══════════════════════════════════════════ */}
      <motion.nav
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-3 w-auto max-w-[95vw] rounded-2xl
                   bg-background/80 backdrop-blur-xl border border-border/60 shadow-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0,    opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">

            {/* ── Mobile bar: logo + hamburger ── */}
            <div className="flex md:hidden items-center justify-between w-full gap-3">
              {/* Logo */}
              <Link href="/" onClick={close} className="flex items-center gap-2 shrink-0">
                <span
                  className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent
                             flex items-center justify-center text-white text-xs font-black shadow-md
                             shadow-primary/30"
                >
                  {SITE.initials}
                </span>
              </Link>

              {/* Hamburger */}
              <button
                type="button"
                onClick={toggle}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="relative w-10 h-10 rounded-xl border border-border/80
                           flex items-center justify-center
                           hover:bg-primary/10 hover:border-primary/30 transition-all duration-200
                           focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{    rotate:  90,  opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-primary" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{    rotate: -90,  opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* ── Desktop nav links ── */}
            <div className="hidden md:flex items-center justify-center gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * (i + 1) }}
                >
                  <RollingTextButton
                    render={<Link href={item.href} />}
                    nativeButton={false}
                    trailing={
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                    }
                    className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item.label}
                  </RollingTextButton>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ══════════════════════════════════════════
          MOBILE FULL-SCREEN OVERLAY MENU
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Frosted backdrop */}
            <motion.div
              key="overlay-bg"
              variants={overlayVariants}
              initial="hidden" animate="visible" exit="exit"
              className="fixed inset-0 z-[55] md:hidden"
              style={{
                background:
                  'radial-gradient(ellipse at 60% 0%, rgba(245,158,11,0.18) 0%, transparent 55%), ' +
                  'radial-gradient(ellipse at 10% 90%, rgba(251,146,60,0.14) 0%, transparent 50%), ' +
                  'rgba(253,246,236,0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
              onClick={close}
            />

            {/* Menu panel */}
            <motion.div
              key="overlay-panel"
              variants={panelVariants}
              initial="hidden" animate="visible" exit="exit"
              className="fixed inset-x-4 top-[76px] z-[60] md:hidden rounded-3xl overflow-hidden
                         border border-white/60 shadow-[0_32px_80px_-12px_rgba(245,158,11,0.25)]"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
              }}
            >
              {/* Decorative glow orbs inside panel */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full
                           bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 rounded-full
                           bg-gradient-to-tr from-accent/25 to-primary/15 blur-3xl"
              />

              {/* Panel header */}
              <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/50">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent
                               flex items-center justify-center text-white text-xs font-black shadow"
                  >
                    {SITE.initials}
                  </span>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-bold text-foreground">{SITE.name}</span>
                    <span className="text-[10px] text-muted-foreground mt-0.5">Navigate</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-xl bg-foreground/8 hover:bg-primary/15
                             flex items-center justify-center transition-colors duration-150"
                >
                  <X className="w-4 h-4 text-foreground/70" />
                </button>
              </div>

              {/* Nav grid */}
              <div className="relative p-4 grid grid-cols-2 gap-3">
                {NAV_ITEMS.map((item, i) => {
                  const Icon      = item.icon
                  const isActive  = pathname === item.href
                  const gradient  = gradients[i % gradients.length]

                  return (
                    <motion.div key={item.href} variants={cardVariants}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className={`
                          group relative flex flex-col gap-3 p-4 rounded-2xl overflow-hidden
                          border transition-all duration-250 active:scale-[0.97]
                          ${isActive
                            ? 'border-primary/40 bg-gradient-to-br from-primary/12 to-accent/8 shadow-md shadow-primary/15'
                            : 'border-white/60 bg-white/50 hover:border-primary/25 hover:bg-white/80 hover:shadow-sm'
                          }
                        `}
                      >
                        {/* Subtle glow on active */}
                        {isActive && (
                          <div
                            aria-hidden
                            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 to-accent/5"
                          />
                        )}

                        {/* Icon */}
                        <div className="relative flex items-center justify-between">
                          <span
                            className={`
                              w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                              bg-gradient-to-br ${gradient}
                              shadow-md text-white transition-transform duration-200 group-hover:scale-110
                            `}
                          >
                            {Icon && <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />}
                          </span>

                          {/* Active badge */}
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/50" />
                          )}

                          {/* Arrow on hover */}
                          {!isActive && (
                            <ArrowRight
                              className="w-3.5 h-3.5 text-muted-foreground opacity-0 -translate-x-1
                                         group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            />
                          )}
                        </div>

                        {/* Label + description */}
                        <div className="relative flex flex-col gap-0.5 min-w-0">
                          <span
                            className={`text-[13px] font-bold leading-tight truncate
                              ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary transition-colors duration-150'}`}
                          >
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-[10px] text-muted-foreground leading-snug line-clamp-2">
                              {item.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Footer strip */}
              <div className="relative px-5 py-3 border-t border-white/50 flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">{SITE.title}</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_1px_rgba(16,185,129,0.6)]" />
                  <span className="text-[10px] text-muted-foreground">Available for hire</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Scroll-to-top ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1,   y: 0 }}
            exit={{    opacity: 0, scale: 0.5,  y: 10 }}
            onClick={() => scrollToTop()}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center
                       text-white rounded-xl bg-gradient-to-br from-primary to-accent
                       shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Scroll progress bar ── */}
      <div
        className="fixed top-0 left-0 w-full h-[3px] z-[70] bg-black/5"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}
