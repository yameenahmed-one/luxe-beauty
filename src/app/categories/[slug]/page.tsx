'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function CategorySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  // Match slug to category name (case-insensitive, handle spaces/hyphens)
  const normalize = (s: string) => s.toLowerCase().replace(/[\s-_]+/g, '')
  const category = categories.find(c => normalize(c.name) === normalize(slug))
  const categoryName = category?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  // Filter products by category name
  const filtered = products.filter(p =>
    normalize(p.category) === normalize(slug) ||
    normalize(p.category) === normalize(categoryName)
  )

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-poppins text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <span>/</span>
          <span className="text-primary font-semibold capitalize">{categoryName}</span>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link href="/categories" className="inline-flex items-center gap-2 text-sm font-poppins text-gray-400 hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            All Categories
          </Link>
          <div className="flex items-center gap-3 mb-2">
            {category && <span className="text-4xl">{category.icon}</span>}
            <h1 className="font-playfair text-4xl font-bold text-dark capitalize">{categoryName}</h1>
          </div>
          <p className="text-gray-500 font-poppins">
            {filtered.length > 0
              ? `${filtered.length} premium products`
              : 'Explore our full collection'}
          </p>
        </motion.div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        ) : (
          /* No products — show all products with CTA */
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-playfair text-2xl font-bold text-dark mb-3">Coming Soon</h2>
            <p className="text-gray-500 font-poppins mb-8">
              We&apos;re curating the finest {categoryName} products for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
              {products.slice(0, 8).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
