'use client'

export default function AnnouncementBar() {
  const messages = [
    '✨ FREE DELIVERY ON ORDERS OVER Rs. 2,000',
    '💄 NEW ARRIVALS: Charlotte Tilbury Holiday Collection',
    '🎁 BUY 2 GET 1 FREE ON ALL LIPSTICKS',
    '🌸 EXCLUSIVE: Rare Beauty Soft Pinch Now Available in Pakistan',
    '💎 LUXURY GIFT WRAPPING ON ALL ORDERS',
    '🚚 NATIONWIDE DELIVERY ACROSS PAKISTAN',
    '💳 PAY VIA EASYPAISA, JAZZCASH OR CASH ON DELIVERY',
    '✨ FREE DELIVERY ON ORDERS OVER Rs. 2,000',
    '💄 NEW ARRIVALS: Charlotte Tilbury Holiday Collection',
    '🎁 BUY 2 GET 1 FREE ON ALL LIPSTICKS',
  ]

  return (
    <div className="bg-dark text-white py-2.5 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {messages.map((msg, i) => (
          <span key={i} className="mx-10 text-xs font-poppins tracking-widest uppercase opacity-90">
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
