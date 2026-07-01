'use client'

import { motion } from 'framer-motion'
import { RefreshCw, CheckCircle, XCircle, Clock, Package } from 'lucide-react'

export default function RefundPolicyPage() {
  const steps = [
    { icon: Package, step: '1', title: 'Initiate Return', desc: 'Go to My Orders, select the product and click "Return"' },
    { icon: Clock, step: '2', title: 'Free Pickup', desc: 'We schedule a free pickup within 2 business days' },
    { icon: CheckCircle, step: '3', title: 'Quality Check', desc: 'Our team inspects the returned product' },
    { icon: RefreshCw, step: '4', title: 'Refund Processed', desc: 'Refund credited in 5–7 business days' },
  ]

  const eligible = [
    'Unopened products in original packaging',
    'Products with manufacturing defects',
    'Wrong product delivered',
    'Damaged during shipping',
    'Products returned within 30 days',
  ]

  const notEligible = [
    'Opened or used products (hygiene reasons)',
    'Products without original packaging',
    'Products past 30-day return window',
    'Gift cards and digital products',
    'Products marked as final sale',
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-playfair text-4xl font-bold text-dark mb-4">Refund Policy</h1>
          <p className="text-gray-500 font-poppins">
            We want you to love your purchase. If something isn't right, we're here to help.
          </p>
        </motion.div>

        {/* Return process */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-card mb-6">
          <h2 className="font-playfair text-2xl font-bold text-dark mb-8">How to Return</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-poppins font-semibold text-dark text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 font-poppins">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 shadow-card border-l-4 border-green-400">
            <h3 className="font-playfair font-bold text-xl text-dark mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" /> Eligible for Return
            </h3>
            <ul className="space-y-2.5">
              {eligible.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-500 font-poppins">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 shadow-card border-l-4 border-red-400">
            <h3 className="font-playfair font-bold text-xl text-dark mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" /> Not Eligible
            </h3>
            <ul className="space-y-2.5">
              {notEligible.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-500 font-poppins">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-dark rounded-3xl p-8 text-white text-center">
          <h2 className="font-playfair text-2xl font-bold mb-3">Need Help?</h2>
          <p className="text-gray-400 font-poppins mb-6">Our customer care team is available Mon–Sat, 9am–8pm</p>
          <a href="/contact">
            <motion.button whileHover={{ scale: 1.05 }} className="btn-luxury ripple px-8 py-3">
              Contact Support
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

