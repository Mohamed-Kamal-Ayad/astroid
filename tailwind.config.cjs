/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Poppins'],
      },
      backgroundImage: {
        'custom-bg': 'url(@/ui/images/background.png)',
      },
    },
  },
  plugins: [],
};
