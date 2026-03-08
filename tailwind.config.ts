import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        border: 'hsl(247 26% 20%)',
        background: 'hsl(235 44% 11%)',
        foreground: 'hsl(240 12% 96%)',
        primary: {
          DEFAULT: 'hsl(188 95% 52%)',
          foreground: 'hsl(236 45% 8%)'
        },
        secondary: {
          DEFAULT: 'hsl(260 95% 66%)',
          foreground: 'hsl(240 12% 96%)'
        }
      },
      boxShadow: {
        glow: '0 0 60px rgba(56,189,248,.35)'
      }
    }
  },
  plugins: []
};

export default config;
