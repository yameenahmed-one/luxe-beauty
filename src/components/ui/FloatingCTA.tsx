'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, ShoppingBag, Sparkles } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toggleCart } from '@/store/cartSlice'

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      setShowBadge(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
      {/* Cart button */}
      <AnimatePresence>
        {showBadge && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => dispatch(toggleCart())}
            className="w-14 h-14 bg-dark text-white rounded-full shadow-luxury flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-primary text-white rounded-full shadow-glow-pink flex items-center justify-center"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
