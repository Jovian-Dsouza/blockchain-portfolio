/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      fontFamily: ["Poppins", "sans-serif"],
      colors: {
        grayishBlack: '#2d2e32',
        darkishBlue: '#147efb',
        grayishWhite: '#f9f9f9',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      }
    },
  },
  plugins: [],
};
