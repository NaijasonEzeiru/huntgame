/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--primary-bg-color)",
        secondaryBg: "var(--secondary-bg-color)",
        secondaryColor: "hsl(var(--secondary-color))",
        // primaryText: "var(--primary-text-color)",
        // secondaryBg2: "var(--secondary-bg-color-2)",
        // primaryCta: "var(--primary-cta-color)",
        // disabledColor: 'var(--disabled-gold-color)'
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
