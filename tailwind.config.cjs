/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c1d72e', // Updated primary color
        'primary-dark': '#a8c025', // Darker shade for hover states
        'secondary': '#6d6e71', // Secondary color
        'dark': '#111827',
        'darker': '#121212',
        'light': '#F9FAFB',
        'gray-custom': '#6B7280',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(193, 215, 46, 0.1)', // Updated shadow color
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(193, 215, 46, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(193, 215, 46, 0.05) 1px, transparent 1px)", // Updated grid pattern color
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
} 