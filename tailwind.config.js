/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        fundo: "url('/public/assets/fundo.webp')",
        fundo2: "url('/public/assets/fundo.jpg')",
      }),
      colors: {
        roxo: '#bf21ac',
      },
      fontFamily: {
        sans: ['Helvetica'],
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
