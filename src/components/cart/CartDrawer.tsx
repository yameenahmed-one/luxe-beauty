'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, ShoppingBag, Trash2, Tag } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { selectCartItems, selectCartTotal, selectIsCartOpen, closeCart, removeFromCart, updateQuantity } from '@/store/cartSlice'

export default function CartDrawer() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const isOpen = useSelector(selectIsCartOpen)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(closeCart())}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary/30">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-playfair text-xl font-bold">Your Bag</h2>
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-poppins">
                  {items.length}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => dispatch(closeCart())}
                className="p-2 hover:bg-secondary/30 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full py-20 text-center"
                  >
                    <ShoppingBag className="w-16 h-16 text-secondary mb-4" />
                    <h3 className="font-playfair text-xl font-semibold mb-2">Your bag is empty</h3>
                    <p className="text-gray-400 text-sm font-poppins mb-6">Add some luxury to your life</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => dispatch(closeCart())}
                      className="btn-luxury"
                    >
                      Shop Now
                    </motion.button>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      className="flex gap-4 p-4 bg-background rounded-2xl border border-secondary/20"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-poppins text-sm font-semibold truncate">{item.product.name}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{item.product.brand}</p>
                        {item.shade && (
                          <div className="flex items-center gap-1 mt-1">
                            <div className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: item.shade }} />
                            <span className="text-xs text-gray-400">Shade</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 bg-white rounded-full border border-secondary/30 px-1">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => item.quantity > 1
                                ? dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                                : dispatch(removeFromCart(item.id))
                              }
                              className="p-1 hover:text-primary"
                            >
                              <Minus className="w-3 h-3" />
                            </motion.button>
                            <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                              className="p-1 hover:text-primary"
                            >
                              <Plus className="w-3 h-3" />
                            </motion.button>
                          </div>
                          <span className="font-playfair font-bold text-primary">
                            Rs.{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="p-1.5 hover:text-red-500 transition-colors self-start"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-secondary/30 space-y-4 bg-background">
                {/* Coupon */}
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 flex-1 px-4 py-2.5 bg-white border border-secondary/30 rounded-xl">
                    <Tag className="w-4 h-4 text-primary" />
                    <input
                      placeholder="Coupon code"
                      className="flex-1 bg-transparent text-sm outline-none font-poppins"
                    />
                  </div>
                  <button className="px-4 py-2.5 bg-dark text-white text-sm font-poppins rounded-xl hover:bg-primary transition-colors">
                    Apply
                  </button>
                </div>

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-poppins text-gray-500">
                    <span>Subtotal</span>
                    <span>Rs.{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-poppins text-gray-500">
                    <span>Shipping</span>
                    <span className="text-green-500">FREE</span>
                  </div>
                  <div className="flex justify-between font-playfair font-bold text-lg border-t border-secondary/30 pt-2">
                    <span>Total</span>
                    <span className="text-primary">Rs.{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link href="/checkout" onClick={() => dispatch(closeCart())}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-luxury ripple py-4 text-base"
                  >
                    Proceed to Checkout →
                  </motion.button>
                </Link>
                <button
                  onClick={() => dispatch(closeCart())}
                  className="w-full text-center text-sm text-gray-400 hover:text-primary font-poppins transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
