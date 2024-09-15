/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.html',
    './content/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
