/** Shared Framer Motion variants used across portfolio sections. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, delay, ease: EASE_OUT },
    },
  }
}

export function slideIn(delay = 0, direction: 'up' | 'down' | 'left' | 'right' = 'right', distance = 70) {
  const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0
  const y = direction === 'up' ? -distance : direction === 'down' ? distance : 0
  const rotateY = direction === 'left' ? -10 : direction === 'right' ? 10 : 0

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: 0.94,
      rotateX: 18,
      rotateY,
      filter: 'blur(8px)',
      transformPerspective: 1200,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.75, delay, ease: EASE_OUT },
    },
  }
}

export function fadeUpWithIndex() {
  return {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: (index = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, delay: index * 0.12, ease: EASE_OUT },
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
