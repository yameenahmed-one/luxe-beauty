import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary:        '#C8A951',
        'primary-dark': '#B8961E',
        'primary-light':'#E0C060',
        secondary:      '#F5F0E8',
        background:     '#FFFFFF',
        dark:           '#111111',
        gold:           '#C8A951',
        'gold-light':   '#E0C060',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins:  ['Poppins', 'sans-serif'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'slide-up':    'slideUp 0.5s ease-out',
        'fade-in':     'fadeIn 0.6s ease-out',
        'marquee':     'marquee 30s linear infinite',
        'marquee-slow':'marquee 40s linear infinite',
        'scroll':      'scroll 25s linear infinite',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer:  { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        slideUp:  { from: { transform: 'translateY(30px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        marquee:  { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        scroll:   { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'luxury':    '0 20px 40px rgba(0,0,0,0.08)',
        'card':      '0 4px 16px rgba(0,0,0,0.06)',
        'glow-gold': '0 0 20px rgba(200,169,81,0.3)',
        'glow-pink': '0 0 20px rgba(200,169,81,0.3)',
        'glass':     '0 8px 32px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
