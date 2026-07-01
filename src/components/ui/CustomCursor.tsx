'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      newInteractives.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot hidden md:block"
        animate={{ x: pos.x - 4, y: pos.y - 4, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.05, ease: 'linear' }}
        style={{ scale: isHovering ? 1.5 : 1 }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring hidden md:block"
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ duration: 0.12, ease: 'linear' }}
      />
    </>
  )
}
