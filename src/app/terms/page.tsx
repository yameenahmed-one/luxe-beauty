'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing and using Luxe Beauty\'s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
  { title: '2. Use of Services', content: 'You may use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.' },
  { title: '3. Products and Pricing', content: 'All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to change prices at any time. We make every effort to display accurate product information, but errors may occur.' },
  { title: '4. Orders and Payment', content: 'By placing an order, you offer to purchase a product. We reserve the right to accept or decline any order. Payment must be received in full before your order is processed and shipped.' },
  { title: '5. Shipping and Delivery', content: 'Delivery times are estimates and not guaranteed. Risk of loss and title pass to you upon delivery. We are not responsible for delays caused by courier services or customs.' },
  { title: '6. Returns and Refunds', content: 'We offer a 30-day return policy on unopened products. Products must be in original, unused condition. Once we receive and inspect the return, we\'ll process your refund within 5-7 business days.' },
  { title: '7. Intellectual Property', content: 'All content on this website, including text, graphics, logos, and images, is the property of Luxe Beauty and is protected by applicable intellectual property laws.' },
  { title: '8. Limitation of Liability', content: 'Luxe Beauty shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or products.' },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl font-bold text-dark mb-4">Terms of Service</h1>
          <p className="text-gray-500 font-poppins">Last updated: December 20, 2024</p>
        </motion.div>
        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl p-8 shadow-card"
            >
              <h2 className="font-playfair text-xl font-bold text-dark mb-4">{s.title}</h2>
              <p className="text-gray-500 font-poppins text-sm leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

