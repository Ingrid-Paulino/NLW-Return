module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // extendi a propriedade cores, criando uma nova
      colors: {
        brand: {
          300:'#996DFF',
          500:'#8257e6'
        }
      },
      borderRadius: {
        md: '4px' //reescrevi essa propriedade, antes era 6px
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
