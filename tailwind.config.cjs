/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        startCold: "#3c7cfc",
        endCold: "#59c0e8",
        startHot: "#ff4d4d",
        endHot: "#f9cb28"
      },
      animation: {
        "spin-slow": "spin 3s linear",
      },
      rotate: {
        360: "360deg",
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};