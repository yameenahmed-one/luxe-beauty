'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingBag, ArrowRight, Truck, CheckCircle, Banknote } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-[#FAFAFA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-14 lg:py-20 items-center">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">
                Pakistan&apos;s #1 Beauty Store
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1
                className="font-playfair font-bold text-dark leading-[1.1]"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
              >
                Pakistan&apos;s #1
              </h1>
              <h1
                className="font-playfair font-bold leading-[1.1] gradient-text"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
              >
                Beauty Destination
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 font-poppins leading-relaxed max-w-lg"
              style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)' }}
            >
              Shop 500+ Authentic Brands — Charlotte Tilbury, Huda Beauty, MAC, Rare Beauty &amp; more.
              Nationwide delivery across Pakistan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-luxury ripple flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/categories">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-dark text-dark font-poppins font-semibold text-sm hover:bg-dark hover:text-white transition-all duration-300"
                >
                  Explore All <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {[
                { icon: Truck, label: 'Free Delivery' },
                { icon: CheckCircle, label: '100% Authentic' },
                { icon: Banknote, label: 'Cash on Delivery' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-gray-500 text-xs font-poppins">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <img
                src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Beauty Products"
                className="w-full h-[380px] lg:h-[480px] object-cover rounded-2xl shadow-lg"
              />
              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg"
              >
                <p className="font-playfair font-bold text-dark text-xl">50K+</p>
                <p className="text-xs text-gray-500 font-poppins">Happy Customers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-6 right-6 bg-white rounded-xl px-4 py-3 shadow-lg"
              >
                <p className="font-playfair font-bold text-dark text-xl">500+</p>
                <p className="text-xs text-gray-500 font-poppins">Authentic Brands</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
