/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0f5f0',
          100: '#dce8dc',
          200: '#bfd4bf',
          300: '#9ab99a',
          400: '#759975',
          500: '#567b56',
          600: '#3c613c', // primary forest green
          700: '#2e4c2e',
          800: '#243c24',
          900: '#1e321e',
        },
        'cream': {
          50: '#fefdf9',
          100: '#fcf9f0',
          200: '#f7f0dd', // primary cream
          300: '#f0e3c0',
          400: '#e9d59f',
          500: '#e0c276',
          600: '#d4ab4e',
          700: '#c18f2f',
          800: '#9e752a',
          900: '#7e5f26',
        },
        'earth': {
          50: '#faf7f4',
          100: '#f3ebe3',
          200: '#e7d6c6',
          300: '#d8bc9f',
          400: '#c69e76',
          500: '#b68455',
          600: '#a67244', // primary soft brown
          700: '#895a36',
          800: '#704a30',
          900: '#5c3e2a',
        },
        'gold': {
          50: '#fefbe8',
          100: '#fef5c2',
          200: '#fee987',
          300: '#fdd547',
          400: '#fcc018',
          500: '#f3a009', // primary golden yellow
          600: '#db7706',
          700: '#b65109',
          800: '#93400f',
          900: '#7a3610',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};