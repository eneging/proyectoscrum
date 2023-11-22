/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      backgroundImage: {
        'biblioteca': "url('https://www.unica.edu.pe/estilosweb/images/bg/bg2nuevo.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

