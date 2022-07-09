/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        // TODO: refactor to em units
        wider: "1px",
        widest: "4px",
      },
      colors: {
        gray: {
          200: "#e6e6e6",
        },
      },
    },
  },
  plugins: [],
};
