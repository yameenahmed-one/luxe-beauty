'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

const links = {
  Shop: [
    { label: 'New Arrivals', href: '/shop?sort=newest' },
    { label: 'Best Sellers', href: '/shop?sort=popular' },
    { label: 'Sale',         href: '/shop?sale=true' },
    { label: 'All Products', href: '/shop' },
    { label: 'Gift Cards',   href: '/shop' },
  ],
  Help: [
    { label: 'Contact Us',   href: '/contact' },
    { label: 'FAQs',         href: '/faq' },
    { label: 'Track Order',  href: '/track-order' },
    { label: 'Returns',      href: '/refund-policy' },
    { label: 'Shipping Info',href: '/faq' },
  ],
  Company: [
    { label: 'About Us',    href: '/about' },
    { label: 'Our Story',   href: '/about' },
    { label: 'Blog',        href: '/blog' },
    { label: 'Careers',     href: '/about' },
    { label: 'Press',       href: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy',    href: '/refund-policy' },
    { label: 'Cookie Policy',    href: '/privacy-policy' },
  ],
}

const socials = [
  { label: 'Instagram', href: '#', abbr: 'IG' },
  { label: 'Facebook',  href: '#', abbr: 'FB' },
  { label: 'YouTube',   href: '#', abbr: 'YT' },
  { label: 'TikTok',    href: '#', abbr: 'TK' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-playfair text-2xl font-bold text-white tracking-wide">
                LUXE <span className="text-primary">BEAUTY</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-poppins max-w-xs">
              Pakistan&apos;s #1 destination for 100% authentic luxury beauty. Shop 500+ brands with nationwide delivery.
            </p>

            {/* Social */}
            <div className="flex gap-2 mb-8">
              {socials.map(({ href, label, abbr }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors text-[10px] font-bold text-white"
                >
                  {abbr}
                </motion.a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Shop #12, Zainab Market, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@luxebeauty.pk</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-poppins font-semibold text-sm text-white mb-5 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors font-poppins"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-poppins">
            © 2024 Luxe Beauty Pakistan. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['VISA', 'MASTERCARD', 'EASYPAISA', 'JAZZCASH', 'COD'].map((pay) => (
              <div
                key={pay}
                className="px-2.5 py-1 bg-white/10 rounded text-[10px] text-gray-400 font-bold tracking-wider"
              >
                {pay}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
