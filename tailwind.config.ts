import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'scroll-1': 'scroll-1 15s linear infinite',
        'scroll-2': 'scroll-2 15s linear infinite',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
        '11xl': '120rem',
      },
      keyframes: {
        "scroll-1": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "scroll-2": {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '4.5rem',
        '10xl': '5rem',
      },
      spacing: {
        '100': '25rem',
        '110': '27.5rem',
        '120': '62.5rem',



      }
    },
  },
  plugins: [],
} satisfies Config;