'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export default function BestSellersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const bestSellers = products.filter(p => p.badge === 'bestseller' || p.rating >= 4.7)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Best Sellers</span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark">
              Fan Favorites
            </h2>
          </div>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-secondary hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-secondary hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Scrollable */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {[...bestSellers, ...bestSellers].map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="flex-shrink-0 w-64"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
