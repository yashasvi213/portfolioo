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
        border: 'hsl(289 22% 30%)',
        background: 'hsl(282 43% 14%)',
        foreground: 'hsl(300 20% 97%)',
        primary: {
          DEFAULT: 'hsl(322 88% 70%)',
          foreground: 'hsl(300 20% 97%)'
        },
        secondary: {
          DEFAULT: 'hsl(274 72% 72%)',
          foreground: 'hsl(240 12% 96%)'
        }
      },
      boxShadow: {
        glow: '0 0 60px rgba(236, 72, 153, .35)'
      }
    }
  },
  plugins: []
};

export default config;
