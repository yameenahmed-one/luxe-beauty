'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Sparkles, Star, ShoppingBag, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    tag: 'NEW COLLECTION 2024',
    title: 'Discover Your',
    highlight: 'Perfect Shade',
    subtitle: 'Luxury makeup crafted for every skin tone. Explore our exclusive collection of premium cosmetics.',
    cta: 'Shop Now',
    ctaLink: '/shop',
    cta2: 'Explore Collection',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80',
    badge: '✨ Bestseller',
    stats: [{ label: 'Products', value: '2000+' }, { label: 'Brands', value: '50+' }, { label: 'Reviews', value: '100K+' }],
  },
  {
    id: 2,
    tag: 'LIMITED EDITION',
    title: 'Define Your',
    highlight: 'Luxury Glow',
    subtitle: 'From bold to natural — our curated palettes deliver flawless looks for every occasion.',
    cta: 'Shop Palettes',
    ctaLink: '/shop?category=Eyeshadow',
    cta2: 'View Brands',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700&q=80',
    badge: '💄 Most Loved',
    stats: [{ label: 'Happy Clients', value: '500K+' }, { label: 'Countries', value: '25+' }, { label: 'Awards', value: '15' }],
  },
  {
    id: 3,
    tag: "EDITOR'S PICK",
    title: 'The Art of',
    highlight: 'Timeless Beauty',
    subtitle: 'Elevate your beauty ritual with world-class formulas loved by makeup artists globally.',
    cta: 'View Bestsellers',
    ctaLink: '/shop',
    cta2: 'Learn More',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&q=80',
    badge: '🌟 Top Rated',
    stats: [{ label: 'Natural Ingredients', value: '100%' }, { label: 'Cruelty Free', value: 'Yes' }, { label: 'Vegan', value: 'Yes' }],
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF5F5 0%, #FDF8F0 50%, #F7F4EF 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20 items-center min-h-[85vh]">

          {/* ── LEFT: Content ─────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col gap-5 order-2 lg:order-1"
            >
              {/* Tag pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm w-fit">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-poppins font-bold text-primary tracking-widest uppercase">
                  {slide.tag}
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-1">
                <h1 className="font-playfair font-bold text-dark leading-tight"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  {slide.title}
                </h1>
                <h1 className="font-playfair font-bold gradient-text leading-tight"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  {slide.highlight}
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-gray-600 font-poppins leading-relaxed max-w-md"
                style={{ fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)' }}>
                {slide.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href={slide.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-luxury ripple flex items-center gap-2 px-7 py-3.5 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {slide.cta}
                  </motion.button>
                </Link>
                <Link href="/categories">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-poppins font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {slide.cta2}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-6 sm:gap-10 pt-2">
                {slide.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-playfair font-bold text-dark text-xl sm:text-2xl">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-poppins mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Slide dots */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setCurrent(p => (p - 1 + slides.length) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white border border-secondary flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'w-7 bg-primary' : 'w-2 bg-primary/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrent(p => (p + 1) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white border border-secondary flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── RIGHT: Image ───────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              {/* Glow bg */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #D4AF37 0%, #DCA8A6 50%, transparent 70%)' }}
              />

              {/* Floating image */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
                style={{ width: 'min(380px, 90vw)', height: 'min(380px, 90vw)' }}
              >
                {/* Circle container */}
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/70"
                  style={{ boxShadow: '0 30px 80px rgba(212,175,55,0.25), 0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img
                    src={slide.image}
                    alt="Hero product"
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>

                {/* Rating badge — top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-4 -right-4 sm:right-0 glass rounded-2xl px-3 py-2.5 shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                    <span className="text-xs font-poppins font-bold text-dark ml-0.5">4.9</span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-poppins mt-0.5">100K+ Reviews</p>
                </motion.div>

                {/* Badge — bottom left */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-6 -left-4 sm:left-0 glass rounded-2xl px-3 py-2.5 shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
                >
                  <p className="text-sm font-poppins font-bold text-primary">{slide.badge}</p>
                  <p className="text-[10px] text-gray-500 font-poppins">This Season</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
