/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'Inter': ['Inter', 'sans-serif']
      },

      backgroundImage :{
        background:"url('/src/assets/images/background.png')",
        secondbackgroud:"url('/src/assets/images/background_second.svg')",
        backgroundform:"url('/src/assets/images/background_form.svg')",
        form_img:"url('/src/assets/images/form_img.png')",
      },
    },
  },
  plugins: [],
}