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
        secondary: "#ec0606",
        darkBg: "#191414",
      },

      backgroundImage: {
        "gradient-cover": 
        "linear-gradient(90deg, rgba(10, 10, 10, 0.9) 0%, rgba(20, 20, 20, 0.9) 50%, rgba(10, 10, 10, 0.9) 100%)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
};
