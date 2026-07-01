'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ShoppingBag, Heart, User, Menu, X, ChevronDown,
  Sun, Moon, Globe, DollarSign, Sparkles
} from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartCount, toggleCart } from '@/store/cartSlice'
import { selectWishlistItems } from '@/store/wishlistSlice'
import { categories } from '@/data/products'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeMega, setActiveMega] = useState<string | null>(null)

  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const wishlistItems = useSelector(selectWishlistItems)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop', mega: true },
    { label: 'Categories', href: '/categories' },
    { label: 'Brands', href: '/brands' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-secondary/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Sparkles className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="font-playfair text-2xl font-bold gradient-text">LUXE BEAUTY</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.mega && setActiveMega(link.label)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-dark font-poppins text-sm font-medium hover:text-primary transition-colors duration-200 py-2"
                  >
                    {link.label}
                    {link.mega && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  {/* Underline hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:text-primary transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Dark mode */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:text-primary transition-colors hidden md:flex"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Wishlist */}
              <Link href="/wishlist">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative p-2 hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                  {wishlistItems.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold"
                    >
                      {wishlistItems.length}
                    </motion.span>
                  )}
                </motion.div>
              </Link>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleCart())}
                className="relative p-2 hover:text-primary transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Profile */}
              <Link href="/dashboard">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-2 hover:text-primary transition-colors hidden md:flex">
                  <User className="w-5 h-5" />
                </motion.div>
              </Link>

              {/* Mobile menu */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 lg:hidden"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mega Menu - Shop */}
        <AnimatePresence>
          {activeMega === 'Shop' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveMega('Shop')}
              onMouseLeave={() => setActiveMega(null)}
              className="absolute left-0 right-0 bg-white shadow-luxury border-t border-secondary/20"
            >
              <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="grid grid-cols-6 gap-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.name.toLowerCase()}`}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/30 transition-colors group"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="text-xs font-poppins font-medium text-dark group-hover:text-primary transition-colors">{cat.name}</span>
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
              className="bg-white border-t border-secondary/20 shadow-lg"
            >
              <div className="max-w-2xl mx-auto px-4 py-4">
                <div className="relative flex items-center gap-3 bg-background rounded-full border border-secondary px-5 py-3">
                  <Search className="w-4 h-4 text-primary" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search for products, brands, shades..."
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
                {searchQuery && (
                  <div className="mt-3 space-y-1">
                    <p className="text-xs text-gray-400 px-2">Popular searches</p>
                    {['Velvet Lipstick', 'Foundation SPF', 'Rose Eyeshadow', 'Matte Blush'].filter(s =>
                      s.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map(s => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 px-2 py-2 hover:bg-secondary/20 rounded-lg cursor-pointer"
                      >
                        <Search className="w-3 h-3 text-gray-400" />
                        <span className="text-sm text-dark">{s}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-0 top-20 bg-white z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-between py-4 border-b border-secondary/30 text-dark font-poppins font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6 grid grid-cols-2 gap-3">
                  <Link href="/wishlist" onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 border border-secondary rounded-xl text-sm font-medium hover:bg-secondary/30">
                    <Heart className="w-4 h-4 text-primary" /> Wishlist
                  </Link>
                  <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 border border-secondary rounded-xl text-sm font-medium hover:bg-secondary/30">
                    <User className="w-4 h-4 text-primary" /> My Account
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
