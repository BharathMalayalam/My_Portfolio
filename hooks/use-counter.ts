'use client'

import { useEffect, useState } from 'react'

/** Animated counter that runs once when `active` becomes true. */
export function useCounter(target: number, active: boolean, durationMs = 1400): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    let start: number | undefined
    let frameId: number

    const tick = (timestamp: number) => {
      if (start === undefined) start = timestamp
      const progress = Math.min((timestamp - start) / durationMs, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [active, target, durationMs])

  return value
}
