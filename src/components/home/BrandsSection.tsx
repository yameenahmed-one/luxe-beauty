'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { brands } from '@/data/products'

export default function BrandsSection() {
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

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase mb-3 block">Top Brands</span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark mb-4 section-title">
            Shop By Brand
          </h2>
          <p className="text-gray-500 font-poppins max-w-xl mx-auto">
            Authentic products from the world&apos;s most coveted beauty brands.
          </p>
        </motion.div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="flex flex-col items-center p-5 rounded-3xl border border-secondary/30 bg-background hover:border-primary/30 hover:shadow-card cursor-pointer transition-all duration-300 group"
                >
                  {/* Logo circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow text-white font-poppins font-bold text-sm"
                    style={{ background: brandColors[brand.name] || '#FF4F81' }}
                  >
                    {brand.logo}
                  </div>
                  <span className="text-xs font-poppins font-semibold text-dark text-center group-hover:text-primary transition-colors leading-tight">
                    {brand.name}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Scrolling brand names (marquee) */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-scroll gap-16 py-4">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="font-playfair text-4xl font-bold text-secondary/60 whitespace-nowrap hover:text-primary transition-colors cursor-pointer"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
