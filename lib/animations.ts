/** Shared Framer Motion variants used across portfolio sections. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: 'easeOut' as const },
    },
  }
}

export function fadeUpWithIndex() {
  return {
    hidden: { opacity: 0, y: 28 },
    visible: (index = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: index * 0.12, ease: 'easeOut' as const },
    }),
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}
