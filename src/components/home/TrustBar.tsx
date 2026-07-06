'use client'

import { motion } from 'framer-motion'
import { Truck, CheckCircle, CreditCard, RotateCcw, Star } from 'lucide-react'

const items = [
  { icon: Truck,        label: 'Free Delivery Over Rs.2000' },
  { icon: CheckCircle, label: '100% Authentic Products' },
  { icon: CreditCard,  label: 'Cash on Delivery' },
  { icon: RotateCcw,   label: '7-Day Easy Returns' },
  { icon: Star,        label: '50,000+ Happy Customers' },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start lg:justify-between overflow-x-auto no-scrollbar py-4 gap-8 lg:gap-4">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 flex-shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-poppins font-medium text-gray-600 whitespace-nowrap">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
