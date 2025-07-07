/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#fdf8f3',
          100: '#faf5e9', // main background
          200: '#f5e6d3',
          300: '#edd1b3',
          400: '#e3b892',
          500: '#d49e70',
          600: '#a67c52', // main accent
          700: '#8b6644',
          800: '#72533a',
          900: '#5e4530',
        },
        'cream': {
          50: '#fefdf9',
          100: '#fcf9f0',
          200: '#f7f0dd',
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
          600: '#a67244',
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
          500: '#f3a009',
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