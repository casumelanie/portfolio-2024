/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rouge Script"],
        content: ["Urbanist"],
      },
      colors: {
        // Bleu Clair
        geyser: {
          50: "#f6f9f9",
          100: "#ecf1f2",
          200: "#d6e0e2",
          300: "#b1c5c8",
          400: "#87a5a9",
          500: "#688a8f",
          600: "#537076",
          700: "#445b60",
          800: "#3b4d51",
          900: "#344246",
          950: "#232c2e",
        },
        // Bleu foncé
        firefly: {
          50: "#f4f9f9",
          100: "#daedeb",
          200: "#b5dad7",
          300: "#88c0bd",
          400: "#5fa2a1",
          500: "#468686",
          600: "#366a6b",
          700: "#2e5557",
          800: "#284547",
          900: "#253a3c",
          950: "#162a2c",
        },
        // Blanc
        fantasy: {
          50: "#f9f5f3",
          100: "#f5efeb",
          200: "#e2d0c6",
          300: "#cfb1a2",
          400: "#bb8d7c",
          500: "#ad7462",
          600: "#a06256",
          700: "#855049",
          800: "#6d433f",
          900: "#593835",
          950: "#2f1c1b",
        },
      },
    },
  },
  plugins: [],
};
