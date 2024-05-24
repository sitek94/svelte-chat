/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/app.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cupcake', 'dim', 'retro', 'sunset'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
