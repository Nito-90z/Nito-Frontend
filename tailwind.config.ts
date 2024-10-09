import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#171717",
      gray: "#aeaeae",
      "light-gray": "#d9d9d9",
      "dark-gray": "#333333",
      brand: "#fc5660",
      "light-brand": "#fef2f2",
      green: "#4bbb86",
    },
  },
  plugins: [],
};
export default config;
