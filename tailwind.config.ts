import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Compatibility aliases for legacy class names used throughout the app
        // (e.g. text-healing-green, bg-warm-orange, text-soft-purple, etc.)
        'healing-green': 'var(--healing-green)',
        'warm-orange': 'var(--warm-orange)',
        'soft-purple': 'var(--soft-purple)',
        'serene-cyan': 'var(--serene-cyan)',
        'calm-blue': 'var(--calm-blue)',

        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        honey: {
          50: 'var(--honey-50)',
          100: 'var(--honey-100)',
          200: 'var(--honey-200)',
          300: 'var(--honey-300)',
          400: 'var(--honey-400)',
          500: 'var(--honey-500)',
          600: 'var(--honey-600)',
          700: 'var(--honey-700)',
        },
        warm: {
          50: 'var(--warm-50)',
          100: 'var(--warm-100)',
          200: 'var(--warm-200)',
          300: 'var(--warm-300)',
          500: 'var(--warm-500)',
          700: 'var(--warm-700)',
          900: 'var(--warm-900)',
        },
      },
      backgroundColor: {
        canvas: 'var(--bg-canvas)',
        'brand-subtle': 'var(--bg-brand-subtle)',
        'honey-subtle': 'var(--bg-honey-subtle)',
      },
      textColor: {
        link: 'var(--text-link)',
      },
      borderColor: {
        brand: 'var(--border-brand)',
      },
    },
  },
  plugins: [],
}

export default config