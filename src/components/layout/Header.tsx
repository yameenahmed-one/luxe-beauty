'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, Sun, Moon, Sparkles } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartCount, toggleCart } from '@/store/cartSlice'
import { selectWishlistItems } from '@/store/wishlistSlice'
import { categories } from '@/data/products'

export default function Header() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDark, setIsDark]             = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery]   = useState('')
  const [activeMega, setActiveMega]     = useState<string | null>(null)

  const dispatch     = useDispatch()
  const cartCount    = useSelector(selectCartCount)
  const wishlistItems = useSelector(selectWishlistItems)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home',       href: '/' },
    { label: 'Shop',       href: '/shop', mega: true },
    { label: 'Categories', href: '/categories' },
    { label: 'Brands',     href: '/brands' },
    { label: 'Blog',       href: '/blog' },
    { label: 'About',      href: '/about' },
  ]

  return (
    <>
      <header className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg border-b border-pink-100' : 'bg-white border-b border-pink-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Sparkles className="w-7 h-7 text-primary" />
              <span className="font-playfair text-2xl font-bold gradient-text">LUXE BEAUTY</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.mega ? setActiveMega(link.label) : null}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-dark font-poppins text-sm font-medium hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                    {link.mega && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-gold hover:w-full transition-all duration-300" />
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:text-primary transition-colors text-dark"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Dark mode */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:text-primary transition-colors hidden md:flex text-dark"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Wishlist */}
              <Link href="/wishlist" className="relative p-2 hover:text-primary transition-colors text-dark">
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                onClick={() => dispatch(toggleCart())}
                className="relative p-2 hover:text-primary transition-colors text-dark"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <Link href="/dashboard" className="p-2 hover:text-primary transition-colors hidden md:flex text-dark">
                <User className="w-5 h-5" />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 lg:hidden text-dark"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMega === 'Shop' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveMega('Shop')}
              onMouseLeave={() => setActiveMega(null)}
              className="absolute left-0 right-0 bg-white shadow-luxury border-t border-pink-100 z-50"
            >
              <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="grid grid-cols-6 gap-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop?category=${cat.name}`}
                      className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-pink-50 transition-colors group"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-xs font-poppins font-medium text-dark group-hover:text-primary transition-colors text-center">{cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.count} items</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border-t border-pink-100"
            >
              <div className="max-w-2xl mx-auto px-4 py-4">
                <div className="flex items-center gap-3 bg-background rounded-full border border-secondary px-5 py-3">
                  <Search className="w-4 h-4 text-primary flex-shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products, brands, shades..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-sm font-poppins outline-none placeholder:text-gray-400"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')}>
                      <X className="w-4 h-4 text-gray-400 hover:text-primary" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-white z-50 overflow-y-auto shadow-2xl lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-playfair text-xl font-bold gradient-text">LUXE BEAUTY</span>
                  <button onClick={() => setIsMobileOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between py-3 px-3 rounded-xl font-poppins font-medium text-dark hover:bg-pink-50 hover:text-primary transition-all"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 opacity-40 -rotate-90" />
                    </Link>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <Link href="/wishlist" onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 border border-secondary rounded-xl text-sm font-medium hover:bg-secondary/30">
                    <Heart className="w-4 h-4 text-primary" /> Wishlist
                  </Link>
                  <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 border border-secondary rounded-xl text-sm font-medium hover:bg-secondary/30">
                    <User className="w-4 h-4 text-primary" /> Account
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
