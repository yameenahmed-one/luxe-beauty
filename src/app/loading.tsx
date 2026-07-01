'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinning logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-secondary border-t-primary rounded-full mx-auto mb-4"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-playfair text-xl font-bold gradient-text">LUXE BEAUTY</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </div>
  )
}
