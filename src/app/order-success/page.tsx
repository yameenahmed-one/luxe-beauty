'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Package, Truck, MapPin, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function OrderSuccessPage() {
  const [orderNumber] = useState(() => `LB${Math.floor(Math.random() * 900000) + 100000}`)

  const steps = [
    { icon: CheckCircle, label: 'Order Confirmed', done: true },
    { icon: Package, label: 'Processing', done: false },
    { icon: Truck, label: 'Shipped', done: false },
    { icon: MapPin, label: 'Delivered', done: false },
  ]

  return (
    <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Success animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
          className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
        >
          <CheckCircle className="w-16 h-16 text-white" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-xs font-poppins font-semibold text-gold tracking-widest uppercase">Order Placed Successfully</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>
          <h1 className="font-playfair text-4xl font-bold text-dark mb-3">Thank you for your order!</h1>
          <p className="text-gray-500 font-poppins mb-2">
            Your luxury beauty haul is being prepared with love. ❤️
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-poppins font-semibold text-sm mb-8">
            Order #{orderNumber}
          </div>
        </motion.div>

        {/* Tracking steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-card mb-8"
        >
          <h3 className="font-playfair text-xl font-bold mb-6">Order Status</h3>
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center gap-2 relative flex-1">
                {i < steps.length - 1 && (
                  <div className={`absolute top-5 left-1/2 w-full h-0.5 ${
                    step.done ? 'bg-green-400' : 'bg-secondary'
                  }`} />
                )}
                <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${
                  step.done ? 'bg-green-500' : 'bg-secondary'
                }`}>
                  <step.icon className={`w-5 h-5 ${step.done ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <span className={`text-xs font-poppins text-center ${step.done ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-background rounded-2xl text-sm font-poppins text-gray-500">
            Expected delivery: <span className="text-dark font-semibold">3–5 business days</span>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="btn-luxury ripple flex items-center gap-2 px-8 py-4"
            >
              <Sparkles className="w-4 h-4" />
              Continue Shopping
            </motion.button>
          </Link>
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-poppins font-semibold text-sm hover:bg-primary hover:text-white transition-all"
            >
              Track Order <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Confetti particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                background: ['#FF4F81', '#D4AF37', '#F8D5DF', '#FFB6C1'][Math.floor(Math.random() * 4)],
              }}
              animate={{
                y: ['0vh', '110vh'],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, 720],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

