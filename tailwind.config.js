/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1728px',
      },
      colors: {
        primary: '#4242E0',
        secondary: '#C8D2DA',
        accent: '#2A2C2D',
        'base-100': '#EBEFF2',
        'base-200': '#D4E0E9',
        'base-300': '#B2BCC3',
      },
      backgroundImage: {
        'shape-home': 'url(/images/shape-home.svg)',
        'shape-qz-primary': 'url(/images/shape-quiz-1.svg)',
        'shape-qz-secondary': 'url(/images/shape-quiz-2.svg)',
        'shape-resutls': 'url(/images/shape-results.svg)',
      },
      fontSize: {
        '10xl': ['11rem', '13rem'],
        '11xl': ['13rem', '13rem'],
        '12xl': ['15rem', '13rem'],
        '13xl': ['19rem', '13rem'],
        '14xl': ['22rem', '13rem'],
        '15xl': ['25rem', '13rem'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          },
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': {
            opacity: '1',
            transform: 'scale3d(1.03, 1.03, 1.03)',
          },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          '100%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn .33s ease-in-out',
        'bounce-in': 'bounceIn .75s both',
      },
    },
  },
  plugins: [],
};
