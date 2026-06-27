'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { NAV_ITEMS, SITE } from '@/lib/data/site'
import { scrollToSection, scrollToTop, useThrottledScroll } from '@/hooks/use-throttled-scroll'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled, showScrollTop, scrollProgress } = useThrottledScroll()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? 'mt-3 w-[95%] max-w-5xl rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-2xl'
            : 'w-full bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wider"
              onClick={() => scrollToTop()}
              aria-label="Scroll to top"
            >
              {SITE.initials}
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:block">
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </motion.button>
            </div>

            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="p-2 rounded-md border border-border/80 text-foreground hover:bg-primary/10 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
              onClick={closeMobileMenu}
              aria-hidden
            />

            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-[270px] z-50 bg-background border-l border-border shadow-2xl p-6 flex flex-col gap-6 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex justify-between mb-6">
                <span className="text-xl font-bold">Navigation</span>
                <button type="button" onClick={closeMobileMenu} aria-label="Close menu">
                  <X className="cursor-pointer" />
                </button>
              </div>

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="py-2 text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => scrollToTop()}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 flex items-center justify-center text-white rounded-xl bg-gradient-to-br from-primary to-accent"
            aria-label="Scroll to top"
          >
            <ChevronUp />
          </motion.button>
        )}
      </AnimatePresence>

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
