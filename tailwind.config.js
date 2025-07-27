/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9fa',
          100: '#e0f3f6',
          200: '#c1e7ed',
          300: '#aad6df',
          400: '#8bc4d0',
          500: '#6bb2c1',
          600: '#5a9fb0',
          700: '#4a8c9f',
          800: '#3a798e',
          900: '#2a667d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          // Vibrant colors from the logo flower
          blue: '#aad6df',
          teal: '#14b8a6',
          green: '#10b981',
          yellow: '#f59e0b',
          orange: '#f97316',
          red: '#ef4444',
          purple: '#8b5cf6',
          pink: '#ec4899',
        },
        hospital: {
          50: '#f0f9fa',
          100: '#e0f3f6',
          200: '#c1e7ed',
          300: '#aad6df',
          400: '#8bc4d0',
          500: '#6bb2c1',
          600: '#5a9fb0',
          700: '#4a8c9f',
          800: '#3a798e',
          900: '#2a667d',
        },
        logo: {
          background: '#aad6df', // Updated light blue background
          hands: '#ffffff', // White hands
          flower: {
            blue: '#aad6df',
            teal: '#14b8a6',
            green: '#10b981',
            yellow: '#f59e0b',
            orange: '#f97316',
            red: '#ef4444',
            purple: '#8b5cf6',
            pink: '#ec4899',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo-gradient': 'linear-gradient(135deg, #aad6df 0%, #14b8a6 25%, #10b981 50%, #f59e0b 75%, #f97316 100%)',
      },
    },
  },
  plugins: [],
} 