'use client'

import { useState, use } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingBag, Star, Share2, ChevronDown, Truck, Shield, RefreshCw, Plus, Minus, ZoomIn } from 'lucide-react'
import { products } from '@/data/products'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/store/cartSlice'
import { toggleWishlist } from '@/store/wishlistSlice'
import { selectWishlistItems } from '@/store/wishlistSlice'
import ProductCard from '@/components/ui/ProductCard'
import toast from 'react-hot-toast'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products.find(p => p.id === id)
  if (!product) notFound()

  const [selectedShade, setSelectedShade] = useState(product.shades?.[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<string | null>('description')
  const [isZoomed, setIsZoomed] = useState(false)

  const dispatch = useDispatch()
  const wishlistItems = useSelector(selectWishlistItems)
  const isWishlisted = wishlistItems.some(item => item.id === product.id)

  const images = [product.image, product.image, product.image]

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4)

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description || 'A luxurious premium beauty product crafted with the finest ingredients for flawless results.' },
    { id: 'ingredients', title: 'Ingredients', content: 'Water, Cyclopentasiloxane, Dimethicone, Glycerin, Niacinamide, Vitamin E, Hyaluronic Acid, Retinol, SPF 30. Cruelty-free and vegan formulation.' },
    { id: 'howto', title: 'How To Use', content: 'Apply a small amount to clean, moisturized skin. Blend outward using fingertips or a brush. Build coverage as desired. Set with powder for longevity.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free shipping on orders over ₹999. Delivery in 2-5 business days. Easy 30-day returns on all products.' },
  ]

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-xs font-poppins text-gray-400 mb-8"
        >
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary">Shop</a>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div
              className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-luxury mb-4 cursor-zoom-in group"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <motion.img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold font-poppins ${
                  product.badge === 'sale' ? 'bg-red-500 text-white' :
                  product.badge === 'new' ? 'bg-primary text-white' :
                  'bg-gold text-dark'
                }`}>
                  {product.badge === 'sale' ? `${product.discount}% OFF` : product.badge.toUpperCase()}
                </div>
              )}
              <div className="absolute top-4 right-4 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-primary" />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-primary shadow-glow-pink' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Brand + Name */}
            <div>
              <p className="text-sm font-poppins font-semibold text-primary tracking-wider uppercase mb-2">{product.brand}</p>
              <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-dark leading-tight mb-3">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-gray-200'}`} />
                  ))}
                </div>
                <span className="font-poppins font-semibold text-sm text-dark">{product.rating}</span>
                <span className="text-gray-400 text-sm font-poppins">({product.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="font-playfair text-4xl font-bold text-dark">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-400 line-through font-poppins">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-poppins font-bold rounded-full">
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            <div className="h-px bg-secondary" />

            {/* Shade selection */}
            {product.shades && product.shades.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-poppins font-semibold text-sm text-dark">Select Shade</p>
                  {selectedShade && (
                    <span className="text-xs text-primary font-poppins">{selectedShade}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.shades.map((shade, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedShade(shade)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedShade === shade
                          ? 'border-primary shadow-glow-pink scale-110 ring-2 ring-primary ring-offset-2'
                          : 'border-white shadow-sm hover:border-primary/50'
                      }`}
                      style={{ background: shade }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="font-poppins font-semibold text-sm text-dark mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white border border-secondary rounded-xl px-4 py-2">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:text-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="font-poppins font-semibold w-8 text-center">{quantity}</span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:text-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
                <span className="text-sm text-green-500 font-poppins">✓ In Stock</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  dispatch(addToCart({ product, quantity, shade: selectedShade || undefined }))
                  toast.success('Added to cart!', { style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' } })
                }}
                className="flex-1 btn-luxury ripple flex items-center justify-center gap-2 py-4 text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  dispatch(toggleWishlist(product))
                  toast(isWishlisted ? 'Removed from wishlist' : '❤️ Saved to wishlist!', {
                    style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' }
                  })
                }}
                className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all ${
                  isWishlisted ? 'bg-primary border-primary text-white' : 'border-secondary hover:border-primary text-dark hover:text-primary'
                }`}
              >
                <motion.div animate={isWishlisted ? { scale: [1, 1.4, 1] } : {}}>
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-2xl border-2 border-secondary flex items-center justify-center hover:border-primary transition-colors"
              >
                <Share2 className="w-5 h-5 text-gray-400 hover:text-primary" />
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Truck, text: 'Free Delivery', sub: 'Over ₹999' },
                { icon: Shield, text: 'Authentic', sub: '100% Genuine' },
                { icon: RefreshCw, text: 'Easy Return', sub: '30 Days' },
              ].map((item) => (
                <div key={item.text} className="flex flex-col items-center gap-1.5 p-3 bg-white rounded-2xl border border-secondary/30 text-center">
                  <item.icon className="w-5 h-5 text-primary" />
                  <p className="text-xs font-poppins font-semibold text-dark">{item.text}</p>
                  <p className="text-xs text-gray-400 font-poppins">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-2">
              {accordionItems.map((item) => (
                <div key={item.id} className="border border-secondary/30 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-4 text-left font-poppins font-semibold text-sm hover:bg-secondary/20 transition-colors"
                  >
                    {item.title}
                    <motion.div animate={{ rotate: openAccordion === item.id ? 180 : 0 }}>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-gray-500 font-poppins leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl font-bold text-dark mb-8 text-center"
            >
              You May Also Love
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
