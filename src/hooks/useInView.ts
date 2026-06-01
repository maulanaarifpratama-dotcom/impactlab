import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

export function useInView<T extends HTMLElement>(ref: RefObject<T | null>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, options])

  return isInView
}
