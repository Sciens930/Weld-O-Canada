/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'custom-green': {
          DEFAULT: '#99DC34', // rgb(153, 220, 52)
        },
      },
    },
  },
  plugins: [],
}


