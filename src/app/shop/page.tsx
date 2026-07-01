'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X, ChevronDown, Grid3X3, List, Star } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated', 'Newest']
const categories = ['All', 'Lipstick', 'Foundation', 'Eyeshadow', 'Concealer', 'Mascara', 'Primer', 'Blush', 'Skincare', 'Perfumes']
const brands = ['All', 'Charlotte Tilbury', 'Rare Beauty', 'Fenty Beauty', 'Huda Beauty', 'MAC', "L'Oréal", 'Dior']

export default function ShopPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [selectedSort, setSelectedSort] = useState('Featured')
  const [priceRange, setPriceRange] = useState([0, 15000])
  const [selectedRating, setSelectedRating] = useState(0)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') result = result.filter(p => p.category === selectedCategory)
    if (selectedBrand !== 'All') result = result.filter(p => p.brand === selectedBrand)
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    if (selectedRating > 0) result = result.filter(p => p.rating >= selectedRating)

    switch (selectedSort) {
      case 'Price: Low to High': result.sort((a, b) => a.price - b.price); break
      case 'Price: High to Low': result.sort((a, b) => b.price - a.price); break
      case 'Top Rated': result.sort((a, b) => b.rating - a.rating); break
    }

    return result
  }, [selectedCategory, selectedBrand, priceRange, selectedRating, selectedSort])

  const SidebarContent = () => (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-playfair text-base font-bold mb-4 text-dark">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left text-sm font-poppins px-3 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-600 hover:bg-secondary/30 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-playfair text-base font-bold mb-4 text-dark">Brand</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`w-full text-left text-sm font-poppins px-3 py-2 rounded-xl transition-all ${
                selectedBrand === brand
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-600 hover:bg-secondary/30 hover:text-primary'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-playfair text-base font-bold mb-4 text-dark">Price Range</h3>
        <div className="px-1">
          <input
            type="range"
            min={0}
            max={15000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-500 font-poppins mt-2">
            <span>₹0</span>
            <span className="font-semibold text-primary">₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-playfair text-base font-bold mb-4 text-dark">Minimum Rating</h3>
        <div className="space-y-2">
          {[4.5, 4, 3.5, 0].map(rating => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`flex items-center gap-2 w-full px-3 py-2 rounded-xl transition-all text-sm font-poppins ${
                selectedRating === rating
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-secondary/30'
              }`}
            >
              {rating === 0 ? (
                <span>All Ratings</span>
              ) : (
                <>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-gold text-gold' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span>{rating}+</span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      <button
        onClick={() => {
          setSelectedCategory('All')
          setSelectedBrand('All')
          setPriceRange([0, 15000])
          setSelectedRating(0)
        }}
        className="w-full py-3 border border-primary text-primary rounded-xl text-sm font-poppins hover:bg-primary hover:text-white transition-all"
      >
        Clear All Filters
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-playfair text-4xl font-bold text-dark mb-2">Shop All Products</h1>
          <p className="text-gray-500 font-poppins text-sm">
            Showing <span className="text-primary font-semibold">{filtered.length}</span> products
          </p>
        </motion.div>

        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-secondary rounded-xl text-sm font-poppins"
            >
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              Filters
            </motion.button>

            {/* Desktop sidebar toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-white border border-secondary rounded-xl text-sm font-poppins hover:border-primary transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-primary" />
              {isSidebarOpen ? 'Hide' : 'Show'} Filters
            </motion.button>

            {/* Active filter chips */}
            {selectedCategory !== 'All' && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-xs font-poppins rounded-full"
              >
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All')}><X className="w-3 h-3" /></button>
              </motion.span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-secondary rounded-xl text-sm font-poppins focus:outline-none focus:border-primary cursor-pointer"
              >
                {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>

            {/* View mode */}
            <div className="flex bg-white border border-secondary rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.aside
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 260, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:block flex-shrink-0 overflow-hidden"
              >
                <div className="w-[260px] bg-white rounded-3xl p-6 shadow-card sticky top-28">
                  <SidebarContent />
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Products */}
          <div className="flex-1">
            <motion.div
              layout
              className={`grid gap-5 ${
                isSidebarOpen
                  ? 'grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              }`}
            >
              <AnimatePresence>
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="font-playfair text-2xl text-gray-400 mb-2">No products found</p>
                <p className="text-gray-400 font-poppins text-sm">Try adjusting your filters</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileFilterOpen(false)}
                className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto p-6 lg:hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-playfair text-xl font-bold">Filters</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <SidebarContent />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

