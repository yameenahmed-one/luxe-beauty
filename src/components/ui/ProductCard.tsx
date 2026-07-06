'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Heart, ShoppingBag, Star } from 'lucide-react'
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
  const [isHovered, setIsHovered]   = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)
  const [imgError, setImgError]     = useState(false)

  const dispatch      = useDispatch()
  const wishlistItems = useSelector(selectWishlistItems)
  const isWishlisted  = wishlistItems.some((item) => item.id === product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart({ product, quantity: 1 }))
    setAddedToCart(true)
    toast.success(`${product.name} added to cart!`, {
      style: { background: '#111111', color: '#fff', borderRadius: '8px' },
      iconTheme: { primary: '#C8A951', secondary: '#fff' },
    })
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(toggleWishlist(product))
    toast(isWishlisted ? 'Removed from wishlist' : '❤️ Added to wishlist!', {
      style: { background: '#111111', color: '#fff', borderRadius: '8px' },
    })
  }

  const badgeConfig: Record<string, { text: string; className: string }> = {
    new:        { text: 'NEW',                          className: 'bg-dark text-white' },
    sale:       { text: `${product.discount ?? 0}% OFF`, className: 'bg-red-500 text-white' },
    bestseller: { text: 'BESTSELLER',                   className: 'bg-primary text-white' },
    limited:    { text: 'LIMITED',                      className: 'bg-dark text-white' },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div
          className={`product-card bg-white rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer ${
            isHovered ? 'border-primary shadow-md' : 'border-gray-100 shadow-sm'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <img
              src={imgError
                ? 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c93?w=500&q=80'
                : product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-transform duration-400 ${
                isHovered ? 'scale-[1.04]' : 'scale-100'
              }`}
            />

            {/* Badge top-left */}
            {product.badge && (
              <div className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-poppins font-bold tracking-wider ${badgeConfig[product.badge].className}`}>
                {badgeConfig[product.badge].text}
              </div>
            )}

            {/* Wishlist top-right — always visible */}
            <button
              onClick={handleWishlist}
              className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center shadow transition-all ${
                isWishlisted
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-400 hover:text-primary hover:bg-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            {/* Add to cart — slides up on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleAddToCart}
                  className={`absolute bottom-0 left-0 right-0 py-2.5 text-white text-xs font-poppins font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors ${
                    addedToCart ? 'bg-green-500' : 'bg-primary hover:bg-[#B8961E]'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  {addedToCart ? 'Added!' : 'Add to Cart'}
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Card info */}
          <div className="p-3.5">
            {/* Brand */}
            <p className="text-[11px] font-poppins text-gray-400 uppercase tracking-wider mb-1">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-poppins font-medium text-sm text-dark leading-snug line-clamp-2 mb-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'fill-primary text-primary'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-400 font-poppins">
                ({product.reviews.toLocaleString()})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-poppins font-bold text-base text-dark">
                Rs.{product.price.toLocaleString()}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through font-poppins">
                  Rs.{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Out of stock */}
            {!product.inStock && (
              <p className="text-[10px] text-red-400 font-poppins mt-1">Out of stock</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
