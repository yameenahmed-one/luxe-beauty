'use client'

import { motion } from 'framer-motion'
import { Sparkles, Heart, Star, Users, Award, Globe } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Users, value: '500K+', label: 'Happy Customers' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Award, value: '50+', label: 'Luxury Brands' },
  { icon: Globe, value: '25+', label: 'Countries Served' },
]

const team = [
  { name: 'Aisha Rahman', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80' },
  { name: 'Sofia Patel', role: 'Head of Curation', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80' },
  { name: 'Meera Singh', role: 'Beauty Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Priya Sharma', role: 'Brand Relations', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80' },
]

const values = [
  { icon: '💎', title: 'Authenticity', desc: 'Every product is 100% genuine, sourced directly from brands and authorized distributors.' },
  { icon: '🌿', title: 'Sustainability', desc: 'We prioritize cruelty-free, vegan, and eco-conscious brands in our curation.' },
  { icon: '✨', title: 'Luxury Access', desc: 'We make world-class luxury beauty accessible to every woman, everywhere.' },
  { icon: '❤️', title: 'Community', desc: 'A 500K+ strong community of beauty lovers, sharing tips and inspiring each other.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Our Story</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-dark mb-6">
              Beauty is Our
              <span className="gradient-text block">Passion</span>
            </h1>
            <p className="text-gray-500 font-poppins text-lg leading-relaxed max-w-2xl mx-auto">
              Luxe Beauty was founded with a single dream: to bring the world's finest beauty to every woman.
              We believe luxury isn't a privilege — it's a feeling everyone deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-playfair text-3xl font-bold text-dark">{stat.value}</p>
                <p className="text-gray-500 font-poppins text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80"
                alt="About Luxe Beauty"
                className="rounded-3xl shadow-luxury w-full object-cover aspect-square"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Who We Are</span>
              <h2 className="font-playfair text-4xl font-bold text-dark">
                Curated with Love, Delivered with Luxury
              </h2>
              <p className="text-gray-500 font-poppins leading-relaxed">
                Founded in 2022, Luxe Beauty started as a small passion project by a group of beauty enthusiasts
                who were tired of counterfeit products and poor shopping experiences.
              </p>
              <p className="text-gray-500 font-poppins leading-relaxed">
                Today, we're India's premier destination for authentic luxury cosmetics, working directly with
                Charlotte Tilbury, Rare Beauty, Fenty Beauty, Huda Beauty, and more. Every product in our store
                is verified, authentic, and shipped with the care it deserves.
              </p>
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-luxury ripple flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Shop Our Collection
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-playfair text-4xl font-bold text-dark mb-4 section-title">Our Values</h2>
            <p className="text-gray-500 font-poppins">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 bg-background rounded-3xl border border-secondary/30 hover:border-primary/30 hover:shadow-card transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-playfair font-bold text-lg text-dark mb-2">{v.title}</h3>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-playfair text-4xl font-bold text-dark mb-4 section-title">Meet the Team</h2>
            <p className="text-gray-500 font-poppins">The beauty experts behind Luxe Beauty.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-secondary group-hover:ring-primary transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-playfair font-bold text-dark">{member.name}</h3>
                <p className="text-sm text-primary font-poppins">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
