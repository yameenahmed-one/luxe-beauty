'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categoryItems = [
  { name: 'Lipsticks',   image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Lipstick' },
  { name: 'Foundation',  image: 'https://images.pexels.com/photos/5069614/pexels-photo-5069614.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Foundation' },
  { name: 'Eyeshadow',   image: 'https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Eyeshadow' },
  { name: 'Concealer',   image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Concealer' },
  { name: 'Mascara',     image: 'https://images.pexels.com/photos/2533268/pexels-photo-2533268.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Mascara' },
  { name: 'Skincare',    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Skincare' },
  { name: 'Perfumes',    image: 'https://images.pexels.com/photos/1591161/pexels-photo-1591161.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Perfume' },
  { name: 'Brushes',     image: 'https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=300', slug: 'Brushes' },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">
            Browse
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-dark mt-1 section-title text-left">
            Shop by Category
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
          {categoryItems.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={`/shop?category=${encodeURIComponent(cat.slug)}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center gap-2 cursor-pointer"
                >
                  {/* Image box */}
                  <div className="w-full aspect-square overflow-hidden rounded-xl border border-gray-100 group-hover:border-primary transition-colors duration-300 bg-secondary">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>
                  {/* Label */}
                  <span className="text-xs font-poppins font-medium text-dark group-hover:text-primary transition-colors text-center leading-tight">
                    {cat.name}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
