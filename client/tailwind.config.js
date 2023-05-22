/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue':'#377dc3',
      'bluelight':'#a6d4ff',
      'lightblue':'#c4dff9',
      'red:':'#d92121',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#F8B200',
      'gray-dark': '#273444',
      'gray': '#d9d9d9',
      'gray-light': '#d3dce6',
      'white':'#ffffff'
    },
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    extend: {},
  },
  plugins: [],
}