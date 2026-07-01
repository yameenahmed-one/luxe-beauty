'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Zap, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'
import toast from 'react-hot-toast'

function useCountdown(targetMs: number) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const diff = targetMs - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [targetMs])

  return timeLeft
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        className="w-16 h-16 bg-dark text-white rounded-2xl flex items-center justify-center font-playfair font-bold text-2xl shadow-lg"
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <span className="text-xs font-poppins text-gray-400 mt-2 uppercase tracking-wider">{label}</span>
    </div>
  )
}

export default function FlashSaleSection() {
  const dispatch = useDispatch()
  // useMemo se fixed timestamp — har render pe naya Date nahi banega
  const saleEndMs = useMemo(() => Date.now() + 6 * 60 * 60 * 1000 + 23 * 60 * 1000, [])
  const { hours, minutes, seconds } = useCountdown(saleEndMs)

  const saleProducts = products.filter(p => p.badge === 'sale' || p.discount).slice(0, 4)

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-primary fill-primary" />
              </motion.div>
              <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Flash Sale</span>
            </div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-2">
              Today&apos;s Luxury Deals
            </h2>
            <p className="text-gray-400 font-poppins">Grab premium beauty at unbeatable prices. Limited time only!</p>
          </div>

          {/* Countdown */}
          <div>
            <p className="text-sm font-poppins text-gray-400 mb-3 text-center">Sale ends in:</p>
            <div className="flex items-center gap-3">
              <TimeUnit value={hours} label="Hours" />
              <span className="font-playfair text-3xl text-primary font-bold mb-6">:</span>
              <TimeUnit value={minutes} label="Minutes" />
              <span className="font-playfair text-3xl text-primary font-bold mb-6">:</span>
              <TimeUnit value={seconds} label="Seconds" />
            </div>
          </div>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product, i) => {
            const progress = 30 + i * 15
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-poppins font-bold px-2.5 py-1 rounded-full">
                    {product.discount}% OFF
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-primary font-poppins font-semibold mb-1">{product.brand}</p>
                  <h3 className="font-poppins font-semibold text-sm mb-3 line-clamp-2">{product.name}</h3>

                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5 font-poppins">
                      <span>🔥 {progress} sold</span>
                      <span>{100 - progress} left</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-gold rounded-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-playfair font-bold text-lg text-white">Rs.{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">Rs.{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        dispatch(addToCart({ product }))
                        toast.success('Added to cart!', { style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' } })
                      }}
                      className="p-2.5 bg-primary rounded-full hover:shadow-glow-pink transition-all"
                    >
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
