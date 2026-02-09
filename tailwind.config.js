/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a855f7',
          blue: '#667eea',
        },
        bg: {
          primary: '#0a0a0f',
          secondary: '#111116',
          tertiary: '#1a1a22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
