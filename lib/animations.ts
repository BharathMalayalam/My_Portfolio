/** Shared Framer Motion variants used across portfolio sections. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: EASE_OUT },
    },
  }
}

export function slideIn(delay = 0, direction: 'up' | 'down' | 'left' | 'right' = 'right', distance = 40) {
  const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0
  const y = direction === 'up' ? -distance : direction === 'down' ? distance : 0

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay, ease: EASE_OUT },
    },
  }
}

export function fadeUpWithIndex() {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: (index = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: index * 0.1, ease: EASE_OUT },
    }),
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}
