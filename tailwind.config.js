const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-text' : 'linear-gradient(to right, var(--light-accent), var(--light-accent-darker))',
        'gradient-text-dark' : 'linear-gradient(to right, var(--dark-accent), var(--dark-accent-darker))',
        'gradient-hero': 'linear-gradient(to right, var(--light-background-color) 0%, transparent 20%, transparent 80%, var(--light-background-color) 100%)',
        'gradient-hero-dark': 'linear-gradient(to right, var(--dark-background-color) 0%, transparent 20%, transparent 80%, var(--dark-background-color) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

