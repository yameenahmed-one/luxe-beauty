'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Heart, ShoppingBag, Star, Eye, GitCompare, Zap } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/cartSlice'
import { toggleWishlist, selectWishlistItems } from '@/store/wishlistSlice'
import { Product } from '@/types'
import toast from 'react-hot-toast'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedShade, setSelectedShade] = useState<string | null>(null)
  const [addedToCart, setAddedToCart] = useState(false)
  const [imgError, setImgError] = useState(false)
  const dispatch = useDispatch()
  const wishlistItems = useSelector(selectWishlistItems)
  const isWishlisted = wishlistItems.some((item) => item.id === product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart({ product, quantity: 1, shade: selectedShade || undefined }))
    setAddedToCart(true)
    toast.success(`${product.name} added to cart!`, {
      style: {
        background: '#2D2424',
        color: '#fff',
        borderRadius: '12px',
      },
      iconTheme: { primary: '#D4AF37', secondary: '#fff' },
    })
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(toggleWishlist(product))
    toast(isWishlisted ? 'Removed from wishlist' : '❤️ Added to wishlist!', {
      style: { background: '#2D2424', color: '#fff', borderRadius: '12px' },
    })
  }

  const badgeConfig = {
    new: { text: 'NEW', className: 'bg-primary text-white' },
    sale: { text: `${product.discount}% OFF`, className: 'bg-red-500 text-white' },
    bestseller: { text: 'BESTSELLER', className: 'bg-gold text-dark' },
    limited: { text: 'LIMITED', className: 'bg-dark text-white' },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div
          className="product-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg border border-secondary/20 cursor-pointer transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-[#FFF5F5]">
            {/* Regular img tag — no next/image to avoid 404 issues */}
            <img
              src={imgError ? 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c93?w=500&q=80' : product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ display: 'block' }}
            />

            {/* Glassmorphism hover overlay */}
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(45,36,36,0.45) 0%, rgba(45,36,36,0.1) 40%, transparent 70%)',
              }}
            />

            {/* Badge */}
            {product.badge && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-poppins font-bold tracking-wider ${badgeConfig[product.badge].className}`}
              >
                {badgeConfig[product.badge].text}
              </motion.div>
            )}

            {/* Action buttons — top right */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-3 right-3 flex flex-col gap-2"
                >
                  {/* Wishlist */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWishlist}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      isWishlisted
                        ? 'bg-primary text-white'
                        : 'bg-white/90 backdrop-blur-sm text-dark hover:bg-primary hover:text-white'
                    }`}
                  >
                    <motion.div
                      animate={isWishlisted ? { scale: [1, 1.4, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </motion.div>
                  </motion.button>

                  {/* Quick view */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-dark hover:bg-primary hover:text-white flex items-center justify-center shadow-lg transition-all"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>

                  {/* Compare */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-dark hover:bg-primary hover:text-white flex items-center justify-center shadow-lg transition-all"
                  >
                    <GitCompare className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Add — bottom on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={handleAddToCart}
                  className="absolute bottom-4 left-4 right-4 py-2.5 bg-dark/90 backdrop-blur-sm text-white text-xs font-poppins font-semibold tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-colors"
                >
                  <Zap className="w-3.5 h-3.5" />
                  Quick Add
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Card Content */}
          <div className="p-5 flex flex-col gap-3">
            {/* Brand */}
            <p className="text-xs font-poppins font-semibold text-primary tracking-wider uppercase">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-poppins font-semibold text-sm text-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-poppins">
                ({product.reviews.toLocaleString()})
              </span>
            </div>

            {/* Shades */}
            {product.shades && product.shades.length > 0 && (
              <div className="flex items-center gap-1.5">
                {product.shades.slice(0, 5).map((shade, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setSelectedShade(shade)
                    }}
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      selectedShade === shade
                        ? 'border-primary shadow-glow-gold scale-125'
                        : 'border-white shadow-sm'
                    }`}
                    style={{ background: shade }}
                  />
                ))}
                {product.shades.length > 5 && (
                  <span className="text-xs text-gray-400 font-poppins">
                    +{product.shades.length - 5}
                  </span>
                )}
              </div>
            )}

            {/* Price + Cart */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-playfair font-bold text-lg text-dark">
                  Rs.{product.price.toLocaleString()}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xs text-gray-400 line-through ml-2 font-poppins">
                    Rs.{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                className={`p-2.5 rounded-full transition-all shadow-sm ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:shadow-glow-gold'
                }`}
              >
                <AnimatePresence mode="wait">
                  {addedToCart ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Zap className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="bag"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Stock */}
            {!product.inStock && (
              <p className="text-xs text-red-400 font-poppins">Out of stock</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
