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
        primary: '#FF4F81',
        secondary: '#F8D5DF',
        background: '#FFF8FA',
        dark: '#1B1B1B',
        gold: '#D4AF37',
        'primary-dark': '#E8356A',
        'primary-light': '#FF7AA0',
        'gold-light': '#F0CC5A',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #FF4F81, 0 0 20px #FF4F81' },
          'to': { boxShadow: '0 0 20px #FF4F81, 0 0 40px #FF4F81' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #FF4F81 0%, #D4AF37 50%, #FF4F81 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FFF8FA 0%, #F8D5DF 50%, #FFF8FA 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,213,223,0.4) 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px rgba(255, 79, 129, 0.15), 0 10px 30px rgba(0,0,0,0.08)',
        'card': '0 10px 40px rgba(255, 79, 129, 0.12)',
        'glow-pink': '0 0 30px rgba(255, 79, 129, 0.4)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.4)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.07)',
      },
    },
  },
  plugins: [],
}

export default config
