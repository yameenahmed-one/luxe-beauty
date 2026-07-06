import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrendingCollection from '@/components/home/TrendingCollection'
import BrandsSection from '@/components/home/BrandsSection'
import BestSellersCarousel from '@/components/home/BestSellersCarousel'
import FlashSaleSection from '@/components/home/FlashSaleSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import InstagramFeed from '@/components/home/InstagramFeed'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategoriesSection />
      <FeaturedProducts />
      <TrendingCollection />
      <FlashSaleSection />
      <BrandsSection />
      <BestSellersCarousel />
      <TestimonialsSection />
      <InstagramFeed />
      <NewsletterSection />
    </>
  )
}
