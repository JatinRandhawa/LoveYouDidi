/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        midnight: '#0b1026',
        indigoDeep: '#1c1848',
        aurora1: '#2dd4bf',
        aurora2: '#a78bfa',
        aurora3: '#f472b6',
        gold: '#fbbf24',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        drift: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) translateX(40px) rotate(360deg)', opacity: '0.9' },
        },
        auroraMove: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(5%, -5%) scale(1.15)' },
        },
        flySled: {
          '0%': { transform: 'translate(-30vw, 10vh) scale(0.9)', opacity: '0' },
          '10%': { opacity: '1' },
          '50%': { transform: 'translate(40vw, -6vh) scale(1)' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(130vw, -15vh) scale(0.85)', opacity: '0' },
        },
        fallGift: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '60%': { transform: 'translateY(140px) rotate(20deg)' },
          '80%': { transform: 'translateY(120px) rotate(-8deg)' },
          '100%': { transform: 'translateY(130px) rotate(0deg)', opacity: '1' },
        },
        popOut: {
          '0%': { transform: 'translateY(0) scale(0)', opacity: '0' },
          '60%': { transform: 'translateY(-60px) scale(1.15)', opacity: '1' },
          '100%': { transform: 'translateY(-90px) scale(1)', opacity: '1' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.75', transform: 'scaleY(0.9)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px 6px rgba(167,139,250,0.5)' },
          '50%': { boxShadow: '0 0 34px 10px rgba(45,212,191,0.6)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        drift: 'drift linear infinite',
        auroraMove: 'auroraMove 12s ease-in-out infinite',
        flySled: 'flySled 6s ease-in-out forwards',
        fallGift: 'fallGift 1.4s ease-out forwards',
        popOut: 'popOut 0.9s cubic-bezier(.34,1.56,.64,1) forwards',
        floatY: 'floatY 4s ease-in-out infinite',
        flicker: 'flicker 0.6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.9s ease-out forwards',
      },
    },
  },
  plugins: [],
}
