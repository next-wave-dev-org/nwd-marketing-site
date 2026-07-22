/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2244CA',
        'light-aqua': '#E4F2F5',
        'primary-gold': '#D49A1D',
        'dark-blue': '#131D43',
        'dark-background': '#000517',
        'secondary-blue': '#509EBF',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        hero: ['96px', '1.1'],
        h1: ['64px', '1.2'],
        h2: ['48px', '1.2'],
        h3: ['32px', '1.3'],
        h4: ['24px', '1.4'],
        body: ['22px', '1.5'],
        'condensed-body': ['20px', '1.5'],
      },
      maxWidth: {
        body: '600px',
      },
    },
  },
  plugins: [],
};