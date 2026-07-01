'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, ArrowLeft, Search, ShoppingBag } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* 404 visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative mb-8"
        >
          <div className="text-[180px] font-playfair font-bold leading-none select-none">
            <span className="gradient-text opacity-20">404</span>
          </div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-primary/40" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="font-playfair text-4xl font-bold text-dark mb-4">Oops! Page Not Found</h1>
          <p className="text-gray-500 font-poppins text-lg mb-10 leading-relaxed">
            Looks like this page had a beauty emergency and disappeared.
            Let's get you back to something fabulous.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-poppins font-semibold hover:bg-primary hover:text-white transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.button>
            </Link>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn-luxury ripple flex items-center gap-2 px-8 py-4"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Now
              </motion.button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Lipsticks', 'Foundation', 'Eyeshadow', 'Skincare', 'Perfumes'].map(cat => (
              <Link key={cat} href="/shop">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white border border-secondary rounded-full text-sm font-poppins text-gray-600 hover:border-primary hover:text-primary transition-all cursor-pointer"
                >
                  {cat}
                </motion.span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
