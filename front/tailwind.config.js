/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
    colors: {
      'black': "#1A1A1A",
      'grey': "#4E4E4E",
      'white': "#FAFAFA",
      'primary': "#055286",
      'secondary': "#C5E3F7",
      'accent': "#E8C900",
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

