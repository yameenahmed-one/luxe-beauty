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
  title: 'Luxe Beauty Pakistan — Premium Luxury Cosmetics & Makeup',
  description: 'Pakistan\'s #1 luxury beauty store. Nationwide delivery. Pay via EasyPaisa, JazzCash & COD.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins bg-background antialiased">
        <Providers>
          <AnnouncementBar />
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <CustomCursor />
          <FloatingCTA />
        </Providers>
      </body>
    </html>
  )
}
