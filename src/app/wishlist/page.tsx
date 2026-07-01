'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingBag, Trash2, Sparkles, ArrowLeft } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectWishlistItems, removeFromWishlist } from '@/store/wishlistSlice'
import { addToCart } from '@/store/cartSlice'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import toast from 'react-hot-toast'

export default function WishlistPage() {
  const items = useSelector(selectWishlistItems)
  const dispatch = useDispatch()

  const handleMoveToCart = (product: typeof items[0]) => {
    dispatch(addToCart({ product, quantity: 1 }))
    dispatch(removeFromWishlist(product.id))
    toast.success('Moved to cart!', { style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' } })
  }

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-poppins text-gray-400 hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </div>
            <div>
              <h1 className="font-playfair text-4xl font-bold text-dark">My Wishlist</h1>
              <p className="text-gray-500 font-poppins text-sm mt-1">
                {items.length} {items.length === 1 ? 'item' : 'items'} saved
              </p>
            </div>
          </div>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 bg-secondary/40 rounded-full flex items-center justify-center mb-6"
            >
              <Heart className="w-12 h-12 text-primary/40" />
            </motion.div>
            <h2 className="font-playfair text-3xl font-bold text-dark mb-3">Your wishlist is empty</h2>
            <p className="text-gray-400 font-poppins mb-8 max-w-md">
              Save your favourite luxury products here and come back to them anytime.
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-luxury ripple flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Discover Products
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Move all to cart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  items.forEach(item => handleMoveToCart(item))
                }}
                className="flex items-center gap-2 px-6 py-3 bg-dark text-white rounded-xl text-sm font-poppins font-semibold hover:bg-primary transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Move All to Cart
              </motion.button>
            </motion.div>

            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              <AnimatePresence>
                {items.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative"
                  >
                    <ProductCard product={product} index={i} />
                    <div className="flex gap-2 mt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleMoveToCart(product)}
                        className="flex-1 py-2.5 bg-dark text-white rounded-xl text-xs font-poppins font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          dispatch(removeFromWishlist(product.id))
                          toast('Removed from wishlist', { style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' } })
                        }}
                        className="p-2.5 border border-secondary rounded-xl hover:border-red-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}
