export interface Product {
  id: string
  name: string
  brand: string
  category: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  image: string
  images?: string[]
  badge?: 'new' | 'sale' | 'bestseller' | 'limited'
  inStock: boolean
  shades?: string[]
  description?: string
  ingredients?: string
  howToUse?: string
  isWishlisted?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  image: string
  count: number
  color: string
}

export interface Brand {
  id: string
  name: string
  logo: string
  description?: string
}

export interface Review {
  id: string
  user: string
  avatar: string
  rating: number
  comment: string
  date: string
  product?: string
}

export interface CartItem {
  id: string
  product: Product
  quantity: number
  shade?: string
}

export interface WishlistItem {
  id: string
  product: Product
}

export interface FilterOptions {
  priceRange: [number, number]
  brands: string[]
  categories: string[]
  ratings: number[]
  availability: boolean | null
}
