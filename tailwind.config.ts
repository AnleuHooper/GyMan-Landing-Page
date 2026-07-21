import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/legacy/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e9c400",
        "on-primary": "#3a3000",
        background: "#131313",
        surface: "#1b1b1b",
      },
      fontFamily: {
        headline: ["Space Grotesk"],
        body: ["Manrope"],
        mendl: ["mendl-sans-dusk"],
        gear: ["gear-wide"],
        tiffin: ["tiffin-latin-variable"],
        meursault: ["meursault-variable"],
        rothwood: ["rothwood"],
        quatro: ["quatro-slab"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
