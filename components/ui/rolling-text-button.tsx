'use client'

import * as React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { motion, useReducedMotion, type Transition } from 'framer-motion'

import { cn } from '@/lib/utils'

type RollingTextDirection = 'up' | 'down'

interface RollingTextButtonProps extends Omit<ButtonPrimitive.Props, 'children'> {
  children: string
  direction?: RollingTextDirection
  staggerCharacters?: boolean
  staggerMultiplier?: number
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

const CHARACTER_STAGGER = 0.03

function RollingTextButton({
  children,
  direction = 'down',
  staggerCharacters = false,
  staggerMultiplier = 1,
  leading,
  trailing,
  className,
  nativeButton,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  ...props
}: RollingTextButtonProps) {
  const [active, setActive] = React.useState(false)
  const reduceMotion = useReducedMotion()

  const isDown = direction === 'down'
  const currentY = isDown ? '100%' : '-100%'
  const incomingY = isDown ? '-100%' : '100%'

  const baseTransition: Transition = {
    type: 'spring',
    stiffness: 320,
    damping: 30,
  }

  const renderSlot = (char: string, index: number, key: React.Key) => {
    const transition: Transition = {
      ...baseTransition,
      delay: index * CHARACTER_STAGGER * staggerMultiplier,
    }
    return (
      <span key={key} className="relative inline-block overflow-hidden align-bottom">
        <span aria-hidden className="invisible block whitespace-pre">
          {char}
        </span>
        <motion.span
          aria-hidden
          className="absolute inset-0 block whitespace-pre"
          initial={false}
          animate={{ y: active ? currentY : '0%' }}
          transition={transition}
        >
          {char}
        </motion.span>
        <motion.span
          aria-hidden
          className="absolute inset-0 block whitespace-pre"
          initial={false}
          animate={{ y: active ? '0%' : incomingY }}
          transition={transition}
        >
          {char}
        </motion.span>
      </span>
    )
  }

  const label = staggerCharacters
    ? Array.from(children).map((char, index) =>
        renderSlot(char === ' ' ? '\u00A0' : char, index, index),
      )
    : renderSlot(children, 0, 'label')

  return (
    <ButtonPrimitive
      nativeButton={nativeButton}
      aria-label={typeof props['aria-label'] === 'string' ? props['aria-label'] : children}
      className={cn('relative inline-flex items-center justify-center', className)}
      onMouseEnter={(event) => {
        setActive(true)
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        setActive(false)
        onMouseLeave?.(event)
      }}
      onFocus={(event) => {
        setActive(true)
        onFocus?.(event)
      }}
      onBlur={(event) => {
        setActive(false)
        onBlur?.(event)
      }}
      {...props}
    >
      {leading}
      {reduceMotion ? (
        <span className="whitespace-pre">{children}</span>
      ) : (
        <span className="relative inline-flex leading-none" aria-hidden>
          {label}
        </span>
      )}
      {trailing}
    </ButtonPrimitive>
  )
}

export { RollingTextButton }
export type { RollingTextButtonProps, RollingTextDirection }
