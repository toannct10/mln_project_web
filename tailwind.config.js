/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae2fd',
          300: '#7ccbfd',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 35px rgba(0, 0, 0, 0.02)',
        'premium': '0 12px 40px -10px rgba(14, 165, 233, 0.08), 0 2px 10px -5px rgba(14, 165, 233, 0.04)',
        'premium-hover': '0 25px 60px -12px rgba(14, 165, 233, 0.15), 0 4px 20px -5px rgba(14, 165, 233, 0.08)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
