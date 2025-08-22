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
        customGray: "#939393",
        customGray2: "#F5F5F5",
        customeWhite:"#FFFFFF",
        customeBlack1:"#141414",
        customeBlack2:"#000000"


      },
    },
  },
  plugins: [],
};
export default config;
