/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        terminal: ['"VT323"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#333333',
        },
        ritual: {
          red: '#8b0000',
          green: '#0a5',
          white: '#f0f0f0',
          dim: '#666666',
          dark: '#1a1a1a',
        },
      },
      animation: {
        flicker: 'flicker 0.15s steps(1) infinite',
        scanline: 'scanline 8s linear infinite',
        glitchX: 'glitchX 0.3s steps(2) infinite',
        glitchY: 'glitchY 0.2s steps(2) infinite',
        typewriter: 'typewriter 1.5s steps(30) forwards',
        blink: 'blink 1s steps(2) infinite',
        float: 'float 3s ease-in-out infinite',
        scan: 'scan 2s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.97' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitchX: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(0)' },
        },
        glitchY: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-1px)' },
          '50%': { transform: 'translateY(1px)' },
          '75%': { transform: 'translateY(-1px)' },
          '100%': { transform: 'translateY(0)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
    },
  },
  plugins: [],
};
