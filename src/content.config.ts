/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // ITEM 2.2: FLUID SPACING & BREAKPOINTS
    // This replaces writing `mx-auto w-full max-w-[1440px] px-6 md:px-[115px]` on every page.
    // Now you can simply use the `container` class on a wrapper div.
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem', // 24px (Mobile: px-6)
        md: '2rem',        // 32px (Tablet)
        lg: '4rem',        // 64px (Small Desktop)
        xl: '7.1875rem',   // 115px (Large Desktop: px-[115px])
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',   // Global max width
      },
    },
    extend: {
      colors: {
        // ITEM 2.3: SEMANTIC DESIGN TOKENS
        background: '#0F0C20',        // Replaces dark-blue / dark
        surface: '#16132A',           // Replaces light-aqua (Card/Panel backgrounds)
        'border-subtle': 'rgba(255, 255, 255, 0.1)', 
        
        // Typography
        'text-heading': '#FFFFFF',    // Replaces hero-text
        'text-body': '#C0C5E2',       // Replaces body-dark
        'text-accent': '#38C1ED',     // Cyan text highlights
        
        // Brand Accents
        'accent-primary': '#4A3B96',  // Brand Purple (was primary-blue)
        'accent-secondary': '#1D70B8',// Brand Blue
        'accent-cyan': '#38C1ED',     // Cyan (was primary-gold)

        // LEGACY TOKENS (Kept temporarily so un-migrated components don't break during transition)
        'primary-blue': '#4A3B96',
        'secondary-blue': '#1D70B8',
        'dark-blue': '#0F0C20',
        'light-aqua': '#16132A',
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