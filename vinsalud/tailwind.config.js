/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bordo: '#1D2A44', 
        otroColor: 'rgb(128, 0, 32)', 
        otroColorHSL: 'hsl(350, 100%, 25%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
