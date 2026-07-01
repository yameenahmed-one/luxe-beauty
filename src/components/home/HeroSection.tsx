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
    cta2: 'Explore All',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: '✨ Bestseller',
    stats: [{ label: 'Products', value: '500+' }, { label: 'Brands', value: '20+' }, { label: 'Reviews', value: '10K+' }],
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
    image: 'https://images.pexels.com/photos/2735898/pexels-photo-2735898.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: '💄 Most Loved',
    stats: [{ label: 'Happy Clients', value: '50K+' }, { label: 'Cities', value: '100+' }, { label: 'Awards', value: '5' }],
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
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: '🌟 Top Rated',
    stats: [{ label: 'Natural', value: '100%' }, { label: 'Cruelty Free', value: 'Yes' }, { label: 'Vegan', value: 'Yes' }],
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section style={{ background: 'linear-gradient(135deg, #FFF5F5 0%, #FDF8F0 60%, #F7F4EF 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-16 lg:py-24 items-center">

          {/* LEFT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 order-2 lg:order-1"
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-yellow-200 shadow-sm w-fit">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-poppins font-bold text-primary tracking-widest">{slide.tag}</span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="font-playfair font-bold text-dark leading-[1.15]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}>
                  {slide.title}
                </h1>
                <h1 className="font-playfair font-bold gradient-text leading-[1.15]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}>
                  {slide.highlight}
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-gray-600 font-poppins leading-relaxed max-w-lg" style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)' }}>
                {slide.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href={slide.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-luxury ripple flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {slide.cta}
                  </motion.button>
                </Link>
                <Link href="/categories">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary text-primary font-poppins font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {slide.cta2} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-2 border-t border-secondary/30 mt-2">
                {slide.stats.map((s, i) => (
                  <div key={i}>
                    <p className="font-playfair font-bold text-dark text-2xl">{s.value}</p>
                    <p className="text-xs text-gray-500 font-poppins mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <button onClick={() => setCurrent(p => (p - 1 + slides.length) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-primary' : 'w-2 bg-primary/25'}`} />
                  ))}
                </div>
                <button onClick={() => setCurrent(p => (p + 1) % slides.length)}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT - Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              {/* Glow */}
              <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, #D4AF3766, #DCA8A644)' }} />

              {/* Image */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 rounded-full overflow-hidden ring-4 ring-white shadow-2xl"
                style={{
                  width: 'min(360px, 80vw)',
                  height: 'min(360px, 80vw)',
                  boxShadow: '0 30px 70px rgba(212,175,55,0.2), 0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <img src={slide.image} alt="hero" className="w-full h-full object-cover" />
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 right-0 lg:-right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2.5 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-xs font-bold text-dark ml-1">4.9</span>
                </div>
                <p className="text-[10px] text-gray-400 font-poppins mt-0.5">10K+ Reviews</p>
              </motion.div>

              {/* Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-0 lg:-left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2.5 shadow-lg border border-gray-100"
              >
                <p className="text-sm font-poppins font-bold text-primary">{slide.badge}</p>
                <p className="text-[10px] text-gray-400 font-poppins">This Season</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
