import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/providers/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import CartDrawer from '@/components/cart/CartDrawer'
import CustomCursor from '@/components/ui/CustomCursor'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: 'Luxe Beauty — Premium Luxury Cosmetics & Makeup',
  description: 'Shop world-class luxury beauty. Authentic products from Charlotte Tilbury, Rare Beauty, Huda Beauty, Fenty Beauty and more.',
  keywords: 'luxury beauty, makeup, cosmetics, lipstick, foundation, eyeshadow, skincare',
  openGraph: {
    title: 'Luxe Beauty — Premium Luxury Cosmetics & Makeup',
    description: 'Your destination for world-class luxury beauty.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins bg-background antialiased">
        <Providers>
          {/* Fixed top bar: announcement + header */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <AnnouncementBar />
            <Header />
          </div>
          {/* Push content below fixed bar: 32px (bar) + 80px (header) = 112px */}
          <main className="pt-28 min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <CustomCursor />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  )
}
