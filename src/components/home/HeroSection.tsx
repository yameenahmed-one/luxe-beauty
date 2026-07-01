'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Discover Your',
    highlight: 'Perfect Shade',
    subtitle: 'Luxury makeup crafted for every skin tone. Explore our exclusive collection of premium cosmetics.',
    cta: 'Shop Now',
    ctaLink: '/shop',
    tag: 'NEW COLLECTION 2024',
    badge: '✨ Bestseller',
    accent: '#D4AF37',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    stats: [{ label: 'Products', value: '2000+' }, { label: 'Brands', value: '50+' }, { label: 'Reviews', value: '100K+' }],
  },
  {
    id: 2,
    title: 'Define Your',
    highlight: 'Luxury Glow',
    subtitle: 'From bold to natural — our curated palettes deliver flawless looks for every occasion.',
    cta: 'Explore Collection',
    ctaLink: '/categories',
    tag: 'LIMITED EDITION',
    badge: '💄 Most Loved',
    accent: '#DCA8A6',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
    stats: [{ label: 'Happy Clients', value: '500K+' }, { label: 'Countries', value: '25+' }, { label: 'Awards', value: '15' }],
  },
  {
    id: 3,
    title: 'The Art of',
    highlight: 'Timeless Beauty',
    subtitle: 'Elevate your beauty ritual with world-class formulas loved by makeup artists globally.',
    cta: 'View Bestsellers',
    ctaLink: '/shop',
    tag: "EDITOR'S PICK",
    badge: '🌟 Top Rated',
    accent: '#D4AF37',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    stats: [{ label: 'Ingredients', value: '100% Natural' }, { label: 'Cruelty Free', value: 'Yes' }, { label: 'Vegan', value: 'Yes' }],
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const slide = slides[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(135deg, #FFF5F5 0%, #F7F4EF 100%)' }}
    >
      {/* Subtle floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[6%] w-12 h-12 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        />
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-[8%] w-16 h-16 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #DCA8A6, transparent)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 left-[12%] w-24 h-24 rounded-full"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              top: `${15 + i * 12}%`,
              left: `${4 + i * 15}%`,
              background: i % 2 === 0 ? '#D4AF37' : '#DCA8A6',
              opacity: 0.3,
            }}
            animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="space-y-6"
            >
              {/* Tag pill */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/25 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-poppins font-semibold text-primary tracking-widest">{slide.tag}</span>
              </motion.div>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text leading-tight"
                >
                  {slide.highlight}
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-base lg:text-lg font-poppins leading-relaxed max-w-md"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href={slide.ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-luxury ripple text-sm px-8 py-3.5"
                  >
                    {slide.cta}
                  </motion.button>
                </Link>
                <Link href="/categories">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-poppins font-semibold text-sm tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Explore Collection
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8 pt-2"
              >
                {slide.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-playfair font-bold text-xl text-dark">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-poppins mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.92, rotate: 2 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              {/* Glow ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${slide.accent}44 0%, transparent 65%)` }}
              />

              {/* Main image — constrained size */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-luxury ring-4 ring-white/60"
              >
                <img
                  src={slide.image}
                  alt="Hero product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </motion.div>

              {/* Floating rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 -right-2 lg:right-2 glass rounded-2xl px-4 py-3 shadow-luxury"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-poppins font-semibold text-dark">4.9/5</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 font-poppins">100K+ Reviews</p>
              </motion.div>

              {/* Floating product badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-2 lg:left-2 glass rounded-2xl px-4 py-3 shadow-luxury"
              >
                <p className="text-sm font-poppins font-bold text-primary">{slide.badge}</p>
                <p className="text-xs text-gray-500 font-poppins">This Season</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="p-3 glass rounded-full shadow-sm hover:bg-primary hover:text-white transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              animate={{ width: i === current ? 28 : 8 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="p-3 glass rounded-full shadow-sm hover:bg-primary hover:text-white transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  )
}
