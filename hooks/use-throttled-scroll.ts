'use client'

import { useEffect, useState } from 'react'

interface ScrollState {
  isScrolled: boolean
  showScrollTop: boolean
  scrollProgress: number
}

const INITIAL_STATE: ScrollState = {
  isScrolled: false,
  showScrollTop: false,
  scrollProgress: 0,
}

/** Throttled scroll listener — batches updates via rAF to avoid excessive re-renders. */
export function useThrottledScroll(threshold = 10): ScrollState {
  const [state, setState] = useState<ScrollState>(INITIAL_STATE)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      setState({
        isScrolled: scrollY > threshold,
        showScrollTop: scrollY > 300,
        scrollProgress: Math.min(100, Math.max(0, progress)),
      })
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return state
}

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
  window.scrollTo({ top: 0, behavior })
}

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth') {
  document.getElementById(id)?.scrollIntoView({ behavior })
}
