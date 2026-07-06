'use client'

export default function AnnouncementBar() {
  const text =
    'FREE DELIVERY ON ORDERS OVER Rs.2000  |  100% AUTHENTIC PRODUCTS  |  CASH ON DELIVERY AVAILABLE  |  EASY RETURNS  |  TRUSTED BY 50,000+ CUSTOMERS IN PAKISTAN  |  FREE DELIVERY ON ORDERS OVER Rs.2000  |  100% AUTHENTIC PRODUCTS  |  CASH ON DELIVERY AVAILABLE  |  EASY RETURNS  |  TRUSTED BY 50,000+ CUSTOMERS IN PAKISTAN  |  '

  return (
    <div className="bg-dark text-white py-2 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="text-[11px] font-poppins tracking-widest uppercase opacity-90 flex-shrink-0">
          {text}
        </span>
        <span className="text-[11px] font-poppins tracking-widest uppercase opacity-90 flex-shrink-0">
          {text}
        </span>
      </div>
    </div>
  )
}
