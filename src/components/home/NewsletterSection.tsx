'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Mail, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    toast.success('Welcome to Luxe Beauty! 🌸', {
      style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' },
    })
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-gold/5" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 15}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`right-${i}`}
            className="absolute w-3 h-3 rounded-full bg-gold/15"
            style={{ top: `${30 + i * 20}%`, right: `${5 + i * 10}%` }}
            animate={{ y: [10, -10, 10], scale: [1, 1.3, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-dark to-dark/95 rounded-3xl p-12 text-white shadow-luxury relative overflow-hidden"
        >
          {/* Inner decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Text */}
            <h2 className="font-playfair text-4xl font-bold mb-3">
              Join the Luxe Beauty Club
            </h2>
            <p className="text-gray-400 font-poppins mb-8 max-w-lg mx-auto">
              Get exclusive beauty tips, early access to sales, and 15% off your first order. Join 500,000+ beauty lovers.
            </p>

            {/* Form */}
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1 flex items-center gap-3 px-5 py-3.5 bg-white/10 border border-white/20 rounded-full focus-within:border-primary transition-colors">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="flex-1 bg-transparent text-white placeholder:text-gray-500 text-sm font-poppins outline-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-luxury flex items-center gap-2 justify-center px-7"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-green-400" />
                </div>
                <p className="font-playfair text-2xl font-bold text-green-400">Welcome to the Club! 🌸</p>
                <p className="text-gray-400 font-poppins text-sm">Check your inbox for your 15% off coupon.</p>
              </motion.div>
            )}

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-8">
              {[
                { icon: '🔒', text: 'No Spam' },
                { icon: '🎁', text: '15% Off Welcome' },
                { icon: '💌', text: 'Exclusive Deals' },
                { icon: '✨', text: 'Beauty Tips' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-gray-400 text-xs font-poppins">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
