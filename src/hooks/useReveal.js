import { useEffect, useRef } from 'react'

const EMPTY_DEPS = []

export const useReveal = (deps = EMPTY_DEPS) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const observedElements = []

    if (ref.current) {
      if (ref.current.classList.contains('reveal') && !ref.current.classList.contains('visible')) {
        observedElements.push(ref.current)
      }
      ref.current.querySelectorAll('.reveal:not(.visible)').forEach((child) => {
        observedElements.push(child)
      })

      observedElements.forEach((el) => observer.observe(el))
    }

    return () => {
      observedElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, deps)

  return ref
}

