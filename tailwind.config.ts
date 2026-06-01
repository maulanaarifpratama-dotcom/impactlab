import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#31444D',
        gold: '#C7A66A',
        ivory: '#F5F3EE',
        slate: '#6B7A80',
        charcoal: '#2A2E30',
        muted: '#4F6A75',
        stone: '#E3E7E8',
        sand: '#D6C09A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(42,46,48,0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config
