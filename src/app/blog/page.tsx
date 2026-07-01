'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, ArrowRight, Tag, Sparkles } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Building Your Luxury Skincare Routine',
    excerpt: 'Discover how to layer your serums, oils, and moisturizers like a pro makeup artist. This comprehensive guide covers morning and evening routines for every skin type.',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80',
    category: 'Skincare',
    author: 'Aisha Rahman',
    date: 'Dec 20, 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Top 10 Must-Have Lipsticks for Every Occasion',
    excerpt: 'From bold reds to barely-there nudes, we\'ve rounded up the best luxury lipsticks that belong in every makeup bag.',
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c93?w=600&q=80',
    category: 'Makeup',
    author: 'Sofia Patel',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'How to Choose the Perfect Foundation for Your Skin Tone',
    excerpt: 'Finding your perfect shade match is an art. Our beauty experts break down undertones, coverage types, and the best foundations for Indian skin tones.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    category: 'Foundation',
    author: 'Meera Singh',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Charlotte Tilbury\'s Holiday Collection: Everything You Need to Know',
    excerpt: 'The iconic brand has dropped their most magical holiday collection yet. Here\'s our full review and top picks from the range.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
    category: 'New Arrivals',
    author: 'Priya Sharma',
    date: 'Dec 5, 2024',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Perfume 101: How to Find Your Signature Scent',
    excerpt: 'From floral to woody, aquatic to oriental — understanding fragrance families will help you discover the perfect perfume that tells your story.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',
    category: 'Fragrance',
    author: 'Zara Khan',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'The Art of Eye Makeup: From Daytime to Glam Night Out',
    excerpt: 'Master the perfect smokey eye, sharp winged liner, and editorial looks with our step-by-step tutorials from professional makeup artists.',
    image: 'https://images.unsplash.com/photo-1631214524020-3c69d5bb1cee?w=600&q=80',
    category: 'Tutorials',
    author: 'Aisha Rahman',
    date: 'Nov 20, 2024',
    readTime: '10 min read',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  'Skincare': 'bg-green-100 text-green-700',
  'Makeup': 'bg-pink-100 text-pink-700',
  'Foundation': 'bg-amber-100 text-amber-700',
  'New Arrivals': 'bg-purple-100 text-purple-700',
  'Fragrance': 'bg-blue-100 text-blue-700',
  'Tutorials': 'bg-primary/10 text-primary',
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-poppins font-semibold tracking-widest text-primary uppercase">Beauty Stories</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-dark mb-4">The Luxe Beauty Blog</h1>
          <p className="text-gray-500 font-poppins text-lg">Tips, trends, tutorials, and everything beauty.</p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-14"
        >
          <Link href={`/blog/${featured.id}`}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="group grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-luxury cursor-pointer"
            >
              <div className="relative h-72 lg:h-full overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-poppins font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-poppins font-semibold w-fit mb-4 ${categoryColors[featured.category]}`}>
                  <Tag className="w-3 h-3" /> {featured.category}
                </span>
                <h2 className="font-playfair text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-gray-500 font-poppins text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {featured.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-poppins font-semibold text-dark">{featured.author}</p>
                      <p className="text-xs text-gray-400">{featured.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-poppins">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all cursor-pointer"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-poppins font-semibold ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-dark text-lg mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 font-poppins text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                          {post.author[0]}
                        </div>
                        <span className="text-xs text-gray-400 font-poppins">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary font-poppins text-xs font-semibold group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

