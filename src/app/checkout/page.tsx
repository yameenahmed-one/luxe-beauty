'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, CreditCard, MapPin, Package, Lock, Sparkles } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectCartTotal, clearCart } from '@/store/cartSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const steps = ['Shipping', 'Payment', 'Review']

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '',
    cardNumber: '', cardExpiry: '', cardCvv: '', cardName: '',
    paymentMethod: 'card',
  })

  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const router = useRouter()

  const shipping = total >= 999 ? 0 : 99
  const tax = Math.round(total * 0.18)
  const grandTotal = total + shipping + tax

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handlePlaceOrder = () => {
    dispatch(clearCart())
    router.push('/order-success')
  }

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins text-primary font-semibold tracking-wider">SECURE CHECKOUT</span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-dark">Complete Your Order</h1>
        </motion.div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => i < currentStep && setCurrentStep(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-poppins text-sm font-semibold cursor-pointer transition-all ${
                  i === currentStep
                    ? 'bg-primary text-white shadow-glow-pink'
                    : i < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-white border border-secondary text-gray-400'
                }`}
              >
                {i < currentStep ? <Check className="w-4 h-4" /> : <span>{i + 1}</span>}
                {step}
              </motion.div>
              {i < steps.length - 1 && (
                <div className={`w-12 h-0.5 ${i < currentStep ? 'bg-green-500' : 'bg-secondary'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Step 1: Shipping */}
              {currentStep === 0 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl p-8 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-playfair text-2xl font-bold">Shipping Details</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'firstName', label: 'First Name', placeholder: 'Priya', col: 1 },
                      { name: 'lastName', label: 'Last Name', placeholder: 'Sharma', col: 1 },
                      { name: 'email', label: 'Email Address', placeholder: 'priya@email.com', col: 2 },
                      { name: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', col: 1 },
                      { name: 'pincode', label: 'PIN Code', placeholder: '400001', col: 1 },
                      { name: 'address', label: 'Address', placeholder: '123 Beauty Lane, Apartment 4B', col: 2 },
                      { name: 'city', label: 'City', placeholder: 'Mumbai', col: 1 },
                      { name: 'state', label: 'State', placeholder: 'Maharashtra', col: 1 },
                    ].map((field) => (
                      <div key={field.name} className={field.col === 2 ? 'col-span-2' : ''}>
                        <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          {field.label}
                        </label>
                        <input
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStep(1)}
                    className="w-full btn-luxury ripple py-4 mt-6 flex items-center justify-center gap-2"
                  >
                    Continue to Payment
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Payment */}
              {currentStep === 1 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl p-8 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-playfair text-2xl font-bold">Payment Method</h2>
                  </div>

                  {/* Payment options */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                      { id: 'upi', label: 'UPI', icon: '📱' },
                      { id: 'cod', label: 'Cash on Delivery', icon: '🏠' },
                    ].map((method) => (
                      <motion.button
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setForm(prev => ({ ...prev, paymentMethod: method.id }))}
                        className={`p-4 rounded-2xl border-2 text-center font-poppins text-sm font-semibold transition-all ${
                          form.paymentMethod === method.id
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-secondary text-gray-500 hover:border-primary/40'
                        }`}
                      >
                        <div className="text-2xl mb-1">{method.icon}</div>
                        <div className="text-xs">{method.label}</div>
                      </motion.button>
                    ))}
                  </div>

                  {form.paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      {/* Card preview */}
                      <div className="relative h-44 rounded-2xl bg-gradient-to-br from-dark to-dark/80 p-6 text-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gold/15 rounded-full blur-2xl" />
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-8">
                            <Sparkles className="w-6 h-6 text-gold" />
                            <div className="font-playfair font-bold text-gold tracking-widest text-sm">LUXE BEAUTY</div>
                          </div>
                          <p className="font-poppins tracking-[0.2em] text-lg mb-4">
                            {form.cardNumber || '•••• •••• •••• ••••'}
                          </p>
                          <div className="flex justify-between text-xs text-white/60">
                            <span>{form.cardName || 'CARD HOLDER'}</span>
                            <span>{form.cardExpiry || 'MM/YY'}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Card Number</label>
                        <input name="cardNumber" value={form.cardNumber} onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Expiry Date</label>
                          <input name="cardExpiry" value={form.cardExpiry} onChange={handleChange}
                            placeholder="MM / YY"
                            className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                          <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">CVV</label>
                          <input name="cardCvv" value={form.cardCvv} onChange={handleChange}
                            placeholder="•••"
                            className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Name on Card</label>
                        <input name="cardName" value={form.cardName} onChange={handleChange}
                          placeholder="Priya Sharma"
                          className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary" />
                      </div>
                    </motion.div>
                  )}

                  {form.paymentMethod === 'upi' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">UPI ID</label>
                      <input placeholder="yourname@paytm" className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary" />
                    </motion.div>
                  )}

                  {form.paymentMethod === 'cod' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-sm font-poppins text-amber-700">
                      💡 Pay in cash when your order is delivered. Extra ₹40 COD fee applies.
                    </motion.div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentStep(0)}
                      className="px-6 py-4 border border-secondary rounded-2xl font-poppins text-sm font-semibold hover:border-primary transition-colors"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 btn-luxury ripple py-4 flex items-center justify-center gap-2"
                    >
                      Review Order <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review */}
              {currentStep === 2 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl p-8 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-playfair text-2xl font-bold">Review Order</h2>
                  </div>

                  <div className="space-y-3 mb-6">
                    {items.map(item => (
                      <div key={item.id} className="flex items-center gap-4 p-3 bg-background rounded-2xl">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-poppins font-semibold text-sm">{item.product.name}</p>
                          <p className="text-xs text-gray-400">{item.product.brand} · Qty: {item.quantity}</p>
                        </div>
                        <span className="font-playfair font-bold text-primary">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-background rounded-2xl space-y-2 mb-6 text-sm font-poppins">
                    <div className="flex justify-between text-gray-500">
                      <span>Shipping to</span>
                      <span className="text-dark font-semibold">{form.city || 'Mumbai'}, {form.state || 'Maharashtra'}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Payment</span>
                      <span className="text-dark font-semibold capitalize">{form.paymentMethod === 'card' ? 'Credit Card' : form.paymentMethod.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-4 border border-secondary rounded-2xl font-poppins text-sm font-semibold hover:border-primary transition-colors"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={handlePlaceOrder}
                      className="flex-1 btn-luxury ripple py-4 flex items-center justify-center gap-2 text-base"
                    >
                      <Lock className="w-4 h-4" />
                      Place Order · ₹{grandTotal.toLocaleString()}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-3xl p-6 shadow-card sticky top-28">
              <h3 className="font-playfair text-xl font-bold mb-5">Order Summary</h3>
              <div className="space-y-3 mb-5 max-h-60 overflow-y-auto no-scrollbar">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-secondary">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-poppins font-semibold truncate">{item.product.name}</p>
                      <p className="text-xs text-gray-400">{item.product.brand}</p>
                    </div>
                    <span className="text-sm font-poppins font-semibold text-dark whitespace-nowrap">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-secondary/30 pt-4 space-y-2 text-sm font-poppins">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span><span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-500 font-semibold' : ''}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>GST (18%)</span><span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-playfair font-bold text-lg pt-2 border-t border-secondary/30">
                  <span>Total</span>
                  <span className="text-primary">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 font-poppins">
                <Lock className="w-3 h-3" />
                <span>SSL Encrypted & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
