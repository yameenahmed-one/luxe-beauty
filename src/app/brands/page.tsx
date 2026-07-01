'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { brands, products } from '@/data/products'
import { Sparkles, ArrowRight } from 'lucide-react'

const brandColors: Record<string, string> = {
  'Huda Beauty': '#C8A4D4',
  'Rare Beauty': '#FFB3BA',
  'Dior': '#2C3E50',
  'MAC': '#1B1B1B',
  'Maybelline': '#E74C3C',
  "L'Oréal": '#3498DB',
  'Charlotte Tilbury': '#D4AF37',
  'Fenty Beauty': '#C0392B',
}

const brandImages: Record<string, string> = {
  'Huda Beauty': 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
  'Rare Beauty': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
  'Dior': 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
  'MAC': 'https://images.unsplash.com/photo-1631214524020-3c69d5bb1cee?w=600&q=80',
  'Maybelline': 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=600&q=80',
  "L'Oréal": 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  'Charlotte Tilbury': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
  'Fenty Beauty': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Luxury Brands</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-dark mb-4">Shop by Brand</h1>
          <p className="text-gray-500 font-poppins text-lg">Authentic luxury from the world's most coveted beauty houses.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => {
            const brandProductCount = products.filter(p => p.brand === brand.name).length
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/shop?brand=${encodeURIComponent(brand.name)}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-luxury cursor-pointer bg-white"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={brandImages[brand.name] || 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80'}
                        alt={brand.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                      <div
                        className="absolute top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center font-poppins font-bold text-sm text-white shadow-lg"
                        style={{ background: brandColors[brand.name] || '#FF4F81' }}
                      >
                        {brand.logo}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-playfair font-bold text-xl text-dark mb-1 group-hover:text-primary transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-poppins mb-3">{brand.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-poppins text-primary font-semibold">
                          {brandProductCount > 0 ? `${brandProductCount} products` : 'View all'}
                        </span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-1 text-xs text-primary font-poppins font-semibold"
                        >
                          Shop Now <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
