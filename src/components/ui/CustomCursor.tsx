'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 768) return
    setIsMobile(false)

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
        dotRef.current.style.opacity = '1'
      }
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      const isInteractive = !!target.closest('a, button, [role="button"], input, textarea, select')
      if (dotRef.current) dotRef.current.style.transform = dotRef.current.style.transform.replace('scale', '')
      if (dotRef.current) dotRef.current.style.scale = isInteractive ? '2' : '1'
      if (ringRef.current) ringRef.current.style.scale = isInteractive ? '1.6' : '1'
    }

    // Smooth ring follow via RAF — no setState so no re-renders
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
        ringRef.current.style.opacity = '1'
      }

      rafId = requestAnimationFrame(animateRing)
    }

    rafId = requestAnimationFrame(animateRing)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        style={{ opacity: 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{ opacity: 0 }}
      />
    </>
  )
}
