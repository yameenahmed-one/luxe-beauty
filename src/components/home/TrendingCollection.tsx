'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const collections = [
  {
    id: 1,
    title: 'Bold Reds',
    subtitle: 'Statement lip collection',
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c93?w=600&q=80',
    cta: 'Shop Lips',
    size: 'large',
    gradient: 'from-red-500/60 to-primary/80',
  },
  {
    id: 2,
    title: 'Golden Hour',
    subtitle: 'Shimmer & highlight',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
    cta: 'Shop Eyes',
    size: 'small',
    gradient: 'from-yellow-500/50 to-gold/70',
  },
  {
    id: 3,
    title: 'Bare Skin',
    subtitle: 'Natural beauty essentials',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    cta: 'Shop Face',
    size: 'small',
    gradient: 'from-rose-300/50 to-primary/60',
  },
  {
    id: 4,
    title: 'Night Luxe',
    subtitle: 'Evening glam collection',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
    cta: 'Shop Now',
    size: 'medium',
    gradient: 'from-purple-600/60 to-dark/80',
  },
  {
    id: 5,
    title: 'Rose Glow',
    subtitle: 'Dewy skin perfection',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    cta: 'Shop Blush',
    size: 'medium',
    gradient: 'from-pink-400/50 to-primary/70',
  },
]

export default function TrendingCollection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-gold uppercase">Trending Now</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark mb-4 section-title">
            Curated Collections
          </h2>
          <p className="text-gray-500 font-poppins max-w-xl mx-auto">
            Handpicked seasonal edits for every mood and occasion.
          </p>
        </motion.div>

        {/* Pinterest-style grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[600px]">
          {/* Large - spans 5 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="col-span-5 row-span-2"
          >
            <CollectionCard item={collections[0]} className="h-full" />
          </motion.div>

          {/* Top right two small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-3 row-span-1"
          >
            <CollectionCard item={collections[1]} className="h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="col-span-4 row-span-1"
          >
            <CollectionCard item={collections[2]} className="h-full" />
          </motion.div>

          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-4 row-span-1"
          >
            <CollectionCard item={collections[3]} className="h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="col-span-3 row-span-1"
          >
            <CollectionCard item={collections[4]} className="h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CollectionCard({ item, className = '' }: { item: typeof collections[0]; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-card hover:shadow-luxury transition-all duration-300 ${className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-70 group-hover:opacity-85 transition-opacity duration-300`} />

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-poppins text-white/70 mb-1 uppercase tracking-wider">{item.subtitle}</p>
          <h3 className="font-playfair text-xl font-bold mb-3">{item.title}</h3>
          <Link href="/shop">
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-poppins font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              {item.cta}
              <ArrowRight className="w-3 h-3" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
