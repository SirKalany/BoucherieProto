import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#900019',
          dark: '#6b0013',
          light: '#b30020',
        },
        secondary: {
          DEFAULT: '#839096',
          light: '#a3adb3',
          dark: '#6a7680',
        },
      },
    },
  },
  plugins: [],
};
export default config;