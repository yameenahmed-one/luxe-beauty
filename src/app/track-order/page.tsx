'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Package, Truck, MapPin, CheckCircle, Clock, Sparkles } from 'lucide-react'

const mockTracking = {
  orderId: 'LB847291',
  status: 'Shipped',
  eta: 'Dec 24, 2024',
  product: {
    name: 'Velvet Matte Lip Color',
    brand: 'Charlotte Tilbury',
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c93?w=200&q=80',
    price: 3499,
  },
  timeline: [
    { status: 'Order Placed', date: 'Dec 18, 2024 · 10:24 AM', done: true, icon: CheckCircle },
    { status: 'Payment Confirmed', date: 'Dec 18, 2024 · 10:26 AM', done: true, icon: CheckCircle },
    { status: 'Processing at Warehouse', date: 'Dec 19, 2024 · 2:00 PM', done: true, icon: Package },
    { status: 'Shipped via BlueDart', date: 'Dec 20, 2024 · 9:15 AM', done: true, icon: Truck },
    { status: 'Out for Delivery', date: 'Expected Dec 24, 2024', done: false, icon: MapPin },
    { status: 'Delivered', date: 'Pending', done: false, icon: CheckCircle },
  ],
}

export default function TrackOrderPage() {
  const [orderInput, setOrderInput] = useState('')
  const [result, setResult] = useState<typeof mockTracking | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(mockTracking)
  }

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Order Tracking</span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-dark mb-4">Track Your Order</h1>
          <p className="text-gray-500 font-poppins">Enter your order ID to get real-time updates.</p>
        </motion.div>

        {/* Search */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSearch}
          className="flex gap-3 mb-8"
        >
          <div className="flex-1 flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-secondary shadow-card focus-within:border-primary transition-colors">
            <Search className="w-4 h-4 text-primary" />
            <input
              value={orderInput}
              onChange={e => setOrderInput(e.target.value)}
              placeholder="Enter Order ID (e.g. LB847291)"
              className="flex-1 bg-transparent font-poppins text-sm outline-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            type="submit"
            className="btn-luxury px-7 py-3.5"
          >
            Track
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-5"
            >
              {/* Order summary */}
              <div className="bg-white rounded-3xl p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <img src={result.product.image} alt={result.product.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <p className="font-poppins font-bold text-dark">{result.product.name}</p>
                    <p className="text-xs text-gray-400">{result.product.brand}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-poppins font-bold rounded-full">
                        {result.status}
                      </span>
                      <span className="text-xs text-gray-400 font-poppins">ETA: {result.eta}</span>
                    </div>
                  </div>
                  <span className="font-playfair font-bold text-primary text-lg">
                    ₹{result.product.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-3xl p-6 shadow-card">
                <h3 className="font-playfair font-bold text-xl mb-6">Tracking Timeline</h3>
                <div className="space-y-0">
                  {result.timeline.map((step, i) => (
                    <div key={step.status} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.done ? 'bg-primary' : 'bg-secondary'
                        }`}>
                          <step.icon className={`w-5 h-5 ${step.done ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        {i < result.timeline.length - 1 && (
                          <div className={`w-0.5 h-10 ${step.done ? 'bg-primary/30' : 'bg-secondary'}`} />
                        )}
                      </div>
                      <div className="pt-2 pb-10">
                        <p className={`font-poppins font-semibold text-sm ${step.done ? 'text-dark' : 'text-gray-400'}`}>
                          {step.status}
                        </p>
                        <p className="text-xs text-gray-400 font-poppins mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {step.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
