'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: '1',
    name: 'Fatima Malik',
    location: 'Karachi',
    rating: 5,
    comment: 'Finally found a trusted online beauty store in Pakistan! The Charlotte Tilbury foundation I ordered arrived in perfect condition. 100% authentic, no doubts.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: 'November 2024',
  },
  {
    id: '2',
    name: 'Ayesha Siddiqui',
    location: 'Lahore',
    rating: 5,
    comment: 'Ordered Huda Beauty palette and Rare Beauty blush. Both arrived next day! The packaging was stunning and products are totally genuine. My go-to store now.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: 'October 2024',
  },
  {
    id: '3',
    name: 'Zara Khan',
    location: 'Islamabad',
    rating: 5,
    comment: 'Love the variety! Found brands here that I couldn\'t find anywhere else in Pakistan. Easy returns process and fast cash on delivery. Highly recommend!',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100',
    date: 'October 2024',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">
            Reviews
          </span>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-dark mt-1 section-title text-left">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 font-poppins text-sm leading-relaxed mb-6">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-poppins font-semibold text-dark text-sm">{t.name}</p>
                  <p className="font-poppins text-xs text-gray-400">{t.location} · {t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
