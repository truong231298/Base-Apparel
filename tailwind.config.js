/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DesaturatedRed': 'hsl(0, 36%, 70%)',
        'SoftRed': 'hsl(0, 93%, 68%)',
        'DarkGrayishRed': 'hsl(0, 6%, 24%)',

        'liner1a': 'hsl(0, 0%, 100%)',
        'liner1b': 'hsl(0, 100%, 98%)',
        'liner2a': 'hsl(0, 80%, 86%)',
        'liner2b': 'hsl(0, 74%, 74%)'
      }
    },
  },
  plugins: [],
}