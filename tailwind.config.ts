
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px) { ... } (Android mobile)

      'md': '768px',
      // => @media (min-width: 768px) { ... } (Tablet)

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... } (15-inch laptop)

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... } (Large monitors)

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... } (Extra-large monitors if needed)
    },
    extend: {
      fontFamily: {
        roboto: ['var(--font-robot)'],
        inter: ['--font-poppins'],
        poppins: ['--font-poppins']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        success: '#10b981',   // Green
        danger: '#ef4444',    // Red
        warning: '#f59e0b',   // Amber
        info: '#0ea5e9',      // Blue

        // Colors
        color: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          tertiary: "var(--tertiary-color)",
          quaternary: "var(--quaternary-color)",
          quinary: "var(--quinary-color)",
          senary: "var(--senary-color)",
          septenary: "var(--septenary-color)",
          octonary: "var(--octonary-color)",
          nonary: "var(--nonary-color)",
          denary: "var(--denary-color)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
