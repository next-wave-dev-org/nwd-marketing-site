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
        'hero-text': '#D8D8D8',
        'button-primary-text': '#EEEEEE',
        'button-secondary': '#0D0D0D',
        'button-secondary-text': '#E4E4E4',
        'image-placeholder': '#A2A2A2',
        'muted-panel': '#CFCFCF',
        'profile-placeholder-text': '#D3D3D3',
        'input-placeholder': '#7C7B7B',
        'button-muted-text': '#DEDEDE',
        'button-neutral': '#363636',
        'card-arrow': '#E9E9E9',
        'page-neutral': '#F0F0F0',
        'body-dark': '#1C1C1C',
        'near-white': '#FEFEFE',
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
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
      borderRadius: {
        'button': '30px',
        'button-long': '20px',
        'panel': '10px',
      },
      dropShadow: {
        'card': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'profile': '0 8px 6px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};