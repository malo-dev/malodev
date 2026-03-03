/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary-ice': '#00F0FF',
        'primary-blue': '#0066FF',
        'ice-gradient': 'linear-gradient(135deg,#00F0FF 0%,#0066FF 100%)',
        'bg-app-dark': '#000000',
        'bg-card-dark': '#121212',
        'text-main-dark': '#FFFFFF',
        'text-muted-dark': '#94A3B8',
        'bg-app-light': '#F8FAFC',
        'bg-card-light': '#FFFFFF',
        'text-main-light': '#0F172A',
        'text-muted-light': '#475569',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      boxShadow: {
        neon: '0 0 25px -5px rgba(0,240,255,0.4)',
        cyan: '0 4px 20px rgba(0,240,255,0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
      },
      backdropBlur: {
        sm: '12px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },
  plugins: [],
};
