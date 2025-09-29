'use client'

import { useEffect, useState } from 'react'

export function useScrollSpy(
  ids: string[],
  options: IntersectionObserverInit = { rootMargin: '-50% 0px -50% 0px' }
) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveId(id)
        }
      }, options)

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [ids, options])

  return activeId
}
