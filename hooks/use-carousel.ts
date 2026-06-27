'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface UseCarouselOptions {
  itemCount: number
  autoPlayIntervalMs: number
  resumeDelayMs?: number
}

interface UseCarouselResult {
  currentIndex: number
  direction: number
  isAutoPlay: boolean
  goTo: (index: number) => void
  paginate: (delta: number) => void
}

/** Carousel state with autoplay, direction tracking, and cleanup-safe resume timers. */
export function useCarousel({
  itemCount,
  autoPlayIntervalMs,
  resumeDelayMs = autoPlayIntervalMs,
}: UseCarouselOptions): UseCarouselResult {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }, [])

  const pauseAndScheduleResume = useCallback(() => {
    setIsAutoPlay(false)
    clearResumeTimer()
    resumeTimerRef.current = setTimeout(() => setIsAutoPlay(true), resumeDelayMs)
  }, [clearResumeTimer, resumeDelayMs])

  useEffect(() => {
    if (!isAutoPlay || itemCount <= 1) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % itemCount)
    }, autoPlayIntervalMs)

    return () => clearInterval(interval)
  }, [isAutoPlay, itemCount, autoPlayIntervalMs])

  useEffect(() => clearResumeTimer, [clearResumeTimer])

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= itemCount || index === currentIndex) return
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
      pauseAndScheduleResume()
    },
    [currentIndex, itemCount, pauseAndScheduleResume],
  )

  const paginate = useCallback(
    (delta: number) => {
      setDirection(delta)
      setCurrentIndex((prev) => (prev + delta + itemCount) % itemCount)
      pauseAndScheduleResume()
    },
    [itemCount, pauseAndScheduleResume],
  )

  return { currentIndex, direction, isAutoPlay, goTo, paginate }
}
