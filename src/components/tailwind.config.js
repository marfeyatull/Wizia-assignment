/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002228",
        secondary: "#07292F",
        neutral: "#0FF1F6",
      },
      boxShadow: {
        custom: '0 0 2px #002228, inset 0 0 4px #0FF1F6',
      },
    },
  },
  plugins: [],
  
  important: true,
}