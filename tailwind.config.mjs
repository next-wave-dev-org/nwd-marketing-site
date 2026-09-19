/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Core Palette
        'purple': '#4A3B96',
        'blue': '#1D70B8',
        'cyan': '#38C1ED',
        'dark': '#0F0C20',
        'light': '#F4F6FC',
        
        // Dark Mode Role Mappings
        'primary-blue': '#4A3B96',     // Brand Purple
        'secondary-blue': '#1D70B8',   // Brand Blue
        'dark-blue': '#0F0C20',        // Deepest Dark Base
        'light-aqua': '#16132A',       // Rich dark slate for cards & panels (replaces light aqua)
        'primary-gold': '#38C1ED',     // Mapped to Cyan for vibrant accents
        'body-dark': '#C0C5E2',        // Soft readable light-slate text
        'hero-text': '#FFFFFF',
        'near-white': '#F4F6FC',
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        heading: ['Unbounded', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'button': '30px',
        'button-long': '20px',
        'panel': '10px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(56, 193, 237, 0.2)',
        'glow-purple': '0 5px 15px rgba(74, 59, 150, 0.4)',
      },
      dropShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.5)',
        'profile': '0 8px 12px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};