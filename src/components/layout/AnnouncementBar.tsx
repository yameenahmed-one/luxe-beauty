'use client'

export default function AnnouncementBar() {
  const messages = [
    '✨ FREE SHIPPING ON ORDERS OVER ₹999',
    '💄 NEW ARRIVALS: Charlotte Tilbury Holiday Collection',
    '🎁 BUY 2 GET 1 FREE ON ALL LIPSTICKS',
    '🌸 EXCLUSIVE: Rare Beauty Soft Pinch Now Available',
    '💎 LUXURY GIFT WRAPPING ON ALL ORDERS',
    '✨ FREE SHIPPING ON ORDERS OVER ₹999',
    '💄 NEW ARRIVALS: Charlotte Tilbury Holiday Collection',
    '🎁 BUY 2 GET 1 FREE ON ALL LIPSTICKS',
    '🌸 EXCLUSIVE: Rare Beauty Soft Pinch Now Available',
    '💎 LUXURY GIFT WRAPPING ON ALL ORDERS',
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
