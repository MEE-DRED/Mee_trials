/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D3B2B',
        accent: '#C9973A',
        neutral: '#FFFFFF',
        'dwm-green-deep': '#0D3B2B',
        'dwm-green-mid': '#145A3E',
        'dwm-green-light': '#1E7A56',
        'dwm-green-pale': '#E8F5EF',
        'dwm-gold': '#C9973A',
        'dwm-gold-light': '#E8B85C',
        'dwm-gold-pale': '#FBF3E3',
        'dwm-white': '#FFFFFF',
        'dwm-off-white': '#F9F6F0',
        'dwm-text-dark': '#1A1A1A',
        'dwm-text-mid': '#4A4A4A',
        'dwm-text-light': '#888888',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium-sm': '0 6px 20px rgba(13,59,43,0.08)',
        'premium-md': '0 14px 34px rgba(13,59,43,0.14)',
        'dwm-sm': '0 2px 12px rgba(13,59,43,0.08)',
        'dwm-md': '0 8px 32px rgba(13,59,43,0.14)',
        'dwm-lg': '0 20px 60px rgba(13,59,43,0.18)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      borderRadius: {
        'dwm-sm': '8px',
        'dwm-md': '16px',
        'dwm-lg': '24px',
      },
      keyframes: {
        'video-fade': {
          '0%': { opacity: '0.25' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'video-fade': 'video-fade 1.1s ease-out both',
      },
      transitionTimingFunction: {
        'dwm': 'cubic-bezier(0.4,0,0.2,1)',
      },
      transitionDuration: {
        'dwm': '300ms',
      },
    },
  },
  plugins: [],
}
