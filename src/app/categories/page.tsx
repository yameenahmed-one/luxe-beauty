'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { categories } from '@/data/products'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Shop by Category</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-dark mb-4">Explore Every Category</h1>
          <p className="text-gray-500 font-poppins text-lg">From lips to lashes, discover every dimension of luxury beauty.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/shop?category=${cat.name.toLowerCase()}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-luxury cursor-pointer bg-white"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity"
                      style={{ background: `linear-gradient(180deg, transparent 30%, ${cat.color}CC 100%)` }}
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm text-xl">
                      {cat.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-playfair font-bold text-xl mb-1">{cat.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="font-poppins text-xs text-white/80">{cat.count} items</span>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        className="bg-white/20 rounded-full p-1.5"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

