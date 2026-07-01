'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Sparkles, MessageCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const contacts = [
  { icon: MapPin, title: 'Visit Us', lines: ['123 Beauty Lane, Bandra West', 'Mumbai, Maharashtra 400050'] },
  { icon: Phone, title: 'Call Us', lines: ['+91 98765 43210', '+91 22 1234 5678'] },
  { icon: Mail, title: 'Email Us', lines: ['hello@luxebeauty.in', 'support@luxebeauty.in'] },
  { icon: Clock, title: 'Working Hours', lines: ['Mon–Sat: 9am–8pm', 'Sunday: 10am–6pm'] },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    toast.success('Message sent! We\'ll reply within 24 hours. 💌', {
      style: { background: '#1B1B1B', color: '#fff', borderRadius: '12px' },
    })
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 3000)
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 text-center py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Get in Touch</span>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-dark mb-4">Contact Us</h1>
          <p className="text-gray-500 font-poppins text-lg">
            Have a question? We'd love to hear from you. Our team responds within 24 hours.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-white rounded-3xl shadow-card hover:shadow-luxury transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-playfair font-bold text-dark mb-1">{c.title}</p>
                  {c.lines.map(line => (
                    <p key={line} className="text-gray-500 font-poppins text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 bg-white rounded-3xl shadow-card"
            >
              <p className="font-playfair font-bold text-dark mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { emoji: '📸', color: '#E1306C', label: 'Instagram' },
                  { emoji: '👍', color: '#1877F2', label: 'Facebook' },
                  { emoji: '🐦', color: '#1DA1F2', label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all"
                    style={{ background: social.color }}
                    aria-label={social.label}
                  >
                    {social.emoji}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-card"
          >
            <h2 className="font-playfair text-2xl font-bold mb-6">Send a Message</h2>

            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Priya Sharma" required
                      className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="you@email.com" required
                      className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <input value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                    placeholder="Order enquiry, Product question..." required
                    className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us how we can help..." required rows={5}
                    className="w-full px-4 py-3 border border-secondary rounded-xl font-poppins text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-luxury ripple py-4 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 gap-4"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-dark">Message Sent!</h3>
                <p className="text-gray-500 font-poppins text-center">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

