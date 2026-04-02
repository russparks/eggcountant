import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ff',
          100: '#e9e0ff',
          200: '#d9c7ff',
          300: '#c2a5ff',
          400: '#a878ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#663399',
          900: '#5a1f80',
          950: '#3f0f5c',
        },
      },
    },
  },
} satisfies Config;
