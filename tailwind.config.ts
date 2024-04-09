import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'deep-pink': '#ff1493', // Custom color
      'background-dark': '#1b0033', // Custom background color
    },
    keyframes: {
      slideRightToLeft: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideLeftToRight: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideTopToBottom: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideBottomToTop: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      'right-to-left': 'slideRightToLeft 8s infinite forwards',
      'left-to-right': 'slideLeftToRight 5s ease-out forwards',
      'top-to-bottom': 'slideTopToBottom 5s ease-out forwards',
      'bottom-to-top': 'slideBottomToTop 5s ease-out forwards',
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
