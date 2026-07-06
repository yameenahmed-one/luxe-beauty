'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const brandNames = [
  'Charlotte Tilbury', 'Huda Beauty', 'Rare Beauty', 'MAC',
  "L'Oréal", 'Dior', 'Fenty Beauty', "Kiehl's",
  'Urban Decay', 'Chanel', 'OPI', 'Maybelline',
  'NYX', 'e.l.f.', 'The Ordinary', 'COSRX',
]

const row1 = [...brandNames.slice(0, 8), ...brandNames.slice(0, 8)]
const row2 = [...brandNames.slice(8, 16), ...brandNames.slice(8, 16)]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">
            Authentic
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-dark mt-1 section-title text-left">
            500+ Authentic Brands
          </h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative overflow-hidden mb-3">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex gap-3">
            {row1.map((name, i) => (
              <Link key={i} href={`/shop?brand=${encodeURIComponent(name)}`}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex-shrink-0 px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-poppins font-medium text-dark hover:border-primary hover:text-primary transition-colors cursor-pointer whitespace-nowrap bg-white"
                >
                  {name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — reverse direction */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee-slow flex gap-3" style={{ animationDirection: 'reverse' }}>
            {row2.map((name, i) => (
              <Link key={i} href={`/shop?brand=${encodeURIComponent(name)}`}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex-shrink-0 px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-poppins font-medium text-dark hover:border-primary hover:text-primary transition-colors cursor-pointer whitespace-nowrap bg-white"
                >
                  {name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
