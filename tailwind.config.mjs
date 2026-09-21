/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // NEW SEMANTIC DESIGN TOKENS
        background: '#0F0C20',        
        surface: '#16132A',           
        'border-subtle': 'rgba(255, 255, 255, 0.1)', 
        
        // Typography
        'text-heading': '#FFFFFF',    
        'text-body': '#C0C5E2',       
        'text-accent': '#38C1ED',     
        
        // Brand Accents
        'accent-primary': '#4A3B96',  
        'accent-secondary': '#1D70B8',
        'accent-cyan': '#38C1ED',     

        // LEGACY TOKENS (Restored light-aqua to prevent black text rendering issues)
        'purple': '#4A3B96',
        'blue': '#1D70B8',
        'cyan': '#38C1ED',
        'dark': '#0F0C20',
        'light': '#F4F6FC',
        'primary-blue': '#4A3B96',
        'secondary-blue': '#1D70B8',
        'dark-blue': '#0F0C20',
        'light-aqua': '#F4F6FC',
        'primary-gold': '#38C1ED',
        'body-dark': '#C0C5E2',
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