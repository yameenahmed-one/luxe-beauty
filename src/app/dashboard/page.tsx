'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Package, Heart, MapPin, Star, Settings,
  ChevronRight, ShoppingBag, Sparkles, TrendingUp,
  Edit, Camera, Bell, Shield, CreditCard
} from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '@/store/cartSlice'
import { selectWishlistItems } from '@/store/wishlistSlice'
import Link from 'next/link'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

const tabs = [
  { id: 'overview', label: 'Overview', icon: TrendingUp },
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  { id: 'addresses', label: 'Addresses', icon: MapPin },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const mockOrders = [
  { id: 'LB847291', date: 'Dec 18, 2024', status: 'Delivered', items: 3, total: 8997, products: [products[0], products[1], products[3]] },
  { id: 'LB736182', date: 'Dec 5, 2024', status: 'Shipped', items: 1, total: 4299, products: [products[2]] },
  { id: 'LB625073', date: 'Nov 28, 2024', status: 'Processing', items: 2, total: 5298, products: [products[4], products[7]] },
]

const statusColors: Record<string, string> = {
  'Delivered': 'bg-green-100 text-green-700',
  'Shipped': 'bg-blue-100 text-blue-700',
  'Processing': 'bg-amber-100 text-amber-700',
  'Cancelled': 'bg-red-100 text-red-700',
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const wishlist = useSelector(selectWishlistItems)
  const cartItems = useSelector(selectCartItems)

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Profile card */}
            <div className="bg-white rounded-3xl p-6 shadow-card mb-4 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-luxury flex items-center justify-center text-white font-playfair text-3xl font-bold">
                  P
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-sm"
                >
                  <Camera className="w-3.5 h-3.5 text-white" />
                </motion.button>
              </div>
              <h3 className="font-playfair font-bold text-dark text-lg">Priya Sharma</h3>
              <p className="text-gray-400 text-xs font-poppins mt-1">priya@email.com</p>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-poppins font-semibold text-gold">Luxe Gold Member</span>
              </div>
              <div className="mt-4 pt-4 border-t border-secondary/30 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="font-playfair font-bold text-dark">{mockOrders.length}</p>
                  <p className="text-[10px] text-gray-400 font-poppins">Orders</p>
                </div>
                <div>
                  <p className="font-playfair font-bold text-dark">{wishlist.length}</p>
                  <p className="text-[10px] text-gray-400 font-poppins">Wishlist</p>
                </div>
                <div>
                  <p className="font-playfair font-bold text-dark">2.4K</p>
                  <p className="text-[10px] text-gray-400 font-poppins">Points</p>
                </div>
              </div>
            </div>

            {/* Nav */}
            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full px-5 py-4 font-poppins text-sm font-medium transition-all border-b border-secondary/20 last:border-b-0 ${
                    activeTab === tab.id ? 'bg-primary/5 text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                  {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                </motion.button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {/* Overview */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="font-playfair text-3xl font-bold text-dark mb-6">Welcome back, Priya! 👋</h2>

                  {/* Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Total Orders', value: '12', icon: ShoppingBag, color: 'bg-primary/10 text-primary' },
                      { label: 'Wishlist Items', value: String(wishlist.length), icon: Heart, color: 'bg-pink-100 text-pink-600' },
                      { label: 'Reward Points', value: '2,450', icon: Sparkles, color: 'bg-gold/10 text-gold' },
                      { label: 'Total Saved', value: 'Rs.3,240', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-card">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                          <stat.icon className="w-5 h-5" />
                        </div>
                        <p className="font-playfair font-bold text-2xl text-dark">{stat.value}</p>
                        <p className="text-gray-400 text-xs font-poppins mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent orders */}
                  <div className="bg-white rounded-3xl shadow-card p-6 mb-6">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="font-playfair font-bold text-xl">Recent Orders</h3>
                      <button onClick={() => setActiveTab('orders')} className="text-xs text-primary font-poppins font-semibold hover:underline">
                        View all
                      </button>
                    </div>
                    <div className="space-y-3">
                      {mockOrders.slice(0, 2).map(order => (
                        <div key={order.id} className="flex items-center gap-4 p-4 bg-background rounded-2xl">
                          <div className="flex -space-x-3">
                            {order.products.slice(0, 2).map(p => (
                              <img key={p.id} src={p.image} alt={p.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white" />
                            ))}
                          </div>
                          <div className="flex-1">
                            <p className="font-poppins font-semibold text-sm text-dark">#{order.id}</p>
                            <p className="text-xs text-gray-400">{order.date} · {order.items} items</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-poppins font-bold ${statusColors[order.status]}`}>
                              {order.status}
                            </span>
                            <p className="text-sm font-playfair font-bold text-dark mt-1">Rs.{order.total.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reward banner */}
                  <div className="bg-gradient-to-r from-dark to-dark/90 rounded-3xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gold/20 rounded-full blur-2xl" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-5 h-5 text-gold" />
                          <span className="text-xs font-poppins font-semibold text-gold uppercase tracking-wider">Luxe Rewards</span>
                        </div>
                        <p className="font-playfair text-2xl font-bold mb-1">2,450 Points</p>
                        <p className="text-gray-400 text-sm font-poppins">Rs.245 value · 550 points to next tier</p>
                        <div className="mt-3 h-2 bg-white/20 rounded-full w-48">
                          <div className="h-full w-[82%] bg-gradient-to-r from-gold to-primary rounded-full" />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className="btn-luxury text-sm px-5 py-3"
                      >
                        Redeem
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Orders */}
              {activeTab === 'orders' && (
                <motion.div key="orders" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-playfair text-3xl font-bold text-dark mb-6">My Orders</h2>
                  <div className="space-y-4">
                    {mockOrders.map(order => (
                      <div key={order.id} className="bg-white rounded-3xl shadow-card p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-poppins font-bold text-dark">Order #{order.id}</p>
                            <p className="text-xs text-gray-400 font-poppins mt-0.5">{order.date}</p>
                          </div>
                          <span className={`px-3 py-1.5 rounded-full text-xs font-poppins font-bold ${statusColors[order.status]}`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex gap-3 mb-4">
                          {order.products.map(p => (
                            <img key={p.id} src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover ring-2 ring-secondary" />
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-secondary/30">
                          <span className="font-playfair font-bold text-lg text-dark">Rs.{order.total.toLocaleString()}</span>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                              className="px-4 py-2 border border-secondary rounded-xl text-xs font-poppins font-semibold hover:border-primary hover:text-primary transition-colors"
                            >
                              Track Order
                            </motion.button>
                            {order.status === 'Delivered' && (
                              <motion.button
                                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-poppins font-semibold hover:bg-primary-dark transition-colors"
                              >
                                Reorder
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Wishlist */}
              {activeTab === 'wishlist' && (
                <motion.div key="wishlist" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-playfair text-3xl font-bold text-dark">My Wishlist</h2>
                    <Link href="/wishlist">
                      <span className="text-xs text-primary font-poppins font-semibold hover:underline">View full wishlist</span>
                    </Link>
                  </div>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                      <Heart className="w-16 h-16 mx-auto mb-4 text-secondary" />
                      <p className="font-playfair text-xl text-gray-400">Your wishlist is empty</p>
                      <Link href="/shop">
                        <motion.button whileHover={{ scale: 1.05 }} className="btn-luxury mt-6">
                          Discover Products
                        </motion.button>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Addresses */}
              {activeTab === 'addresses' && (
                <motion.div key="addresses" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-playfair text-3xl font-bold text-dark">Saved Addresses</h2>
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-luxury py-2.5 px-5 text-sm">
                      + Add Address
                    </motion.button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { type: 'Home', address: '123 Beauty Lane, Apartment 4B, Bandra West, Mumbai — 400050', isDefault: true },
                      { type: 'Office', address: '456 Fashion Street, 2nd Floor, Andheri East, Mumbai — 400069', isDefault: false },
                    ].map((addr) => (
                      <div key={addr.type} className="bg-white rounded-3xl p-6 shadow-card border-2 border-transparent hover:border-primary/20 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-poppins font-semibold text-dark">{addr.type}</span>
                          </div>
                          {addr.isDefault && (
                            <span className="px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-poppins font-bold rounded-full">DEFAULT</span>
                          )}
                        </div>
                        <p className="text-gray-500 font-poppins text-sm leading-relaxed mb-4">{addr.address}</p>
                        <div className="flex gap-3">
                          <button className="flex items-center gap-1.5 text-xs font-poppins text-primary hover:underline">
                            <Edit className="w-3 h-3" /> Edit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Settings */}
              {activeTab === 'settings' && (
                <motion.div key="settings" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-playfair text-3xl font-bold text-dark mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    {[
                      { icon: User, title: 'Personal Information', desc: 'Update your name, email and phone' },
                      { icon: Shield, title: 'Password & Security', desc: 'Change password and security settings' },
                      { icon: Bell, title: 'Notifications', desc: 'Manage email and push notifications' },
                      { icon: CreditCard, title: 'Payment Methods', desc: 'Saved cards and payment preferences' },
                    ].map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-card cursor-pointer hover:shadow-luxury transition-all group"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-poppins font-semibold text-dark">{item.title}</p>
                          <p className="text-xs text-gray-400 font-poppins mt-0.5">{item.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Reviews */}
              {activeTab === 'reviews' && (
                <motion.div key="reviews" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="font-playfair text-3xl font-bold text-dark mb-6">My Reviews</h2>
                  <div className="space-y-4">
                    {products.slice(0, 3).map((product, i) => (
                      <div key={product.id} className="bg-white rounded-3xl p-6 shadow-card">
                        <div className="flex gap-4 mb-4">
                          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-2xl object-cover" />
                          <div>
                            <p className="font-poppins font-semibold text-dark">{product.name}</p>
                            <p className="text-xs text-gray-400 font-poppins mb-2">{product.brand}</p>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, j) => (
                                <Star key={j} className={`w-3.5 h-3.5 ${j < 5 - i ? 'fill-gold text-gold' : 'text-gray-200'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-500 font-poppins text-sm">
                          Amazing product! The quality is top-notch and it lasted all day. Definitely worth every penny. Will repurchase!
                        </p>
                        <p className="text-xs text-gray-400 font-poppins mt-3">Nov {15 + i * 5}, 2024</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

