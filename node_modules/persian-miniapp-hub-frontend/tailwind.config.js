/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'persian-blue': '#1C9CEA',
        'persian-pink': '#F77EBD',
        'saffron': '#FF9933',
        'bg-primary': '#121212',
        'bg-secondary': '#1E1E1E',
        'bg-tertiary': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-secondary': '#888888',
      },
      fontFamily: {
        'persian': ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '20px',
        'md': '12px',
        'lg': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
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
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}