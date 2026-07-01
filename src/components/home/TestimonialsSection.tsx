'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase mb-3 block">Testimonials</span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark mb-4 section-title">
            Loved by Thousands
          </h2>
          <p className="text-gray-500 font-poppins max-w-xl mx-auto">
            Real reviews from our beauty community worldwide.
          </p>
        </motion.div>

        {/* Main featured testimonial */}
        <div className="max-w-3xl mx-auto mb-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white rounded-3xl p-10 shadow-luxury text-center"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow-pink">
                <Quote className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-playfair text-xl text-dark leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].user}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-secondary"
                />
                <div className="text-left">
                  <p className="font-poppins font-bold text-dark">{testimonials[current].user}</p>
                  <p className="text-sm text-gray-400 font-poppins">{testimonials[current].date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center pointer-events-auto hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-white shadow-luxury flex items-center justify-center pointer-events-auto hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.1 }}
              className={`transition-all duration-300 ${i === current ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : 'opacity-50'}`}
            >
              <img
                src={t.avatar}
                alt={t.user}
                className="w-12 h-12 rounded-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              animate={{ width: i === current ? 24 : 8 }}
              className={`h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-primary/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
