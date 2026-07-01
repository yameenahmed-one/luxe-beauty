'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, Instagram, Facebook, Twitter, Youtube, Pinterest, MapPin, Phone, Mail, CreditCard, Truck, Shield, RefreshCw } from 'lucide-react'

export default function Footer() {
  const links = {
    Company: ['About Us', 'Careers', 'Press', 'Our Story', 'Sustainability'],
    Shop: ['New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards', 'Luxury Kits'],
    Support: ['Contact Us', 'FAQs', 'Shipping Info', 'Returns', 'Track Order'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
  }

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Pinterest, href: '#', label: 'Pinterest' },
  ]

  const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over ₹999' },
    { icon: Shield, title: 'Authentic Products', desc: '100% genuine guaranteed' },
    { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
    { icon: CreditCard, title: 'Secure Payment', desc: 'SSL encrypted checkout' },
  ]

  return (
    <footer className="bg-dark text-white">
      {/* Features bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-white/10 flex-shrink-0">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="font-poppins font-semibold text-sm">{f.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="font-playfair text-2xl font-bold gradient-text">LUXE BEAUTY</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-poppins">
              Your destination for world-class luxury beauty. We curate the finest cosmetics from the globe&apos;s most coveted brands.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            {/* Contact */}
            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>123 Beauty Lane, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@luxebeauty.in</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-playfair text-lg font-semibold mb-5 text-white">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-400 hover:text-primary transition-colors font-poppins hover:translate-x-1 inline-block transition-transform"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-gold/20 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Get Beauty Secrets & Offers</h3>
              <p className="text-gray-400 text-sm font-poppins">Join 500K+ beauty lovers. Unsubscribe anytime.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 text-sm font-poppins focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury ripple text-sm px-6 py-3 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-poppins">
            © 2024 Luxe Beauty. All rights reserved. Made with ❤️ for beauty lovers.
          </p>
          <div className="flex items-center gap-3">
            {['visa', 'mastercard', 'upi', 'paytm', 'gpay'].map((pay) => (
              <div key={pay} className="px-3 py-1.5 bg-white/10 rounded-lg text-xs text-gray-400 uppercase font-bold tracking-wider">
                {pay}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
