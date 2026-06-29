import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta monocromática cálida inspirada en la tierra de la Puna.
        // Un único hue (taupe/arena) con contraste contenido.
        puna: {
          50: '#f7f5f2',
          100: '#ece7e0',
          200: '#d9d0c4',
          300: '#c0b3a1',
          400: '#a4937d',
          500: '#8a7763',
          600: '#6f5e4d',
          700: '#574a3d',
          800: '#3d342b',
          900: '#2a241e',
          950: '#1a160f',
        },
        // Verde musgo desaturado: guiño a WhatsApp sin salirse de la gama cálida.
        musgo: {
          500: '#6f7a5a',
          600: '#5c6749',
          700: '#4a5339',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(42,36,30,0.04), 0 8px 24px -12px rgba(42,36,30,0.12)',
        lift: '0 2px 4px rgba(42,36,30,0.05), 0 18px 40px -20px rgba(42,36,30,0.20)',
      },
      maxWidth: {
        content: '72rem',
      },
      letterSpacing: {
        widest: '0.2em',
      },
      keyframes: {
        // Tramo 1: el colectivo va de Salta a San Antonio de los Cobres (~62%),
        // hace una pausa y se desvanece para dar paso al tren (desktop).
        'bus-leg': {
          '0%': { left: '-8%', opacity: '1' },
          '38%': { left: '62%', opacity: '1' },
          '46%': { left: '62%', opacity: '1' },
          '50%': { left: '62%', opacity: '0' },
          '100%': { left: '62%', opacity: '0' },
        },
        // Tramo 2: el tren aparece en San Antonio y continúa hasta el final (desktop).
        'train-leg': {
          '0%, 46%': { left: '62%', opacity: '0' },
          '50%': { left: '62%', opacity: '1' },
          '100%': { left: '104%', opacity: '1' },
        },
        // Versión vertical (mobile): colectivo hasta San Antonio.
        'bus-leg-y': {
          '0%': { top: '-4%', opacity: '1' },
          '38%': { top: '62%', opacity: '1' },
          '46%': { top: '62%', opacity: '1' },
          '50%': { top: '62%', opacity: '0' },
          '100%': { top: '62%', opacity: '0' },
        },
        // Versión vertical (mobile): tren desde San Antonio hasta el final.
        'train-leg-y': {
          '0%, 46%': { top: '62%', opacity: '0' },
          '50%': { top: '62%', opacity: '1' },
          '100%': { top: '104%', opacity: '1' },
        },
        // Bocanadas de humo que se elevan y disipan.
        steam: {
          '0%': { transform: 'translateY(0) scale(0.7)', opacity: '0' },
          '25%': { opacity: '0.55' },
          '100%': { transform: 'translateY(-26px) scale(1.8)', opacity: '0' },
        },
        // Leve balanceo del tren (traqueteo).
        chug: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        'bus-leg': 'bus-leg 18s ease-in-out infinite',
        'train-leg': 'train-leg 18s ease-in-out infinite',
        'bus-leg-y': 'bus-leg-y 18s ease-in-out infinite',
        'train-leg-y': 'train-leg-y 18s ease-in-out infinite',
        steam: 'steam 2s ease-out infinite',
        chug: 'chug 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
