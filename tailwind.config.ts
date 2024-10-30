import type { Config } from "tailwindcss";

const config: Config = {
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
        warning: "var(--warning)",
      },
      backgroundColor: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        warning: "var(--warning)",
      },
      backgroundImage: {
        "dots-pattern": "url('/darkdots.png')",
      },
      boxShadow: {
        ml: "2px -10px 16px #fff",
      },
      dropShadow: {
        ml: "2px -10px 16px #fff",
      },
    },
  },
  plugins: [],
};
export default config;
