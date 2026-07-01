'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { categories } from '@/data/products'
import { ArrowRight } from 'lucide-react'

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase mb-3 block">Shop by Category</span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark mb-4 section-title">
            Explore Our World
          </h2>
          <p className="text-gray-500 font-poppins max-w-xl mx-auto">
            From bold lips to flawless skin — discover every dimension of luxury beauty.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <Link href={`/categories/${cat.name.toLowerCase()}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-card hover:shadow-luxury transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                      style={{ background: `linear-gradient(180deg, transparent 30%, ${cat.color}CC 100%)` }}
                    />
                    {/* Icon overlay */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-lg"
                    >
                      {cat.icon}
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="font-poppins font-semibold text-sm">{cat.name}</p>
                    <p className="font-poppins text-xs opacity-80">{cat.count} items</p>
                  </div>

                  {/* Arrow on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
