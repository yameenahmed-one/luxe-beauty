'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, MessageCircle, Truck, RefreshCw, CreditCard, Package, Shield } from 'lucide-react'

const categories = [
  { icon: Truck, label: 'Shipping', id: 'shipping' },
  { icon: RefreshCw, label: 'Returns', id: 'returns' },
  { icon: CreditCard, label: 'Payments', id: 'payments' },
  { icon: Package, label: 'Orders', id: 'orders' },
  { icon: Shield, label: 'Authenticity', id: 'authenticity' },
  { icon: MessageCircle, label: 'General', id: 'general' },
]

const faqs = [
  { id: 1, cat: 'shipping', q: 'How long does delivery take?', a: 'Standard delivery takes 3–5 business days. Express delivery (1–2 days) is available for Rs.149. Free standard shipping on all orders above Rs.999.' },
  { id: 2, cat: 'shipping', q: 'Do you ship internationally?', a: 'Yes! We ship to 25+ countries. International shipping rates and times vary by destination. Check our shipping calculator at checkout.' },
  { id: 3, cat: 'shipping', q: 'How do I track my order?', a: "Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order in your account dashboard under \"My Orders\"." },
  { id: 4, cat: 'returns', q: 'What is your return policy?', a: 'We offer 30-day hassle-free returns on all unopened products. For hygiene reasons, opened products cannot be returned unless defective.' },
  { id: 5, cat: 'returns', q: 'How do I initiate a return?', a: "Go to My Account > Orders > Select Order > Request Return. Fill the form and we'll arrange a free pickup within 2 business days." },
  { id: 6, cat: 'returns', q: 'How long does a refund take?', a: 'Refunds are processed within 5–7 business days of receiving the returned product. The amount will be credited to your original payment method.' },
  { id: 7, cat: 'payments', q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, UPI, net banking, Paytm, Google Pay, PhonePe, and Cash on Delivery.' },
  { id: 8, cat: 'payments', q: 'Is my payment information secure?', a: 'Absolutely. All transactions are secured with SSL encryption and we never store your card details. We are PCI-DSS compliant.' },
  { id: 9, cat: 'orders', q: 'Can I modify or cancel my order?', a: 'Orders can be modified or cancelled within 2 hours of placement. After that, contact us immediately at hello@luxebeauty.in.' },
  { id: 10, cat: 'authenticity', q: 'Are all products authentic?', a: '100% guaranteed. We source directly from brands and authorized distributors. Every product comes with an authenticity certificate.' },
  { id: 11, cat: 'authenticity', q: 'Do you sell cruelty-free products?', a: 'We curate a wide range of cruelty-free and vegan products. Look for the 🐰 icon on product listings. Rare Beauty, Charlotte Tilbury and Fenty Beauty are fully cruelty-free.' },
  { id: 12, cat: 'general', q: 'Do you have a loyalty program?', a: 'Yes! Join Luxe Rewards and earn points on every purchase. Redeem for discounts, free products, and exclusive member perks.' },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openId, setOpenId] = useState<number | null>(1)
  const [search, setSearch] = useState('')

  const filtered = faqs.filter(f => {
    const matchCat = activeCategory === 'all' || f.cat === activeCategory
    const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 text-center py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-playfair text-5xl font-bold text-dark mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-gray-500 font-poppins text-lg mb-8">
            Everything you need to know about Luxe Beauty.
          </p>
          {/* Search */}
          <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-full shadow-card border border-secondary/30 max-w-lg mx-auto">
            <Search className="w-4 h-4 text-primary flex-shrink-0" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search your question..."
              className="flex-1 bg-transparent font-poppins text-sm outline-none"
            />
          </div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full font-poppins text-sm font-semibold transition-all ${
              activeCategory === 'all' ? 'bg-primary text-white shadow-glow-pink' : 'bg-white border border-secondary text-gray-500 hover:border-primary hover:text-primary'
            }`}
          >
            All Topics
          </motion.button>
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-poppins text-sm font-semibold transition-all ${
                activeCategory === cat.id ? 'bg-primary text-white shadow-glow-pink' : 'bg-white border border-secondary text-gray-500 hover:border-primary hover:text-primary'
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-poppins">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              No questions found. Try a different search.
            </div>
          ) : (
            filtered.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-secondary/20"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-background/50 transition-colors"
                >
                  <span className="font-poppins font-semibold text-dark pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-500 font-poppins text-sm leading-relaxed border-t border-secondary/20 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-10 bg-dark rounded-3xl text-white"
        >
          <h2 className="font-playfair text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-gray-400 font-poppins mb-6">Our beauty experts are here to help you.</p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="btn-luxury ripple px-8 py-3"
            >
              Contact Us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

