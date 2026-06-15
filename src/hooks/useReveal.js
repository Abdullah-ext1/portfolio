import { useEffect, useRef } from 'react'

export const useReveal = () => {
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
      if (ref.current.classList.contains('reveal')) {
        observedElements.push(ref.current)
      }
      const children = ref.current.querySelectorAll('.reveal')
      children.forEach((child) => {
        observedElements.push(child)
      })

      observedElements.forEach((el) => observer.observe(el))
    }

    return () => {
      observedElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return ref
}

