'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80', likes: '12.4K', comments: '234' },
  { id: 2, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80', likes: '8.7K', comments: '189' },
  { id: 3, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80', likes: '15.2K', comments: '412' },
  { id: 4, image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c93?w=400&q=80', likes: '9.8K', comments: '267' },
  { id: 5, image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&q=80', likes: '11.1K', comments: '345' },
  { id: 6, image: 'https://images.unsplash.com/photo-1631214524020-3c69d5bb1cee?w=400&q=80', likes: '7.3K', comments: '156' },
]

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">📸</span>
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">@luxebeautyofficial</span>
          </div>
          <h2 className="font-playfair text-4xl font-bold text-dark mb-3 section-title">
            Beauty Inspo Feed
          </h2>
          <p className="text-gray-500 font-poppins">Tag us with #LuxeBeauty for a chance to be featured</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex flex-col items-center justify-center gap-3 text-white"
              >
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 fill-white" />
                  <span className="text-sm font-poppins font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-poppins">{post.comments}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-poppins font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span className="text-lg">📸</span>
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
