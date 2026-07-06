'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import Link from 'next/link'

const tabs = ['All', 'Lips', 'Eyes', 'Face', 'Skincare', 'Fragrance']

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All')

  const catMap: Record<string, string[]> = {
    Lips:      ['Lipstick'],
    Eyes:      ['Eyeshadow', 'Mascara'],
    Face:      ['Foundation', 'Blush', 'Concealer', 'Primer'],
    Skincare:  ['Skincare'],
    Fragrance: ['Perfume', 'Fragrance'],
  }

  const filtered = activeTab === 'All'
    ? products
    : products.filter((p) => catMap[activeTab]?.includes(p.category))

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">
            Featured
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-dark mt-1 section-title text-left">
            Top Picks
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex gap-2 mb-10 overflow-x-auto no-scrollbar pb-1"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-poppins font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-dark text-dark font-poppins font-semibold text-sm hover:bg-dark hover:text-white transition-all duration-300"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
