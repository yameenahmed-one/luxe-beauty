'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import { Sparkles } from 'lucide-react'

const tabs = ['All', 'Lips', 'Eyes', 'Face', 'Skincare']

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => {
        const catMap: Record<string, string[]> = {
          Lips: ['Lipstick'],
          Eyes: ['Eyeshadow', 'Mascara'],
          Face: ['Foundation', 'Blush', 'Concealer', 'Primer'],
          Skincare: ['Skincare'],
        }
        return catMap[activeTab]?.includes(p.category)
      })

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">
              Featured Products
            </span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark mb-4 section-title">
            Luxe Picks For You
          </h2>
          <p className="text-gray-500 font-poppins max-w-xl mx-auto">
            Curated by our expert beauty editors — the finest products for every look.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-poppins font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-glow-gold'
                  : 'bg-white text-gray-600 border border-secondary/50 hover:border-primary hover:text-primary'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.a
            href="/shop"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-primary text-primary font-poppins font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Products
            <Sparkles className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
