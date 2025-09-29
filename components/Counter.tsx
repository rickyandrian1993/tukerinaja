'use client'

import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type CounterProps = {
  from?: number
  to: number
  duration?: number
  suffix?: string
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = ''
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' }) // triggers when visible
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.floor(latest))
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (isInView) {
      const unsubscribe = rounded.on('change', (latest) => {
        setDisplay(latest)
      })

      const controls = animate(count, to, {
        duration,
        ease: 'easeOut'
      })

      return () => {
        unsubscribe()
        controls.stop()
      }
    }
  }, [isInView, to, from, duration, count, rounded])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
